import Image from 'next/image'

import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import Slider from '@/components/Slider'
import PostsGrid from '@/components/PostsGrid'

export default async function Home () {
  const Images = await fetch(
    'https://cms.bladywebdev.pl/items/pcategories?sort=name',
    {
      cache: 'no-store'
    }
  ).then(res => res.json())

  // console.log(Images)
  return (
    <main className='flex flex-col w-full'>
      <div className='flex flex-col gap-4 w-full md:flex-row'>
        <div className='flex flex-col justify-center items-center gap-2 p-4 border-2 border-black rounded-xl bg-bgmain flex-1'>
          <Image
            src={'/BigLogo.png'}
            width={1000}
            height={1000}
            alt='Duże logo knotz.link'
          />
          <h1 className='text-3xl text-center font-bold text-[#c80101]'>
            Knotz.Link
          </h1>
          <p className='text-sm font-bold text-center'>
            Treści wyselekcjonowane przez Ojca Ksawerego Knotza
          </p>
        </div>
        <div className='flex flex-col gap-4 flex-1'>
          <div className='flex flex-col gap-2 p-4 border-2 border-black rounded-3xl bg-bgmain '>
            <Link
              href={'/categories'}
              className='bg-slate-50 border-2 px-4 py-2 text-center border-black rounded-full font-bold transition-all duration-100 hover:scale-105'
            >
              Wszystkie Kategorie
            </Link>
            <Link
              href={'/posts'}
              className='bg-slate-50 border-2 px-4 py-2 text-center border-black rounded-full font-bold transition-all duration-100 hover:scale-105'
            >
              Popularne Posty
            </Link>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center p-4 border-2 border-black rounded-3xl bg-bgmain flex-1'>
            <div className='flex flex-col justify-center items-center'>
              <span className='border-2 border-black bg-slate-50 w-fit px-1 rounded-full'>
                O autorze
              </span>
              <p className='text-xs sm:text-sm text-center p-4'>
                Nazywam się Ksawery Knotz, jestem zakonnikiem i kapłanem, dr
                teologii pastoralnej i duszpasterzem małżeństw. Od ponad 20 lat
                realizuję swoją misję wspierania małżeństw - głównie poprzez
                rekolekcje dla małżeństw.
              </p>
            </div>
            <Image
              src={'/kkAvatar.png'}
              width={260}
              height={260}
              alt='Avatar'
              className='max-h-[260px] max-w-[260px]'
            />
          </div>
          <div className='flex justify-between items-center border-2  border-black rounded-full bg-bgmain'>
            <h1 className='pl-4 font-bold text-base'>
              Przeczytaj więcej o autorze na: ksaweryknotz.pl
            </h1>
            <Link
              href='https://ksaweryknotz.pl'
              target='_blank'
              className='border-l-2 border-y-2 p-4 border-black bg-slate-50 rounded-full transition-all duration-100 hover:scale-105 hover:border-r-2 hover:bg-slate-200'
            >
              <MoveRight size={36} />
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center p-4 gap-4 bg-bgmain w-full mt-4 border-2 border-black rounded-3xl'>
        <p className='text-center font-semibold'>
          “Wiara i rozum są jak dwa skrzydła, na których duch ludzki unosi się
          ku kontemplacji prawdy.”
        </p>
        <p className='font-bold'>~Jan Paweł II</p>
      </div>
      <div className='w-full border-t-2 border-black rounded-full my-4'></div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1>Popularne Kategorie</h1>
        <Link
          href={'/categories'}
          className='uppercase text-xs px-1 border-2 border-black rounded-full text-slate-50 bg-red-700 transition-all duration-100 hover:scale-105'
        >
          Pokaż Wszystkie
        </Link>
      </div>
      <div className='w-full shadow-sm'>
        <Slider Images={Images} />
      </div>
      <div className='flex justify-between items-center border-2 mt-8  border-black rounded-full bg-bgmain'>
        <h1 className='pl-4 font-bold text-base'>ZOBACZ WSZYSTKIE KATEGORIE</h1>
        <Link
          href={'/categories'}
          className='border-l-2 border-y-2 p-4 border-black bg-slate-50 rounded-full transition-all duration-100 hover:scale-105 hover:border-r-2 hover:bg-slate-200'
        >
          <MoveRight size={36} />
        </Link>
      </div>
      <div className='w-full mt-4'>
        <PostsGrid />
      </div>
      <div className='w-full'>
        <div className='flex justify-between items-center border-2  border-black rounded-full bg-bgmain'>
          <h1 className='pl-4 font-bold text-base'>
            ZOBACZ WSZYSTKIE POPULARNE POSTY
          </h1>
          <Link
            href={'/posts'}
            className='border-l-2 border-y-2 p-4 border-black bg-slate-50 rounded-full transition-all duration-100 hover:scale-105 hover:border-r-2 hover:bg-slate-200 '
          >
            <MoveRight size={36} />
          </Link>
        </div>
      </div>
      <h1 className='font-bold text-center p-4 mt-4'>Warto zobaczyć także:</h1>
      <div className='flex flex-col flex-wrap lg:flex-nowrap w-full justify-center items-center gap-2 md:flex-row '>
        <Link
          href={'#'}
          className='flex flex-col items-center justify-between gap-4 p-4 bg-bgmain border-2 border-black rounded-3xl min-h-[250px] min-w-[250px]'
        >
          <span className='bg-slate-50 border-2 border-black rounded-full px-2 py-1 select-none'>
            Youtube
          </span>
          <Image
            src={'/youtube.png'}
            height={163}
            width={163}
            className='select-none'
            alt=''
          />
        </Link>
        <Link
          href={'#'}
          className='flex flex-col items-center justify-between gap-4 p-4 bg-bgmain border-2 border-black rounded-3xl min-h-[250px] min-w-[250px]'
        >
          <span className='bg-slate-50 border-2 border-black rounded-full px-2 py-1 select-none'>
            Instagram
          </span>
          <Image
            src={'/instagram.png'}
            height={163}
            width={163}
            className='select-none'
            alt=''
          />
        </Link>
        <Link
          href={'https://www.facebook.com/profile.php?id=100064857515721'}
          target='_blank'
          className='flex flex-col items-center justify-between gap-4 p-4 bg-bgmain border-2 border-black rounded-3xl min-h-[250px] min-w-[250px]'
        >
          <span className='bg-slate-50 border-2 border-black rounded-full px-2 py-1 select-none'>
            Facebook
          </span>
          <Image
            src={'/facebook.png'}
            height={163}
            width={163}
            className='select-none'
            alt=''
          />
        </Link>
        <Link
          href={'https://szansaspotkania.pl'}
          target='_blank'
          className='flex flex-col items-center justify-between gap-4 p-4 bg-bgmain border-2 border-black rounded-3xl min-h-[250px] min-w-[250px]'
        >
          <span className='bg-slate-50 border-2 text-center border-black rounded-full px-2 py-1 select-none'>
            Szansa Spotkania
          </span>
          <Image
            src={'/szansaspotkania.png'}
            height={163}
            className='select-none flex-1'
            width={163}
            alt=''
          />
        </Link>
        <Link
          href={'https://patronite.pl/ksaweryknotz'}
          target='_blank'
          className='flex flex-col items-center justify-between gap-4 p-4 bg-bgmain border-2 border-black rounded-3xl min-h-[250px] min-w-[250px]'
        >
          <span className='bg-slate-50 border-2 border-black rounded-full px-2 py-1 select-none'>
            Patronite
          </span>
          <Image
            src={'/patronite.png'}
            height={360}
            width={360}
            className='select-none md:max-w-[240px] max-w-[224px]'
            alt=''
          />
        </Link>
      </div>
    </main>
  )
}
