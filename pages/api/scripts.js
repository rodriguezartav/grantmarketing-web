import request from "superagent";

export default async (req, res) => {
  const scripts = await request
    .post(process.env.API_URL + "/api/scripts/getList")
    .set("Accept", "application/json")
    .auth("LINK", { type: "bearer" })
    .send({ filter: {} });

  const privateScripts = await request
    .post(process.env.API_URL + "/api/script_assignments/getList")
    .set("Accept", "application/json")
    .auth("LINK", { type: "bearer" })
    .send({ filter: { customer_id: parseInt(req.headers.customer_id) } });

  const schedules = await request
    .post(process.env.API_URL + "/api/schedules/getList")
    .set("Accept", "application/json")
    .auth("LINK", { type: "bearer" })
    .send({ filter: { customer_id: parseInt(req.headers.customer_id) } });

  let myScripts = scripts.body.results
    .map((script) => {
      script.schedule = schedules.body.results.filter((schedule) => {
        return script.id === schedule.script_id;
      })[0];
      return script;
    })
    .filter((script) => {
      if (script.public) return true;
      const myPrivateScripts = privateScripts.body.results.filter(
        (myPrivateScript) => {
          return myPrivateScript.script_id == script.id;
        }
      );
      console.log(myPrivateScripts);
      if (myPrivateScripts.length > 0) return true;
      return false;
    });

  res.status(200).json(myScripts);
};
