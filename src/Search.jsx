
import { useState } from "react";



const Search = () => {
    const SERPER_API_KEY = "b3b6a249c81efac0e048112f1d93a66fe2234f36"; 
    const items = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby', 'Ember.js', 'Backbone.js', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Material-UI', 'Ant Design', 'Chakra UI', 'Bulma', 'Foundation', 'Semantic UI', 'UIKit', 'Spectre.css'];
    const [searchQ, setSearchQ ] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([])
    const [error, setError] = useState('');
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchQ.toLowerCase()));

    
    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

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
            console.log(data);
            setResults(data.organic)
        } catch (error) {
            console.error("Error fetching search results:", error);
            setError("An error occurred while fetching search results.Check your internet connection and try again.");
        } finally {
            setLoading(false);
            setSearchQ('');
        }  

    }


    
    return <div className=" flex flex-col bg-orange-100 min-h-screen w-full items-center justify-center ">
        <div className="text-5xl text-orange-500 pt-10 font-bold">FOOGLE</div>
        <form onSubmit={(e) => { 
            if (searchQ.trim()) {
                handleSearch(e);
            }
        }}
        className="flex items-center flex-col sm:flex-row">
            <div className="bg-orange-200 rounded-lg w-64 p-2 flex items-center m-4 border border-orange-300 ">
                <i className="  icon-[heroicons--magnifying-glass] text-orange-500 text-xl ml-2"></i>
                <input value={searchQ} onChange={(e) => {setSearchQ(e.target.value)}} 
                className=" ml-4 border-none focus:outline-none "type="text" placeholder="Search..." />
            </div>
            <button className=" bg-orange-400 h-8 w-18 rounded-md text-white font-bold hover:bg-orange-500 hover:cursor-pointer " 
            type='submit'>{loading ? '. . .' : 'Search'}</button>
        </form>
        
        <div>
            {searchQ.length > 0 && (
                filteredItems.length > 0 
                ? filteredItems.map((item) => (
                    <div 
                    key={item} 
                    className="text-orange-500 hover:bg-orange-300 cursor-pointer" 
                    onClick={() => setSearchQ(item)}> {item} </div>
                     )) 
                     : <div className="text-orange-500">No Suggestions Found</div> 
                     )}
             <div className="w-full max-w-xl px-2 mt-4">
                {results.map((item, index) => (
                    <div key={index} className=" mb-6 rounded-lg p-2 border border-orange-400">
                        <h3 className="mt-4 text-orange-500 font-bold text-center mb-2">{item.title}</h3>
                        <a href={item.link} target="_blank" className="mt-4 text-orange-500">{item.snippet}</a>
                    </div>
                ) )}
             </div>
            
            <div className="mt-4 text-red-500 font-bold text-xl">{error}</div>
        </div>
    </div>
};





export default Search;