import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Knotz.Link',
        short_name: 'Knotz.Link',
        description: 'W sieci możemy spotkać tysiące artykułów na każdy temat. Wielu z nich nie warto czytać. Zanim znajdziemy coś wartościowego stracimy wiele czasu na ich przeglądanie. Nie wiemy często czy to co przykuło naszą uwagę ma rzeczywistą wartość. Z pomocą przychodzi selekcjoner treści, czyli ktoś kto: za was przeszuka sieć wyłowi z niej najciekawsze i najbardziej wartościowe informacje pozwoli wam oszczędzić czas udostępni wam to wszystko w jednym miejscu Selekcjoner jest równocześnie propagatorem dobrych autorów, którzy dzięki niemu: zyskują większy krąg czytelników otrzymują dodatkową platformę przekazu mają szansę przebić się przez mainstreamowe media.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FDE0E0',
        theme_color: '#FDE0E0',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}