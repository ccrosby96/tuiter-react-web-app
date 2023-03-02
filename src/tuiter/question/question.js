import {useState} from "react";

const Question = () => {
    const [i, j] = useState(false)
    return(
        <div>
            { i && <h1 onClick={() => j(false)}>K</h1>}
            { !i && <h1 onClick={() => j(true) }>L</h1>}
        </div>
    )
}

const GBAXF = () => {
    const [xiv, setXiv] = useState({gcliad: 5})
    return (
        <div>
            <button
                onClick={
                    () => setXiv({
                        ...xiv,
                        gcliad: xiv.gcliad + 5
                    })}>Fup
            </button>
            <h1>{xiv.gcliad}</h1>
            <button
                onClick={
                    () => setXiv({
                        ...xiv,
                        gcliad: xiv.gcliad - 4
                    })}>
                Qdewaesf
            </button>
        </div>
    )
}
export default GBAXF;