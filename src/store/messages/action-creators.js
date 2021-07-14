import { TYPES } from "../action-types";

export const getMessagesRequest = () => ({
  type: TYPES.GET_MESSAGES_REQUEST,
});

export const sendMessage = (message) => ({
  type: TYPES.SEND_MESSAGE_REQUEST,
  message,
});

export const deleteMessageRequest = (id) => ({
  type: TYPES.DELETE_MESSAGE_REQUEST,
  id,
});

export const editMessageRequest = (id, text) => ({
  type: TYPES.EDIT_MESSAGE_REQUEST,
  id,
  text,
});

export const upadateMessageLikesRequest = (id, likes) => ({
  type: TYPES.UPADATE_MESSAGE_LIKES_REQUEST,
  id,
  likes,
});
