const useLevelHelper = () => {
  const [answer, setAnswer] = useState([
    { name: "waldo", level: 1, x: 1411, y: 483 },
  ]);

  const getCoordinates = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    console.log(x, y);
    return { x, y };
  };

  const compareAnswerCoordinatesWithChoice = (fAnswer, choice) => {
    const xAnswer = fAnswer.x;
    const yAnswer = fAnswer.y;
    const xChoice = choice.x;
    const yChoice = choice.y;

    if (Math.abs(xAnswer - xChoice) < 30 && Math.abs(yAnswer - yChoice) < 30)
      return true;

    return false;
  };

  return {
    getCoordinates,
    answer,
    compareAnswerCoordinatesWithChoice,
  };
};

export default useLevelHelper;
