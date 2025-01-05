import { useState } from "react";
import TakeInput from "./Takeinput";
import "../styles/Section.css";

// eslint-disable-next-line
export default function Section({ data, name }) {
  const [isSubmitted, setisSubmitted] = useState(false);
  return (
    <>
      <fieldset className="blocks">
        <legend>{name}</legend>
        {data.map((val) => {
          return (
            <TakeInput
              Field={val.Field}
              isSubmitted={isSubmitted}
              type={val.type}
              key={val.Field}
            />
          );
        })}

        <button className="btn" onClick={() => setisSubmitted(!isSubmitted)}>
          {isSubmitted ? "Edit" : "Submit"}
        </button>
      </fieldset>
    </>
  );
}
