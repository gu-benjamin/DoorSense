import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';

export async function PUT(request: Request) {
  const reqData = await request.json();
  const ticket = cookies().get('ticket');

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

    if (data.status === '400 Bad Request') {
      return NextResponse.json(
        { message: data.message, status: data.status },
        {
          status: 400
        }
      );
    }

    if (
      data.status === '200 OK' ||
      data.status === '401 Unauthorized' ||
      data.status === '403 Forbidden'
    ) {
      cookies().delete('ticket');

      if (data.status === '401 Unauthorized') {
        return NextResponse.json(
          { message: data.message, status: data.status },
          {
            status: 401
          }
        );
      }

      if (data.status === '403 Forbidden') {
        return NextResponse.json(
          { message: data.message, status: data.status },
          {
            status: 403
          }
        );
      }
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
