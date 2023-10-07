import CategoryBlock from '@/components/CategoryBlock'
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
  const data = await fetch('https://cms.knotz.link/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `query MegaKategiaQuery {
        megakategoria {
          id
        }
      }`
      // Variables: `{
      //   "filter": {
      //     "category": {
      //       "nazwa": {
      //         "_eq": "seks"
      //       }
      //     }
      //   }
      // }`
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    next: { revalidate: 10 }
  }).then(res => res.json())

  // console.log(data)

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {data.data.megakategoria.map(({ id }: { id: number }) => (
        <CategoryBlock id={id} />
      ))}
    </div>
  )
}
