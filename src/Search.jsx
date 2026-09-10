

import { useEffect } from "react";

import { useSearch } from "./SearchContext.jsx";

import { useNavigate } from "react-router-dom";

const Search = () => {

    const navigate = useNavigate()
   
    const { searchQ, setSearchQ, searchH, isOpen, setIsOpen, handleSearch, history, trending } = useSearch();
    const items = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby', 'Ember.js', 'Backbone.js', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Material-UI', 'Ant Design', 'Chakra UI', 'Bulma', 'Foundation', 'Semantic UI', 'UIKit', 'Spectre.css'];
    

    
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchQ.toLowerCase()));

    // Automatically update localStorage when searchH changes
    useEffect(() => {
        localStorage.setItem('History', JSON.stringify(searchH));
    }, [searchH]);


    

    return (
        <div className={`relative flex flex-col bg-orange-100 ${trending ? 'h-[400px]':'h-screen' }  w-full items-center justify-center`}>
            <div onClick={() => setIsOpen(!isOpen)} className=" cursor-pointer absolute top-0 right-0 mt-4 mr-4 flex flex-col gap-2  text-orange-700 bg-orange-300 px-2 pt-1 rounded-md font-bold items-center justify-center">Recent Searches 
            {history(navigate)}
            </div>
            <div className="text-5xl text-orange-500 pt-10 font-bold">FOOGLE</div>
            <form onSubmit={(e) => { 
                if (searchQ.trim()) {
                    handleSearch(e, navigate );
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
                    
                    className="bg-orange-400 h-8 w-18 rounded-md text-white font-bold hover:bg-orange-500 hover:cursor-pointer  flex items-center justify-center" 
                    type='submit' 
                >
                    Search
                </button>
            </form>

            <div>
                {searchQ.length > 0 && (
                    filteredItems.length > 0 
                    ? filteredItems.map((item) => (
                        <div 
                            key={item} 
                            className="text-orange-500 hover:bg-orange-300 cursor-pointer text-center" 
                            onClick={() => handleSearch(null, navigate, item)}
                        > 
                            {item} 
                        </div>
                    )) 
                    : <div className="text-orange-500 text-center">No Suggestions Found</div> 
                )}
                
                
                
            </div>
            
            
        </div>
    );
};

export default Search;
