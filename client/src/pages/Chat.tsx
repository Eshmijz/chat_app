import { Suspense } from "react";
import { MessageInput } from "..//components/MessageInput";
import { MessageList } from "../components/MessageList";
import { useLocation } from "react-router-dom";

export const Chat = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col max-w-xl mx-auto">
      <h1 className="text-2xl border-b-2 border-sky-800">Room {pathname}</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <MessageInput />
        <MessageList />
      </Suspense>
      <a href="https://www.flaticon.com/free-icons/animal" title="animal icons">Animal icons created by Freepik - Flaticon</a>
    </div>
  );
};
