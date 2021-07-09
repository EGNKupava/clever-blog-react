import { TYPES } from "../action-types";

export const getMessagesRequest = () => ({
  type: TYPES.GET_MESSAGES_REQUEST,
});

export const sendMessage = (message) => ({
  type: TYPES.SEND_MESSAGE_REQUEST,
  message,
});
