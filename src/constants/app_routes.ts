export const APP_ROUTES = {
  public: {
    login: '/',
    reset_password: '/reset-password/:ticket'
  },
  private: {
    reset_user: '/first-access',
    dashboard: '/dashboard'
  }
};
