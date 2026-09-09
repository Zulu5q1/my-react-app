import { useSearch } from "./SearchContext.jsx";
import { useEffect, useRef } from "react";



const Trending = () => {

    
    const hasRunSearch = useRef(false);
    const { searchH, handleTrend, resultsT, setTrending } = useSearch();

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
        setTrending(true),
        <div className="h-screen">
            {searchH && searchH.length > 0 && (
                <>
                    <h3 className="text-center font-bold text-orange-500 text-xl">Trending</h3>
                    <div className="w-full px-12 py-4 flex flex-wrap justify-center bg-orange-100 ">
                        {searchH.slice(0, 5).map((_,index) => {
                            const itemResultGroup = resultsT?.[index];
                            const firstResult = itemResultGroup?.[0];
                            

                            return (
                                <div key={index}>
                                    {firstResult ? (
                                        <div className="shadow-md m-6 rounded-lg px-4 py-2 border border-orange-400 w-70 h-70 hover:bg-orange-300 justify-around flex flex-col items-center">
                                            <h3 className="mt-4 text-orange-500 font-bold text-center mb-2">{firstResult.title}</h3>
                                            <a href={firstResult.link} target="_blank" rel="noreferrer" className="mt-4 text-orange-500">
                                                {firstResult.snippet}
                                            </a>
                                        </div>
                                    ) : (
                                        <span></span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </>
            ) }
        </div>
    );

};

export default Trending;