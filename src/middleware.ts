// import { verifyToken } from 'functions/verifyToken';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // const token = request.cookies.get('token')?.value;
  const isAuthenticated = request.cookies.get('token')?.value;
  // const teste = verifyToken(token);

  // console.log(teste)

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
