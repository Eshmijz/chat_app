import { AnimatePresence, usePresence, motion } from "framer-motion";
import { useMessageList } from "../hooks/use-message-list";
import { Avator } from "./Avator";


export const MessageList = () => {
  const transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 };

  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: 'out',
    animate: isPresent ? 'in' : 'out',
    variants: {
      in: { transformY: 1, opacity: 1 },
      out: { transformY: 0, opacity: 0, zIndex: -1 },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition,
  };


  const messageList = useMessageList();

  return (
    <div>
      <div className="rounded-full bg-red-400 text-white w-10 h-10 p-2 text-center">
        {messageList.length}
      </div>
      <AnimatePresence>
        {messageList.map((m, i) => (
          <motion.div
            key={i}
            {...animations}
            className='flex items-start border-b-2 p-2.5'
          >
            <div className='flex p-4 items-center'>
              <Avator />
              <p className='px-8'>
                {m.content}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
