const useLevelHelper = () => {
  const answer = {
    id: 1,
    level: 1,
    characters: [
      { id: 1, name: "waldo", x: 1411, y: 483 },
      { id: 2, name: "test", x: 0, y: 0 },
      { id: 3, name: "test2", x: 1, y: 1 },
    ],
  };

  const getCoordinatesFromImage = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    // console.log(x, y);
    return { x, y };
  };

  const getCharacterFromAnswer = (array, choiceName) =>
    array.filter((character) => character.name === choiceName)[0];

  const compareAnswerCoordinatesWithChoice = (choice, choiceName) => {
    const character = getCharacterFromAnswer(answer.characters, choiceName);
    const { x: xAnswer, y: yAnswer } = character;
    const { x: xChoice, y: yChoice } = choice;

    if (
      Math.abs(xAnswer - xChoice) < 30 &&
      Math.abs(yAnswer - yChoice) < 30 &&
      choiceName === character.name
    )
      return true;

    return false;
  };

  return {
    getCoordinatesFromImage,
    answer,
    compareAnswerCoordinatesWithChoice,
  };
};

export default useLevelHelper;
