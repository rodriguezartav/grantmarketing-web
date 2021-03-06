import request from "superagent";

export default async (req, res) => {
  try {
    const providers = await request
      .post(process.env.API_URL + "/api/providers/getList")
      .set("Accept", "application/json")
      .set("authorization", req.headers.authorization)
      .send({});

    const integrations = await request
      .post(process.env.API_URL + "/api/integrations/getList")
      .set("Accept", "application/json")
      .set("authorization", req.headers.authorization)
      .send({ filter: { customer_id: parseInt(req.headers.customer_id) } });

    providers.body.results.forEach((provider) => {
      provider.integration = integrations.body.results.filter((integration) => {
        return integration.provider_id === provider.id;
      })[0];
    });

    res.status(200).json(providers.body.results);
  } catch (e) {
    console.log(e);

    res.status(e.status || 500).json({ error: e.message });
  }
};
