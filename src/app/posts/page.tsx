'use client'
import useSWR from 'swr'
import SearchPostsGrid from '@/components/SearchPostsGrid'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function page () {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)

  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const search = searchParams.get('search')
  const limit = searchParams.get('limit')

  const { data, error } = useSWR(
    `https://cms.bladywebdev.pl/items/pocketposts/${
      limit !== null ? '?limit=' + limit : '?limit=1000'
    }${page !== null ? '&page=' + page : '&page=1'}${
      search !== null ? '&search=' + search : ''
    }&sort=-time_added`,
    fetcher
  )

  const { data: PostsLength, error: err } = useSWR(
    `https://cms.bladywebdev.pl/items/pocketposts?limit=100000${
      search !== null ? '&search=' + search : ''
    }`,
    fetcher
  )

  useEffect(() => {
    const setOptions = () => {
      if (page && search && limit) {
      }
    }
    setOptions()
  }, [])

  if (error || err) return <div>Brak wyników</div>
  if (!data || !PostsLength) return <div>Loading...</div>

  const posts = data
  const postLength = PostsLength

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = postLength?.data.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className='min-h-screen'>
      <div className='flex justify-center items-center'>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={postLength?.data.length}
          paginate={paginate}
          search={String(search)}
          currentPage={currentPage}
        />
      </div>
      <SearchPostsGrid posts={currentPosts} search={search} />
    </div>
  )
}
