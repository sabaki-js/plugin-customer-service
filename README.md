<img src="https://raw.githubusercontent.com/sabaki-js/sabaki/main/assets/logo.svg" width="120" alt="sabaki logo" />

# @sabaki-js/customer-service

[![npm](https://img.shields.io/npm/v/%40sabaki-js%2Fcustomer-service)](https://www.npmjs.com/package/%40sabaki-js%2Fcustomer-service) [![license](https://img.shields.io/npm/l/%40sabaki-js%2Fcustomer-service)](https://github.com/sabaki-js/plugin-customer-service#readme) [![CI](https://github.com/sabaki-js/plugin-customer-service/actions/workflows/test-battery.yml/badge.svg)](https://github.com/sabaki-js/plugin-customer-service/actions)

Customer-service ticket decisions.

Questions: `category` (0.900), `needs_human` (0.72), `urgency` (0.64), `action` (0.57), `churn_risk` (0.60). Weights: 548 KB, zero deps.

## Usage

```ts
import { Sabaki } from "sabaki";
import plugin from "@sabaki-js/customer-service";

const sabaki = new Sabaki().register(plugin.default ?? plugin);
const r = sabaki.decide({ state: "..." });
// { domain: "customer_service", decision: ..., confidence: ..., plugin: "@sabaki-js/customer-service" }
```

Ask another question with `input.question`.

Part of [sabaki](https://github.com/sabaki-js/sabaki) — see the [GUIDE](https://github.com/sabaki-js/sabaki/blob/main/GUIDE.md).

## License

MIT
