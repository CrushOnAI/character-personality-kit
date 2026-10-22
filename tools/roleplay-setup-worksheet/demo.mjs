import {budget, route} from "./worksheet.mjs";

// Invented USD inputs to demonstrate arithmetic. These are not vendor prices.
const common = {months: 12, monthlyUsage: 0, pricePerKwh: 0.20,
  hoursPerMonth: 20, hourlyTimeValue: 20};
const hostedExample = {...common, upfront: 0, monthlyFee: 15, watts: 0,
  setupHours: 0.5, maintenanceHours: 0.1};
const localExample = {...common, upfront: 400, monthlyFee: 0, watts: 200,
  setupHours: 3, maintenanceHours: 1};
console.log(JSON.stringify({
  assumptions: "Hypothetical USD inputs, not quotes or measured hardware use",
  hostedExample: budget(hostedExample),
  localExample: budget(localExample),
  hostedWithUnknownPrice: budget({...hostedExample, monthlyFee: null}),
  decision: route({localInferenceRequired: false, chooseBackend: false,
    avoidStackSetup: true})
}, null, 2));
