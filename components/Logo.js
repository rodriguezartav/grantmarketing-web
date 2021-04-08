import React from "react";

export default function Logo() {
  const [logo, setLogo] = React.useState("jd");

  React.useEffect(() => {
    if (window.location.host.indexOf("localhost") > -1) setLogo("Mogi");
    else if (window.location.host.indexOf("jungledynamics") > -1) setLogo("JD");
    else if (window.location.host.indexOf("mogi") > -1) setLogo("Mogi`");
    else if (window.location.host.indexOf("rodco") > -1) setLogo("Rodco`");
    else if (window.location.host.indexOf("signalon") > -1) setLogo("Signalon");
  }, []);

  return (
    <a className="text-3xl font-semibold text-white" href="/">
      {logo}
    </a>
  );
}
