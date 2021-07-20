import axios from 'axios';
import { response } from 'express';
import React, { useEffect, useState } from 'react';
import { getNews } from '../../util/API';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const[data, setData] = useState([]);
    const apiKey = "7ffc95833bda4c648b3687eaf6a8e567";

    useEffect(() => {
        axios
        .get('https://newsapi.org/v2/top-headlines?philosophy&country=us&apiKey'
        )
        .then((response) => setData(response.data()))
        .catch((error) => console.log(error));
    }, []);

    return(
        <NewsContext.Provider value={{ data }>
            {props.children}
        </NewsContext.Provider>
    );
};

// const News = () => {
    

//     // useEffect(() => {
//     //     getNews().then(response => {
//     //         console.log(response.data);
//     //     })
//     // })

//     return (
//             <main className="min-h-full text-white bg-fixed bg-cover bg-blue-petals bg-opacity-80">
//                 <div className="flex flex-col items-center px-6 py-4 bg-black bg-opacity-60 sm:mt-24 sm:w-9/12">
//                     <h3 className="mb-2 text-3xl text-center">
//                         News
//                     </h3>
//                     <form className= "searchNews" action="">
//                         <input className="inputNews" type="text"></input>
//                         <input className="submit"></input>
//                     </form>``
//                     <div>
//                         <ul className="news-list"></ul>
//                     </div>
//                 </div>
//             </main>
//     );
// };

// export default News;