const CHAT = "chat";
const USERS = "users";

const BASE_URL =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/cleverlandblog-cuual/service/";

export const api = {
  newMessage: ` ${BASE_URL}${CHAT}/incoming_webhook/newMessage`,
  getMessages: ` ${BASE_URL}${CHAT}/incoming_webhook/getMessages`,
  deleteMessage: ` ${BASE_URL}${CHAT}/incoming_webhook/deleteMessage`,
  updateMessage: ` ${BASE_URL}${CHAT}/incoming_webhook/updateMessage`,
  getUsers: ` ${BASE_URL}${USERS}/incoming_webhook/getUsers`,
};
