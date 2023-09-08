'use client'

import { useState, useEffect } from 'react'

type LongTextType = { longText?: string | null; maxLength: number }

const useTruncateText = (
  text: string,
  maxLength: number,
  removeURL: boolean = true
) => {
  const [truncatedText, setTruncatedText] = useState(text)

  // Funkcja sprawdzająca, czy tekst zawiera URL
  const containsURL = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return urlRegex.test(text)
  }

  useEffect(() => {
    let newText = text

    if (removeURL && containsURL(text)) {
      // Usuń URL z tekstu
      newText = text.replace(/(https?:\/\/[^\s]+)/g, '')
    }

    if (newText.length > maxLength) {
      setTruncatedText(newText.slice(0, maxLength) + '...')
    } else {
      setTruncatedText(newText)
    }
  }, [text, maxLength, removeURL])

  return truncatedText
}

// Przykład użycia:
export function PostDescription ({ longText, maxLength }: LongTextType) {
  const truncatedText = useTruncateText(longText || '', maxLength)

  return <>{truncatedText}</>
}
