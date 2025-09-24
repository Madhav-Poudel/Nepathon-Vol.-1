import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-gray-300">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-yellow-500">404</h1>
        <p className="mb-4 text-xl">Oops! Page not found</p>
        <a href="/" className="text-yellow-500 underline hover:text-yellow-400">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
