import request from "superagent";

export default async (req, res) => {
  console.log(req.body);
  await request
    .del(process.env.API_URL + "/api/schedules/" + req.body.id)
    .set("Accept", "application/json")
    .auth("LINK", { type: "bearer" })
    .send(req.body);

  res.status(200).json({});
};
