import './BeerInfo.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { Beer } from '../../types/types'
import beerNotFound from '../../assets/images/beer_can_not_found.jpeg'


type BeerInfoProps = {
    beers: Beer[]
}

const BeerInfo = ({ beers }: BeerInfoProps) => {
    const { beerId } = useParams()
    const navigate = useNavigate()

    const beerResult = beers.find(beer => {
        if (beer.id === Number(beerId) ) {
            return beer
        }
    })

    const handleGoBack = () => {
        navigate(-1)
    }

    if(beerResult === undefined) return <p>Couldn't find a beer with that id</p>


    return (
        <article className='beer-info'>
            <button className='beer-info__button' onClick={handleGoBack}>Go Back</button>
            <div className='beer-info__image-container'>
                <img className='beer-info__image' src={beerResult.image_url ?? beerNotFound} alt={beerResult.name} />
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