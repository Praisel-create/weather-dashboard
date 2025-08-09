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
            placeholder='Search for Cities (e.g Lagos)'
            className='bg-gray-500'
            />
    </form>
  )
}

export default SearchBar;