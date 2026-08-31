import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  // All states needed across both pages
  const [searchQ, setSearchQ] = useState('');
  const [searchH, setSearchH] = useState(() => {
        const saved = localStorage.getItem('History');
        return saved ? JSON.parse(saved) : {};
    });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false); // For history dropdown
  const SERPER_API_KEY = "b3b6a249c81efac0e048112f1d93a66fe2234f36"; 

  const handleSearch = async (event, navigate) => {
    if (event) event.preventDefault();
    if (!searchQ.trim()) return;

    setLoading(true);
    setError('');
    setIsOpen(false);

    // Update search history object
    setSearchH(prev => ({
        ...prev,
        [searchQ]: searchQ
    }));

    // INSTANT REDIRECT: Go to results page immediately so user sees the loading state
    if (navigate) navigate('/results');

    
    const myHeaders = new Headers();
    myHeaders.append("X-API-KEY", SERPER_API_KEY);
    myHeaders.append("content-type", "application/json");

    const raw = JSON.stringify({ "q": searchQ });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch("/api-search", requestOptions);
        const data = await response.json();
        setResults(data.organic || []);
    } catch (error) {
        console.error("Error fetching search results:", error);
        setError("An error occurred while fetching search results. Check your internet connection and try again.");
    } finally {
        setLoading(false);
        setSearchQ(''); // Clear input after search completes
    }  
  };

  return (
    <SearchContext.Provider value={{
      searchQ, setSearchQ,
      searchH, setSearchH,
      results, setResults,
      loading, setLoading,
      error, setError,
      isOpen, setIsOpen,
      handleSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook to quickly access search data anywhere
export const useSearch = () => useContext(SearchContext);
