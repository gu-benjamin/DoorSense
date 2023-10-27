import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = cookies().get('token');
    const headersList = {
      "Authorization": `Bearer ${token?.value}`,
      'Content-Type': 'application/json'
    };

    console.log(token)

    const res = await fetch('http://localhost/doorsense_backend/api/salas/', {
      method: 'GET',
      headers: headersList
    });

    const data = await res.json();

    // console.log(data)

    return NextResponse.json(
      { data: data },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Deu ruim men', error },
      { status: 500 }
    );
  }
}
