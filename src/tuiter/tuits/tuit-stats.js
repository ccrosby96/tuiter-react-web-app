import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    return(
            <div className= "row">
                <div className= "col" >
                    <FontAwesomeIcon icon= "comment" /> {post.replies}
                </div>
                <div className= "col" >
                <FontAwesomeIcon icon= "heart" /> {post.likes}
                </div>
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
