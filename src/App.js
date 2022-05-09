import TrendingDownIcon from "@mui/icons-material/TrendingDown";

//------------------- my components ----------------
import styles from "./App.module.css";
import LineGraph from "./components/LineGraph";
import AutoComplete from "./components/AutoComplete";
import Convert from "./components/Convert";

let data = [
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

function App() {
  console.log(data);
  return (
    <div className={styles.App}>
      <AutoComplete style={{ margin: "auto" }} />
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
          src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
          style={{
            width: "3rem",
          }}
        />
        <h2 style={{ marginLeft: "0.7" }}>Bitcoin</h2>
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
          <span id="rate">34,000</span> USD
        </h2>
        <div>
          <TrendingDownIcon
            sx={{
              color: "#fa0505",
              border: "1px solid",
              borderRadius: "5rem",
              fontSize: "3.2rem",
              marginLeft: "10px",
              padding: "0.3rem",
            }}
          ></TrendingDownIcon>
        </div>
      </div>
      <LineGraph />
      <Convert style={{ textAlign: "center", margin: "2rem 0" }} />
    </div>
  );
}

export default App;
