


const Pokemon = ({name, legendary, habitat, captureRate, flavorText}) => {



    return(
        <article>
            <h2>{name}</h2>
            {legendary &&(
                <p>Pokemon legendary</p>

            )}

            <p>{habitat}</p>
            <p>{captureRate}</p>

            <p>{flavorText}</p>
        </article>
    )
}



export default Pokemon