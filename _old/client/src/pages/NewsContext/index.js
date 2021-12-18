import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const[data, setData] = useState();
    const apiKey = "7ffc95833bda4c648b3687eaf6a8e567";

    useEffect(() => {
        axios
        .get(`https://newsapi.org/v2/top-headlines?philosophy&country=us&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data()))
        .catch((error) => console.log(error));
    }, []);

    return(
        <div className="min-h-full pb-4 bg-fixed bg-cover bg-butterfly-3 bg-fade">
            <NewsContextProvider value={{ data }}>
            {props.children}
             </NewsContextProvider>
        </div>
    );    
};



export default NewsContext;