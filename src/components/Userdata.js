function Userdata(props) {
  return (
    <>
      <h3> Username : {props.user.name}</h3>
      <h3> Position : {props.user.position}</h3>
      <h3> Company : {props.user.company}</h3>
    </>
  );
}

export default Userdata;
