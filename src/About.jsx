import Header from "./Header.jsx";

const About = () => {
    return <div>
        <Header/>
        <div className="flex flex-col bg-orange-100 text-orange-300 font-bold p-4">
            <div className="text-4xl text-orange-500 pt-10 font-bold text-center">About FOOGLE</div>
            <div className=" text-orange-500 pt-10 px-12">
                FOOGLE is a search engine that provides users with relevant and accurate search results.
            </div>
            <div className=" text-orange-500 pt-5 px-12">
                It is designed to be fast, efficient, and user-friendly, making it easy for users to find the information they need.
            </div>
            <div className=" text-orange-500 pt-5 px-12">
                FOOGLE is built using React and Tailwind CSS, and it uses a custom search algorithm to provide users with the best possible search results.
            </div>
            <div className=" text-orange-500 pt-5 px-12">
                FOOGLE is a project created by a developer who is passionate about creating a better search experience for users.
            </div>
            <div className=" text-orange-500 pt-10 px-12">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside text-left">
                    <li>Live Search</li>
                    <li>Search History</li>
                    <li>Trending Section</li>
                    <li>Recent Searches</li>
                </ul>
            </div>
            <div className=" text-orange-500 pt-10 px-12">
                <h2 className="text-2xl font-bold mb-4">Built With</h2>
                <ul className="list-disc list-inside text-left">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>React Router</li>
                    <li>Context API</li>
                </ul>
            </div>
            <div className=" text-orange-500 pt-10 px-12">
                <h2 className="text-2xl font-bold mb-4">Future Features</h2>
                <ul className="list-disc list-inside text-left">
                    <li>Advanced Filtering</li>
                    <li>Personalized Search</li>
                    <li>Image Search</li>
                    <li>Video Search</li>
                </ul>
            </div>
        </div>
    </div>;
}

export default About;