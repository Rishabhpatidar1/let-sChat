import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatinfo">
        <h4>{data.user?.displayName}</h4>
        <div className="chaticons">
          <i class="ri-vidicon-line"></i>
          <i class="ri-user-add-line"></i>
          <i class="ri-more-fill"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
