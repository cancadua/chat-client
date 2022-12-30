import './Home.css'
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Go to chat</h1>
            <Link to='/posts'>
                <a className='confirm'>
                    Confirm
                </a>
            </Link>
        </div>
    )
}

export default Home;