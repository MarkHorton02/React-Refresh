const readCookie = (key) => {
  const cookieRegEx = new RegExp(`(?<=${key}=)[^;]*`);
  try {
    let cookie = document.cookie.match(cookieRegEx[0]);
    return cookie;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default readCookie;