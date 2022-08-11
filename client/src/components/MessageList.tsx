import { AnimatePresence, usePresence, motion } from "framer-motion";
import { useMessageList } from "../hooks/use-message-list";
import { Avatar } from "./Avatar";


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
    <div className="flex flex-col-reverse">
      <AnimatePresence>
        {messageList.map((m, i) => (
          <motion.div
            key={i}
            {...animations}
            className='flex items-start border-b-2 p-2.5'
          >
            <div className=''>
              <Avatar userId={Number(m.user.userId)} />
            </div>
            <div className='flex-1 px-2.5'>
              <div className='pb-1'>
                <h3>
                  {m.user.userName}{' '}
                  <span className='text-sm text-gray-400 mb-2'>
                    {'@'}
                    {m.user.userId}
                  </span>
                  <span className='text-sm text-gray-500'>
                    {'  '}
                    {m.createdAt}
                  </span>
                </h3>
              </div>
              {m.content}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
