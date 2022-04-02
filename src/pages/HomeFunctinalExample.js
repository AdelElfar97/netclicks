import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BTButton from "../components/Button";
import Userdata from "../components/Userdata";

const HomeFunctionalExample = () => {
  const params = useParams();
  console.log(params)
  const [userInfo, setUserInfo] = useState({
    name: "Marina",
    position: "Frontend",
    company: "Squadio",
  });
  const [usersList, setUsersList] = useState([
    "Marina",
    "Ahmed",
    "Alaa",
    "John",
  ]);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log("DID MOUNT , EMPTY ARRAY");
    return () => {
      // Clean up Mathod -> Will unmount
    };
  }, []);

  useEffect(() => {
    console.log("USER INFO , DEP ARRAY");
  }, [userInfo]);

  const changeUsername = (name) => {
    setUserInfo({
      ...userInfo,
      name,
    });
  };

  return (
    <>
      <h1>Hello Functional Component : Hooks</h1>
      <Userdata user={userInfo} />
      <ul>
        {usersList.map((user , index) => {
          return <li key={index}> {user} </li>;
        })}
      </ul>
      {isAdmin ? (
        <BTButton
          name="Change username"
          handleClick={() => changeUsername("Ahmed")}
        />
      ) : (
        <h6>You don't have permission</h6>
      )}
    </>
  );
};

export default HomeFunctionalExample;
