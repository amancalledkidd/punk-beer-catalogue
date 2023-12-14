import SideNavbar from "../SideNavbar/SideNavbar"
import { Beer } from "../../types/types"


type HomeProps = {
    beers: Beer[]
}

const Home = ({ beer }: HomeProps) => {
    return (
    <div>
        <h1>Punk Beer</h1>
        <SideNavbar beer={beer} />
    </div>
    )
}

export default Home
