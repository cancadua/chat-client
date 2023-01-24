import './Home.css'
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Welcome to open-blog</h1>
            <Link to='/posts' className='confirm'>
                    Go to blog
            </Link>
        </div>
    )
}

export default Home;