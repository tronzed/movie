import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useParams } from "react-router";

export default function Single() {


    const [movieData, setMovieData] = useState();

    const { id } = useParams();

    async function fetchData() {

        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=fcd7358cd9dafe54958462992c4a9e97&language=en-US&page=1&append_to_response=credits`;

        const res = await fetch(url);

        const data = await res.json();

        setMovieData(data);

    }


    useEffect(() => {
        fetchData();
    }, [])


    return (

        <>

            {console.log(movieData)}

            <Header />



            <section className="text-gray-600 body-font overflow-hidden bg-cover relative after:absolute after:block after:content-['*'] after:w-full after:bg-white after:opacity-90 after:top-0 after:left-0 after:h-full" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieData?.backdrop_path})` }}>
                <div className="container px-5 py-24 mx-auto relative z-10">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap items-start">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 object-cover object-center rounded"
                            src={`https://image.tmdb.org/t/p/w500/${movieData?.poster_path}.jpg`}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {movieData?.release_date}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                                {movieData?.original_title}
                            </h1>

                            <p className="leading-relaxed mb-4">
                                {movieData?.overview}
                            </p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Status</span>
                                <span className="ml-auto text-gray-900">{movieData?.status}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Vote</span>
                                <span className="ml-auto text-gray-900">{movieData?.vote_average}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Budget</span>
                                <span className="ml-auto text-gray-900">{movieData?.budget}</span>
                            </div>
                            <hr />
                            <h2 className="text-gray-900 text-3xl title-font font-medium mb-4 mt-2">
                                Cast
                            </h2>
                            <div className="flex flex-wrap -m-4">

                                {
                                    movieData?.credits?.cast?.slice(0, 5).map((render, index) => (

                                        <div key={index} className="p-1 md:w-1/5">
                                            <Link to={`/people/${render?.id}`}>

                                                <div className="h-full rounded-lg overflow-hidden">
                                                    <img
                                                        className="w-full object-cover object-center h-25"
                                                        src={`https://image.tmdb.org/t/p/w500/${render?.profile_path}.jpg`}
                                                        alt="blog"
                                                    />
                                                    <div className="p-1">
                                                        <h3 className="text-lg text-xs font-medium text-gray-900">
                                                            {render?.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))

                                }

                            </div>



                            <h2 className="text-gray-900 text-3xl title-font font-medium mb-4 mt-2">Crew</h2>
                            <div className="flex flex-wrap -m-4">

                                {
                                    movieData?.credits?.crew?.slice(0, 5).map((render, index) => (
                                        <>
                                            {render?.profile_path && (

                                                <div key={index} className="p-1 md:w-1/5">
                                                    <Link to={`/people/${render?.id}`}>
                                                        <div className="h-full rounded-lg overflow-hidden">
                                                            <img
                                                                className="w-full object-cover object-center h-25"
                                                                src={`https://image.tmdb.org/t/p/w500/${render?.profile_path}.jpg`}
                                                                alt="blog"
                                                            />
                                                            <div className="p-1">
                                                                <h3 className="text-lg text-xs font-medium text-gray-900">
                                                                    {render?.name}
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