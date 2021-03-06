import React from 'react';
import { Link } from 'react-router-dom';

const CommentLogin = () => {
    return (
        <>
            <div className="flex flex-col items-center self-center justify-center flex-1 w-64 py-3 bg-black bg-opacity-50 my-7">
                <h4 className="flex-1">Log in to join the discussion.</h4>

                <Link className="flex-1" to="/login">
                    <button className="my-5 min-w-max" type="submit">
                        Log in
                    </button>
                </Link>
            </div>
        </>
    );
};

export default CommentLogin;
