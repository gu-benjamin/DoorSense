import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const headersList = {
    'User-Agent': 'http://localhost:3000',
    'Content-Type': 'application/json'
  };

  try {
    const reqData = await request.json();
    
    const body = reqData.body;
    console.log(body.username)

    const res = await fetch('https:/localhost/doorsense_backend/api/login', {
      method: 'POST',
      body: body,
      headers: headersList
    });

    const data = await res.json();

    console.log(data)
    // if(data.status === '200 Ok'){
    //   cookies().set('token', data.token);

    // }
    return NextResponse.json(
      { message: data.message },
      {
        status: data.status
      }
    );

  } catch (error) {
    return NextResponse.json(
      { message: 'Deu ruim men', error },
      { status: 500 }
    );
  }
}
