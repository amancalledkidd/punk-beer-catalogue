import SideNavbar from "../SideNavbar/SideNavbar"
import Main from "../Main/Main"
import { Beer } from "../../types/types"


type HomeProps = {
    beers: Beer[]
}

const Home = ({ beers }: HomeProps) => {
    return (
    <div>
        <h1>Punk Beer</h1>
        <SideNavbar beer={beers} />
        <Main beers={beers} />
    </div>
    )
}

export default Home
