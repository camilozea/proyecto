import React from "react";
import Adopta from "./adopta";
import Colabora from "./colabora";

function Body() {
  return (
    
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          marginTop: "10vh",
        }}
      >
        <img
          src="./src/assets/img/dog.png"
          style={{
            position: "absolute",
            zIndex: "-1",
            width: "350px",
            height: "350px",
            marginTop: "20vh",
          }}
          alt="Dog photo"
        />
        <h1
          style={{
            zIndex: "1",
            fontSize: "100px",
            textAlign: "center",
            fontFamily: "Lilita One, serif",
            fontWeight: "400",
            color: "rgb(46,46,47)",
          }}
        >
          Adopt love, <br /> foster happiness
        </h1>
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "100%",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: "20%", marginRight: "10%" ,  }}>
            <div>
              <h4 style={{color:"rgb(156,97,240)",fontFamily: "Roboto, serif"}}> What We Do ?</h4>
            </div>
            <p style={{ margin: "3vh 0" , color:"rgb(85, 80, 73)",fontFamily: "Roboto, serif",fontSize:"20px"}}>
              Whith a Focus on Matching the rigth pet Whith the rigth family
              ,PetFoster makes it easy to adopt love and foster happiness
            </p>
            <div>
              <button style={{backgroundColor:"rgb(156,97,240)", color:"rgb(254,255,254)",border:"2px",width:"100px",height:"50px",borderRadius:"10px"}}> View Pets </button>
            </div>
          </div>
        </div>
      </div>
      <Adopta />
      <Colabora/> {/* Correctly rendered component */}
    </div>
  );
}
export default Body;
