import "./Character.scss";
import React, { useEffect, useState } from "react";
import { getCharacters } from "../../service/service";
import Card from "../../components/Card/Card";

const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((results) => setCharacters(results));
  }, []);
  return (
    <div className="character">
      {characters.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

export default Character;
