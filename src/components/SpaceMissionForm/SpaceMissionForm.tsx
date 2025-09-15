import { useState } from "react";
import styles from "./SpaceMissionform.module.css";

export default function SpaceMissionForm() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Please enter your name..."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <select
        value={planet}
        onChange={(event) => setPlanet(event.target.value)}
        className={styles.input}
      >
        <option value="">-- Select a planet --</option>
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>

      <h2>
        Astronaut {name || "..."} is headed to {planet || "..."}!
      </h2>
    </div>
  );
}
