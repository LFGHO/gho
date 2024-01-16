import "./App.css";
import { ConnectKitButton } from "connectkit";
import theme from "../theme.json";
function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ConnectKitButton customTheme={theme} />
    </div>
  );
}

export default App;
