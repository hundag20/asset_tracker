var http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fa = require("./controllers/fa.controller");
const FixedPlantEquip = require("./models/fa_FixedPlantEquip.model");
const Vehicle = require("./models/fa_Vehicle.model");
const FixtureFitting = require("./models/fa_FixtureFitting.model");
const FreeStandEquip = require("./models/fa_FreeStandEquip.model");
const OfficeEquip = require("./models/fa_OfficeEquipAll.model");
const Pooling = require("./models/fa_Pooling0.model");
const CompHard = require("./models/fa_CompHard.model");
const All = require("./models/fa_All.model");
const logger = require("./controllers/logger");
const fs = require("fs");
const { verify } = require("./controllers/auth.controller");

const app = express();
const _PORT = 3003;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//ra routes
app.post("/v1/fixedplantequip", verify, (req, res) =>
  fa(req, res, FixedPlantEquip)
);
app.post("/v1/fixturefitting", verify, (req, res) =>
  fa(req, res, FixtureFitting)
);
app.post("/v1/freestandequip", verify, (req, res) =>
  fa(req, res, FreeStandEquip)
);
app.post("/v1/officeequipall", verify, (req, res) => fa(req, res, OfficeEquip));
app.post("/v1/pooling", verify, (req, res) => fa(req, res, Pooling));
app.post("/v1/vehicle", verify, (req, res) => fa(req, res, Vehicle));
app.post("/v1/compHard", verify, (req, res) => fa(req, res, CompHard));
app.post("/v1/all", verify, (req, res) => fa(req, res, All));

app.get("/v1/logs", verify, (req, res) => {
  const content = fs.readFileSync(`./combined.log`, {
    encoding: "utf8",
    flag: "r",
  });
  res.send(content);
});
// app.get("/v1/env", verify, (req, res) => {
//   const content = fs.readFileSync(`./.env.production`, {
//     encoding: "utf8",
//     flag: "r",
//   });
//   res.send(content);
// });
http.createServer(app).listen(_PORT, (err) => {
  if (err) logger("error", err);
  else logger("info", "fa back-end running on 3003");
});
module.exports = { app, _PORT };

/*
TODO: validate token on requests
*/
