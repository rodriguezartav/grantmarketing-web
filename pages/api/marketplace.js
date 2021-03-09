import request from "superagent";

export default async (req, res) => {
  try {
    const scripts = await request
      .post(process.env.API_URL + "/api/scripts/getList")
      .set("Accept", "application/json")
      .auth(req.headers.authorization, { type: "bearer" })
      .send({ filter: {} });

    let myScripts = scripts.body.results.filter((script) => {
      return script.isPublic;
    });

    res.status(200).json(myScripts);
  } catch (e) {
    console.log(e);

    res.status(e.status || 500).json({ error: e.message });
  }
};
