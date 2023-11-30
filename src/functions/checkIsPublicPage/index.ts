import { APP_ROUTES } from 'constants/app_routes';

export const checkIsPublicPage = (path: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);
  return appPublicRoutes.some((route) => {
    const regexRoute = route.replace(/:\w+/g, '[^\\/]+');
    const regex = new RegExp(`^${regexRoute}$`);

    return regex.test(path);
  });
};
