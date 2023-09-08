import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const { searchParams } = await req.json()
    console.log(searchParams)
    redirect(`http://localhost:3000/posts?search=${searchParams}`)


    // const { searchParams } = await req.json()
    // console.log(searchParams)
    // redirect(`/posts?search=${searchParams}`)
}