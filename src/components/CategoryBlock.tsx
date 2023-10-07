import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  id: number
}

export default async function CategoryBlock ({ id }: Props) {
  const category = await fetch(
    `https://cms.knotz.link/items/kategorie?filter[megakat][_eq]=${id}`,
    { cache: 'no-store' }
  )
    .then(res => res.json())
    .catch(err => console.log(err))

  const megaCategory = await fetch(
    `https://cms.knotz.link/items/megakategoria/${id}`,
    { cache: 'no-cache' }
  )
    .then(res => res.json())
    .catch(err => console.log(err))

  //   console.log(category)
  //   console.log(megaCategory)

  return (
    <React.Fragment key={id}>
      <h1 className='text-lg font-semibold text-center p-8'>
        {megaCategory.data.nazwa}
      </h1>
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2 pb-16'>
        {category.data.map(
          ({
            id,
            nazwa,
            image
          }: {
            id: number
            nazwa: string
            image: string
          }) => (
            <Link
              key={id}
              href={`/posts?search=${nazwa}`}
              className={cn(
                'block min-w-[195px] min-h-[197px] w-full h-full max-w-[195px] max-h-[197px] shadow-lg border-2 border-black rounded-3xl relative overflow-hidden transition-all duration-150 hover:scale-110'
              )}
              style={{
                background: `url(https://cms.knotz.link/assets/${image}) no-repeat scroll center`,
                backgroundSize: 'cover'
              }}
            >
              <div className='mx-auto flex justify-center items-end w-full bottom-0 h-full font-bold break-words bg-opacity-20 hover:bg-opacity-10 rounded-3xl transition-opacity duration-150 ease-in absolute bg-slate-950 text-center'>
                <h1 className='shadow-lg px-4 py-2 w-full h-full  max-h-[85px] min-h-[85px] text-slate-50 rounded-b-3xl bg-slate-950 bg-opacity-10'>
                  {nazwa}
                </h1>
              </div>
            </Link>
          )
        )}
      </div>
    </React.Fragment>
  )
}
