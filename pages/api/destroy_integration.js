import request from "superagent";

export default async (req, res) => {
  console.log(req.body);
  await request
    .put(process.env.API_URL + "/api/integrations/" + req.body.id)
    .set("Accept", "application/json")
    .auth("LINK", { type: "bearer" })
    .send({
      api_key: "",
      client_id: "",
      client_secret: "",
      application_id: "",
      external_user_id: "",
      auth_token: "",
      refresh_token: "",
      expiry_date: null,
      id: req.body.id,
    });

  res.status(200).json({});
};
