import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBox = (props) => {
  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row" style={{ flexWrap: 'nowrap' }}>
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">
          <BiSearch size="2rem" padding="0" color="#000" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
