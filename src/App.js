import "./styles.css";
import Main from "./Components/main/main";
import Quiz from "./Components/Quiz/Quiz";
import End from "./Components/End/End";
import { QuizContext } from "./Assets/Context";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(240);
  const [questions, setQuestions] = useState();
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0);
  return (
    <div className="App" id="app">
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          questions,
          setQuestions,
          counter,
          setCounter
        }}
      >
        {gameState === "main" && <Main />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
