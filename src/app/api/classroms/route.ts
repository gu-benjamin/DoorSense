import { cookies } from "next/headers";
import { NextResponse } from "next/server";
cookies

export async function GET(request: Request){
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json'
    };
    
    try {

    const res = await fetch('http://localhost/doorsense_backend/api//', {
      method: 'POST',
      body: JSON.stringify(reqData),
      headers: headersList
    });

    const data = await res.json();

    console.log(data)
    if(data.status === '200 OK'){
      cookies().set('token', data.token);
    }

    return NextResponse.json(
      { message: data.message },
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