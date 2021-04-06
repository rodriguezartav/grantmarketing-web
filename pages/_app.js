import { DefaultSeo } from "next-seo";
import App, { Container } from "next/app";

import "../styles/globals.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <DefaultSeo
          openGraph={{
            title="JungleDynamics",
            description="Customer Data Platform, Custom built by Roberto Rodriguez for each customer or white-labeled for trusted partners",
            type: "website",
            locale: "en_US",
            url: "https://jungledynamics.com/",
            site_name: "Jungledynamics",
            images: [
              {
                url:
                  "https://jungledynamics.com/color1_logo_transparent_background.png",
              },
            ],
          }}
        />
        <Component {...pageProps} />
      </Container>
    );
  }
}
