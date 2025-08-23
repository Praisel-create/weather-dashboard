import React, { useEffect, useState } from 'react'

const SearchBar = ({onSubmit}) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (city.trim()) {
        onSubmit({ city: city.trim() });
        setCity(''); //CLear the input box after the submission
      }
    };

    const handleKeyDown = (e) => {
      if (e.key == 'Enter') {
        handleSubmit(e); //Reusing the submit logic
        }
      };

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            id='city'
            value={city}
            onChange={(e) => setCity(e.target.value)} 
            onKeyDown={handleKeyDown}
            placeholder='Search for Cities (e.g Lagos)'
            className='p-4 w-full bg-gray-500 border-none'
            />
    </form>
  );
};

export default SearchBar;