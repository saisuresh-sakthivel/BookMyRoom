import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hotel from "./Hotel";

function App() {
  useEffect(() => {
    document.title = `Hotel Manager`;
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/">
            <Route index element={<Home />} />
            <Route path="hotel" element={<Hotel />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
