import debounce from "just-debounce-it";
import { FormButton } from "./FormButton";
import { useCallback, useContext } from "react";
import { AnimeContext } from "../../contexts/animes";
import { useAnimes } from "../../hooks/useAnimes";
import { useSearch } from "../../hooks/useSearch";

export function AnimeInput () {
    const { error } = useSearch('')
    const { getAnimes } = useAnimes()
    const { search, newSearch } = useContext(AnimeContext)

    const debouncedGetAnimes = useCallback(
        debounce(search => {
          getAnimes({ search })
        }, 300),
        []
      )

      const handleChange = (event) => {
        const updateSearch = event.target.value
        newSearch(updateSearch)
        debouncedGetAnimes(updateSearch)
      }

    const handleSumbit = (event) => {
        event.preventDefault()
        getAnimes({ search })
      }
    return(
        <form className=" text-black space-x-5 " onSubmit={handleSumbit}>
        <input
          className={`p-2 border-4 rounded-3xl focus:outline-none font-medium ${error ? "border-red-700" : "border-sky-700"}`}
          value={search}
          onChange={handleChange}
          placeholder='Naruto, kimetsu no yaiba, dragon ball'
          type='text'
        />
         <FormButton />
         {error && <p className='error-message'>{error}</p>}
      </form>
      
    )
}