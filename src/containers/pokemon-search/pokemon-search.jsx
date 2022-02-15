import { useState } from "react"
import axios from "axios"
import LoadingScreen from "../../components/loading-screen/loading-screen"


const PokemonSearch = () => {

    const [isLoading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [pokemonData, setPokemonData] = useState(null)


    // methode qui lance la requete ajax
    const handleSearchPokemon= () => {

        //remise à zero du state
        setLoading(true)
        setErrorMessage('')
        setPokemonData(null)

        // envoi de la requete ajax
        axios.get('https://pokeapi.co/api/v2/pokemon-species/725')

            .then(response =>{

                setPokemonData ({                   
                     name: response.data.name,                     
                     legendary: response.data.is_legendary,                     
                     habitat:response.data.habitat?.name,                     
                     captureRate:response.data.capture_rate,                     
                     flavorText :'TODO'               
                    });


            })

            .catch(error=>{
                setErrorMessage(error.message);
            })

            .finally(()=> {
                setLoading(false);
            })
    }


    return(

        <main>
            <h1>Demo Ajax- Recherche de pokemon</h1>
            <button onClick={handleSearchPokemon}> Rechercher un pokemon</button>
            {isLoading ? (
                <LoadingScreen />
            ) : errorMessage? (
                <h2>{errorMessage}</h2>
                ) : pokemonData !== null && (
                    <Pokemon {...pokemonData} />
            )}

        </main>
    )
}


export default PokemonSearch