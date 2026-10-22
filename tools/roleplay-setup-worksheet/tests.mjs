import assert from "node:assert/strict";
import {budget, route} from "./worksheet.mjs";

let checks = 0;
function check(name, fn) { fn(); checks++; console.log(`PASS ${name}`); }
const zero = {months: 12, upfront: 0, monthlyFee: 0, monthlyUsage: 0,
  watts: 0, hoursPerMonth: 0, pricePerKwh: 0, setupHours: 0,
  maintenanceHours: 0, hourlyTimeValue: 0};

check("explicit zero stays zero", () => assert.deepEqual(budget(zero), {
  status: "complete", monthlyEnergyCost: 0, cashOutlay: 0,
  timeAllowance: 0, planningTotal: 0
}));
check("monthly hosted example and time are separate", () => {
  assert.deepEqual(budget({...zero, monthlyFee: 15, setupHours: 0.5,
    maintenanceHours: 0.1, hourlyTimeValue: 20}), {
    status: "complete", monthlyEnergyCost: 0, cashOutlay: 180,
    timeAllowance: 34, planningTotal: 214
  });
});
check("local hypothetical arithmetic", () => {
  assert.deepEqual(budget({...zero, upfront: 400, watts: 200, hoursPerMonth: 20,
    pricePerKwh: 0.20, setupHours: 3, maintenanceHours: 1, hourlyTimeValue: 20}), {
    status: "complete", monthlyEnergyCost: 0.8, cashOutlay: 409.6,
    timeAllowance: 300, planningTotal: 709.6
  });
});
check("unknown is not free", () => assert.deepEqual(
  budget({...zero, monthlyFee: null}), {status: "incomplete", unknown: ["monthlyFee"]}
));
check("missing fields stay unknown", () => assert.equal(budget({months: 12}).unknown.length, 9));
check("zero month invalid", () => assert.throws(() => budget({...zero, months: 0}), RangeError));
check("fractional month invalid", () => assert.throws(() => budget({...zero, months: 1.5}), RangeError));
check("negative invalid", () => assert.throws(() => budget({...zero, upfront: -1}), TypeError));
check("numeric strings rejected", () => assert.throws(() => budget({...zero, monthlyFee: "15"}), TypeError));
check("infinite value rejected", () => assert.throws(() => budget({...zero, upfront: Infinity}), TypeError));
check("NaN rejected", () => assert.throws(() => budget({...zero, upfront: NaN}), TypeError));
check("overflow rejected", () => assert.throws(() => budget({...zero, monthlyFee: Number.MAX_VALUE}), RangeError));
check("cent-rounding overflow rejected", () => assert.throws(() => budget({...zero, months: 1, upfront: 1e307}), RangeError));
check("hosted route", () => assert.match(route({localInferenceRequired: false, chooseBackend: false,
  avoidStackSetup: true}).next, /Hosted/));
check("local route", () => assert.match(route({localInferenceRequired: true, chooseBackend: false,
  avoidStackSetup: false}).next, /Local backend/));
check("configurable backend route", () => assert.match(route({localInferenceRequired: false, chooseBackend: true,
  avoidStackSetup: false}).next, /Configurable/));
check("contradictory local/no setup requirements", () => assert.equal(route({localInferenceRequired: true,
  chooseBackend: false, avoidStackSetup: true}).status, "conflict"));
check("contradictory backend/no setup requirements", () => assert.equal(route({localInferenceRequired: false,
  chooseBackend: true, avoidStackSetup: true}).status, "conflict"));
check("omitted requirement rejected", () => assert.throws(() => route({chooseBackend: false}), TypeError));
console.log(`${checks} checks passed. These checks validate arithmetic and rules, not AI performance.`);
