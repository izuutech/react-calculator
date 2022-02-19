import Clear from "./components/Clear";
import Numbers from "./components/Numbers";
import Operator from "./components/Operators";
import Screen from "./components/Screen";
import Side from "./components/Side";
import NumberContextProvider from "./contexts/NumberContext";


function App() {
  return (
    <div className="App">
      <NumberContextProvider>
      <Screen/>
      <div className="surround">
     <Numbers/>
     <Side/>
     </div>
     <Operator/>
     <Clear/>
     </NumberContextProvider>
    </div>
  );
}

export default App;
