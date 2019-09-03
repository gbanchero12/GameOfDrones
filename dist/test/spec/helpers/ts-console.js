"use strict";
const jasmine = require('jasmine');
const TSConsoleReporter = require('jasmine-ts-console-reporter');
jasmine.getEnv().clearReporters(); // Clear default console reporter
jasmine.getEnv().addReporter(new TSConsoleReporter());
