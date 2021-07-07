const HOST =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/cleverlandblog-cuual/service/";

export const api = {
  posts: `${HOST}blog/incoming_webhook/posts`,
  newPost: `${HOST}blog/incoming_webhook/new-post`,
  messages: `${HOST}chat/incoming_webhook/getMessages`,
  newMessage: `${HOST}chat/incoming_webhook/newMessage`,
};
