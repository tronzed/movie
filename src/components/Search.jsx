import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Search() {


    const [movieData, setMovieData] = useState();


    async function fetchData() {

        const url = "https://api.themoviedb.org/3/movie/popular?api_key=fcd7358cd9dafe54958462992c4a9e97&language=en-US&page=1";

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


           Search





            <Footer />

        </>

    );
}