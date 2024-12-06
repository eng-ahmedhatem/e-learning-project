import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import "./chatall.css"
const ENDPOINT = "http://localhost:3000"; // تأكد من مطابقة المنفذ مع خادمك

export default function Chatall() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIOClient(ENDPOINT);
    setSocket(newSocket);

    newSocket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => newSocket.disconnect();
  }, []);

  const handleSend = () => {
    if (message && username && socket) {
      socket.emit('sendMessage', { user: username, text: message });
      setMessage('');
    }
  };

  const handleJoin = () => {
    if (username && socket) {
      socket.emit('join', username);
      setJoined(true);
    }
  };

  return (
    <div className="lg:h-screen h-svh flex justify-center items-center ">
      {!joined ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">انضم إلى الدردشة</h2>
          <input
            type="text"
            placeholder="أدخل اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleJoin}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            انضم
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <div className="mb-4 max-h-96 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} style={{fontFamily:`var(--secondFont)`}} className={`mb-2 ${msg.user === "Admin" ? "text-slate-400 " : "text-orange-600"}`}>
                {msg.user == "Admin" ? "⭐ النظام ⭐ ": `👤 ${msg.user} `}: <span className={`mb-2 ${msg.user === "Admin" ? "text-slate-400 " : "text-black"}`}> {msg.text}</span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="أدخل رسالتك"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow p-2 border rounded mr-2"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >
              إرسال
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
