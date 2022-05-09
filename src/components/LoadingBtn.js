import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f61c11",
      dark: "#e90b0b",
    },
    secondary: {
      main: "#0ff517",
      dark: "#00e308",
    },
  },
});
{
  /* <LoadingButton
        size="small"
        onClick={handleClick}
        loading={loading}
        loadingIndicator="Loading..."
        variant="outlined"
      >
        Fetch data
      </LoadingButton> */
}

function LoadingBtn({ style, loading, onClick, loadingIndicator, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        {children}
      </Button>
    </ThemeProvider>
  );
}
export default LoadingBtn;
