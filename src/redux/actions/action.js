import { deleteTrainer } from "../../api/api";
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";

const usersActions = {
  DeleteUser: (coachEmail) => async (dispatch) => {
    let data = {
      data: coachEmail,
    };
    await deleteTrainer(data);
    try {
      dispatch({
        type: DELETE_USERS_SUCCESS,
        payload: {
          data: coachEmail,
        },
      });
      alert("success");
    } catch (err) {
      console.log(err);
    }
  },
};
export default usersActions;
