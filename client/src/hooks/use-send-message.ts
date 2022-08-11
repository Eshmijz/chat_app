import { useCallback, useState } from "react";
import { websocketAtom } from "../state/websocket";
import { userAtom } from "../state/user";
import { useRecoilValue } from "recoil";

export const useSendMessage = () => {
  const socket = useRecoilValue(websocketAtom);
  const [input, setInput] = useState<string>("");

  const user = useRecoilValue(userAtom);

  const send = useCallback(() => {
    if (input.length === 0) return;
    socket.send(JSON.stringify({ content: input, user: user, createdAt: Date.now() }));
    setInput("");
  }, [input]);

  return { input, setInput, send };
};
