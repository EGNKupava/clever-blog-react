const CHAT = "chat";
const USERS = "users";

export const BASE_URL =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/cleverlandblog-cuual/service/";

export const api = {
  newMessage: `${CHAT}/incoming_webhook/newMessage`,
  getMessages: `${BASE_URL}${CHAT}/incoming_webhook/getMessages`,
  deleteMessage: `${CHAT}/incoming_webhook/deleteMessage`,
  updateMessage: `${CHAT}/incoming_webhook/updateMessage`,
  getUsers: `${BASE_URL}${USERS}/incoming_webhook/getUsers`,
  addUser: `${USERS}/incoming_webhook/newUser`,
};
