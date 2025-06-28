// if the data come from data dumb then we will search this way
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = data.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };
 
// for cache result we can use bject or map  
// if come from API

// then simple just a simple api call with debounc and for suggestion close can use onBlur and on focus on the input box