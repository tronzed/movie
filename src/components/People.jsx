import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useParams } from "react-router";

export default function People() {


    const [movieData, setMovieData] = useState();
    const [movieListData, setMovieListData] = useState();

    const { perid } = useParams();

    async function fetchData() {
        const url = `https://api.themoviedb.org/3/person/${perid}?api_key=fcd7358cd9dafe54958462992c4a9e97`;
        const res = await fetch(url);
        const data = await res.json();
        setMovieData(data);
    }


    async function fetcMoviehData() {
        // const url = `https://api.themoviedb.org/3/person/${id}?api_key=fcd7358cd9dafe54958462992c4a9e97`;
        const url = `https://api.themoviedb.org/3/person/${perid}/movie_credits?api_key=fcd7358cd9dafe54958462992c4a9e97`;
        const res = await fetch(url);
        const data = await res.json();
        setMovieListData(data);
    }


    useEffect(() => {
        fetchData();
        fetcMoviehData();
    }, [])


    return (

        <>

            {console.log(movieListData)}

            <Header />

            <section className="text-gray-600 body-font overflow-hidden bg-cover relative after:absolute after:block after:content-['*'] after:w-full after:bg-white after:opacity-90 after:top-0 after:left-0 after:h-full" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieData?.backdrop_path})` }}>
                <div className="container px-5 py-24 mx-auto relative z-10">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap items-start">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 object-cover object-center rounded"
                            src={`https://image.tmdb.org/t/p/w500/${movieData?.profile_path}.jpg`}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {movieData?.release_date}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                                {movieData?.name}
                            </h1>

                            <p className="leading-relaxed mb-4">
                                {movieData?.biography}
                            </p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">birthday</span>
                                <span className="ml-auto text-gray-900">{movieData?.birthday}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">From</span>
                                <span className="ml-auto text-gray-900">{movieData?.place_of_birth}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">known for</span>
                                <span className="ml-auto text-gray-900">{movieData?.known_for_department}</span>
                            </div>
                            <hr />
                            <h2 className="text-gray-900 text-3xl title-font font-medium mb-4 mt-2">
                                Cast
                            </h2>
                            <div className="flex flex-wrap -m-4">

                                {
                                    movieListData?.cast?.map((render, index) => (
                                        <>
                                            {render?.poster_path && (

                                                <div key={index} className="p-1 md:w-1/5">
                                                    <Link to={`/single/${render.id}`}>
                                                        <div className="h-full rounded-lg overflow-hidden">
                                                            <img
                                                                className="w-full object-cover object-center h-25"
                                                                src={`https://image.tmdb.org/t/p/w500/${render?.poster_path}`}
                                                                alt="blog"
                                                            />
                                                            <div className="p-1">
                                                                <h3 className="text-lg text-xs font-medium text-gray-900">
                                                                    {render?.title}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                </div>

                                            )}
                                        </>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <Footer />

        </>

    );
}