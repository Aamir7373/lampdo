const LmdTimeDate = () => {
  //const lmdDate = new Date().toLocaleDateString();
  const lmdToday = new Date();
  const curTime =
    lmdToday.getMonth() +
    "/" +
    lmdToday.getDate() +
    "/" +
    lmdToday.getFullYear() +
    " " +
    lmdToday.getHours() +
    ":" +
    lmdToday.getMinutes() +
    ":" +
    lmdToday.getSeconds();

  return <>{curTime}</>;
};

export default LmdTimeDate;
