import useLogin from "../../hooks/useLogin"
import { Favorites } from "../Favorites"

export function ShowFavSection() {
    const { isloged } = useLogin()
    return(
        <section className="" >
        {
          isloged
            ? <Favorites />
            : <h1>Debes estar logueado para ver favoritos</h1>
        }
      </section>
    )
}