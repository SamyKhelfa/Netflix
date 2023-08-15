import "./App.css";
import data from "./assets/movies_rnexgr.json";

function App() {
  return (
    <>
      <img
        className="logo"
        src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
      />
      {/* <h1>Emissions TV</h1>
      <h1>Séries françaises</h1>
      <h1>Comédies</h1>
      <h1>Nouveautés</h1>
      <h1>Documentaires</h1>
      <h1>Séries US</h1> */}
      <div>
        {
          data.map((item, index) => {
            return (
              <div>
                <h2>{item.category}</h2>
                <img src={item.images[index]} alt="" />
              </div>
            );
          })
          /* {data.map((item, index) =>
          item.images.map((imgSrc, i) => (
            <img key={`${index}-${i}`} src={imgSrc} alt="" />
          ))
        )} */
        }
      </div>
    </>
  );
}

export default App;
