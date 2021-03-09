import request from "superagent";

export default async (req, res) => {
  try {
    const scripts = await request
      .post(process.env.API_URL + "/api/scripts/getList")
      .set("Accept", "application/json")
      .auth(req.headers.authorization, { type: "bearer" })
      .send({ filter: {} });

    const privateScripts = await request
      .post(process.env.API_URL + "/api/script_assignments/getList")
      .set("Accept", "application/json")
      .set("authorization", req.headers.authorization)
      .send({ filter: { customer_id: parseInt(req.headers.customer_id) } });

    const schedules = await request
      .post(process.env.API_URL + "/api/schedules/getList")
      .set("Accept", "application/json")
      .set("authorization", req.headers.authorization)
      .send({ filter: { customer_id: parseInt(req.headers.customer_id) } });

    let myScripts = scripts.body.results
      .map((script) => {
        script.schedule = schedules.body.results.filter((schedule) => {
          return script.id === schedule.script_id;
        })[0];
        return script;
      })
      .filter((script) => {
        let isAssigned = false;
        privateScripts.body.results.forEach((myPrivateScript) => {
          if (myPrivateScript.script_id == script.id) isAssigned = true;
        });
        return isAssigned;
      });

    res.status(200).json(myScripts);
  } catch (e) {
    console.log(e);

    res.status(e.status || 500).json({ error: e.message });
  }
};
