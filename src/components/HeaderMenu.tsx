'use client'

import { useState } from 'react'
import { AlignJustify, Search, X } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { Input } from '@/components/ui/input'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SearchRedirect } from '@/actions/SearchRedirect'
import { ToastAction } from './ui/toast'

export default function HeaderMenu () {
  const [openSearch, setOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { toast } = useToast()

  const TrackSearch = (e: any) => {
    const value = e.target.value
    setSearchValue(value)
  }

  const handleSearchClick = () => {
    const regex = /^[a-zA-Z\s]*$/
    if (searchValue !== '' && regex.test(searchValue)) {
      SearchRedirect(searchValue)
      setOpenSearch(false)
    } else {
      toast({
        variant: 'destructive',
        title: 'Ups! Coś poszło nie tak.',
        description: 'Wyszukiwany tekst nie może zawierać znaków specjalnych.',
        action: <ToastAction altText='Zamknij'>Zamknij</ToastAction>
      })
    }
  }

  const handleEnterKey = (e: any) => {
    const regex = /^[a-zA-Z\s]*$/
    if (searchValue !== '' && regex.test(searchValue)) {
      if (e.key === 'Enter') {
        SearchRedirect(searchValue)
        setOpenSearch(false)
      }
    } else {
      if (e.key === 'Enter') {
        toast({
          variant: 'destructive',
          title: 'Ups! Coś poszło nie tak.',
          description:
            'Wyszukiwany tekst nie może zawierać znaków specjalnych.',
          action: <ToastAction altText='Zamknij'>Zamknij</ToastAction>
        })
      }
    }
  }

  return (
    <header className='p-4 w-full mx-auto '>
      <nav className='w-full flex justify-between items-center border-2 border-black rounded-full bg-bgmain'>
        <Sheet>
          <SheetTrigger>
            <div className='flex justify-center items-center w-12 h-12 cursor-pointer border-black border-r-2 border-y-2 rounded-full bg-slate-50 hover:bg-bgmain/75 hover:scale-105 hover:border-l-2 transition-all duration-100 '>
              <AlignJustify size={24} />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='text-center'>Menu</SheetTitle>
              <SheetDescription>
                <ul className='mt-4 flex flex-col  gap-4 justify-start items-start'>
                  <li>
                    <Link
                      href={'/'}
                      className='text-black font-medium uppercase transition-all duration-150 hover:underline hover:opacity-60'
                    >
                      Strona Główna
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/idea-strony'}
                      className='text-black font-medium uppercase transition-all duration-150 hover:underline hover:opacity-60'
                    >
                      Idea Strony
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/posts'}
                      className='text-black font-medium uppercase transition-all duration-150 hover:underline hover:opacity-60'
                    >
                      Popularne posty
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/posts'}
                      className='text-black font-medium uppercase transition-all duration-150 hover:underline hover:opacity-60'
                    >
                      Najnowsze posty
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/categories'}
                      className='text-black font-medium uppercase transition-all duration-150 hover:underline hover:opacity-60'
                    >
                      Kategorie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'https://patronite.pl/ksaweryknotz'}
                      target='_blank'
                      className='text-black font-medium uppercase transition-all duration-150 hover:underline hover:opacity-60'
                    >
                      Wesprzyj mnie w mojej pracy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'https://szansaspotkania.pl'}
                      target='_blank'
                      className='text-black font-medium uppercase transition-all duration-150 hover:underline hover:opacity-60'
                    >
                      SzansaSpotkania.pl
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'https://ksaweryknotz.pl'}
                      target='_blank'
                      className='text-black font-medium uppercase transition-all duration-150 hover:underline hover:opacity-60'
                    >
                      KsaweryKnotz.pl
                    </Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Link href={'/'} className='flex items-center justify-center'>
          {/* <LogoMini /> */}
          <Image
            src={'/LogoMini.png'}
            alt='Logo Knotz.link'
            height={32}
            width={32}
          />
          <h1 className='text-lg font-bold text-[#c80101]'>Knotz.Link</h1>
        </Link>
        <div className='flex items-center justify-center relative w-fit'>
          <div
            className={cn(
              `absolute right-14 min-w-[200px] rotate-12 max-w-[300px] w-full blur-lg -translate-y-8 -translate-x-8 transition-all ease-in-out  duration-300 top-1 opacity-0  ${
                openSearch
                  ? 'opacity-100 rotate-0 translate-y-0 translate-x-0 blur-none'
                  : ''
              }`
            )}
          >
            <div className='flex justify-center items-center relative'>
              <Input
                type='text'
                className={cn(`${!openSearch && 'disabled:cursor-default'}`)}
                disabled={!openSearch}
                onChange={TrackSearch}
                placeholder='Szukaj'
                onKeyUp={e => handleEnterKey(e)}
              />
              <button
                onClick={handleSearchClick}
                className='absolute right-1 hover:scale-105  transition-all duration-300  ease-in-out'
              >
                {openSearch && <Search />}
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center w-12 h-12 cursor-pointer  rounded-full  hover:scale-125  transition-all duration-300  ease-in-out '>
            <button onClick={() => setOpenSearch(!openSearch)}>
              {openSearch ? <X /> : <Search />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
