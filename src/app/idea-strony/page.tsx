import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { MoveRight } from 'lucide-react'

export default function page () {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <section className='bg-bgmain border-x-2 border-b-2 border-black rounded-2xl  pb-4'>
        <div className='border-y-2 border-black bg-slate-50 text-center w-full rounded-2xl'>
          O Knotz.link
        </div>
        <div className='p-4 text-sm md:text-left text-center'>
          <p className='p-2'>
            Witaj na stronie internetowej, którą stworzył Kapucyn Ksawery Knotz!
            Ta strona jest poświęcona zgłębianiu tematów dotyczących relacji,
            małżeństwa i seksualności, łącząc wartości chrześcijańskie i naukowe
            spojrzenie na te zagadnienia.
          </p>
          <p className='p-2'>
            Znajdziesz tu starannie wybrane treści, które pomogą Ci zrozumieć,
            jak pogodzić wiarę chrześcijańską z wyzwaniami współczesnych relacji
            i tematami związanymi z małżeństwem i seksualnością. Strona zawierać
            będzie artykuły, wykłady, rekolekcje i inne materiały, które są
            oparte na solidnej teologicznej podstawie i naukowych badaniach.
          </p>
          <p className='p-2'>
            Nie ważne, czy jesteś w związku, planujesz małżeństwo, czy jesteś
            zainteresowany zgłębianiem tych tematów z perspektywy wiary i nauki
            - ta strona będzie dla Ciebie cennym źródłem informacji i
            inspiracji. Będziesz miał okazję zanurzyć się w treściach, które
            pomogą Ci rozwijać zdrowe relacje, zrozumieć piękno małżeństwa i
            poznać wartościowe spojrzenie chrześcijańskie na seksualność.
          </p>
          <p className='p-2'>
            Strona internetowa Kapucyna Ksawerego Knotza jest przyjazna dla
            wszystkich, którzy szukają odpowiedzi i wskazówek dotyczących tych
            ważnych aspektów życia. Zapewnia różnorodność perspektyw, zawsze w
            zgodzie z zasadami chrześcijańskiej nauki, by pomóc Ci budować
            trwałe i pełne miłości relacje zgodnie z wartościami
            chrześcijańskimi i w świetle aktualnej wiedzy naukowej.
          </p>
          <p className='p-2'>
            Zapraszamy Cię do odkrywania cennych treści na tej stronie, które
            będą dla Ciebie inspirujące i pomocne w zgłębianiu tematów relacji,
            małżeństwa i seksualności w kontekście wiary chrześcijańskiej i
            wiedzy naukowej.
          </p>
        </div>
      </section>
      <section className='flex flex-col gap-4 items-center bg-bgmain border-2 border-black rounded-2xl p-4 text-sm'>
        <div className='border-2 border-black bg-slate-50 rounded-2xl w-fit px-2'>
          O autorze
        </div>
        <p className='p-4 text-center'>
          Nazywam się Ksawery Knotz, jestem zakonnikiem i kapłanem, dr teologii
          pastoralnej i duszpasterzem małżeństw. Od ponad 20 lat realizuję swoją
          misję wspierania małżeństw - głównie poprzez rekolekcje dla małżeństw.
        </p>
        <Image
          src={'/kkAvatar.png'}
          width={260}
          height={260}
          alt='Avatar'
          className='max-h-[260px] max-w-[260px]'
        />
        <h1 className='font-semibold text-base p-4'>Publikacje</h1>
        <p className='p-4 text-center'>
          Jako autor, Knotz napisał wiele książek dotyczących tematyki rodziny,
          wychowania dzieci, komunikacji partnerskiej i innych aspektów życia
          rodzinnego. Jego publikacje są cenione za praktyczne podejście, oparte
          na wartościach chrześcijańskich, oraz za korzystanie z naukowych
          podstaw i własnego doświadczenia jako kapłana i terapeuty. Książki
          Knotza są popularne wśród osób pragnących rozwijać zdrowe i harmonijne
          relacje w rodzinie.
        </p>
        <h1 className='font-semibold text-base p-4'>Rekolekcje</h1>
        <p className='p-4 text-center'>
          Ponadto, Ksawery Knotz prowadzi rekolekcje, konferencje i warsztaty,
          na których dzieli się swoją wiedzą i doświadczeniem. Jego prelekcje
          dotyczą różnorodnych tematów, takich jak komunikacja w małżeństwie,
          budowanie więzi rodzinnych, rola rodziców w wychowaniu, radzenie sobie
          z trudnościami i konfliktami w rodzinie. Knotz stara się dostarczać
          praktycznych narzędzi i wskazówek, które pomogą rodzinom rozwijać się
          i wzmacniać więzi.
        </p>
      </section>
      <div className='flex justify-between items-center border-2  border-black rounded-full bg-bgmain'>
        <h1 className='pl-4 font-bold text-base'>
          Przeczytaj więcej o autorze na: ksaweryknotz.pl
        </h1>
        <Link
          href='https://ksaweryknotz.pl'
          target='_blank'
          className='border-l-2 border-y-2 p-4 border-black bg-slate-50 rounded-full hover:opacity-75'
        >
          <MoveRight size={36} />
        </Link>
      </div>

      <Link
        href={'/posts'}
        className='border-2 border-black bg-bgmain font-semibold rounded-full py-2 px-4 hover:opacity-75'
      >
        Przejdź do artykułów
      </Link>
      <Link
        href={'/categories'}
        className='border-2 border-black bg-bgmain font-semibold rounded-full py-2 px-4 hover:opacity-75'
      >
        Przejdź do kategorii
      </Link>
    </div>
  )
}
