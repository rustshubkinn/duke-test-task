const URL = 'https://jsonplaceholder.typicode.com/posts/1';

export const addToCart = async () => {
  const response = await fetch(URL);

  return response;
};
