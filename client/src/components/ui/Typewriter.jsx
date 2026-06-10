import { useState, useEffect } from 'react'

/**
 * Typewriter effect that cycles through an array of strings.
 *
 * @param {object} props
 * @param {string[]} props.words - Array of strings to type/delete in sequence
 * @param {number} [props.typingSpeed] - ms per character while typing (default 80)
 * @param {number} [props.deletingSpeed] - ms per character while deleting (default 40)
 * @param {number} [props.pauseDuration] - ms to pause after a word is fully typed (default 1800)
 * @param {string} [props.className] - Additional classes for the text span
 */
const Typewriter = ({
  words = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className = '',
}) => {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex]
    let timeout

    if (!isDeleting && text === currentWord) {
      // Finished typing — pause, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && text === '') {
      // Finished deleting — move to next word
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      // Type or delete one character
      const nextText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1)

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`font-mono ${className}`}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle animate-blink" />
    </span>
  )
}

export default Typewriter