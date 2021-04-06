import React from "react";

export default function Logo() {
  const [logo, setLogo] = React.useState("jd");
  //
  React.useEffect(() => {
    if (window.location.host.indexOf("localhost") > -1)
      setLogo("mogi/logo.png`");
    else if (window.location.host.indexOf("jungledynamics") > -1)
      setLogo("jd/logo.png`");
    else if (window.location.host.indexOf("mogi") > -1)
      setLogo("mogi/logo.png`");
    else if (window.location.host.indexOf("rodco") > -1)
      setLogo("rodco/logo.png`");
    else if (window.location.host.indexOf("signalon") > -1)
      setLogo("signalon/logo.png`");
  }, []);

  return (
    <a href="/">
      <img className=" h-6 w-auto sm:h-10" src={logo} />
    </a>
  );
}
