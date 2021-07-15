import React, { useEffect } from 'react';
import { getNews } from '../../util/API';

const News = () => {

    useEffect(() => {
        getNews().then(response => {
            console.log(response.data);
        })
    })

    return (
            <main className="min-h-full text-white bg-fixed bg-cover bg-blue-petals bg-opacity-80">
                <div className="flex flex-col items-center px-6 py-4 bg-black bg-opacity-60 sm:mt-24 sm:w-9/12">
                    <h3 className="mb-2 text-3xl text-center">
                        News
                    </h3>
                </div>
            </main>
    );
};

export default News;