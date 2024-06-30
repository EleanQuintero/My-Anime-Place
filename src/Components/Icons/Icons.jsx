export function AddToFavorite () {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='currentColor' /> </svg>
  )
}
// ToDo: Encontar nuevo icono para cuando sea remover de favoritos

export function RemoveFromFavorites () {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='#e57373' />
      <path d='M12 2C9.79 2 7.6 2.99 6.22 4.76L12 12l5.78-7.24C16.4 2.99 14.21 2 12 2zm-4.88 4.37C6.16 5.49 6 4.25 6 3.5c0-.54.12-1.04.32-1.5C4.26 3.3 2 5.77 2 8.5c0 3.58 3.22 6.56 8.55 11.54L12 21.35l1.45-1.32C18.78 15.06 22 12.08 22 8.5c0-2.73-2.26-5.2-4.32-6.5.2.46.32.96.32 1.5 0 .75-.16 1.99-.88 2.87L12 12l-4.88-5.63z' fill='#e57373' />
    </svg>
  )
}

export function LoginIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M10 4v2h4V4h5v16h-5v-2h-4v2H5V4h5zm-1 2H6v12h3v-2h5v2h3V6h-3v2h-5V6z' />
      <path d='M10 9h4v6h-4z' />
    </svg>
  )
}

export function LogedIcon () {
  <svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'>

    <circle cx='100' cy='100' r='100' fill='#cccccc' />

    <clipPath id='circle-clip'>
      <circle cx='100' cy='100' r='100' />
    </clipPath>
    <image href='https://imgs.search.brave.com/g5hNTnraecRs1wYTc4-MQ4oEpqdjJFQZeCr4QRBdY1E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLndh/bGxoZXJlLmNvbS9w/aG90b3MvMmEvZTYv/U291c291X05vX0Zy/aWVyZW5fRnJpZXJl/bi0yMzA3MDIwLmpw/ZyFzMg' x='0' y='0' width='200' height='200' clip-path='url(#circle-clip)' />
  </svg>
}
