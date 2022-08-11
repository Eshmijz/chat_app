import { useSendMessage } from "../hooks/use-send-message";
import { userAtom } from "../state/user";
import { useRecoilValue } from "recoil";
import { Avatar } from "./Avatar";

type Props = {}

export const MessageInput: React.FC<Props> = () => {
  const user = useRecoilValue(userAtom);
  const { input, setInput, send } = useSendMessage();

  return (
    <div className='pb-2.5 pr-2.5 border-b-8 border-solid border-gray-200'>
      <form className='flex flex-col'>
        <div className='flex p-5'>
          <Avatar userId={user.userId} />
          <input
            className='flex-1 ml-5 text-xl border-none outline-none'
            type='text'
            placeholder="What's happening?"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <button
          disabled={input.length === 0}
          className={`block bg-sky-400 disabled:bg-gray-300 border-none rounded-3xl w-20 h-10 mt-5 ml-auto font-bold hover:bg-sky-500 text-white`}
          onClick={send}
        >
          Tweet
        </button>
      </form>
    </div>
  );
};