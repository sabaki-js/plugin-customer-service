# @sabaki-js/customer-service

Typed decisions over customer-service tickets (category, action, urgency, churn risk, escalation).

A [sabaki](https://github.com/sabaki-js/sabaki) plugin. Router keywords included:
register it and `Sabaki.decide()` routes matching states here automatically.

## Install

```sh
npm install @sabaki-js/customer-service sabaki
```

Zero runtime dependencies (bundled TF-IDF weights, 548 Ko).

## Usage

```ts
import { Sabaki } from "sabaki";
import mail from "@sabaki-js/customer-service";

const sabaki = new Sabaki();
sabaki.register(mail.default ?? mail);
const r = sabaki.decide({ state: "Votre facture mobile est disponible", question: "category" });
// { domain: "customer_service", decision: ..., confidence: ..., plugin: "@sabaki-js/customer-service" }
```

Ask another question with `input.question` (any of the list below).
Note: Mini (`mini.ts`): `loadMiniClassifier(modelDir)` with minilaya ONNX weights (see `sabaki-models` release).

## Questions (measured on held-out test sets)

- `category` — accuracy **0.900** (account, billing, delivery, refund, technical)
- `needs_human` — accuracy **0.720** (true/false)
- `urgency` — accuracy **0.640** (0-3)
- `action` — accuracy **0.570** (4 actions)
- `churn_risk` — accuracy **0.600** (0-3)

Accuracies are honest test-split numbers, not marketing. See `sabaki` for the
`nano` / `mini` modes and the benchmark methodology.

## License

MIT
