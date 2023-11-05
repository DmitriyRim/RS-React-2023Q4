import { LoaderFunctionArgs } from 'react-router-dom';
import { getContent } from './api';

export const loaderInfo = async ({
  request,
}: LoaderFunctionArgs): Promise<Response> => {
  const url = new URL(request.url);
  return getContent(url.pathname);
};
