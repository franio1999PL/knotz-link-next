'use client'
import { useEffect, useState } from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PrivacyPolicyConsent () {
  const [showConsent, setShowConsent] = useState(true)

  useEffect(() => {
    setShowConsent(hasCookie('CookieConsent'))
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie('CookieConsent', 'true', {})
  }

  if (showConsent) {
    return null
  }

  return (
    <div className='fixed inset-0 bg-slate-700 bg-opacity-70'>
      <div className='fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-bgmain'>
        <Link href={'/privacy-policy'} className='text-dark text-base mr-16'>
          Ta strona używa plików cookies aby usprawnić działanie witryny aby
          zapoznać się z polityką cookies kliknij w ten tekst.
        </Link>
        {/* <button
          className='bg-black py-2 px-8 rounded text-white'
          onClick={() => acceptCookie()}
        >
          Akceptuje
        </button> */}
        <Button
          //   className='bg-black text-slate-50 hover:bg-black hover:text-slate-50'
          variant='default'
          onClick={() => acceptCookie()}
        >
          Akceptuje
        </Button>
      </div>
    </div>
  )
}
