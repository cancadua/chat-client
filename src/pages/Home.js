import './Home.css'
import {useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
    const [name, setName] = useState()

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleButton = () => {
        console.log(name)

    }

    return (
        <div className='home-container'>
            <h1>Please chose your name</h1>
            <input onChange={handleChange}/>
            <Link to='/chat'>
                Submit
            </Link>

        </div>
    )
}

export default Home;