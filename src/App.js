import React, { useState, useEffect } from "react";
import "./App.css";
import VinylForm from "./VinylForm";

function App() {
  const [vinylList, setVinylList] = useState([]);
  // const [showVinlyList, setShowVinylList] = useState(false)
  const [newState, setNewState] = useState([]);

  const makeAPICall = () => {
    fetch("http://localhost:4000/vinyls",{ 
      method: 'GET'
      })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setVinylList(json);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  const handleVinylClick = () => {
    if (!vinylList.albumName) {
      setNewState(
        vinylList.vinyls.map((vinyl) => {
          return (
          <div key={vinyl._id}>
          <p>{vinyl.albumName}</p>
          <p>{vinyl.artistName}</p>
            </div>
            )
        })
      );
    }
  };

  // const renderVinlyList = () => {
  //   console.log('render vinly')
  //   if (showVinlyList) {
  //     return vinylList?.vinyls?.map((vinyl) => {
  //     return(
  //      <p key={vinyl._id} onClick={() => updateVinly}>{vinyl.albumName}</p>
  //      )
  //    })
  //   }
  // }

  return (
    <div className="App">
      <VinylForm />

      {/* <button onClick={() => setShowVinylList(true)}>See Vinyls</button> */}

      <button onClick={handleVinylClick}>See Vinyls</button>

      {/* {renderVinlyList()} */}
      
      {newState}
    </div>
  );
}

export default App;
