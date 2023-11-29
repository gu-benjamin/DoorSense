import { checkHasTicketFA } from 'functions/checkHasTickets';
// import { verifyToken } from 'functions/verifyToken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // if(verifyToken(body)){
    if(body === 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDEyODcyMjAsImp0aSI6InprcUphMVBxdy9QU0VjS3IvQTFpYnRLeTU2TnJIZkdHMGtaeDBRQlhYV1k9IiwiZXhwIjoxNzAxMjg3ODIwLCJkYXRhIjp7InVzZXJuYW1lIjoiYnJlbm8ifX0.6_vXflcRtWbaScPGw0N8VtufRM1wDYRYbsUtGGZm_wk'){
      cookies().set('ticket', body);
      return NextResponse.json({ response: true }, { status: 200 });
    }
    return NextResponse.json({ response: false }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: 'Deu ruim men', error },
      { status: 500 }
    );
  }
}
