import { TextField } from "@mui/material";
import { useContext } from "react";
import Context from "../contexts/Context";

export default ({ style }) => {
  let [contextObj] = useContext(Context);
  return (
    <div style={style}>
      <TextField
        id="outlined-number"
        label="BTC"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: 150 }}
      />{" "}
      <span style={{ fontSize: "1.8rem" }}>=</span>{" "}
      <TextField
        id="outlined-number"
        label="USD"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: 150 }}
      />
    </div>
  );
};
