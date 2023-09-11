'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col justify-center items-center p-4 w-full min-h-[60vh] gap-4'>
      <div className='p-4'>
        <h2 className='p-4 text-center text-2xl font-semibold'>
          Coś poszło nie tak!
        </h2>
        <p className='text-center text-lg font-medium'>
          Błąd został zgłoszony automatycznie.
        </p>
      </div>
      <button
        className='px-4 py-2 border-2 border-black rounded-3xl bg-bgmain hover:text-slate-600/80'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Spróbuj Ponownie
      </button>
    </div>
  )
}
