import request from "superagent";

export default async (req, res) => {
  if (req.body.id)
    await request
      .put(process.env.API_URL + "/api/schedules/" + req.body.id)
      .set("Accept", "application/json")
      .auth("LINK", { type: "bearer" })
      .send(req.body);
  else
    await request
      .post(process.env.API_URL + "/api/schedules/")
      .set("Accept", "application/json")
      .auth("LINK", { type: "bearer" })
      .send(req.body);

  res.status(200).json({});
};
