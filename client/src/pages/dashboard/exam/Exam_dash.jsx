import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "../../../component";

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Quiz = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 دقيقة بالثواني

  useEffect(() => {
    axios
      .get("/api/exams")
      .then(d => {
        setQuestionsData(d.data[0].exam_questions);
        setIsLoading(false);
        setQuestions(shuffleArray([...d.data[0].exam_questions]));
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  }, []);

  useEffect(
    () => {
      if (questionsData.length > 0) {
        if (timeLeft > 0) {
          const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
          return () => clearTimeout(timer);
        } else {
          handleSubmit();
        }
      }
    },
    [questionsData, timeLeft]
  );

  const handleAnswerOptionClick = option => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  
  const calculateScore = () => {
      return questions.reduce((score, question, index) => {
          return score + (answers[index] === question.correct_answer ? 1 : 0);
        }, 0);
    };
    const handleSubmit = () => {
      setSubmitted(true);
      console.log(calculateScore())
    };
    
  if (isLoading) return <Loader />;

  if (submitted) {
    return (
        <div style={{fontFamily:"var(--secondFont)"}} className="d border max-h-[770px] overflow-auto">

      <div className=" w-full mx-auto  p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-900">
          النتائج
        </h1>
        <p className="text-xl text-[green] text-center mb-8">
          درجتك: {calculateScore()} / {questions.length}
        </p>
        <h2 className="text-2xl font-semibold mt-4 text-purple-700">
          كل الأسئلة
        </h2>
        {questions.map((question, index) =>
          <div
            key={index}
            className="mt-4 p-6 bg-purple-100 rounded-lg shadow-md"
          >
            <p className="text-lg mb-5 block font-medium">
              {question.question}
            </p>
            <p className="text-base text-purple-700 mb-5 block">
              إجابتك: <span className="inline-block mr-2 font-semibold text-[--c-text-yellow]"> {answers[index]} </span>
            </p>
            <p className="text-base text-purple-700 mb-5 block">
              الإجابة الصحيحة:{" "}
              <span className="inline-block mr-2  text-[green]">{question.correct_answer}</span>
            </p>
          </div>
        )}
      </div>
      </div>

    );
  }

  return (
    <div style={{fontFamily:"var(--secondFont)"}} className="max-w-4xl  h-max absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-full p-3 lg:p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-900">
        الإختبار الأولي
      </h1>
      <p className="text-xl text-center mb-8">
        الوقت المتبقي: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
      </p>
      {questions.length > 0 &&
        <div className="mb-8 p-2 lg:p-6 bg-purple-100 rounded-lg shadow-md">
          <p className="text-lg font-medium mb-4">
            {questions[currentQuestion].question}
          </p>
          {questions[currentQuestion].options.map((option, index) =>
            <button
              key={index}
              className={`block w-full  mt-2 p-4 rounded-lg border ${answers[
                currentQuestion
              ] === option
                ? "bg-purple-400 text-neutral-800 focus:bg-purple-300"
                : "bg-purple-500 text-white"} hover:bg-purple-600 transition duration-300`}
              onClick={() => handleAnswerOptionClick(option)}
            >
              {option}
            </button>
          )}
        </div>}
      <div className="flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          className="p-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
          disabled={currentQuestion === 0}
        >
          السابق
        </button>
        {currentQuestion < questions.length - 1
          ? <button
              onClick={handleNextQuestion}
              className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
            >
              التالي
            </button>
          : <button
              onClick={handleSubmit}
              className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              تسليم
            </button>}
      </div>
    </div>
  );
};

export default Quiz;
