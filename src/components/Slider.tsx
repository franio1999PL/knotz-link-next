'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

import { useWindowSize } from 'usehooks-ts'
import { cn } from '@/lib/utils'
import { SearchRedirect } from '@/actions/SearchRedirect'

// const Images = [
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   },
//   {
//     url: 'https://cms.bladywebdev.pl/assets/7d95b36d-e642-4f43-8bdb-947afeb12a73/psychologia.png',
//     name: 'Psychologia'
//   }
// ]
type Props = {
  Images: Data
}

type Data = {
  data: Image[] | []
}

type Image = {
  id: string
  status: 'draft' | 'published' | 'archived'
  url: string
  image: string
  name: string
}

export default function Slider ({ Images }: Props) {
  const containerRef = useRef(null)
  const { width } = useWindowSize()

  const WidthAllImage = 195 * Images.data.length
  const WidthMarginImage = 16 * Images.data.length

  // Oblicz, ile pikseli musisz przesunąć, aby suwak zatrzymał się na krańcach
  const maxLeft = 0
  const minLeft = -WidthAllImage + WidthMarginImage

  // console.log(Images.data[0].image)

  return (
    <>
      <div className='overflow-hidden mt-4'>
        <h1 className='p-4 text-sm font-bold uppercase'>
          *Kliknij 2 razy aby wybrać kategorie
        </h1>
        <motion.div className='cursor-grab'>
          <motion.div
            ref={containerRef}
            className='flex mx-12 -z-10 max-w-7xl'
            drag='x'
            dragConstraints={{
              right: maxLeft, // Zatrzymaj suwak po prawej stronie
              left: minLeft // Zatrzymaj suwak po lewej stronie
            }} // Ograniczenie przeciągania do kontenera
            dragElastic={false} // Wyłączenie automatycznego powracania do pierwotnej pozycji
            dragMomentum={false} // Śledzenie przeciągania myszą
          >
            {Images.data.map(({ image, name, id, url, status }) => {
              return (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className='m-4 '
                >
                  <button
                    // onClick={() => SearchRedirect(image.name)}

                    onDoubleClick={() => SearchRedirect(url)}
                    //   className='block w-full h-full border border-black rounded-lg object-fit '
                    //   className='flex items-end w-[400px] h-[400px] text-xl font-bold text-white shadow-md cursor-pointer rounded-2xl justify-normal'
                    className={cn(
                      'block min-w-[195px] min-h-[197px] w-full h-full max-w-[195px] max-h-[197px] shadow-lg border-2 border-black rounded-3xl relative overflow-hidden'
                    )}
                    style={{
                      background: `url(https://cms.knotz.link/assets/${image}.jpg) no-repeat scroll center`,
                      backgroundSize: 'cover'
                    }}
                    // width='195'
                    // height='197'
                    // src={image.url}
                    // alt='Category Image'
                  >
                    <div className='mx-auto flex justify-center items-end w-full bottom-0 h-full font-bold break-words bg-opacity-20 hover:bg-opacity-10 rounded-3xl transition-opacity duration-150 ease-in absolute bg-slate-950 text-center'>
                      <h1 className='shadow-lg px-4 py-2 w-full h-full  max-h-[85px] min-h-[85px] text-slate-50 rounded-b-3xl bg-slate-950 bg-opacity-10'>
                        {name}
                      </h1>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
