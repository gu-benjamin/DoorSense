import { checkHasTicketFA } from 'functions/checkHasTickets';
// import { verifyToken } from 'functions/verifyToken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const hasTicketFA = checkHasTicketFA();

    const cookies = {
      ticket_fa: hasTicketFA,
    };

    return NextResponse.json({ cookies }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Deu ruim men', error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // if(verifyToken(body)){
    if(body === '12345'){
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
