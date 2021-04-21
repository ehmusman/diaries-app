import AddBook from "./components/AddBook";
import Books from "./components/Books";

function App() {
  const bg = {
    height: "100vh",
    background: 'url("/books.jpeg") center center/cover no-repeat',
    position: "relative"
  }
  const fg = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  }

  return (

    <div style={bg}>
      <div style={fg}>
        <div className="row">
          <div className="col-12">
            <div className="h1 mt-2 text-light text-center">
              Diaries App
            </div>
          </div>
          <div className="col-12 col-md-4">
            <AddBook />
          </div>
          <div className="col-12 col-md-8">
            <Books />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
