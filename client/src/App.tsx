import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";

let count = 0;
export const App = () => {
  console.log(count++);
  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto">
      <h1 className="text-2xl border-b-2 border-sky-800">Simple Chat</h1>
      <MessageInput />
      <MessageList />
      <a href="https://www.flaticon.com/free-icons/animal" title="animal icons">Animal icons created by Freepik - Flaticon</a>
    </div>
  );
};
