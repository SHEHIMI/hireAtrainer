import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import usersActions from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const Delete = () => {
  //const counter = useSelector((state) => state.counter);
   
  const dispatch = useDispatch();
  //usersActions.deleteUser();
  return (
    <div>
      <h1>Counter</h1>
    </div>
  );
};
export default Delete;
