import "./App.css";
import Box from "./assets/box";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState("Harry");
  const characterArray = [
    { name: "Harry" },
    { name: "George" },
    { name: "Hermione" },
    { name: "Percy" },
  ];

  for (let index = 0; index < characterArray.length; index++) {
    console.log(characterArray[index]);
  }

  // Fetch API
  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(data);
  };
  getImages();

  return (
    <div className="App">
      <img src="https://picsum.photos/300/300" alt="A random photo" />
      <br />

      <input onChange={(event) => setUser(event.target.value)} />
      {user && <Box name={user} />}
      {user == "Mark" ? <Box name={user} /> : <h1>Nothing typed in</h1>}
      {/* If value = this then display this, otherwise display this */}
      <Box name="Mark" />
      {characterArray.map((item, index) => {
        return (
          <div>
            <Box name={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default App;