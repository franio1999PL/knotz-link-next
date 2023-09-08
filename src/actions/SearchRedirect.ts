'use server'
import { redirect } from "next/navigation"

export const SearchRedirect = (searchParams: string) => {
    redirect(`/posts?search=${searchParams}`)
}