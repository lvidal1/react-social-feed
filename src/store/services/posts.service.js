// posts.service.js
const BASE_URL = "https://jsonplaceholder.typicode.com";

function handleResponse(res) {
  return res.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!res.ok) {
      const error = (data && data.message) || res.statusText;
      return Promise.reject(error);
    }

    return data;
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
