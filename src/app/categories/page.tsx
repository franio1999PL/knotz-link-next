import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Images = {
  Images: Data
}

type Data = {
  data: Image[] | []
}

type Image = {
  id: string
  status: 'draft' | 'published' | 'archived'
  url: string
  image: string
  name: string
}

export default async function page () {
  const Images: Data = await fetch(
    'https://cms.bladywebdev.pl/items/pcategories?sort=name',
    {
      cache: 'no-store'
    }
  ).then(res => res.json())

  return (
    <div className='flex flex-col justify-center items-center w-full '>
      <h1 className='text-lg font-semibold text-center p-8'>
        Wszystkie Kategorie
      </h1>
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2 pb-16'>
        {Images.data.map(({ name, image, url, id }) => (
          <Link
            key={id}
            href={`/posts?search=${url}`}
            className={cn(
              'block min-w-[195px] min-h-[197px] w-full h-full max-w-[195px] max-h-[197px] shadow-lg border-2 border-black rounded-3xl relative overflow-hidden transition-all duration-150 hover:scale-110'
            )}
            style={{
              background: `url(https://cms.bladywebdev.pl/assets/${image}.jpg) no-repeat scroll center`,
              backgroundSize: 'cover'
            }}
          >
            <div className='mx-auto flex justify-center items-end w-full bottom-0 h-full font-bold break-words bg-opacity-20 hover:bg-opacity-10 rounded-3xl transition-opacity duration-150 ease-in absolute bg-slate-950 text-center'>
              <h1 className='shadow-lg px-4 py-2 w-full h-full  max-h-[85px] min-h-[85px] text-slate-50 rounded-b-3xl bg-slate-950 bg-opacity-10'>
                {name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
