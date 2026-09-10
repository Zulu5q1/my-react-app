import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {

  // All states needed across both pages
  const [searchQ, setSearchQ] = useState('');
  const [searchH, setSearchH] = useState(() => {
        const saved = localStorage.getItem('History');
        return saved ? JSON.parse(saved) : [];
    });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [trending, setTrending] = useState(false);
  const [error, setError] = useState('');
  const [resultsT, setResultsT] = useState([]); // For trending results
  const [isOpen, setIsOpen] = useState(false); // For history dropdown
  const SERPER_API_KEY = "b3b6a249c81efac0e048112f1d93a66fe2234f36";
  
  const displayHistory = () => {
        return searchH
    };

  const handleSearch = async (event, navigate, term) => {
    if (event) event.preventDefault();

    const query = (term ?? searchQ).trim();
    if (!query) return;

    setSearchQ(query);
    setLoading(true);
    setError('');
    setIsOpen(false);

    setSearchH(prevItem => {
        const filterHistory = prevItem.filter((item) => item.toLowerCase() !== query.toLowerCase());
        return [query, ...filterHistory];
    });

    if (navigate) navigate('/results');

    const myHeaders = new Headers();
    myHeaders.append("X-API-KEY", SERPER_API_KEY);
    myHeaders.append("content-type", "application/json");
    const raw = JSON.stringify({ "q": query });

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
        setSearchQ('');
    }  
  };

  const history = (navigate) => {
    return <div>
      {isOpen && displayHistory().slice(0, 5).map((historyItem, index) => (
            <div 
                key={index} 
                onClick={() => handleSearch(null, navigate, historyItem)}
                className=" mb-2 font-medium bg-orange-200 text-orange-700 px-4 py-2 rounded-lg text-center cursor-pointer hover:bg-orange-300 w-full"
            >
                {historyItem}
            </div>
        ))}
    </div>
  }

  const fullHistory = (navigate) => {
    return <div className="flex flex-wrap gap-2 p-4">
      {displayHistory().map((fHistoryItem, index) => (
            <div 
                key={index} 
                onClick={() => handleSearch(null, navigate, fHistoryItem)}
                className=" font-medium bg-orange-200 text-orange-700 px-4 py-2 rounded-lg text-center cursor-pointer hover:bg-orange-300 "
            >
                {fHistoryItem}
            </div>
        ))}
    </div>
  }

  const handleTrend = async (item) => {


    

    
    const myHeaders = new Headers();
    myHeaders.append("X-API-KEY", SERPER_API_KEY);
    myHeaders.append("content-type", "application/json");

    const raw = JSON.stringify({ "q": item });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch("/api-search", requestOptions);
        const data = await response.json();
        setResultsT((prevResultsT) => [...prevResultsT, data.organic || []]);
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
      resultsT, setResultsT,
      loading, setLoading,
      error, setError,
      isOpen, setIsOpen,
      handleSearch,
      handleTrend,
      history,
      fullHistory,
      trending, setTrending,
    //   navigate, setNavigate
    }}>
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook to quickly access search data anywhere
// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);
