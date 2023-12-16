import './BeerInfo.scss'
import { useParams } from 'react-router-dom'
import { Beer } from '../../types/types'

type BeerInfoProps = {
    beers: Beer[]
}

const BeerInfo = ({ beers }: BeerInfoProps) => {
    const { beerId } = useParams()

    const beerResult = beers.find(beer => {
        if (beer.id === Number(beerId) ) {
            return beer
        }
    })

    if(beerResult === undefined) return <p>Couldn't find a beer with that id</p>

    return (
        <article className='beer-info'>
            <div className='beer-info__image-container'>
                <img className='beer-info__image' src={beerResult.image_url ?? undefined} alt={beerResult.name} />
            </div>
            <div className='beer-info__content'>
                <h1 className='beer-info__title'>{beerResult.name}</h1>
                <p className='beer-info__tagline'>{beerResult.tagline}</p>
                <p className='beer-info__description'>{beerResult.description}</p>
                <ul className='beer-info__facts'>
                    <li>ABV: {beerResult.abv}%</li>
                    <li>PH: {beerResult.ph}</li>
                    <li>First Brewed: {beerResult.first_brewed}</li>
                </ul>
            </div>
            
        </article>
    )
}

export default BeerInfo