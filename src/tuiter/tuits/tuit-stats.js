import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {unlikeTuit, likeTuit} from "./tuits-reducer";
import {useDispatch} from "react-redux";

import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch()
    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit))
    }

    const unlikeTuitHandler = (tuit) => {
        dispatch(unlikeTuit(tuit))
    }
    return(
            <div className= "row">
                <div className= "col" >
                    <FontAwesomeIcon icon= "comment" /> {post.replies}
                </div>

                {post.liked ?
                    <div className="col">
                        <FontAwesomeIcon onClick={() =>
                            dispatch(updateTuitThunk({
                                ...post,
                                liked: false,
                                likes: post.likes - 1}))} icon="heart"> </FontAwesomeIcon>
                        {post.likes}
                    </div>
                    :
                    <div className="col">
                        <FontAwesomeIcon onClick={() =>
                            dispatch(updateTuitThunk({
                                ...post,
                                liked: true,
                                likes: post.likes + 1}))} icon="heart" style={{color: "#e421dd",}}></FontAwesomeIcon>
                        {post.likes}
                    </div>
                }

                <div className= "col" >
                    <FontAwesomeIcon icon= "retweet" /> {post.retuits}
                </div>
                <div className= "col" >
                    <FontAwesomeIcon icon= "share" />
                </div>

            </div>



    );
};
export default TuitStats;
