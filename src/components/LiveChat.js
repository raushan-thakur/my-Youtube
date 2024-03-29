import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName, getRandomSentence, makeRandomMessage } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //console.log("API Polling")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomSentence(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[453px] ml-2 p-2 border shadow-lg rounded-lg bg-slate-50 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full ml-2 pl-6 py-2 shadow-lg shadow-slate-400 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          
          dispatch(
            addMessage({
              name: "Raushan Thakur",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="h-8 w-9/12 bg-gray-200 rounded-full px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-gray-700 text-white font-bold mx-2 px-2 py-1 rounded">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
