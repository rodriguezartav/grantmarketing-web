import request from "superagent";
import moment from "moment";

export default async (req, res) => {
  try {
    if (req.body.id)
      await request
        .put(process.env.API_URL + "/api/integrations/" + req.body.id)
        .set("Accept", "application/json")
        .auth(req.headers.authorization, { type: "bearer" })
        .send({ ...req.body, expiry_date: moment() });
    else
      await request
        .post(process.env.API_URL + "/api/integrations/")
        .set("Accept", "application/json")
        .auth(req.headers.authorization, { type: "bearer" })
        .send({ data: { ...req.body, expiry_date: moment() } });

    res.status(200).json({});
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
