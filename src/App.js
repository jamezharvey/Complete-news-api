import AllArticles from "./components/all-articles";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AllArticles />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
