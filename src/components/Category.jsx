export default function Category(props) {
  return (
    <>
      <option value={props.value}>{props.label}</option>
    </>
  );
}
