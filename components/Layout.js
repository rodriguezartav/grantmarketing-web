import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, description, ...props }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-MNTM6MGLXC");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <div>
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta
            name="twitter:creator"
            content="{twitterHandle}"
            key="twhandle"
          />
          {"{"}/* Open Graph */{"}"}
          <meta property="og:url" content="{currentURL}" key="ogurl" />
          <meta property="og:image" content="{previewImage}" key="ogimage" />
          <meta property="og:site_name" content="{siteName}" key="ogsitename" />
          <meta property="og:title" content="{pageTitle}" key="ogtitle" />
          <meta
            property="og:description"
            content="{description}"
            key="ogdesc"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-MNTM6MGLXC"
          ></script>
        </div>
      </Head>
      <section>
        <Header />
        <div className="content">{children}</div>
      </section>
    </>
  );
}
