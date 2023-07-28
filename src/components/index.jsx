import React, {useState} from "react";
import './style.css';
import ToDoList from "./toDoList";


const Index = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }
    const listOfItem = (event) => {
        if(inputList != ''){
            setItems( (oldVal) => {
                return [...oldVal, inputList];
            });
            setInputList('');
        }
    }
    const deleteItem = (id) => {
        setItems( (oldVal) => {
            return oldVal.filter((arrElement, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <div className="mainDiv">
                <div className="centerDiv">
                    <h1>My Todo List</h1>

                    <input type="text" placeholder="Add a items" onChange={itemEvent} 
                    value={inputList}/>
                    <button onClick={listOfItem}> <i class="fa-solid fa-plus"></i> </button>

                    <ol>
                        {/* <li> {inputList} </li> */}
                        {items.map( (itemVal, index) => {
                           return < ToDoList 
                                text={itemVal}
                                key={index}
                                id={index}
                                onSelect={deleteItem}
                            />
                        })}
                    </ol>

                </div>
            </div>
        </>
    )

}

export default Index;