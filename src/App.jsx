import { useState } from 'react';
import './App.css';

function BackgroundChanger() { 
    const [bgColor, setBgColor] = useState("white");
  
    const changeColor = (color) => {
      setBgColor(color);
    };
 
    return (
      <>
        <div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px"}}>
        <div style={{ display: "flex", justifyContent: "center",marginTop:"180px "}}>
          <h1>Background Color Changer</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center", padding: "10px",marginTop:"350px "}}>
          <button
            onClick={() => changeColor("#e74c3c")}
            style={{ margin: "10px", padding: "10px", backgroundColor: "#e74c3c", color: "black",borderRadius:"5px",border:"none" }}
          >
            Red
          </button>
          <button
            onClick={() => changeColor("#5dade2")}
            style={{ margin: "10px", padding: "10px", backgroundColor: "#5dade2 ", color: "black",borderRadius:"5px",border:"none" }}
          >
            
            Blue
          </button>
          <button
            onClick={() => changeColor("#99a3a4")}
            style={{ margin: "10px", padding: "10px", backgroundColor: "#99a3a4", color: "black",borderRadius:"5px",border:"none" }}
          >
            grey
          </button>
          <button
            onClick={() => changeColor("#bb8fce ")}
            style={{ margin: "10px", padding: "10px", backgroundColor: "#bb8fce ", color: "black",borderRadius:"5px" ,border:"none"}}
          >
            Lavender          </button>
          <button
            onClick={() => changeColor("#52be80")}
            style={{ margin: "10px", padding: "10px", backgroundColor: "#52be80", color: "black",borderRadius:"5px" ,border:"none"}}
          >
           green
          </button>
          </div>
        </div>
      </>
    );
}

export default BackgroundChanger;
