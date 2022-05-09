import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import LoadingBtn from "./LoadingBtn";
// ------------- Styling -------------
import styles from "./AutoComplete.module.css";
///////////////////////////////////
export default function ComboBox({ style }) {
  const [value, setValue] = React.useState("None");

  // const [loading, setLoading] = React.useState(true);
  // function handleClick() {
  //   setLoading(true);
  // }
  return (
    <div style={style} className={styles.container}>
      <Autocomplete
        sx={{ width: 300 }}
        disableClearable
        id="crypto-currency"
        options={cryptoCurrency}
        renderInput={(params) => (
          <TextField {...params} label="CryptoCurrency" />
        )}
        // onChange={(event, newValue) => setValue(newValue)}
      />

      <Autocomplete
        disableClearable
        sx={{ width: 100 }}
        id="to-currency"
        options={toCurrency}
        renderInput={(params) => <TextField {...params} label="To" />}
      />
      <LoadingBtn>GET</LoadingBtn>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const cryptoCurrency = ["Bitcoin", "PKR", "Redoin"];
const toCurrency = ["USD", "PKR", "IND"];
