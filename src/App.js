import { useEffect, useState } from "react";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import Title from "./components/Title";

export default function App() {
    const [items,setItems] = useState(()=>{
        const savedItems = localStorage.getItem("items");
        return savedItems ? JSON.parse(savedItems) : [];
    });
    
    useEffect(()=>{
        localStorage.setItem("items",JSON.stringify(items))
    },[items])

    const [description,setDescription] = useState("");
    function handleAddItem(item) {
        setItems((prevItems) => [...prevItems,item]);
    }
    function handleToggleItem (id) {
        setItems(items.map((item)=>(item.id===id ? {...item , selected:!item.selected} : item )))
    }
    function handleDeleteItem(id) {
        setItems(items.filter(item=> item.id!==id));
    }
    return (
        <main id="main">
            <div className="container">
                <div className="todo-list">
                    <Title/>
                    <Form description={description} setDescription={setDescription} onAddItem={handleAddItem}/>
                    <ListItems items={items} onToggleItem={handleToggleItem } onDeleteItem = {handleDeleteItem}/>
                </div>
            </div>
        </main>
    );
}