import { Message } from "@/types/Message";

type AddAction = {
  type: "add";
  payload: {
    user: string;
    text: string;
  };
};

type clearAction = {
  type: "clear";
  payload: {
    user: string;
    text: string;
    // id: number;
  };
};

export type ChatActions = AddAction | clearAction;

export const chatReducer = (state: Message[], action: ChatActions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          user: action.payload.user,
          text: action.payload.text,
        },
      ];
    case "clear":
      return { ...state, user: "", text: "" };
    // return state.filter((s) => s.id !== action.payload.id);
    default:
      return state;
  }
};
