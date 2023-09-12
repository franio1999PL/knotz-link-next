import Image from 'next/image'
import React from 'react'
import { Roboto, Lexend_Peta } from 'next/font/google'
import Link from 'next/link'

const RobotoFont = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const lexendPeta = Lexend_Peta({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Footer () {
  return (
    <footer
      className={`${RobotoFont.className} bg-bgmain border-t-2 border-[#C80101]`}
    >
      <div className='flex flex-col justify-between md:flex-row border-b-2 border-[#C80101]'>
        <div className='p-4 flex flex-col'>
          <h1 className='font-bold uppercase'>Menu</h1>
          <Link href={'/idea-strony'} className='text-xs pl-3 p-1 w-fit'>
            Idea strony
          </Link>
          <p className='text-xs pl-3 p-1 w-fit'>Najnowsze Artykuły</p>
          <p className='text-xs pl-3 p-1 w-fit'>Popularne Artykuły</p>
          <p className='text-xs pl-3 p-1 w-fit'>Wszystkie Kategorie</p>
        </div>
        <div className='p-4 flex flex-col'>
          <h1 className='font-bold uppercase'>Social Media</h1>
          <Link
            href={'https://patronite.pl/ksaweryknotz'}
            target='_blank'
            className='text-xs pl-3 p-1 w-fit'
          >
            Patronite
          </Link>
          <p className='text-xs pl-3 p-1 w-fit'>Youtube</p>
          <p className='text-xs pl-3 p-1 w-fit'>Facebook</p>
          <p className='text-xs pl-3 p-1 w-fit'>Instagram</p>
        </div>
        <div className='p-4 flex flex-col'>
          <h1 className='font-bold uppercase'>Twórczość K. Knotz’a</h1>
          <Link
            href={'https://szansaspotkania.pl'}
            target='_blank'
            className='text-xs pl-3 p-1 w-fit'
          >
            SzansaSpotkania.pl
          </Link>
          <Link
            href={'https://ksaweryknotz.pl'}
            target='_blank'
            className='text-xs pl-3 p-1 w-fit'
          >
            KsaweryKnotz.pl
          </Link>
          <Link
            href={'https://komuniamalzenstw.pl'}
            target='_blank'
            className='text-xs pl-3 p-1 w-fit'
          >
            KomuniaMalzenstw.pl
          </Link>
          <Link
            href={'https://mlodemalzenstwa.pl'}
            target='_blank'
            className='text-xs pl-3 p-1 w-fit'
          >
            MlodeMalzenstwa.pl
          </Link>
          <p className='text-xs pl-3 p-1 w-fit'>Instagram</p>
        </div>
      </div>
      <div className='text-slate-500 flex flex-col'>
        <p className='text-xs pl-3 p-1'>
          Copyright &copy; 2023 Zakon Braci Kapucynów
        </p>
        <Link
          href={'https://etiudavintage.com'}
          target='_blank'
          className='text-xs pl-3 p-1 w-fit'
        >
          Designed by Mikołaj Sikora
        </Link>
        <Link
          href={'https://bladywebdev.pl'}
          target='_blank'
          className='text-xs pl-3 p-1 w-fit'
        >
          Developed by Franciszek Sikora
        </Link>
      </div>
      <div className='flex justify-center items-center p-16 sm:p-8'>
        <Image src={'/BigLogo.png'} width={128} height={128} alt='biglogo' />
        <h1
          className={`${lexendPeta.className} text-3xl text-center font-bold text-[#c80101]`}
        >
          Knotz.Link
        </h1>
      </div>
    </footer>
  )
}
