import React from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import { useParams } from 'react-router-dom';
import { getPhilosophy } from '../../util/API';
import { useEffect } from 'react';

const OnePhilosophy = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const { id } = useParams();

    useEffect(() => {
        getPhilosophy(id).then(({ data }) => {
            console.log({ data });
            dispatch({
                type: 'ONE_PHILOSOPHY_RECEIVE',
                data,
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const { philosophies } = globalState;
    const philosophy = philosophies[id];
    console.log(philosophies);

    return (
        <div className="min-h-full text-white bg-fixed bg-no-repeat bg-cover bg-redflowers bg-fade">
            <div className="py-14"></div>
            <section className="h-full max-w-[100vw] overflow-x-hidden">
                <div className="box-border mx-auto mb-12 bg-black sm:w-9/12 bg-opacity-60">
                    <h1 className="pt-8 mb-8 text-5xl font-bold text-center capitalize sm:text-6xl">
                        {philosophy?.name}
                    </h1>
                    <div className="w-full">
                        <iframe
                            title="Youtube Video"
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${philosophy?.videoUrl}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="max-w-full mx-auto"
                            allowFullScreen
                        />
                    </div>
                    <h2 className="mt-4 text-2xl text-center sm:text-4xl decoration-binding">
                        About
                    </h2>
                    <div>
                        <img
                            className="w-48 mx-auto mt-4 sm:w-72"
                            src={`/philosophy-pics/${
                                philosophy?.img || 'plato.jpg'
                            }`}
                            alt={`${philosophy?.name} - broken link`}
                        />
                        <div className="px-4 mx-auto mt-4 max-w-prose">
                            <p>
                                {philosophy?.about ? (
                                    <p>{philosophy?.about}</p>
                                ) : (
                                    <span>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sapiente repellat
                                        minus obcaecati magnam labore et, quam
                                        deserunt non consequatur, quibusdam
                                        nulla voluptates molestiae in sit? Vel
                                        porro consectetur consequatur officiis!
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Hic, suscipit velit.
                                        At, neque magnam? Repellendus minima
                                        optio sint tempore porro sequi itaque
                                        maiores modi suscipit, mollitia
                                        inventore nostrum officia accusamus!
                                    </span>
                                )}
                            </p>
                            <div className="flex flex-row-reverse pb-4">
                                <a
                                    href={
                                        philosophy?.wikiLink ||
                                        'https://wikipedia.com/'
                                    }
                                >
                                    <button className="py-1 button">
                                        {' '}
                                        Learn More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OnePhilosophy;
