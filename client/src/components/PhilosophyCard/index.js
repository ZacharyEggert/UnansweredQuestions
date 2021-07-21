import React from 'react';
import { Link } from 'react-router-dom';

const PhilosophyCard = (props) => {
    const { philosophy } = props;

    return (

        <div>
            <Link to={`/philosophy/${philosophy.id}`}>
                <div className="relative w-[200px] h-[250px] bg-[#FFF] my-2 mx-6 shadow-sm">
                    <div className="absolute top-[10px] left-[10px] bottom-[60px] right-[10px] bg-[#222]">
                        <img
                            className="absolute top-0 left-0 object-cover w-full h-full"
                            src={`/philosophy-pics/${philosophy.img || 'plato.jpg'}`}
                            alt={`Hottest look of ${philosophy.name}`}
                        />
                    </div>
                    <div className="absolute left-[10px] right-[10px] bottom-[10px] text-center text-black">
                        <h2 className="capitalize m-0 p-0 font-semibold text-base text-[#777]">{philosophy.name}</h2>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default PhilosophyCard;