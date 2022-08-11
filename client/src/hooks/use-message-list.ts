import { websocketAtom } from "../state/websocket";
import { messageListAtom } from "../state/messages";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { Message } from "../models/message";

export const useMessageList = (): Message[] => {
  const socket = useRecoilValue(websocketAtom);
  const messageList = useRecoilValue(messageListAtom);

  const updateMessageList = useRecoilCallback(
    ({ set }) =>
      (message: Message) => {
        set(messageListAtom, [...messageList, message]);
      }
  );
  socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data as string);
    const message: Message = data;
    updateMessageList(message);
  };

  return messageList;
};
