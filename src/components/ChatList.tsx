import React from 'react';
import MessageForm from './MessageForm';
import UserCard from './UserCard';
import Conversation from './Conversation';

const ChatList = () => {
  return (
    <div className="flex flex-col flex-auto h-[calc(100dvh-120px)] p-6">
      <div className="flex justify-between items-center mb-3">
        <UserCard />
      </div>

      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 p-4 relative h-full">

        <div className="flex flex-col h-full mb-4 overflow-auto">
          <div className="flex flex-col h-full">
            <Conversation />
          </div>
        </div>
          <MessageForm />
      </div>
    </div>
  );
};

export default ChatList;