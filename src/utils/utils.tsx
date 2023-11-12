export const getQueryParameters = (string: string) => {
  const url = new URL(location.href);
  return url.searchParams.get(string);
};

export const getContent = async (pathname: string = '') => {
  return fetch(`https://swapi.dev/api${pathname}`);
};
