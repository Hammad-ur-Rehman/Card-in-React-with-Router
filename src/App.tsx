import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardList from "./Component/cardList";
import CardDetail from "./Component/cardDetail";

function App() {
console.log("App component loaded");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
