import ToasterPage from "./components/Toaster";
import ButtonPage from "./pages/ButtonPage";
import './scss/index.scss'

function App() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline mb-10 text-center">Eagle Style Guide</h1>
    <ButtonPage />
    {/* <h2>Toaster variations</h2>
    <ToasterPage /> */}
    </div>
  );
}

export default App;
