import { checkHasTicketFA, checkHasTicketRP } from 'functions/checkHasTickets';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const hasTicketFA = checkHasTicketFA();
    const hasTicketRP = checkHasTicketRP();

    const cookies = {
      ticket_fa: hasTicketFA,
      ticket_rp: hasTicketRP
    };

    return NextResponse.json({ cookies }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Deu ruim men', error },
      { status: 500 }
    );
  }
}
