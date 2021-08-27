import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { apiGet } from '../misc/config';
import ActorGrid from '../Components/actor/ActorGrid';
import ShowGrid from '../Components/show/ShowGrid';

const Home = () => {
  const [results, setResults] = useState(null); 
  const [input, setInput] = useState('');
  const [searchOption, setSearchOption] = useState('shows');
  const isShowSearch = searchOption === 'shows';

  const onSearch = () => {

    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        setResults(result);
      });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOption( ev.target.value )
  }

  const renderResults = () => {
    if(results && results.length === 0){
        return <div>No result</div>
    }
    if(results && results.length>0)
    {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    };
    return null;
  }

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder = "Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      
    <div>
      <label htmlFor = "show">
        Shows
        <input id = "show" type = "radio" value = "shows" onChange = {onRadioChange} checked = {isShowSearch} />
      </label>

      <label htmlFor = "actor-search">
        Actors
        <input id = "actor-search" type = "radio" value = "people" onChange={onRadioChange} checked = {!isShowSearch} />
      </label>

    </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
