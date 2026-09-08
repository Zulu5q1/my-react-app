import { useSearch } from "./SearchContext.jsx";
import { useEffect, useRef } from "react";



const Trending = () => {

    
    const hasRunSearch = useRef(false);
    const { searchH, handleTrend, resultsT } = useSearch();

    useEffect(() => {
        if (hasRunSearch.current) return; // Prevents re-running on re-render
        hasRunSearch.current = true; // Mark as run

        if (searchH && searchH.length > 0 ) {
            searchH.forEach((item) => {
            handleTrend(item);
        });
        }
        
    }, [searchH, handleTrend]);

    return (
    <div>
        <h3>Trending Results</h3>
        <ul>
            {searchH && searchH.map((item, index) => {
                // 1. Get the group of search results for this specific item index
                const itemResultGroup = resultsT?.[index];
                
                // 2. Safely extract the very first search result from that group
                const firstResult = itemResultGroup?.[0];

                return (
                    <li key={index}>
                        {firstResult ? (<div>
                            <h3>{firstResult.title}</h3>
                            <a href={firstResult.link} target="_blank" rel="noreferrer">
                                {firstResult.snippet}
                            </a>
                        </div>
                            
                        ) : (
                            <span>No results found.</span>
                        )}
                    </li>
                );
            })}
        </ul>
    </div>
);

};

export default Trending;