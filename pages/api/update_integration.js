import request from "superagent";
import moment from "moment";

export default async (req, res) => {
  try {
    if (req.body.id)
      await request
        .put(process.env.API_URL + "/api/integrations/" + req.body.id)
        .set("Accept", "application/json")
        .set("authorization", req.headers.authorization)
        .send({ ...req.body, expiry_date: moment().add(1, "hour") });
    else
      await request
        .post(process.env.API_URL + "/api/integrations/")
        .set("Accept", "application/json")
        .set("authorization", req.headers.authorization)
        .send({
          data: {
            ...req.body,
            expiry_date: moment().add(1, "hour"),
            customer_id: parseInt(req.headers.customer_id),
          },
        });

    res.status(200).json({});
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
