export default function onChangeInput(evt, data) {
  const name = evt.target.name;
  const value = evt.target.value;
  data = {...data, [name]: value};
  return data;
}