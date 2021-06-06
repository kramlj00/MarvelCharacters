const AddToFavorites = (character, color, setColor) => {
  if (color === "black") {
    setColor("yellow");

    let previousData = JSON.parse(localStorage.getItem("favorites"));
    if (previousData === null) {
      previousData = [];
    }

    // here we stringify everything that is in the local storage
    const stringified = JSON.stringify(previousData);

    // if stringified doesn't include character.id save that character in local storage
    console.log(!stringified.includes(character.id));
    if (!stringified.includes(character.id)) {
      /*console.log(character.id);*/
      previousData.push(character);
      localStorage.setItem("favorites", JSON.stringify(previousData));
    } else {
      alert("This character is already in favorites");
    }
  }
};

export default AddToFavorites;
