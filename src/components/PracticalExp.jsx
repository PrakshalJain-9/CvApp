import Section from "./Section.jsx";

export default function Education() {
  const data = [
    { Field: "Company Name", type: "text" },
    { Field: "Position Title", type: "text" },
    { Field: "Main responsibilities", type: "text" },
    { Field: "Date From", type: "date" },
    { Field: "Date To", type: "date" },
  ];
  return (
    <>
      <Section data={data} name = "Practical Experience"/>
    </>
  );
}
