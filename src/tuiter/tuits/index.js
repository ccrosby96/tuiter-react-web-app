import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitSummaryList = () => {
    console.log("Tuitsummarylist being called");

    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    console.log(dispatch);
    console.log(findTuitsThunk);
    dispatch(findTuitsThunk())

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    //const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(post =>
                    <TuitItem
                        key={post._id}
                        post={post}
                    />
                )
            }
        </ul>
    );
};
export default TuitSummaryList;

