import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        onSubmit({ city }).finally(() => {
            setLoading(false);
        });
    };

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            id='city'
            onChange={(e) => setCity(e.target.value)} 
            placeholder='Enter City (e.g Lagos)'
            />
    </form>
  )
}

export default SearchBar;