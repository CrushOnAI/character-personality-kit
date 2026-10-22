// Local arithmetic and explicit requirement checks, not an AI quality score.
export function budget(input) {
  const fields = ["months", "upfront", "monthlyFee", "monthlyUsage",
    "watts", "hoursPerMonth", "pricePerKwh", "setupHours",
    "maintenanceHours", "hourlyTimeValue"];
  const unknown = fields.filter(k => input[k] == null);
  for (const k of fields.filter(k => input[k] != null)) {
    if (typeof input[k] !== "number" || !Number.isFinite(input[k]) || input[k] < 0) {
      throw new TypeError(`${k} must be a finite nonnegative number or null`);
    }
  }
  if (input.months != null && (!Number.isInteger(input.months) || input.months < 1)) {
    throw new RangeError("months must be a positive integer");
  }
  if (unknown.length) return {status: "incomplete", unknown};
  const energy = input.watts / 1000 * input.hoursPerMonth * input.pricePerKwh;
  const cash = input.upfront + input.months *
    (input.monthlyFee + input.monthlyUsage + energy);
  const time = (input.setupHours + input.months * input.maintenanceHours) *
    input.hourlyTimeValue;
  const round = n => {
    const scaled = (n + Number.EPSILON) * 100;
    if (!Number.isFinite(scaled)) throw new RangeError("Amount is too large to round to cents");
    return Math.round(scaled) / 100;
  };
  if (![energy, cash, time, cash + time].every(Number.isFinite)) {
    throw new RangeError("The calculated budget exceeds the supported number range");
  }
  return {status: "complete", monthlyEnergyCost: round(energy),
    cashOutlay: round(cash), timeAllowance: round(time),
    planningTotal: round(cash + time)};
}

export function route({localInferenceRequired, chooseBackend, avoidStackSetup}) {
  for (const value of [localInferenceRequired, chooseBackend, avoidStackSetup]) {
    if (typeof value !== "boolean") throw new TypeError("Requirements must be booleans");
  }
  if (avoidStackSetup && (localInferenceRequired || chooseBackend)) {
    return {status: "conflict", next: "Resolve setup responsibility before choosing"};
  }
  if (localInferenceRequired) {
    return {status: "evaluate", next: "Local backend, then bundled UI or separate frontend"};
  }
  if (chooseBackend) {
    return {status: "evaluate", next: "Configurable frontend plus a chosen backend"};
  }
  return {status: "evaluate", next: "Hosted app first; compare its actual character controls"};
}
