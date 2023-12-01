// import { verifyToken } from 'functions/verifyToken';
import { NextResponse, NextRequest } from 'next/server';
import { APP_ROUTES } from 'constants/app_routes';

export function middleware(request: NextRequest) {

  const isAuthenticated = request.cookies.get('token')?.value;

  if (!isAuthenticated) {
    if (request.nextUrl.pathname === APP_ROUTES.public.login){
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL(APP_ROUTES.public.login, request.url));
  }

  if (request.nextUrl.pathname !== APP_ROUTES.private.dashboard) {
    return NextResponse.redirect(new URL(APP_ROUTES.private.dashboard, request.url));
  }
}

export const config = {
  matcher: ['/','/dashboard/:path*']
};

