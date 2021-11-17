import React, {useState} from 'react';

function VinylForm() {
    const [vinyl, setVinyl] = useState({artistName: '', albumName: ''})

    const handleChange = (event) => {
        const value = event.target.value
        const name = (event.target.name)
        // console.log(value)
        // console.log(name)
        // make a copy of the current state
        const copy = Object.assign({}, vinyl)
        // console.log(copy)
        //update 1 of that copys properties
        copy[name] = value
        //save that copy as the new state
        setVinyl(copy)
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('submitted')
        fetch('http://localhost:4000/vinyls', { 
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vinyl)
        })
        .then(response => response.json())
        
        .then(data => 
            // console.log(data),
            setVinyl({artistName: '', albumName: ''}));
    };

  return (
      <div>
          <h1>VinylForm</h1>
          <form onSubmit={handleSubmit}>
              <input onChange={handleChange} type="text" name="artistName" value={vinyl.artistName} />
              <input onChange={handleChange} type="text" name="albumName" value={vinyl.albumName} />
              <button type="submit">Save</button>
          </form>
      </div>
  );
}

export default VinylForm;
