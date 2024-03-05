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
  clearMessage: () => void;
};

// const initialState: ChatContext = {
//   chat: [],
//   addMessage: () => {},
//   clearMessage: () => {},
// };

// export const ChatContext = createContext<ChatContext>(initialState);
export const ChatContext = createContext<ChatContext | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  // vai ser criado o reducer porque tem um array de objeto
  const [chat, dispatch] = useReducer(chatReducer, []);
  const [messagesChat, setChatMessages] = useState([]);

  const addMessage = (user: string, text: string) => {
    dispatch({
      type: "add",
      payload: { user, text },
    });
  };

  const clearMessage = () => {
    chat.length = 0;
    // setChatMessages(messagesChat);
    // console.log("Clearrr", setChatMessages(messagesChat), (chat.length = 0));
  };

  return (
    <ChatContext.Provider value={{ chat, addMessage, clearMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
