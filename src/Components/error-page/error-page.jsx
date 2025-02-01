import { useRouteError } from "react-router-dom";
import imag from "../../assets/images/Screenshot 2025-02-01 010622.png";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  text-white ">
           <div className="text-center justify-center items-center"> 
           <h1 className="text-8xl text-black font-medium">404</h1>
            <p className="text-1xl font-bold text-black mt-2">Page Not Found ⚠️</p>
            <p>we couldn't find the page you are looking for.</p>
            <p className="text-1xl font-bold text-black mb-[10px]">Error: <i>{error?.statusText || error?.message || "Unknown Error"}</i></p>
           </div>
            <a
                href="/"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
            >
                Go Back Home
            </a>
            <div>
                <img className="w-[500px] mt-[100px]" src={imag} alt="404" />
            </div>
        </div>
    );
}
