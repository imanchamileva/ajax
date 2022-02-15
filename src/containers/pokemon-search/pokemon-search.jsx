import { useState } from "react"
import axios from "axios"


const PokemonSearch = () => {

    const [isLoading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [pokemonData, setPokemonData] = useState(null)


    // methode qui lance la requete ajax
    const handleSearchPokemon= () => {

        //remise à zero du state
        setLoading(true)
        setErrorMsg('')
        setPokemonData(null)

        // envoi de la requete ajax
        axios.get('https://pokeapi.co/api/v2/pokemon-species/725')

            .then(response =>{

                const data = {                   
                     name: response.data.name,                     
                     legendary: response.data.is_legendary,                     
                     habitat:response.data.habitat?.name,                     
                     captureRate:response.data.capture_rate,                     
                     flavorText :'TODO'               
                    };
            })

            .catch(error=>{})

            .finally(()=> {

            })
    }


    return(

        <main>
            <h1>Demo Ajax- Recherche de pokemon</h1>
            <button onClick={handleSearchPokemon}> Rechercher un pokemon</button>

        </main>
    )
}


export default PokemonSearch