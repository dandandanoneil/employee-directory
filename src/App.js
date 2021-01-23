import './App.css';
import Header from "./components/Header";
import EmployeeData from "./components/EmployeeData";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <EmployeeData />
      </div>
      <Footer />
    </div>
  );
}

export default App;
