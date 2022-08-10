import { useSendMessage } from "../hooks/use-send-message";

export const MessageInput = () => {
  const { input, setInput, send } = useSendMessage();

  return (
    <div className="flex border border-black rounded-md p-10">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="new message"
        className=""
      />
      <button
        onClick={send}
        className="p-4 bg-sky-600 text-white ml-4"
      >Send</button>
    </div>
  );
};
