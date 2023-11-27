import { APP_ROUTES } from 'constants/app_routes';

export const checkIsPublicPage = (path: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);
  return appPublicRoutes.includes(path);
};
