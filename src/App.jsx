import styles from "./App.module.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className={styles["c-wrapper"]}>
      <Card />
    </div>
  );
}

export default App;
