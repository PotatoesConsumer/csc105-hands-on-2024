import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { text: newItem, bought: false }]);
      setNewItem("");
    }
  };

  const toggleBought = (index) => {
    const updatedItems = [...items];
    updatedItems[index].bought = !updatedItems[index].bought;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingItem(index);
    setEditedText(items[index].text);
  };

  const saveEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index].text = editedText;
    setItems(updatedItems);
    setEditingItem(null);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem} className="add-button">
          Add
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={item.bought ? "bought" : ""}
            onClick={() => toggleBought(index)}
          >
            {editingItem === index ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onBlur={() => saveEdit(index)}
                autoFocus
              />
            ) : (
              <span>{item.text}</span>
            )}
            <button onClick={(e) => { e.stopPropagation(); startEditing(index); }} className="edit-button">
              Edit
            </button>
            <button onClick={(e) => { e.stopPropagation(); removeItem(index); }} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
