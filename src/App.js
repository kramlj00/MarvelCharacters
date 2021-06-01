import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
      );
      console.log(result.data.data.results);
      setCharacters(result.data.data.results);
    };

    fetch();
  }, []);

  return <h1>Main</h1>;
}

export default App;
