import "./App.css";
import DisclaimerBanner from "./components/DisclaimerBanner";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <DisclaimerBanner />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;

// import './App.css'
// import Home from './pages/Home/Home'

// function App() {

//   return (
//     <>
//       <div className='App'>
//         <Home/>
//       </div>

//     </>
//   )
// }

// export default App
