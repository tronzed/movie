import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router";

export default function PeopleList() {


    const [movieData, setMovieData] = useState();


    async function fetchData() {

        const url = "https://api.themoviedb.org/3/person/changes?page=1&api_key=fcd7358cd9dafe54958462992c4a9e97";

        const res = await fetch(url);

        const data = await res.json();

        setMovieData(data);

    }


    function random(){
        return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (

        <>            

           {console.log(movieData)} 

            <Header />


            <section style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1920/${movieData?.results[random()].backdrop_path})`}} className={`text-gray-600 body-font bg-red-50 bg-center relative after:absolute after:block after:content-['*'] after:w-full after:bg-gray-950 after:opacity-50 after:top-0 after:left-0 after:h-full`}>
                <div className="container mx-auto flex flex-col px-5 py-4 justify-center items-center z-10 relative">
                    <div className="w-full md:w-2/3 flex flex-col items-center text-center">
                        <div className="flex w-full justify-center items-end">
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                                <input
                                    placeholder="Search for a movie, tv show, person......"
                                    type="text"
                                    id="hero-field"
                                    name="hero-field"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>




            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-col text-center w-full mb-5">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">People</h1>
                    </div>

                    <div className="flex flex-wrap -m-4">

                        {
                            movieData?.results?.map((render, index) => (

                                    <div key={index} className="lg:w-1/6 md:w-1/2 p-4 w-full">
                                        <Link to={`single/${render.id}`}>
                                            <span className="block relative rounded overflow-hidden">
                                                <img
                                                    alt="ecommerce"
                                                    className="object-cover object-center w-full h-full block"
                                                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${render.poster_path}`}
                                                />
                                            </span>
                                            <div className="mt-4">
                                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                                    {render.title}
                                                </h2>
                                                <p className="mt-1">{render.release_date}</p>
                                            </div>
                                        </Link>
                                    </div>

                            ))


                        }





                    </div>
                </div>
            </section>





            <Footer />

        </>

    );
}