import React from "react";

export default function Logo() {
  const [logo, setLogo] = React.useState("jd");
  //
  React.useEffect(() => {
    if (window.location.host.indexOf("localhost") > -1) setLogo("jd");
    else if (window.location.host.indexOf("jungledynamics") > -1) setLogo("jd");
    else if (window.location.host.indexOf("rodco") > -1) setLogo("rodco");
    else if (window.location.host.indexOf("signalon") > -1) setLogo("signalon");
  }, []);

  return (
    <a href="/">
      {" "}
      <img
        className=" h-6 w-auto sm:h-10"
        src={`${logo}/logo.png`}
        alt="JungleDynamics Logo"
      />
    </a>
  );
}
