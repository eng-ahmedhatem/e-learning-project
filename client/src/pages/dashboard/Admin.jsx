import React, { useEffect, useState } from "react";
import Dashboard_header from "./Dashboard_header";
import Loader from "../../component/Loader/Loader";
import axios from "axios";
import "./admin.css";

export default function Admin() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const [start, setStart] = useState(JSON.parse(localStorage.getItem("handelStart")) || false);

  const handelStart = async (e) => {
    localStorage.setItem("handelStart", e.target.checked);
    setStart(!start);
    setIsLoading(true);
    console.log(e.target.checked);

    try {
        const res = await axios.get(`/api/all`, {
            params: { postTest: e.target.checked },
        });
        console.log(res.data);
        setStart(e.target.checked);
    } catch (error) {
        console.error("Error:", error);
        setStart(false);
    } finally {
        setIsLoading(false);
    }
};


  useEffect(() => {
    axios.get("/api/all/users").then((response) => {
      setData(response.data.data);
      setOriginalData(response.data.data);
    });
  }, []);

  const handelChange = (e) => {
    const value = e.target.value;
    setSelectedGroup(value);

    if (value === "none") {
      setData(originalData);
    } else if (value === "control") {
      const newData = originalData.filter((ele) => ele.group === "control");
      setData(newData);
    } else if (value === "ex") {
      const newData = originalData.filter((ele) => ele.group === "ex");
      setData(newData);
    }
  };

  if (data.length === 0) return <Loader />;

  return (
    <section className="ad relative h-screen">
      <div className="h-max">
        <Dashboard_header />
      </div>
      <div className="content p-5">
        <div className="flex items-center">
          <h2 className="ml-5 text-lg">الإختبار والمقياس المبدئي</h2>
          <div className="checkbox-wrapper-55">
            <label className="rocker rocker-small">
              <input
                checked={start}
                onChange={(e) => handelStart(e)}
                type="checkbox"
              />
              <span className="switch-left">تشغيل</span>
              <span className="switch-right">ايقاف</span>
            </label>
          </div>
          {isLoading && (
            <span className="inline-block mx-5 text-[green]">
              جــــــــــاري المعالجة .................
            </span>
          )}
        </div>
        <h1 className="text-lg lg:text-xl text-blue-700 font-bold text-center m-3 lg:m-5">
          نــتــــائـــج الــــطــلاب
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <form className="flex justify-center items-center w-2/4 mx-auto p-3 bg-transparent shadow-lg rounded-lg">
            <select
              onChange={handelChange}
              value={selectedGroup}
              id="countries"
              className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="none">التصنيف حسب .. ...</option>
              <option value="control">المجموعة الضابطة</option>
              <option value="ex">المجموعة التجريبية</option>
            </select>
          </form>
          <table className="w-full text-sm text-right text-gray-500 border border-gray-300 rounded-lg">
            <thead className="text-xs text-white uppercase bg-blue-500 rounded-t-lg">
              <tr>
                <th scope="col" className="px-6 py-3 text-center text-sm sm:text-base">
                  #
                </th>
                <th scope="col" className="px-6 py-3 text-center text-sm sm:text-base">
                  اسم الطالب
                </th>
                <th scope="col" className="px-6 py-3 text-center text-sm sm:text-base">
                  البريد الإلكتروني
                </th>
                <th scope="col" className="px-6 py-3 text-center text-sm sm:text-base">
                  المجموعة
                </th>
                <th scope="col" className="px-6 py-3 text-center text-sm sm:text-base">
                  نتيجة الإخبار القبلي
                </th>
                <th scope="col" className="px-6 py-3 text-center text-sm sm:text-base">
                  نتيجة الإختبار البعدي
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((ele, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b odd:bg-gray-50 even:bg-white"
                    >
                      <td className="px-6 text-center text-sm md:text-base py-4">
                        {index + 1}
                      </td>
                      <th
                        scope="row"
                        className="px-6 text-center text-sm md:text-base py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {ele.userName}
                      </th>
                      <td className="px-6 text-center text-sm md:text-base py-4">
                        {ele.email}
                      </td>
                      <td className="px-6 text-center text-sm md:text-base py-4">
                        {ele.group === "ex" ? "التجريبية" : "الضابطة"}
                      </td>
                      <td className="px-6 text-center text-sm md:text-base py-4">
                        <span className="text-blue-700 font-bold">
                          {ele.preTest_Score}
                        </span>{" "}
                        / <span>40</span>
                      </td>
                      <td className="px-6 text-center text-sm md:text-base py-4">
                        <span className="text-blue-700 font-bold">
                          {ele.postTest_Score}
                        </span>{" "}
                        / <span>40</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
