import request from "superagent";

export default async (req, res) => {
  await request
    .del(process.env.API_URL + "/api/integrations/" + req.body.id)
    .set("Accept", "application/json")
    .auth("LINK", { type: "bearer" });

  res.status(200).json({});
};
