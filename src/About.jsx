import Header from "./Header.jsx";

const About = () => {
    return <div>
        <Header/>
        <div className="flex flex-col items-center justify-center h-screen bg-orange-100 text-orange-300 font-bold">
            <h1 className="text-4xl mb-4">About Page</h1>
            <p className="text-lg">This is the about page of the application.</p>
        </div>
    </div>;
}

export default About;