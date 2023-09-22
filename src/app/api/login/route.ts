import { NextResponse } from "next/server";

interface LoginProps {
    username: string,
    password: string
}

export default async function POST(request : Request){

    const data: LoginProps = await request.json()
    const res = await fetch('https:/localhost/doorsense_backend/api/login/');
    
    return NextResponse.json()    
}