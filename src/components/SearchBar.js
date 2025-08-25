import React, { useState } from "react";
import Searchpng from '../assets/search.png';

function SearchBar ({onSearch}){
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()){
            onSearch(city);
            setCity('')
        }
    };

    return(
        <form className="search" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="City Name"
            spellCheck='false'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button>
                <img src={Searchpng} alt="Search"/>
            </button>
        </form>
    );
}

export default SearchBar;