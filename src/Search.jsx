
// import { useState } from "react";



// const Search = () => {
//     const SERPER_API_KEY = "b3b6a249c81efac0e048112f1d93a66fe2234f36"; 
//     const items = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby', 'Ember.js', 'Backbone.js', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Material-UI', 'Ant Design', 'Chakra UI', 'Bulma', 'Foundation', 'Semantic UI', 'UIKit', 'Spectre.css'];
//     const [searchQ, setSearchQ ] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [searchH, setSearchH] = useState({})
//     const [results, setResults] = useState([])
//     const [error, setError] = useState('');
//     const filteredItems = items.filter(item => item.toLowerCase().includes(searchQ.toLowerCase()));

    
//     const handleSearch = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//         setError('');

//         const myHeaders = new Headers();
//         myHeaders.append("X-API-KEY", SERPER_API_KEY);
//         myHeaders.append("content-type", "application/json");

//         const raw = JSON.stringify({
//             "q": searchQ
//         });

//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: raw,
//             redirect: "follow"
//         };

//         try {
//             const response = await fetch("/api-search", requestOptions);
//             const data = await response.json();
//             console.log(response)
//             console.log(data);
//             setResults(data.organic)
//         } catch (error) {
//             console.error("Error fetching search results:", error);
//             setError("An error occurred while fetching search results.Check your internet connection and try again.");
//         } finally {
//             setLoading(false);
//             setSearchQ('');
//         }  localStorage.setItem('History', JSON.stringify(searchH)) 

//     }


//     const displayHistory = () => {
//         const history = JSON.parse(localStorage.getItem('History')) || {};
//         return Object.values(history);
//     }

    


    
//     return <div className=" flex flex-col bg-orange-100 min-h-screen w-full items-center justify-center ">
//         <div>Search History</div>
//         <div className="text-5xl text-orange-500 pt-10 font-bold">FOOGLE</div>
//         <form onSubmit={(e) => { 
//             if (searchQ.trim()) {
//                 handleSearch(e);
//             }
//         }}
//         className="flex items-center flex-col sm:flex-row">
//             <div className="bg-orange-200 rounded-lg w-64 p-2 flex items-center m-4 border border-orange-300 ">
//                 <i className="  icon-[heroicons--magnifying-glass] text-orange-500 text-xl ml-2"></i>
//                 <input value={searchQ} onChange={(e) => {setSearchQ(e.target.value)}} 
//                 className=" ml-4 border-none focus:outline-none "type="text" placeholder="Search..." />
//             </div>
//             <button className=" bg-orange-400 h-8 w-18 rounded-md text-white font-bold hover:bg-orange-500 hover:cursor-pointer " 
//             type='submit' onClick={() => setSearchH(searchQ)}  >{loading ? '. . .' : 'Search'}</button>
//         </form>
        
//         <div>
//             {searchQ.length > 0 && (
//                 filteredItems.length > 0 
//                 ? filteredItems.map((item) => (
//                     <div 
//                     key={item} 
//                     className="text-orange-500 hover:bg-orange-300 cursor-pointer text-center" 
//                     onClick={() => setSearchQ(item)}> {item} </div>
//                      )) 
//                      : <div className="text-orange-500 text-center">No Suggestions Found</div> 
//                      )}
//              <div className="w-full px-12 mt-4 flex flex-wrap justify-center">
//                 {results.map((item, index) => (
//                     <a key={index} href={item.link} target="_blank" className=" m-6 rounded-lg px-4 py-2 border border-orange-400 w-70 h-auto hover:bg-orange-300 justify-around flex flex-col items-center">
//                         <h3 className="mt-4 text-orange-500 font-bold text-center mb-2">{item.title}</h3>
//                         <a href={item.link} target="_blank" className="mt-4 text-orange-500">{item.snippet}</a>
//                     </a>
//                 ) )}
//              </div>
            
//             <div className="mt-4 text-red-500 font-bold text-xl">{error}</div>
//         </div>
//     </div>
// };





// export default Search;













import { useState, useEffect } from "react";

const Search = () => {
    const SERPER_API_KEY = "b3b6a249c81efac0e048112f1d93a66fe2234f36"; 
    const items = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby', 'Ember.js', 'Backbone.js', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Material-UI', 'Ant Design', 'Chakra UI', 'Bulma', 'Foundation', 'Semantic UI', 'UIKit', 'Spectre.css'];
    
    const [searchQ, setSearchQ] = useState('');
    const [loading, setLoading] = useState(false);
    
    // Initialize searchH from localStorage
    const [searchH, setSearchH] = useState(() => {
        const saved = localStorage.getItem('History');
        return saved ? JSON.parse(saved) : {};
    });
    
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchQ.toLowerCase()));

    // Automatically update localStorage when searchH changes
    useEffect(() => {
        localStorage.setItem('History', JSON.stringify(searchH));
    }, [searchH]);

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        // Update searchH object with the current search query
        setSearchH(prev => ({
            ...prev,
            [searchQ]: searchQ
        }));

        const myHeaders = new Headers();
        myHeaders.append("X-API-KEY", SERPER_API_KEY);
        myHeaders.append("content-type", "application/json");

        const raw = JSON.stringify({
            "q": searchQ
        });

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

    const displayHistory = () => {
        return Object.values(searchH);
    };

    return (
        <div className=" relative flex flex-col bg-orange-100 min-h-screen w-full items-center justify-center">
            <div className=" absolute top-0 right-0 mt-4 mr-4 flex flex-col gap-2  text-orange-700 bg-orange-200 p-2 rounded-md font-bold">Search History {displayHistory().map((historyItem, index) => (
            <div 
                key={index} 
                onClick={() => setSearchQ(historyItem)}
                className=" font-medium bg-orange-200 text-orange-700 px-4 py-2 rounded-lg text-center cursor-pointer hover:bg-orange-300 w-full"
            >
                {historyItem}
            </div>
        ))}</div>
            <div className="text-5xl text-orange-500 pt-10 font-bold">FOOGLE</div>
            <form onSubmit={(e) => { 
                if (searchQ.trim()) {
                    handleSearch(e);
                }
            }}
            className="flex items-center flex-col sm:flex-row">
                <div className="bg-orange-200 rounded-lg w-64 p-2 flex items-center m-4 border border-orange-300">
                    <i className="icon-[heroicons--magnifying-glass] text-orange-500 text-xl ml-2"></i>
                    <input 
                        value={searchQ} 
                        onChange={(e) => setSearchQ(e.target.value)} 
                        className="ml-4 border-none focus:outline-none" 
                        type="text" 
                        placeholder="Search..." 
                    />
                </div>
                <button 
                    className="bg-orange-400 h-8 w-18 rounded-md text-white font-bold hover:bg-orange-500 hover:cursor-pointer" 
                    type='submit' 
                    onClick={() => setSearchH(prev => ({ ...prev, [searchQ]: searchQ }))}
                >
                    {loading ? '. . .' : 'Search'}
                </button>
            </form>
            
            <div>
                {searchQ.length > 0 && (
                    filteredItems.length > 0 
                    ? filteredItems.map((item) => (
                        <div 
                            key={item} 
                            className="text-orange-500 hover:bg-orange-300 cursor-pointer text-center" 
                            onClick={() => setSearchQ(item)}
                        > 
                            {item} 
                        </div>
                    )) 
                    : <div className="text-orange-500 text-center">No Suggestions Found</div> 
                )}
                
                <div className="w-full px-12 mt-4 flex flex-wrap justify-center">
                    {results.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noreferrer" className="m-6 rounded-lg px-4 py-2 border border-orange-400 w-70 h-auto hover:bg-orange-300 justify-around flex flex-col items-center">
                            <h3 className="mt-4 text-orange-500 font-bold text-center mb-2">{item.title}</h3>
                            <span className="mt-4 text-orange-500">{item.snippet}</span>
                        </a>
                    ))}
                </div>
                
                <div className="mt-4 text-red-500 font-bold text-xl">{error}</div>
            </div>
        </div>
    );
};

export default Search;
