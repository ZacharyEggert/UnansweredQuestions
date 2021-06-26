import React from 'react';
import { Link } from 'react-router-dom';

const PhilosopherCard = (props) => {
    const { philosopher } = props;

    return (
        <div>
            <Link to={`/philosopher/${philosopher.id}`}>
                <div className="philosophercard card">
                    <div className="imgBx">
                        <img
                            src={`/img/philosopher-profile-images/${philosopher.img}`}
                            alt={`${philosopher.name}'s best look`}
                        />
                    </div>
                    <div className="details">
                        <h2 className="capitalize">{philosopher.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PhilosopherCard;
