import Buttons from "./components/Buttons/Buttons";
import DocumentUpload from "./components/DocumentUpload";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="app">
      <DocumentUpload />
      <Form />
      <Buttons />
    </div>
  );
};
export default App;
