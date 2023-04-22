import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitSummaryList = () => {

    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    console.log(dispatch)
    console.log(findTuitsThunk)
    // dispatch(findTuitsThunk())

    const fetchTuits = async () => {
        await         dispatch(findTuitsThunk())

    }

    useEffect(() => {
        // console.log("Hello")
        fetchTuits();
    }, [])


    //const postsArray = useSelector(state => state.tuits)
    return(
        <>
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }


            {
                tuits && tuits.map(post =>
                    <TuitItem
                        key={post._id}
                        post={post}
                    />
                )
            }
        </ul>
            <pre>
                {JSON.stringify(tuits, null, 2)}
            </pre>
</>
            );
};
export default TuitSummaryList;

