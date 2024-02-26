import { useUser } from "@/contexts/UserContext";
import { useState, KeyboardEvent } from "react";

export const NameInput = () => {
  const [nameInput, setNameInput] = useState("");
  const useCtx = useUser();

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter") {
      if (nameInput.trim() !== "" && nameInput !== "bot") {
        useCtx?.setUser(nameInput.trim());
      }
    }
    console.log("nAME", useCtx?.user);
    console.log("USEctx", useCtx);
  };

  return (
    <div className="mt-14">
      <p className="text-xl mb-4">Qual o seu nome?</p>
      <div className="flex gap-3 items-center text-lg">
        <input
          type="text"
          className="flex-1 border border-gray/30 rounded-md px-4 py-3 bg-white/10 outline-none"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyUp={handleKeyUpAction}
        />
      </div>
    </div>
  );
};
