import request from "superagent";

export default async (req, res) => {
  if (req.method == "POST")
    try {
      await request
        .put(process.env.API_URL + "/api/customers/" + req.body.id)
        .send(req.body)
        .set("Accept", "application/json")
        .set("authorization", req.headers.authorization);

      res.status(200).json(req.body);
    } catch (e) {
      console.log(e);
      res.status(e.status || 500).json({ error: e.message });
    }
  else
    try {
      const customer = await request
        .get(
          process.env.API_URL +
            "/api/customers/" +
            parseInt(req.headers.customer_id)
        )
        .set("Accept", "application/json")
        .set("authorization", req.headers.authorization);

      res.status(200).json(customer.body);
    } catch (e) {
      console.log(e);
      res.status(e.status || 500).json({ error: e.message });
    }
};
