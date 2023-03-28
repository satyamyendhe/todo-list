import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App=() =>{

    const [inputList , setInputList] = useState("");
    const [Items , setItems] = useState([]);

    const itemEvent = (event)=> {
        setInputList(event.target.value)
    };

    const listOfItems = () =>{
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        })
        setInputList('')
    };

    const deleteItems =(id)=>{
        console.log("Item Deleted");

        setItems((oldItems =>{
            return oldItems.filter((arrElem , index)=>{
                return index !== id;
            });
        }))
    }

    return(
        <div className="main_div">            
            <div className="center_div">
                <br />
                <h1>To-Do List</h1>
                <br />
                <input type="text" placeholder="Add Item" onChange={itemEvent} value={inputList}/>
                <button onClick={listOfItems}>Add</button>
            
                <ol>
                    {Items.map( 
                        (itemval , index)=> {
                           return( <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems}/> )
                        }
                     )}
                </ol>

            </div>
        </div>
    );
};

export default App;