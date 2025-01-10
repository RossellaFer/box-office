import { useState } from 'react';
import { useSrcStr } from '../lib/usePersistedState';

const SearchForm = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState('shows');
  const [searchStr, setSearchStr] = useSrcStr();

  const onSearchInputChange = e => {
    setSearchStr(e.target.value);
  };

  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onSearchInputChange} value={searchStr} />
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          onChange={onRadioChange}
          checked={searchOption === 'shows'}
        ></input>
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          onChange={onRadioChange}
          checked={searchOption === 'actors'}
        ></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
