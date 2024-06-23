// Separamos logica del fetch y mapeo como servicio
// exportamos al custom hook

export const gettedAnimes = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=10`)
    const json = await response.json()

    const anime = json.data // devuelve el json como promesa resuelta

    return anime?.map(anime => ({ // mapeamos el json obtenido
      id: anime.mal_id,
      title: anime.title,
      episodies: anime.episodes,
      score: anime.score,
      poster: anime.images.webp.large_image_url,
      url: anime.url,
      trailer: anime.trailer.url
    }))
  } catch (e) {
    throw new Error('Error al realizar la solicitud, intente de nuevo')
  }
}
