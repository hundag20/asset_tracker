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
const Group = require("./models/fa_Group.model");
const logger = require("./controllers/logger");
const fs = require("fs");


const app = express();

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
app.get("/v1/fixedplantequip", cors(), (req, res) =>
  fa(req, res, FixedPlantEquip)
);
app.get("/v1/fixturefitting", cors(), (req, res) =>
  fa(req, res, FixtureFitting)
);
app.get("/v1/freestandequip", cors(), (req, res) =>
  fa(req, res, FreeStandEquip)
);
app.get("/v1/officeequipall", cors(), (req, res) => fa(req, res, OfficeEquip));
app.get("/v1/pooling", cors(), (req, res) => fa(req, res, Pooling));
app.get("/v1/vehicle", cors(), (req, res) => fa(req, res, Vehicle));
app.get("/v1/compHard", cors(), (req, res) => fa(req, res, CompHard));
app.get("/v1/all", cors(), (req, res) => fa(req, res, All));
app.get("/v1/Group", cors(), (req, res) => fa(req, res, Group));

app.get("/v1/logs", cors(), (req, res) => {
  const content = fs.readFileSync(`./combined.log`, {
    encoding: "utf8",
    flag: "r",
  });
  res.send(content);
});
// app.get("/v1/env", cors(), (req, res) => {
//   const content = fs.readFileSync(`./.env.production`, {
//     encoding: "utf8",
//     flag: "r",
//   });
//   res.send(content);
// });

http.createServer(app).listen(3003, (err) => {
  if (err) logger("error", err);
  else logger("info", "fa back-end running on 3003");
});
module.exports = app;

/*
TODO: validate token on requests
*/