# AI roleplay setup worksheet

A small local planning worksheet for comparing a hosted character app with a configurable frontend and backend. It separates cash outlay from a chosen value for setup and maintenance time, preserves unknown costs, and flags conflicting requirements. It does not call a model, access accounts, make network requests, or rank AI response quality.

Maintained by the CrushOn AI brand. Content and code were prepared with AI assistance and reviewed through source checks and executable tests by the publishing assistant; no independent human product testing is claimed.

## Run locally

Use a current Node.js runtime. No package installation is needed.

```sh
node demo.mjs
node tests.mjs
```

`demo.mjs` contains invented USD inputs, not vendor prices. Its twelve-month illustrative results are:

| Example | Cash outlay | Time allowance | Planning total |
| --- | ---: | ---: | ---: |
| Hosted | 180.00 | 34.00 | 214.00 |
| Local | 409.60 | 300.00 | 709.60 |

These examples do not represent equivalent generation quality, measured hardware consumption, or quotes for CrushOn, SillyTavern or KoboldCpp. Use one currency throughout. Replace all inputs with your own observed values or clearly labeled assumptions. A missing or `null` field makes the result incomplete; explicit `0` is permitted.

## Inputs and boundaries

- `months`: positive whole-number planning horizon.
- `upfront`: incremental new equipment and other one-time cash outlay.
- `monthlyFee`: recurring subscriptions or fixed service charges.
- `monthlyUsage`: metered API costs, additional credits or other monthly usage charges.
- `watts`: incremental power attributable to the workload, not the power-supply rating.
- `hoursPerMonth`: hours operating at that assumed incremental power.
- `pricePerKwh`: electricity price in the selected currency.
- `setupHours`, `maintenanceHours`: initial setup and monthly maintenance time.
- `hourlyTimeValue`: the value assigned to time; use zero if excluding it.

Cash outlay includes equipment, recurring/usage charges and energy. Time allowance is a separate planning valuation, not a bill. Ordinary client-device electricity is outside the demo; its zero hosted wattage means no incremental local inference load is being counted. The calculator uses a flat monthly workload and does not model resale, depreciation, financing, rate changes or automatic currency conversion. Include relevant taxes and overhead consistently in your inputs. Resolve workload differences before interpreting a cheaper total as a better option.

`route()` suggests a category to evaluate, not a product winner. Selecting local inference or a configurable backend while rejecting all stack setup produces a conflict. A hosted route still involves account and character setup; “avoid stack setup” refers to configuring the frontend/backend infrastructure.

## Repeatable decision record

Copy [decision-record.example.json](decision-record.example.json) privately. It contains an original adult SFW Iris example and blank result fields. It is not a native import schema for CrushOn, SillyTavern or KoboldCpp. Do not put private transcripts, account identities, API keys or other people's personal information in a public copy.

Use [methodology.md](methodology.md) to record requirements, configuration, cost assumptions and one controlled continuation. The [sources.json](sources.json) file distinguishes documented capabilities from illustrative worksheet decisions.

## Related evidence and next steps

For a hosted original-character workflow, start with [CrushOn AI's SFW roleplay page](https://chat.crushon.ai/ai-roleplay) and [character guide](https://aiwiki.crushon.ai/wiki/Basic_Single_character_guide). If local inference or backend choice is a requirement, read the official [SillyTavern connection documentation](https://docs.sillytavern.app/usage/api-connections/) and [KoboldCpp upstream repository](https://github.com/LostRuins/koboldcpp).

The [October 13 prompt study](../../studies/iris-personality-20261013) is separate: six related conversations and thirty first replies for one character/model. The [log validator](../roleplay-log-validator) helps validate capture structure. Neither establishes comparative product quality or long-term recall.
