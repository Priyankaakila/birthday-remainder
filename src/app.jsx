import {useState} from "react";
import data from "./data";
import List from "./components/list";
const App = ()=>{
    const [people, setPeople] = useState(data);

    const clearAll = ()=> {
        setPeople([]);
    }
    return (
        <main className="flex items-center justify-center h-screen  py-4 px-6 bg-gray-50 lg:px-4 ">
            <section className="container flex flex-col justify-center items-center w-1/2 md:w-2/5 lg:w-1/4 shadow-lg rounded-xl leading-normal p-6 bg-white">
            <h1 className="text-2xl font-semibold mb-2 text-green-400 drop-shadow-md lg:text-3xl text-center">Birthday Remainder</h1>
            <h3 className="text-lg font-semibold mb-2 text-green-300 lg:text-2xl ">{people.length} Birthdays Today</h3>

            <List people={people} />

            <button className=" w-full py-1 px-3 rounded-md shadow-md bg-green-400 hover:bg-white hover:text-green-400  font-semibold text-white lg:text-xl lg:py-2" onClick={()=>{clearAll()}}>Clear All</button>
            </section>
        </main>
    )
    
}

export default App;