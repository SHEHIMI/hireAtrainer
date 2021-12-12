import axios from "axios";

const baseUrl = `http://localhost:3001`;

let ver = false;
const InsertSignUpdata = async (data) => {
  let url = `${baseUrl}/insertSignUpdata`;
  return await axios.post(url, data).then((response) => {
    if (response.data.message === "Email exists") {
      console.log(response.data.message);
    } else {
      ver = true;
    }
  });
};

let verLogin = false;
const postLoginData = async (data) => {
  let url = `${baseUrl}/postLoginData`;
  return await axios.post(url, data).then((response) => {
    if (response.data.message === "no success") {
      verLogin = false;
    } else {
      verLogin = true;
    }
  });
};

const VerifyLogin = () => {
  if (verLogin === true) {
    return "true";
  } else {
    return "false";
  }
};

const loadCoachwithEmail = async (data) => {
  let url = `${baseUrl}/loadCoachwithEmail`;
  return await axios
    .get(url, data)
    .then((response) => response)
    .catch((err) => err.response);
};

const Verify = () => {
  if (ver === true) {
    return "true";
  } else {
    return "false";
  }
};

let arr = [];
const loadCoachesProfile = async () => {
  let url = `${baseUrl}/loadCoachesProfile`;
  return await axios
    .get(url)
    .then((response) => {
      arr = response.data;
    })
    .catch((err) => err.response);
};

const returnArr = () => {
  return arr;
};

const loadCoaches = async () => {
  let url = `${baseUrl}/loadCoaches`;
  return await axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response);
};

const deleteTrainer = async (data) => {
  let url = `${baseUrl}/deleteTrainer`;
  console.log("EMAIL:" + data);
  return await axios
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
};

const test = async () => {
  let url = `${baseUrl}/test`;
  return await axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response);
};

export {
  InsertSignUpdata,
  test,
  loadCoaches,
  Verify,
  loadCoachwithEmail,
  returnArr,
  loadCoachesProfile,
  postLoginData,
  VerifyLogin,
  deleteTrainer,
};
