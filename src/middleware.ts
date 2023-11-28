import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('token')?.value;
  // const isFirstAcess = request.cookies.get('ticket')?.value;

  // if (isFirstAcess) {
  //   const ticket = request.cookies.get('ticket')?.value;
  //   return NextResponse.redirect(new URL(`/FirstAcess/${ticket}`, request.url));
  // }

  if (!isAuthenticated) {
    if (request.nextUrl.pathname === '/'){
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname !== '/Dashboard') {
    return NextResponse.redirect(new URL('/Dashboard', request.url));
  }
}

export const config = {
  matcher: ['/','/Dashboard/:path*']
};
