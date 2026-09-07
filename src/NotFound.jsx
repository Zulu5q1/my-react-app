import Header from "./Header";


const NotFound = () => {
  return (
    <div>
      <div><Header/></div>
      <div className="flex flex-col items-center justify-center h-screen bg-orange-200 text-white font-bold">
        <h1 className="text-4xl mb-4">404</h1>
        <p className="text-lg">Page not found</p>
      </div>
    </div>
  )
};
     

export default NotFound;