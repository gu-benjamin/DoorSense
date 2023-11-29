import { checkHasTicketFA } from 'functions/checkHasTickets';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const hasTicketFA = checkHasTicketFA();

    console.log(hasTicketFA)
    const cookies = {
      ticket_fa: hasTicketFA,
    };

    return NextResponse.json({ cookies }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Falha ao verificar cookies', error },
      { status: 500 }
    );
  }
}
