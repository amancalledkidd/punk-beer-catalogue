import { Beer } from "../../types/types"
import CardList from "../CardList/CardList"

type MainProps = {
    beers: Beer[]
}

const Main = ({ beers }: MainProps) => {

    return (
        <div className="main-section">
            <CardList beers={beers} />
        </div>
    )
}

export default Main