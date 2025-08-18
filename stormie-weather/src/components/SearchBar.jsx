import React, { useEffect, useState } from 'react'

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

    useEffect(() => {
      if (city) {
        localStorage.setItem("city",city);
      }
    }, [city]);

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            id='city'
            onChange={(e) => setCity(e.target.value)} 
            placeholder='Search for Cities (e.g Lagos)'
            className='p-4 w-full bg-gray-500 bg-gray-500 click:border-none'
            />
    </form>
  )
}

export default SearchBar;