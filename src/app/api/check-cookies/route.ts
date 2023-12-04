import { checkHasTicket } from 'functions/checkHasTickets';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const hasTicket = checkHasTicket();

    const cookies = {
      ticket: hasTicket,
    };

    return NextResponse.json({ cookies }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Falha ao verificar cookies', error },
      { status: 500 }
    );
  }
}
