import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';

export async function POST(request: Request) {
  const token = cookies().get('token');
  const reqData = await request.json();

  console.log(reqData);

  try {
    const res = await fetch(
      `${DEV_API_ENDPOINT}salas/create/`,
      {
        method: 'POST',
        body: JSON.stringify(reqData),
        headers: {
          Authorization: `Bearer ${token?.value}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await res.json();

    if(data.status === '401 Unauthorized'){
      return NextResponse.json(
        { message: data.message, status: data.status },
        {
          status: 401
        }
      );
    }

    return NextResponse.json(
      { data },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Falha ao salvar dados.', error },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const token = cookies().get('token');
  const reqData = await request.json();

  console.log(reqData);

  try {
    const res = await fetch(
      `${DEV_API_ENDPOINT}salas/update/`,
      {
        method: 'PUT',
        body: JSON.stringify(reqData),
        headers: {
          Authorization: `Bearer ${token?.value}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await res.json();

    if(data.status === '401 Unauthorized'){
      return NextResponse.json(
        { message: data.message, status: data.status },
        {
          status: 401
        }
      );
    }

    return NextResponse.json(
      { data },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Falha ao alterar dados.', error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const token = cookies().get('token');
  const reqData = await request.json();

  console.log(reqData);

  try {
    const res = await fetch(
      `${DEV_API_ENDPOINT}salas/delete/`,
      {
        method: 'DELETE',
        body: JSON.stringify(reqData),
        headers: {
          Authorization: `Bearer ${token?.value}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await res.json();

    if(data.status === '401 Unauthorized'){
      return NextResponse.json(
        { message: data.message, status: data.status },
        {
          status: 401
        }
      );
    }

    return NextResponse.json(
      { data },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Falha ao deletar dados.', error },
      { status: 500 }
    );
  }
}
