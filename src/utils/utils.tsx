export const getQueryParameters = (string: string) => {
  const url = new URL(location.href);
  return url.searchParams.get(string);
};
