import Link from 'next/link'
import { PostDescription } from './PostDescription'
import { PostAddedDate } from './PostAddedDateFormat'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default async function PostsGrid () {
  const posts = await fetch(
    'https://cms.knotz.link/items/pocketposts?limit=20&page=1&sort=-time_added'
  )
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err))

  console.log(posts)
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4 p-4 justify-center items-center w-full'>
        <>
          <h1 className='text-center text-xl font-bold '>Najnowsze Posty</h1>
          <Link
            href={`/posts`}
            className='uppercase font-semibold text-sm border-2 border-black rounded-full px-2 transition-all duration-100 hover:scale-105  hover:bg-slate-200'
          >
            Pokaż wszystkie
          </Link>
        </>
      </div>
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2'>
        {posts.data.map(
          ({
            id,
            url,
            title,
            description,
            time_added,
            tags
          }: {
            id: string
            url: string
            title: string
            description: string
            time_added: string
            tags: string[]
          }) => (
            <div
              className='bg-[#FDE0E0] flex flex-col items-center justify-center border-2 rounded-2xl border-black my-4 p-4'
              key={id}
            >
              <div className='flex items-center gap-2 w-full font-bold'>
                {/* <div className='my-4 xl:ml-4 md:ml-4 sm:ml-2'>
                  {ReadableDate(time_added)}
                </div> */}
                <PostAddedDate time_added={time_added} />

                <div className='flex-1 w-full flex justify-end'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className=' w-fit bg-white text-sm uppercase px-1 py-1 h-fit border-2 border-black rounded-xl '>
                        {tags.length > 0 ? 'Tagi' : 'Brak Tagów'}
                      </TooltipTrigger>
                      {tags &&
                        tags.map((tag: string, index: number) => (
                          <TooltipContent key={index}>
                            <p>{tag}</p>
                          </TooltipContent>
                        ))}
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className='m-4 flex-1 flex flex-col gap-4 items-center'>
                <h1 className='text-sm font-bold text-left break-words font-sans'>
                  {String(title) !== '' ? title : 'Brak Opisu'}
                </h1>
                <p className='text-sm text-left break-words font-sans'>
                  {/* {description !== '' ? description : null} */}
                  <PostDescription longText={description} maxLength={80} />
                </p>
              </div>

              <Link
                href={url}
                target='_blank'
                className='font-bold px-2 mx-[2px] bg-white border-2 border-black rounded-xl w-fit transition-all duration-100 hover:scale-105 hover:bg-slate-200'
              >
                Czytaj Dalej!
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  )
}
