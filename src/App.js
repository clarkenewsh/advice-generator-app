import './App.css';
import { useState, useEffect } from 'react';
import Advice from './components/Advice';

// TASK LIST:
//   - Create repo
//   - Initialise project with Create React App
//   - Set up Neltify Hosting & deploy
//   - Clean up React boilerplate
//   - Review design & style guide - break down the problem
//   - Import provided assets in to the project
//   - Create core symantic html markup & components based on the required designs
//   - Import React useState & useEffect to handle advice slip fetch requests
//   - Set up fetch request with error handling, connect to advice slip api and test output
//   - Implement markup for required react component - Advice.js
//   - Create universal styles for content & core layout including media queries for (mobile / desktop)
//   - Apply styles to main app & then components


function App() {

  
  const [advice, setAdvice] = useState([]);
  const [isError, setIsError] = useState({
    error: false,
    message: ''
  });

  // Async API fetch request for random advice slip
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      console.log(response);

      if(response.status !== 200) {
        console.log("error occurred");
        throw new Error("could not return random advice data");
      }

      //parse data in to JSON
      const data = await response.json();
      console.log(data.slip);
      setAdvice(data.slip);

    } catch (error) {
      console.log(error);
      setIsError({ error: true, message: error.message})
    }
  }

  // fetch advice data on page load
  useEffect(() => {
    fetchData();  
  }, []);

  if(isError.error) {
    return <div>{isError.message}</div>
  }


  return (
    <div>
      <main>
        <Advice advice={advice} fetchData={fetchData} />
      </main>
      <div className="attribution">
        Coded by <a href="https://github.com/clarkenewsh">Clarke Newsham</a>.
      </div>
    </div>
  );
}

export default App;
