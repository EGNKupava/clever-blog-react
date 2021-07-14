const BASE_URL =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/cleverlandblog-cuual/service/chat/incoming_webhook/";

export const api = {
  newMessage: ` ${BASE_URL}newMessage`,
  getMessages: ` ${BASE_URL}getMessages`,
  deleteMessage: ` ${BASE_URL}deleteMessage`,
  updateMessage: ` ${BASE_URL}updateMessage`,
};
