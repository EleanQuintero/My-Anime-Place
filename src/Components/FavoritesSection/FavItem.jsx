export function FavItem ({ title, trailer, poster, episodies, score }) {
  return (
    <li>
      <h2 className='text-xs'>{title}</h2>
      <div className='img-container'>
        <img
          src={poster}
          alt={title}
        />
      </div>

      <div className='  text-xs info-container'>
        <p>Puntuacion: {score}</p>
        <p>NºEpisodios: {episodies}</p>
        <a target='_blank' href={trailer} rel='noreferrer'>
          <button className='hover:border-solid  hover:border-black hover:border-2 hover:text-sky-600 p-1.5 bg-sky-600 rounded-full  text-xs '>Ver trailer de: {title}</button>
        </a>
      </div>
    </li>
  )
}
