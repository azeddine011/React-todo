import Body from "./Body";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
          <h1 className="text-center mb-3 border rounded-3" style={{
            backgroundColor:"#AF7EEB",
            color:"#fff",
          }}>Todo App</h1>
            <Body/>
      </div>
    </div>
  );
}

export default App;
