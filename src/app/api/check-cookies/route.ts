import { checkHasTicketFA, checkHasTicketRP } from 'functions/checkHasTickets';
import { cookies } from 'next/headers';
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const ticketFA = cookies().get('ticketFA')?.value

    if(body === ticketFA){
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
