import SideNavbar from "../SideNavbar/SideNavbar"
import Main from "../Main/Main"
import { Beer } from "../../types/types"
import './Home.scss'


type HomeProps = {
    beers: Beer[]
}

const Home = ({ beers }: HomeProps) => {
    return (
    <div className="home">
        <section className="home__side-navbar">
            <SideNavbar beer={beers} />
        </section>
        <section className="home__main">
            <Main beers={beers} />
        </section>
        
        
    </div>
    )
}

export default Home
