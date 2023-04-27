import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MortagePage from "../pages/mortage";
import MortgageCalculator from "../pages/mortageCalculator";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/mortgage-calculator" component={MortagePage} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
