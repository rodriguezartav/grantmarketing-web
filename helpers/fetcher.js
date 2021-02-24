const fetcher = async (url) => {
  const res = await fetch(url, {
    headers: {
      authentication: "bearer " + window.localStorage.token || "",

      "Content-Type": "application/json",
      customer_id: window.localStorage.getItem("customer_id") || "",
      user_id: window.localStorage.getItem("user_id") || "",
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
