export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";
export const DELETE_USERS_STARTED = "DELETE_USERS_STARTED";
export const DELETE_USERS_ERROR = "DELETE_USERS_ERROR";

const usersActions = {
  deleteUser: (userID) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_USERS_STARTED,
      });
      // await deleteUser(userID);
      dispatch({
        type: DELETE_USERS_SUCCESS,
        payload: {
          message: "deleted successfully",
        },
      });
    } catch (err) {
      dispatch({
        type: DELETE_USERS_ERROR,
      });
    }
  },
};

export default usersActions;
