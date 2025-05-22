import { useState, useRef, useEffect } from "react";
import Chatboticon from "./Chatboticon";

const CBY = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle chatbot visibility
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (userMessage, botResponse) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userMessage },
      { sender: "bot", text: botResponse },
    ]);
  };

  return (
    <div>
      {/* Chatbot Icon */}
      {!isOpen && (
        <div
          className="fixed bottom-4 right-4 bg-[#f0b100] p-3 rounded-full shadow-lg cursor-pointer transition-all duration-200 z-50 group"
          onClick={() => setIsOpen(true)}
        >
          <div className="group-hover:animate-wiggle">
            <Chatboticon />
          </div>
        </div>
      )}

      {/* Chatbot Window */}
      <div
        className={`fixed bottom-4 right-4 w-[90%] sm:w-[420px] max-h-[80%] rounded-[15px] bg-white shadow-[0_0_128px_rgba(0,0,0,0.1),0_0_32px_64px_-48_rgba(0,0,0,0.5)] flex flex-col transition-all duration-200 z-50 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 bg-[#f0b100] rounded-t-[15px]">
          <div className="flex gap-2 items-center">
            <Chatboticon />
            <h2 className="text-white text-lg font-semibold">RBIS Support</h2>
          </div>
          <button
            className="text-white text-2xl bg-[#f0b100] rounded-full p-1 hover:bg-[#e09a00] transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            🔽
          </button>
        </div>

        {/* Chat Body */}
        <div
          className="flex-1 p-4 overflow-y-auto"
          style={{ maxHeight: "400px" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 mb-4 ${
                message.sender === "user" ? "justify-end" : ""
              }`}
            >
              {message.sender === "bot" && (
                <div className="flex-shrink-0">
                  <Chatboticon />
                </div>
              )}
              <p
                className={`max-w-[70%] transition-all duration-200 ${
                  message.sender === "user"
                    ? "bg-[#f0b100] text-white p-3 rounded-lg text-sm"
                    : "bg-gray-200 text-black p-3 rounded-lg text-sm"
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Options */}
        <div className="flex flex-col gap-3 p-4">
          <button
            className="cursor-pointer rounded-lg text-lg m-1 p-2.5 bg-[#f0b100] hover:bg-[#e09a00] transition-all duration-200"
            onClick={() =>
              handleOptionClick(
                "What are the school fees",
                "The school fees depend on the grade level. Please contact the administration for detailed information."
              )
            }
          >
            What are the school fees
          </button>
          <button
            className="cursor-pointer rounded-lg text-lg m-1 p-2.5 bg-[#f0b100] hover:bg-[#e09a00] transition-all duration-200"
            onClick={() =>
              handleOptionClick(
                "Is RBIS A Mixed School",
                "Yes, RBIS is a mixed school with both boys and girls."
              )
            }
          >
            Is RBIS A Mixed School
          </button>
          <button
            className="cursor-pointer rounded-lg text-lg m-1 p-2.5 bg-[#f0b100] hover:bg-[#e09a00] transition-all duration-200"
            onClick={() =>
              handleOptionClick(
                "What Is The Average Admission Rate",
                "The average admission rate is around 85%."
              )
            }
          >
            What Is The Average Admission Rate
          </button>
          <button
            className="cursor-pointer rounded-lg text-lg m-1 p-2.5 bg-[#f0b100] hover:bg-[#e09a00] transition-all duration-200"
            onClick={() =>
              handleOptionClick(
                "Where Is The Boarding and Facilities",
                "The boarding facilities are located on campus with modern amenities."
              )
            }
          >
            Where Is The Boarding and Facilities
          </button>
        </div>
      </div>
    </div>
  );
};

export default CBY;