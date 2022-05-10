import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
//------------------- my componets
import LoadingBtn from "./LoadingBtn";
import Context from "../contexts/Context";
// ------------- Styling -------------
import styles from "./AutoComplete.module.css";
///////////////////////////////////
function AutoComplete({ style }) {
  const [contextObj, setContextObj] = React.useContext(Context);
  let [currency, setCurrency] = React.useState({
    crypto: "Bitcoin",
    convert: "American Dollar",
  });
  return (
    <div style={style} className={styles.container}>
      <Autocomplete
        value={currency.crypto}
        onChange={(event, value) => {
          setCurrency({ ...currency, crypto: value });
        }}
        sx={{ width: 300 }}
        disableClearable
        id="crypto-currency"
        options={Object.keys(cryptoCurrency)}
        renderInput={(params) => (
          <TextField {...params} label="CryptoCurrency" />
        )}
      />

      <Autocomplete
        value={currency.convert}
        onChange={(event, value) => {
          setCurrency({ ...currency, convert: value });
        }}
        disableClearable
        sx={{ width: 300 }}
        id="to-currency"
        options={Object.keys(toCurrency)}
        renderInput={(params) => <TextField {...params} label="To" />}
      />
      <LoadingBtn
        onClick={() => {
          {
            console.log(
              cryptoCurrency[currency.crypto],
              "\t\t",
              toCurrency[currency.convert]
            );
            // console.log(
            //   "url is : \n",
            //   prepareUrl(
            //     cryptoCurrency[currency.crypto],
            //     toCurrency[currency.convert]
            //   )
            // );

            setContextObj({
              ...contextObj,
              url: prepareUrl(
                cryptoCurrency[currency.crypto],
                toCurrency[currency.convert]
              ),
              convert: toCurrency[currency.convert],
            });
          }
        }}
      >
        GET
      </LoadingBtn>
    </div>
  );
}
export default AutoComplete;

const cryptoCurrency = { Bitcoin: "BTC", Etherium: "ETH" };
const toCurrency = {
  "Pakistani Rupee": "PKR",
  "American Dollar": "USD",
  "Indian Rupee": "RUP",
};

// ------------- Functions ----------------

function prepareUrl(crypto, convert) {
  return `https://api.nomics.com/v1/currencies/ticker?key=7c68a24442f6a5196bcce25c7226a685ab355747&ids=${crypto}&convert=${convert}`;
}
