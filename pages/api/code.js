import request from "superagent";

export default async (req, res) => {
  let users;
  try {
    users = await request
      .post(process.env.API_URL + "/api/userLogin/autenticate")
      .send({
        countryCode: req.body.countryCode,
        code: req.body.code,
        phone: req.body.phone,
        customer_id: req.body.customer_id,
      })
      .set("Accept", "application/json")
      .auth("LINK", { type: "bearer" });

    if (users.status == 200) return res.status(200).json(users.body);
    else
      return res.status(404).json({
        message: `An user with phone ${req.body.phone}, please create an account, or contact support. `,
      });
  } catch (e) {
    console.log(e);
    return res.status(users ? users.status : 500).json({
      message: users ? users.text : e.message,
    });
  }
};
