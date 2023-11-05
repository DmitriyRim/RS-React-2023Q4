export const getContent = (queryString: string = ''): Promise<Response> => {
  return fetch(`https://swapi.dev/api${queryString}`);
};
