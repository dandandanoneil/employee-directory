import './App.css';
import Header from "./components/Header";
import EmployeeChart from "./components/EmployeeChart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <EmployeeChart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
