import Link from 'next/link'
import { PostDescription } from './PostDescription'
import { PostAddedDate } from './PostAddedDateFormat'
import { GetSearchPosts } from '@/lib/GetSearchPosts'
// @ts-ignore
import * as DOMPurify from 'dompurify'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

type Props = {
  posts: any
  search?: string | null
}

export default async function SearchPostsGrid ({ posts, search }: Props) {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4 p-4 justify-center items-center w-full'>
        <>
          <h1 className='text-center text-xl font-bold'>Szukaj: {search}</h1>
          {/* <button className='uppercase font-semibold text-sm border-2 border-black rounded-full px-2'>
            Pokaż wszystkie
          </button> */}
        </>
      </div>
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2'>
        {posts.map(({ id, url, title, description, time_added, tags }: any) => (
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

            <div className='p-4 flex-1 flex flex-col gap-4 items-center'>
              <h1 className='text-sm font-sans font-semibold text-left break-words'>
                {title !== '' ? DOMPurify.sanitize(title) : null}
              </h1>

              <p className='text-sm text-left break-words font-sans'>
                {/* {description !== '' ? description : null} */}
                <PostDescription
                  longText={String(DOMPurify.sanitize(description)).replace(
                    /\n/g,
                    ''
                  )}
                  maxLength={80}
                />
              </p>
            </div>
            <div className='font-bold px-2 mx-[2px] bg-white border-2 border-black rounded-xl w-fit'>
              <Link href={url} target='_blank'>
                Czytaj Dalej!
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
