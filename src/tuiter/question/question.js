import {useState} from "react";


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

const Question = () => {
    let A = {
        C: 'F',
        D: 'G'
    }
    let B = {
        D: 'H',
        E: 'I',
        ...A,
    }
    A = {
        ...B,D: 'J',
        E: 'K'
    }
    return(
        <>
            <h1>{A.C}</h1>
            <h2>{B.D}</h2>
            <h3>{A.E}</h3>
        </>
    )
}
const Jkl = () => {
    const [qwe, wer] = useState({ert: 2});
    return (
        <div>
            <button onClick={() => wer({...qwe, ert: qwe.ert + 1})}>
                Lvp
            </button>

            <h1>{qwe.ert}</h1>

            <button onClick={() => wer({...qwe, ert: qwe.ert - 2})}>
                Poi
            </button>
        </div>
    )
}

function Xyz() {
    const [qwe, wer] = useState([123, 234, 345, 456, 567])
    const ert= (rty) => {
        const tyu = qwe.filter(yui => yui != 345)
        wer(tyu)
    }
    return(
        <div>
            <ul>
                {qwe.map(uio => <li>{uio}</li>)}
            </ul>
            <button onClick={() => ert(qwe)}>BUTTON</button>
        </div>
    )
}

function Asd() {
    const [ewq, wer] = useState([321, 432, 543, 654, 765])
    const tre = (ytr, uyt) => {
        const poi = ewq.map(iuy => iuy === ytr ? uyt : iuy)
        wer(poi)
    }
    return(
        <div>
            <ul>
                {ewq.map(oiu => <li>{oiu}</li>)}
            </ul>
            <button onClick={() => tre(543, 999)}>BUTTON</button>
        </div>
    )
}
function Ewq({qwe = [2, 4, 6, 8], wer = useState(qwe)}) {
    const [asd, zxc] = useState(wer)
    const ewq = () => zxc([5, ...asd.slice(1)])
    return(
        <div>
            <h1>{asd}</h1>
            <button onClick={ewq}>BUTTON</button>
        </div>
    )
}
export default Xyz;

