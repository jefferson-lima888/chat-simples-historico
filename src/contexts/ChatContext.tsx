import { chatReducer } from "@/reducers/chatReducer";
import { Message } from "@/types/Message";
import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

type ChatContext = {
  chat: Message[];
  addMessage: (user: string, text: string) => void;
};

export const ChatContext = createContext<ChatContext | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  // vai ser criado o reducer porque tem um array de objeto
  const [chat, dispatch] = useReducer(chatReducer, []);

  const addMessage = (user: string, text: string) => {
    dispatch({
      type: "add",
      payload: { user, text },
    });
  };

  return (
    <ChatContext.Provider value={{ chat, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
