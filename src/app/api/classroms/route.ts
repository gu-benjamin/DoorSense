import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const token = cookies().get('token');
  const reqData = await request.json();

  console.log(reqData);

  try {
    const res = await fetch(
      'http://localhost/doorsense_backend/api/salas/create/',
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

    console.log(data);

    return NextResponse.json(
      { data },
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
  const token = cookies().get('token');
  const reqData = await request.json();

  console.log(reqData);

  try {
    const res = await fetch(
      'http://localhost/doorsense_backend/api/salas/update/',
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

    console.log(data);

    return NextResponse.json(
      { data },
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

export async function DELETE(request: Request) {
  const token = cookies().get('token');
  const reqData = await request.json();

  console.log(reqData);

  try {
    const res = await fetch(
      'http://localhost/doorsense_backend/api/salas/delete/',
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

    console.log(data);

    return NextResponse.json(
      { data },
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
