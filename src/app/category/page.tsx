import { PostAddedDate } from '@/components/PostAddedDateFormat'
import { PostDescription } from '@/components/PostDescription'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { redirect } from 'next/navigation'

type Props = { params: { limit: string; page: string; category: string } }

export default async function page ({
  params,
  searchParams
}: {
  params: { category: string | null; page: string | null }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const url = `https://cms.bladywebdev.pl/items/pocketposts?limit=20&search=${searchParams.category}&page=${searchParams.page}`

  const posts = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  if (!searchParams.category)
    return (
      <div className='min-h-[60vh] w-full flex justify-center items-center'>
        <p className='text-center text-xl'>Brak Kategorii</p>
      </div>
    )
  if (!searchParams.page)
    return redirect(`/category?category=${searchParams.category}&page=1`)

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4 p-4 justify-center items-center w-full'>
        <>
          <div>
            Paginacja:
            <div className='flex justify-center items-center gap-2 p-4'>
              {parseInt(String(searchParams.page)) > 1 ? (
                <Link
                  href={`/category?category=${
                    searchParams.category
                  }&page=${String(parseInt(String(searchParams.page)) - 1)}`}
                  className='bg-slate-50 border-2 border-black rounded-full transition-all opacity-80 duration-150 hover:bg-bgmain hover:opacity-100 shadow-lg'
                >
                  <ArrowLeft />
                </Link>
              ) : (
                <>
                  <button
                    className='bg-slate-50 border-2 border-black rounded-full transition-all opacity-50 duration-150  cursor-not-allowed'
                    disabled
                  >
                    <ArrowLeft />
                  </button>
                </>
              )}

              <div className='px-2 py-2 bg-bgmain rounded-full shadow-lg'>
                {searchParams.page}
              </div>
              {posts.data.length == 20 ? (
                <Link
                  href={`/category?category=${
                    searchParams.category
                  }&page=${String(parseInt(String(searchParams.page)) + 1)}`}
                  className='bg-slate-50 border-2 border-black rounded-full transition-all opacity-80 duration-150 hover:bg-bgmain hover:opacity-100 shadow-lg'
                >
                  <ArrowRight />
                </Link>
              ) : (
                <button
                  className='bg-slate-50 border-2 border-black rounded-full transition-all opacity-50 duration-150  cursor-not-allowed'
                  disabled
                >
                  <ArrowRight />
                </button>
              )}
            </div>
          </div>
          <h1 className='text-center text-xl font-bold'>
            Kategoria: {searchParams.category}
          </h1>
        </>
      </div>
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2'>
        {posts?.data.map(
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
              <div className='font-bold px-2 mx-[2px] bg-white border-2 border-black rounded-xl w-fit'>
                <Link href={url} target='_blank'>
                  Czytaj Dalej!
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
