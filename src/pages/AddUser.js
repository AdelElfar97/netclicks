import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
function AddUser(props) {
  console.log(props);
  const history = useHistory();
  const location = useLocation();
  console.log("HISTORY", history);
  console.log("LOCATION", location);

  const [userForm, setUserForm] = useState({
    username: "Marina",
    age: "",
    position: "",
  });

  const [userFormErrs, setUserFormErrs] = useState({
    usernameErr: null,
    ageErr: null,
    positionErr: null,
  });

  const handleFormChange = (event) => {
    console.log(event.target.id, event.target.value);
    if (event.target.id === "username") {
      setUserForm({
        ...userForm,
        username: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        usernameErr:
          event.target.value.length === 0
            ? "This field is required"
            : event.target.value.length < 3
            ? "Min. length is 3 characters"
            : null,
      });
    } else if (event.target.id === "age") {
      setUserForm({
        ...userForm,
        age: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        ageErr:
          event.target.value.length === 0
            ? "This field is required"
            : event.target.value < 18
            ? "Min. Age is 18"
            : null,
      });
    } else {
      setUserForm({
        ...userForm,
        position: event.target.value,
      });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !userFormErrs.usernameErr &&
      !userFormErrs.ageErr &&
      !userFormErrs.positionErr
    ) {
      history.push("/functional");
      console.log(userForm);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className={`form-control ${
            userFormErrs.usernameErr ? "border-danger" : ""
          }`}
          id="username"
          aria-describedby="usernameHelp"
          value={userForm.username}
          onChange={handleFormChange}
        />
        <div id="usernameHelp" className="form-text text-danger">
          {userFormErrs.usernameErr}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          aria-describedby="ageHelp"
          value={userForm.age}
          onChange={handleFormChange}
        />
        <div id="ageHelp" className="form-text text-danger">
          {userFormErrs.ageErr}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="position" className="form-label">
          Position
        </label>
        <input
          type="text"
          className="form-control"
          id="position"
          aria-describedby="positionHelp"
          value={userForm.position}
          onChange={handleFormChange}
        />
        <div id="positionHelp" className="form-text text-danger">
          {userFormErrs.positionErr}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddUser;
