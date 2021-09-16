// posts.service.js
const BASE_URL = "https://jsonplaceholder.typicode.com";
import { shuffle, randomDate } from "../../helpers"


function mockMiddleware(data) {
  const sortByCreatedAt = function (a, b) {
    if (a.created_at > b.created_at) return -1;
    if (a.created_at < b.created_at) return 1;
  };

  return shuffle(data)
    .map((item) => {
      return { ...item, created_at: randomDate(new Date(2021, 0, 1), new Date()) }
    })
    .sort(sortByCreatedAt)
}

function handleResponse(res) {
  return res.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!res.ok) {
      const error = (data && data.message) || res.statusText;
      return Promise.reject(error);
    }
    return mockMiddleware(data);
  });
}

const getAll = async () => {
  const options = {
    method: "GET"
  };
  return fetch(`${BASE_URL}/posts`, options).then(handleResponse);
};

const getById = async (id) => {
  const options = {
    method: "GET"
  };
  return fetch(`${BASE_URL}/posts/${id}`, options).then(handleResponse);
};

const postService = {
  getAll,
  getById
};

export default postService;
