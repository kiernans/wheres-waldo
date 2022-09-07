export const getCoordinatesFromImage = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;
  return { x, y };
};

const getCharacterFromLevels = (array, choiceName) =>
  array.filter((character) => character.name === choiceName)[0];

export const compareLevelCoordinatesWithChoice = (
  characters,
  choice,
  choiceName
) => {
  const character = getCharacterFromLevels(characters, choiceName);
  const { x: xAnswer, y: yAnswer } = character || { x: null, y: null };
  const { x: xChoice, y: yChoice } = choice || { x: null, y: null };
  const { name } = character || "";

  if (
    Math.abs(xAnswer - xChoice) < 30 &&
    Math.abs(yAnswer - yChoice) < 30 &&
    choiceName === name
  )
    return true;

  return false;
};

export const removeCharacterFromLevels = (array, choiceName) =>
  array.filter((character) => character.name !== choiceName);

export const showDropdown = (coordinates) => {
  const { x: xPos, y: yPos } = coordinates;
  const dropdown = document.querySelector(".dropdown");
  if (xPos) dropdown.style.visibility = "visible";
  dropdown.style.left = `${xPos + 25}px`;
  dropdown.style.top = `${yPos + 40}px`;
};
