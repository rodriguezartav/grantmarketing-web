import request from "superagent";

export default async (req, res) => {
  try {
    const response = await request
      .post(process.env.API_URL + "/vpi/scripts/")
      .set("Accept", "application/json")
      .set("authorization", req.headers.authorization)
      .send(req.body);

    res.status(200).json(response.body);
  } catch (e) {
    console.log(e);
    res.status(500).json({ results: [], error: e.message });
  }
};
