import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";
import "./assets/style/style.scss";
function App() {
  return (
    <div className="App">
      <MainLayout>
        <Register />
      </MainLayout>
    </div>
  );
}

export default App;
