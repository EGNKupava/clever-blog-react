import { TYPES } from "../action-types";

export const getMessagesRequest = () => ({
  type: TYPES.GET_MESSAGES_REQUEST,
});

export const getMessagesRequestSuccess = (messages, totalMessages) => ({
  type: TYPES.GET_MESSAGES_REQUEST_SUCCESS,
  messages,
  totalMessages,
});

export const getMessagesRequestError = (error) => ({
  type: TYPES.GET_MESSAGES_REQUEST_ERROR,
  error,
});

export const newMessageRequest = (message) => ({
  type: TYPES.NEW_MESSAGE_REQUEST,
  message,
});
export const newMessageRequestSuccess = (messageData) => ({
  type: TYPES.NEW_MESSAGE_REQUEST_SUCCESS,
  messageData,
});
export const newMessageRequestError = (error) => ({
  type: TYPES.NEW_MESSAGE_REQUEST_ERROR,
  error,
});
