import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../assests/Images/errorpage.svg";

const ErrorPage = () => {

    return (
        <div className="mx-auto mb-16">
            <div className="flex flex-col">
                <img className="w-[100%] md:w-[45%] max-h-full mx-auto" src={ErrorImage} alt="Error" />
            </div>
            <p className="text-center font-semibold text-2xl md:text-3xl">Looks like this page is missing or does not exist</p>

            <div className="mt-12">
                <button className="bg-red text-white text-center flex justify-center py-3 w-[40%] md:w-[25%] lg:w-[10%] mx-auto rounded-lg">
                    <Link to={'/'} className="font-bold">
                        Back Home
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;