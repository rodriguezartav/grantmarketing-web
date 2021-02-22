import request from "superagent";

export default async (req, res) => {
  const providers = await request
    .post(process.env.API_URL + "/api/providers/getList")
    .set("Accept", "application/json")
    .auth("LINK", { type: "bearer" })
    .send({});

  const integrations = await request
    .post(process.env.API_URL + "/api/integrations/getList")
    .set("Accept", "application/json")
    .auth("LINK", { type: "bearer" })
    .send({ filter: { customer_id: parseInt(req.headers.customer_id) } });

  providers.body.results.forEach((provider) => {
    provider.integration = integrations.body.results.filter((integration) => {
      return integration.provider_id === provider.id;
    })[0];
  });

  res.status(200).json(providers.body.results);
};
