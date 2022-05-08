import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import { sizing } from "@mui/system";

export default function ComboBox() {
  const [value, setValue] = React.useState("None");
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "426px",
        justifyContent: "space-between",
      }}
    >
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
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const cryptoCurrency = ["Bitcoin", "PKR", "Redoin"];
const toCurrency = ["USD", "PKR", "IND"];
