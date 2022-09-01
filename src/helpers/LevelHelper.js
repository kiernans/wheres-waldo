export const getCoordinatesFromImage = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;
  return { x, y };
};

const getCharacterFromLevels = (array, choiceName) =>
  array.filter((character) => character.name === choiceName)[0];

export const compareAnswerCoordinatesWithChoice = (
  levels,
  choice,
  choiceName
) => {
  const character = getCharacterFromLevels(levels.characters, choiceName);
  const { x: xAnswer, y: yAnswer } = character || { x: null, y: null };
  const { x: xChoice, y: yChoice } = choice;

  if (
    Math.abs(xAnswer - xChoice) < 30 &&
    Math.abs(yAnswer - yChoice) < 30 &&
    choiceName === character.name
  )
    return true;

  return false;
};
