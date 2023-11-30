import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';

export async function POST() {
  const headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json'
  };

  try {
    const res = await fetch(`${DEV_API_ENDPOINT}login/forgot-password/`, {
      method: 'POST',
      headers: headersList
    });

    const data = await res.json();

    return NextResponse.json(
      { message: data.message, status: data.status },
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

export async function PUT(request: Request) {
  const reqData = await request.json();
  const { ticket, newPassword } = reqData;

  try {
    const res = await fetch(`${DEV_API_ENDPOINT}login/reset-password/`, {
      method: 'PUT',
      body: JSON.stringify({
        "new-password": newPassword
      }),
      headers: {
        Authorization: `Bearer ${ticket}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    if(data.message === '401 Unauthorized'){
      return NextResponse.rewrite(new URL('/', request.url))
    }

    return NextResponse.json(
      { message: data.message, status: data.status },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Falha ao enviar dados: ', error },
      { status: 500 }
    );
  }
}
