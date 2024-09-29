export const useCookieData = () => {
  const usernameCookie = useCookie("username");

  const setUsernameCookie = (val: string) => {
    usernameCookie.value = val;
  };
  return {
    usernameCookie,
    setUsernameCookie,
  };
};
