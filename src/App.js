import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

//------------------- my components ----------------
import styles from "./App.module.css";
import LineGraph from "./components/LineGraph";
import AutoComplete from "./components/AutoComplete";
import Convert from "./components/Convert";

// ---------- Context -------------
import Context from "./contexts/Context";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

function App() {
  const [contextObj, setContextObj] = useState({
    data: [],
    url: "",
    convert: "USD",
  });
  const [isFetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(contextObj.url);
        let responseData = await response.json();
        setContextObj({ ...contextObj, data: filterData(responseData[0]) });
        setFetching(false);
        setError("");
      } catch (err) {
        console.log("An error occured in fetch request \n", err);
        setError(err);
        setFetching(false);
      }
    }

    if (contextObj.url === "") {
      console.log("This is first time, click on get to fetch data");
    } else {
      console.log("fetching data");
      setFetching(true);
      fetchData();
    }
  }, [contextObj.url]);

  return (
    <div className={styles.App}>
      <Context.Provider value={[contextObj, setContextObj]}>
        <AutoComplete style={{ margin: "auto" }} />
        {contextObj.url === "" ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "3rem",
              margin: "6rem 0 2rem",
            }}
          >
            Click on get to fetch data
          </div>
        ) : isFetching ? (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "3rem", margin: "6rem 0 2rem" }}>
              Fetching data
            </p>
            <CircularProgress />
          </div>
        ) : error !== "" ? (
          <div>{error}</div>
        ) : (
          <>
            <div
              id="LogoNameWrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1.5rem 0rem 0.7rem",
              }}
            >
              <img
                alt="Logo of currency"
                id="CurrencyLogo"
                src={contextObj.data.logo_url}
                style={{
                  width: "3rem",
                }}
              />
              <h2 style={{ marginLeft: "0.7" }}>{contextObj.data.name}</h2>
            </div>
            <div
              id="rateWrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.5rem 0rem 0.7rem",
              }}
            >
              <h2 style={{ color: "#07e81a" }}>
                <span id="rate">{contextObj.data.price}</span> USD
              </h2>
              <div>
                {contextObj.data.price > contextObj.data.price1d ? (
                  <TrendingUpIcon
                    sx={{ ...trendingStyle, color: "#05f50d" }}
                  ></TrendingUpIcon>
                ) : (
                  <TrendingDownIcon
                    sx={{ ...trendingStyle, color: "#fa0505" }}
                  ></TrendingDownIcon>
                )}
              </div>
            </div>
            <LineGraph />
            <Convert style={{ textAlign: "center", margin: "2rem 0" }} />
          </>
        )}
      </Context.Provider>
    </div>
  );
}

export default App;

//-------------- functions --------------------------
function filterData(data) {
  console.log("Data receieved from the server is : ", data);
  let { id, name, logo_url, price } = data;
  let price1d = price - data["1d"].price_change;
  let price7d = price - data["7d"].price_change;
  let price30d = price - data["30d"].price_change;
  let price365d = price - data["365d"].price_change;
  // console.log(`${id}  , ${name} , ${price} , ${price1d} , ${price365d}`);
  return {
    id: id,
    name: name,
    logo_url: logo_url,
    price: parseFloat(price).toFixed(4),
    price1d: parseFloat(price1d).toFixed(2),
    price7d: parseFloat(price7d).toFixed(2),
    price30d: parseFloat(price30d).toFixed(2),
    price365d: parseFloat(price365d).toFixed(2),
  };
}

let trendingStyle = {
  border: "1px solid",
  borderRadius: "5rem",
  fontSize: "3.2rem",
  marginLeft: "10px",
  padding: "0.3rem",
};
