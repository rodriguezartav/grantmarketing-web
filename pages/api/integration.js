import request from "superagent";

export default async (req, res) => {
  if (!req.query.id) return res.status(200).json({});
  try {
    const integration = await request
      .get(process.env.API_URL + "/api/integrations/" + req.query.id)
      .set("Accept", "application/json")
      .auth("LINK", { type: "bearer" });

    res.status(200).json(integration.body);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
