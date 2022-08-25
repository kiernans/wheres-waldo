const useLevelHelper = () => {
  const answer = {
    id: 1,
    names: ["waldo", "test", "test2"],
    level: 1,
    x: 1411,
    y: 483,
  };

  const getCoordinatesFromImage = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    // console.log(x, y);
    return { x, y };
  };

  const compareAnswerCoordinatesWithChoice = (fAnswer, choice) => {
    const { x: xAnswer, y: yAnswer } = fAnswer;
    const { x: xChoice, y: yChoice } = choice;

    if (Math.abs(xAnswer - xChoice) < 30 && Math.abs(yAnswer - yChoice) < 30)
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
