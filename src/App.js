import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  // fetch character list and make API request
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
      );
      // console.log(result.data.data.results);
      setCharacters(result.data.data.results);
    };

    fetch();
  }, []);

  return <Characters characters={characters} />;
}

export default App;
