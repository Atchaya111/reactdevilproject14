import "./App.css";
import Card from "./card";

function App() {
  return (
    <div>
      <h1>Welcome back!</h1>

      <div className="card-container">
        <Card student={{ name: "Atchaya", department: "IT", year: "3rd year" }} />

        <Card student={{ name: "Indhuja", department: "CSE", year: "3rd year" }} />

        <Card student={{ name: "Nandhini", department: "AIDS", year: "3rd year" }} />
      </div>
    </div>
  );
}

export default App;
