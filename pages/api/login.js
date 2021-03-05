import request from "superagent";

export default async (req, res) => {
  try {
    const users = await request
      .post(process.env.API_URL + "/api/userLogin/getCode")
      .send({ countryCode: req.body.countryCode, phone: req.body.phone })
      .set("Accept", "application/json")
      .auth("LINK", { type: "bearer" });

    if (users.status == 200) return res.status(200).json({});
    else
      return res.status(404).json({
        message: `An user with phone ${req.body.phone}, please create an account, or contact support. `,
      });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: e.message,
    });
  }
};
