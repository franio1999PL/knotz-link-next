import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Peta } from 'next/font/google'

import PageWrapper from '@/components/PageWrapper'
import HeaderMenu from '@/components/HeaderMenu'
import { Toaster } from '@/components/ui/toaster'

const lexendPeta = Lexend_Peta({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'KNOTZ.LINK » Wyselekcjonowane treści przez Ksawerego Knotza',
  description:
    'W sieci możemy spotkać tysiące artykułów na każdy temat. Wielu z nich nie warto czytać. Zanim znajdziemy coś wartościowego stracimy wiele czasu na ich przeglądanie. Nie wiemy często czy to co przykuło naszą uwagę ma rzeczywistą wartość. Z pomocą przychodzi selekcjoner treści, czyli ktoś kto: za was przeszuka sieć wyłowi z niej najciekawsze i najbardziej wartościowe informacje pozwoli wam oszczędzić czas udostępni wam to wszystko w jednym miejscu Selekcjoner jest równocześnie propagatorem dobrych autorów, którzy dzięki niemu: zyskują większy krąg czytelników otrzymują dodatkową platformę przekazu mają szansę przebić się przez mainstreamowe media.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pl'>
      <body className={`${lexendPeta.className} bg-slate-50`}>
        <HeaderMenu />
        <PageWrapper>{children}</PageWrapper>
        <Toaster />
      </body>
    </html>
  )
}
