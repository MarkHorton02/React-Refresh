import "./App.css";
import { useState, useEffect } from "react";
import Register from "./assets/registerUser";
import Login from "./assets/login";
import ListUsers from "./assets/listUsers";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [imageArray, setImageArray] = useState([]);

  // FETCH API
  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setImageArray(data);
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="App">
      <Register/>

      <Login/>

      <ListUsers/>

      {/* <h1>List</h1>
      <button onClick={(event) => {
        setToggle(!toggle);
        console.log(toggle)
      }}>Press me</button>
      <br></br>
      {imageArray.map((item, index) => {
        return (
          <div>
            {toggle && (
              <div>
                <img src={item.download_url} width={"50%"}/>
                <h2>{item.author}</h2>
              </div>
            )}
          </div>
        );
      })} */}
    </div>
  );
}

export default App;