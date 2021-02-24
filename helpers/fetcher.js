const fetcher = async (url) => {
  const res = fetch(url, {
    headers: {
      customer_id: window.localStorage.getItem("customer_id") || "",
      user_id: window.localStorage.getItem("user_id") || "",
      authentication: window.localStorage.token || "",
    },
  });
  if (!res.ok) {
    const error = new Error("Server error");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default fetcher;
