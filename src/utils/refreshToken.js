export const refreshTokenSetup = (res) => {
  let refreshTimer = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTimer = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthRes:", newAuthRes);
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    localStorage.setItem("authToken", newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTimer);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTimer);
};
