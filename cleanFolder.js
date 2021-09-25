var rimraf = require("rimraf")
rimraf("./cypress/cucumber-json", function () { console.log("done"); });
rimraf("./mochawesome-report", function () { console.log("done"); });