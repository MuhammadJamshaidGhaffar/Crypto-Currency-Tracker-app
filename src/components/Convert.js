import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import Context from "../contexts/Context";

export default ({ style }) => {
  let [contextObj] = useContext(Context);
  let [cryptoAmount, updateCryptoAmount] = useState(1);
  let [convertedAmount, updateConvertedAmount] = useState(
    cryptoAmount * contextObj.data.price
  );
  return (
    <div style={style}>
      <TextField
        value={cryptoAmount}
        id="outlined-number"
        label="BTC"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: 150 }}
        onChange={(event) => {
          updateCryptoAmount(parseFloat(event.target.value));
          updateConvertedAmount(
            parseFloat(event.target.value * contextObj.data.price).toFixed(4)
          );
          console.log(
            "Crypto : ",
            cryptoAmount,
            "\t\tConverted : ",
            convertedAmount
          );
        }}
      />{" "}
      <span style={{ fontSize: "1.8rem" }}>=</span>{" "}
      <TextField
        value={convertedAmount}
        id="outlined-number"
        label="USD"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: 150 }}
        onChange={(event) => {
          updateConvertedAmount(parseFloat(event.target.value));
          updateCryptoAmount(
            parseFloat(event.target.value / contextObj.data.price).toFixed(4)
          );
        }}
      />
    </div>
  );
};
