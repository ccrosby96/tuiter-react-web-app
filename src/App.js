import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faComment,faRetweet,faHeart, faShare} from '@fortawesome/free-solid-svg-icons'


library.add(fab, faCheckSquare, faCoffee, faComment,faRetweet,faHeart, faShare)


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path ="/*"
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;



