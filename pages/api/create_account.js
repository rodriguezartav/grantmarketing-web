import request from "superagent";

export default async (req, res) => {
  try {
    const customer = await request
      .post(process.env.API_URL + "/api/customers")
      .send({ data: { name: req.body.company } })
      .set("Accept", "application/json")
      .set("authorization", req.headers.authorization);

    await request
      .post(process.env.API_URL + "/api/users")
      .send({
        data: {
          country_code: req.body.countryCode,
          phone: req.body.phone,
          name: req.body.name,
          customer_id: customer.body.id,
        },
      })
      .set("Accept", "application/json")
      .auth(req.headers.authorization, { type: "bearer" });

    await request
      .post(process.env.API_URL + "/api/userLogin/getCode")
      .send({ country_code: req.body.countryCode, phone: req.body.phone })
      .set("Accept", "application/json")
      .set("authorization", req.headers.authorization);

    return res.status(200).json({});
  } catch (e) {
    //console.log(e);
    return res.status(500).json({
      message: e.message,
    });
  }
};
