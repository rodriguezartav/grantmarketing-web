import request from "superagent";

export default async (req, res) => {
  if (req.method == "POST")
    try {
      await request
        .post(process.env.API_URL + "/vpi/api_keys/")
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
      const keys = await request
        .get(process.env.API_URL + "/vpi/api_keys/")
        .set("Accept", "application/json")
        .set("authorization", req.headers.authorization);

      res.status(200).json(keys.body);
    } catch (e) {
      console.log(e);
      res.status(e.status || 500).json({ error: e.message });
    }
};
