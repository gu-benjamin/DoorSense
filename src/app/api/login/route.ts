import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';

export async function POST(request: Request) {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json'
    };

  const reqData = await request.json();

  try {

    const res = await fetch(`${DEV_API_ENDPOINT}login/`, {
      method: 'POST',
      body: JSON.stringify(reqData),
      headers: headersList
    });

    const data = await res.json();

    if(data.status === '200 OK'){
      cookies().set('token', data.token);
    }

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

export async function DELETE() {
  try {
    cookies().delete('token')
    return NextResponse.json(
      { message: 'Logout efetuado com sucesso'},
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
