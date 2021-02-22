const fetcher = (url) =>
  fetch(url, {
    headers: {
      customer_id: window.localStorage.getItem("customer_id") || "",
      user_id: window.localStorage.getItem("user_id") || "",
      authentication: window.localStorage.token || "",
    },
  }).then((res) => res.json());

export default fetcher;
