import React from 'react';

const OnePhilosopher = (props) => {
    const { philosopher } = props
    return (
        <div className="mobile-main opacity-80"
            style="background-image: url(/img/background-redflowers.jpg);">
            <div className="py-14"></div>
            <section className="profile-container">
                    <div className="profile-body">
                        <h1 id="philosopher-name" className="philosopher-name capitalize"><b>{{philosopher.name}}</b></h1>
                        <div className="video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/{{philosopher.videoUrl}}" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        </div>
                        <h2 className="about-philosopher">About</h2>
                        <div>
                            <img className="w-48 m-0 p-0" id="philosopher-img" src="/img/philosopher-profile-images/{{philosopher.img}}"
                        alt="Picture of {{philosopher.name}}"></img>
                        <div className="profile-content">
                            <p id="philosopher-about">
                                {{#if philosopher.about}}
                                {{philosopher.about}}
                                {{else}}
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente repellat minus obcaecati magnam labore et, quam deserunt non consequatur, quibusdam nulla voluptates molestiae in sit? Vel porro consectetur consequatur officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, suscipit velit. At, neque magnam? Repellendus minima optio sint tempore porro sequi itaque maiores modi suscipit, mollitia inventore nostrum officia accusamus!
                                {{/if}}
                            </p>
                            <div className="philosopher-more">
                                <Link to="{{philosopher.wikiLink}}">
                                    <button className="whitespace-nowrap w-auto px-4" id= "wiki-link"> Learn More</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default OnePhilosopher