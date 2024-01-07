import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";
const InitalInputData = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(InitalInputData);

  const isDurationValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <div>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {!isDurationValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isDurationValid && <Results userInput={userInput} />}
    </div>
  );
}

export default App;
