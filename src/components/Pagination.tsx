import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

type Props = {
  postsPerPage: number
  totalPosts: number
  paginate: any
  search: string
  currentPage: number
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  search,
  currentPage
}: Props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='flex flex-wrap gap-2'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button
              onClick={() => paginate(number)}
              disabled={currentPage === number}
              className={cn(
                `${
                  currentPage === number ? 'text-slate-400' : 'text-slate-900'
                } `
              )}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
