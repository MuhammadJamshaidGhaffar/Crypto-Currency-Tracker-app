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
    url: [],
    convert: "USD",
  });
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    console.log("fetching data");
    setFetching(true);
    setTimeout(() => {
      setContextObj({ ...contextObj, data: filterData(dataSample[0]) });
      setFetching(false);
    }, 1000);
  }, [contextObj.url]);

  return (
    <div className={styles.App}>
      <Context.Provider value={[contextObj, setContextObj]}>
        <AutoComplete style={{ margin: "auto" }} />
        {isFetching ? (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "3rem", margin: "6rem 0 2rem" }}>
              Fetching data
            </p>
            <CircularProgress />
          </div>
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
  console.log(data);
  let { id, name, logo_url, price } = data;
  let price1d = price - data["1d"].price_change;
  let price7d = price - data["7d"].price_change;
  let price30d = price - data["30d"].price_change;
  let price365d = price - data["365d"].price_change;
  console.log(`${id}  , ${name} , ${price} , ${price1d} , ${price365d}`);
  console.log(typeof price);
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

let dataSample = [
  {
    id: "BTC",
    currency: "BTC",
    symbol: "BTC",
    name: "Bitcoin",
    logo_url:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
    status: "active",
    price: "34734.91482063",
    price_date: "2022-05-08T00:00:00Z",
    price_timestamp: "2022-05-08T08:37:00Z",
    circulating_supply: "19033950",
    max_supply: "21000000",
    market_cap: "661142631950",
    market_cap_dominance: "0.3971",
    num_exchanges: "426",
    num_pairs: "87603",
    num_pairs_unmapped: "8429",
    first_candle: "2011-08-18T00:00:00Z",
    first_trade: "2011-08-18T00:00:00Z",
    first_order_book: "2017-01-06T00:00:00Z",
    rank: "1",
    rank_delta: "0",
    high: "67598.19695686",
    high_timestamp: "2021-11-08T00:00:00Z",
    "1d": {
      volume: "42138357537.19",
      price_change: "-1557.50341679",
      price_change_pct: "-0.0429",
      volume_change: "-7838718134.45",
      volume_change_pct: "-0.1568",
      market_cap_change: "-29612996738.12",
      market_cap_change_pct: "-0.0429",
    },
    "7d": {
      volume: "311893240422.74",
      price_change: "-3845.04892956",
      price_change_pct: "-0.0997",
      volume_change: "-36803269043.45",
      volume_change_pct: "-0.1055",
      market_cap_change: "-72930375273.49",
      market_cap_change_pct: "-0.0994",
    },
    "30d": {
      volume: "1289958762187.34",
      price_change: "-7700.27965664",
      price_change_pct: "-0.1815",
      volume_change: "-162045454346.27",
      volume_change_pct: "-0.1116",
      market_cap_change: "-145378807136.26",
      market_cap_change_pct: "-0.1803",
    },
    "365d": {
      volume: "23677696165447.06",
      price_change: "-23631.65888862",
      price_change_pct: "-0.4049",
      volume_change: "4448232611895.66",
      volume_change_pct: "0.2313",
      market_cap_change: "-430506715469.96",
      market_cap_change_pct: "-0.3944",
    },
    ytd: {
      volume: "6031546081893.25",
      price_change: "-12624.07928621",
      price_change_pct: "-0.2666",
      volume_change: "-2141265169341.14",
      volume_change_pct: "-0.2620",
      market_cap_change: "-234709240860.64",
      market_cap_change_pct: "-0.2620",
    },
  },
];
