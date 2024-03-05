import { useUser } from "@/contexts/UserContext";
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { useChat } from "@/contexts/ChatContext";

export const Chat = () => {
  const userCtx = useUser();
  const chatCtx = useChat();
  const { setUser } = useUser();

  if (!userCtx) return null;
  if (!userCtx.user) return <NameInput />;

  const handleClear = () => {
    chatCtx?.clearMessage();
    setUser("");
  };

  return (
    <div className="border border-gray/30 rounded-md">
      <div className="h-96 p-3 overflow-y-scroll">
        <ChatMessages />
      </div>
      <div className="border-t border-gray/30 p-3">
        <ChatInput name={userCtx.user} />
      </div>
      <div className="border-t border-gray/30 p-3">
        <ChatInput name="bot" />
      </div>
      <button
        className="border-t border-gray/30 p-3 w-full"
        onClick={() => handleClear()}
      >
        Sair
      </button>
    </div>
  );
};
