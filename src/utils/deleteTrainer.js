import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import usersActions from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const Delete = () => {
  //const Email = useSelector((state) => state.Email);
  let history = useHistory();
  const dispatch = useDispatch();
  let coachEmail = localStorage.getItem("email");
  const deleteClicked = () => {
    dispatch(usersActions.DeleteUser(coachEmail));
  };
  const Exit = () => {
    deleteClicked();
    history.push("/SignUp");
  };
  return (
    <div>
      <p className="text-center" style={{ color: "red" }}>
        Are you sure you want to delete your account ?{coachEmail}
      </p>
      <button className="btn btn-danger btn-md" onClick={Exit}>
        DELETE ACCOUNT{" "}
      </button>
    </div>
  );
};
export default Delete;
