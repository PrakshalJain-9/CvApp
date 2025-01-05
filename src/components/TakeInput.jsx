import { useState } from "react";
import '../styles/TakeInput.css';

// eslint-disable-next-line
export default function TakeInput({ Field, isSubmitted, type }) {
  const [FieldValue, setFieldValue] = useState("");

  function handleChange(e) {
    setFieldValue(e.target.value);
  }

  return (
    <>
      <p>
        <label>{Field}: </label>
        {isSubmitted ? (
          FieldValue
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