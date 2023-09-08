import { ReadableDate } from '@/lib/dateFormat'

export function PostAddedDate ({ time_added }: { time_added: string | null }) {
  const formattedDate = ReadableDate(time_added)

  return <div className='my-4  text-xs'>{formattedDate}</div>
}
