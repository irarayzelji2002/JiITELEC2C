function Footer() {
  const date = new Date();
  const currentTime = date.getHours() * 100 + date.getMinutes();
  console.log(date.getMinutes());
  const isOpen = currentTime >= 1200 && currentTime <= 2200; //12PM & 10PM

  const showTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    //second: "2-digit",
  });

  return (
    <div>
      <h1 className="footer">
        It is currently {showTime}. We're{" "}
        {isOpen
          ? "open. Come visit us or order online."
          : "closed. We'll be open from 12:00PM - 10:00PM."}
      </h1>
    </div>
  );
}

export default Footer;
