import {useState} from "react"
import "./Search.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Search = () => {
	const [searchedText, setSearchedText] = useState()

	const navigate = useNavigate();

	const searchPosts = () => {
		navigate("posts?search={}")
	}

	return (
		<form className='search'>
            <input name="search" onChange={event => setSearchedText(event.target.value)} placeholder="Search..."/>
            <Link type='submit' to={`posts?search=${searchedText}`} >Search</Link>
        </form>
	)
}

export default Search;