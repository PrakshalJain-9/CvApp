import Section from "./Section.jsx";

export default function Education() {
  const data = [
    { Field: "School Name", type: "text" },
    { Field: "Title of Study", type: "text" },
    { Field: "Date of Study", type: "date" },
  ];

  return (
    <>
      <Section data={data} name="Education Background" />
    </>
  );
}
