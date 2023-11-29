import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';

export async function PUT(request: Request) {
  const reqData = await request.json();
  console.log(reqData)
  const ticket = cookies().get('ticketFA');
  console.log(ticket?.value)

  try {
    const res = await fetch(`${DEV_API_ENDPOINT}login/register-user/`, {
      method: 'PUT',
      body: JSON.stringify(reqData),
      headers: {
        Authorization: `Bearer ${ticket?.value}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    console.log(data)

    if (data.status === '200 OK') {
      cookies().delete('ticketFA');
    }

    return NextResponse.json(
      { message: data.message, status: data.status },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Falha ao fazer a requisição', error },
      { status: 500 }
    );
  }
}

