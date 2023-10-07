'use server'
import { redirect } from "next/navigation"

export const CategoryRedirect = (categoryId: number) => {
    redirect(`/category?category=${categoryId}&page=1`)
}