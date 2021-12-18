import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import CommentCard from '../../components/CommentCard';
import CommentLogin from '../../components/CommentLogin';
import BlogCommentInput from '../../components/BlogCommentInput';
import SuggestionCard from '../../components/SuggestionCard';
import { getOneBlog, getBlogComment } from '../../util/API';
import { useParams } from 'react-router-dom';

const OneBlog = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const { isLoggedIn } = globalState;
    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    // console.log(id);

    useEffect(() => {
        getOneBlog(id).then((response) => {
            // console.log(response);
            setBlog(response);
        });

        getBlogComment(id).then((response) => {
            // console.log(response?.data);
            setComments(response?.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="min-h-full text-white bg-fixed bg-cover bg-branches-3 bg-fade">
            <main className="flex flex-col justify-center w-screen min-h-screen pt-20 bg-opacity-80">
                <div className="flex flex-col self-center w-11/12 p-0 my-12 bg-black bg-opacity-60 md:w-9/12">
                    <div className="flex flex-col self-center w-10/12 pb-8 mt-4 mb-8 bg-black bg-opacity-50 md:w-8/12">
                        <h1 className="my-4 text-3xl text-center capitalize lg:my-6 sm:text-5xl lg:text-6xl">
                            {blog?.title}
                        </h1>
                        <h2 className="mx-4 text-xl italic text-center sm:text-2xl">
                            {'By: ' + blog?.userName}
                        </h2>
                    </div>

                    <p className="self-center text-xl w-11/12 px-8 py-8 mb-4 bg-[rgba(0,0,0,0.5)]  md:text-2xl md:w-10/12">
                        {blog?.content}
                    </p>

                    <h2 className="flex-1 mt-12 mb-2 text-2xl text-center">
                        Comments
                    </h2>

                    {comments?.length > 0 &&
                        comments?.map((comment) => {
                            return (
                                <CommentCard
                                    comment={comment}
                                    key={comment.id}
                                />
                            );
                        })}

                    {isLoggedIn ? (
                        <BlogCommentInput
                            blog={blog}
                            setComments={setComments}
                        />
                    ) : (
                        <CommentLogin />
                    )}
                </div>

                <SuggestionCard />
            </main>
        </div>
    );
};
export default OneBlog;
