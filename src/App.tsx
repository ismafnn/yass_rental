import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, CalculatorPage } from "./views/index";
import { Footer } from "./components/index";
import GeneratePDF from "./components/Report/GeneratePDF";
import BigForm from "./components/calculator/BigForm";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/faq" component={FAQPage} /> */}
          <Route exact path="/calculator" component={CalculatorPage} />
          <Route exact path="/generate-report" component={GeneratePDF} />
     
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
