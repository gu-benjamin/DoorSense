import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('token');

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return;
}

export const config = {
  matcher: '/Dashboard/:path*'
};
