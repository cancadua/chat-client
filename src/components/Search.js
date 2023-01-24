import {useState} from "react"
import "./Search.css"


const Search = () => {
	const [searchedText, setSearchedText] = useState()

	return (
		<form className='search-container'>
            <input name="search" placeholder="Search..."/>
            <button type='submit'>Search</button>
        </form>
	)
}

export default Search;