import "./App.css";
import Dashboard from "./Dashboard";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#F7F7F7",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
