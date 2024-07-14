export function AddToFavorite () {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='currentColor' /> </svg>
  )
}
// ToDo: Encontar nuevo icono para cuando sea remover de favoritos

export function RemoveFromFavorites () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='size-5'>
      <path fill-rule='evenodd' d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z' clip-rule='evenodd' />
    </svg>

  )
}

export function LoginIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='size-5'>
      <path d='M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z' />
    </svg>

  )
}

export function LogedIcon () {
  return (
    <svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'>

      <circle cx='100' cy='100' r='100' fill='#cccccc' />

      <clipPath id='circle-clip'>
        <circle cx='100' cy='100' r='100' />
      </clipPath>
      <image href='https://imgs.search.brave.com/g5hNTnraecRs1wYTc4-MQ4oEpqdjJFQZeCr4QRBdY1E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLndh/bGxoZXJlLmNvbS9w/aG90b3MvMmEvZTYv/U291c291X05vX0Zy/aWVyZW5fRnJpZXJl/bi0yMzA3MDIwLmpw/ZyFzMg' x='0' y='0' width='200' height='200' clip-path='url(#circle-clip)' />
    </svg>
  )
}

export function EraseAllIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='size-5'>
      <path fill-rule='evenodd' d='M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z' clip-rule='evenodd' />
    </svg>
  )
}
