import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Question from "./tuiter/question/question";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index ="/labs"
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                    <Route path = "/question"
                           element = {<Question/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;



