import { useState } from "react";
import "../styles/TakeInput.css";

// eslint-disable-next-line
export default function TakeInput({ Field, isSubmitted, type }) {
  const [FieldValue, setFieldValue] = useState("");

  function handleChange(e) {
    setFieldValue(e.target.value);
  }

  return (
    <>
      <p>
        <label className="takeInput-label">{Field}: </label>
        {isSubmitted ? (
          <span className="takeInput-span"> {FieldValue}</span>
        ) : (
          <input
            className="inputField"
            type={type}
            defaultValue={FieldValue}
            onChange={handleChange}
          />
        )}
      </p>
    </>
  );
}
