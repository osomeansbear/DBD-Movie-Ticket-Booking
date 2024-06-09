const express = require("express");
const router = express.Router();
const Admin = require("../Models/AdminSchema");
const bcrypt = require("bcrypt");

function createResponse(ok, message, data) {
  return { ok, message, data };
}
