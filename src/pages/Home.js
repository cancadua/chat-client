import './Home.css'
import {useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
    const [username, setUsername] = useState()

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    return (
        <div className='home-container'>
            <h1>Please chose your name</h1>
            <input onChange={handleChange}/>
            <Link to='/chat' state={{username}}>
                <button className='confirm-nickname'>
                    Submit
                </button>
            </Link>

        </div>
    )
}

export default Home;