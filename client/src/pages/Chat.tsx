import { MessageInput } from "..//components/MessageInput";
import { MessageList } from "../components/MessageList";

export const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-xl mx-auto">
      <h1 className="text-2xl border-b-2 border-sky-800">Simple Chat</h1>
      <MessageInput />
      <MessageList />
      <a href="https://www.flaticon.com/free-icons/animal" title="animal icons">Animal icons created by Freepik - Flaticon</a>
    </div>
  );
};
