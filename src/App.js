import "./App.css";
import Header from "./components/header";
import MortagePage from "./pages/mortage";
import Footer from "./components/footer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        {/* <AppRouter /> */}
        <MortagePage/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
