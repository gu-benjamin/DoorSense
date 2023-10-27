import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const token = cookies().get('token');
const headersList = {
  "Authorization": `Bearer ${token?.value}`,
  'Content-Type': 'application/json'
};

export async function GET() {
  try {

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

export async function POST(req: Request){

  const reqData = await req.json();

  try{

    const res = await fetch('http://localhost/doorsense_backend/api/login/', {
      method: 'POST',
      body: JSON.stringify(reqData),
      headers: headersList
    });

    const data = await res.json();

    return NextResponse.json(
      { data: data, status: data.status },
      {
        status: 200
      }
    );

  }catch(error){
    return NextResponse.json(
      { message: 'Deu ruim men', error },
      { status: 500 }
    );
  }
}
