import Section from "./Section";

export default function GenInfo() {
  const data = [
    { Field: "Name", type: "text" },
    { Field: "Email", type: "email" },
    { Field: "Mobile Number", type: "tel" },
  ];
  return (
    <>
      <Section data={data} name = "General Information" />
    </>
  );
}
