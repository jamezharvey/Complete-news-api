import axios from "axios";

const newsApi = axios.create({
  baseURL: `https://completed-nc-news-api.herokuapp.com/api`,
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotes = (articleid, dataToPatch) => {
  return newsApi
    .patch(`/articles/${articleid}`, dataToPatch)
    .then(({ data }) => {
      return data.article;
    });
};
