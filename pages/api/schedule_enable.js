import request from "superagent";

export default async (req, res) => {
  console.log(req.headers);
  try {
    if (req.body.id)
      await request
        .put(process.env.API_URL + "/api/schedules/" + req.body.id)
        .set("Accept", "application/json")
        .set("authorization", req.headers.authorization)
        .send({ ...req.body, customer_id: parseInt(req.headers.customer_id) });
    else
      await request
        .post(process.env.API_URL + "/api/schedules")
        .set("Accept", "application/json")
        .set("authorization", req.headers.authorization)
        .send({
          data: { ...req.body, customer_id: parseInt(req.headers.customer_id) },
        });

    res.status(200).json({});
  } catch (e) {
    console.log(e);
    res.status(500).json({ results: [], error: e.message });
  }
};
