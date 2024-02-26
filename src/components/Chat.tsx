import { useUser } from "@/contexts/UserContext";
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const Chat = () => {
  const userCtx = useUser();

  if (!userCtx) return null;
  if (!userCtx.user) return <NameInput />;

  console.log("user", !userCtx);
  console.log("userUser", !userCtx.user);
  console.log("userHome", userCtx);

  const handleClear = () => {
    console.log("clear", !!userCtx.user);
    location.reload();
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
