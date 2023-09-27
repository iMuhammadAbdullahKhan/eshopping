

function App() {
  return (
    <div className="container-fluid">
      <div className="row" style={{border : "3px solid black", height : "30vh"}}>
        <h1>BCS 5C - first row</h1>
      </div>
      <div className="row" style={{border : "3px solid red", height : "70vh"}}>
        <div className="col-md-4" style={{border : "3px solid green", height : "100%"}}></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
