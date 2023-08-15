import "./App.css";
import data from "./assets/movies_rnexgr.json";

function App() {
  return (
    <div className="font">
      <img
        className="logo"
        src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
      />
      {data.map((item) => {
        return (
          <div className="container" key={item.category}>
            <h2>{item.category}</h2>
            <div className="movies">
              {item.images.map((imgSrc, index) => {
                return <img className="element" key={index} src={imgSrc} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
