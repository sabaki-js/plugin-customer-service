import { predict, type ClassifyOutput, type ModelWeights, type PluginManifest, type SabakiInput, type SabakiPlugin } from "sabaki";
import manifestData from "./manifest.json" with { type: "json" };
import weightsData from "./weights.json" with { type: "json" };

const manifest = manifestData as PluginManifest;
const weights = weightsData as ModelWeights;
/** Question principale = première du manifest (précisions mesurées : voir REPORT). */
const PRIMARY = manifest.questions[0]!;

function classify(input: SabakiInput): ClassifyOutput {
  const q = input.question && weights.questions[input.question] ? input.question : PRIMARY;
  const r = predict(input.state, weights, q);
  return { decision: r.decision, confidence: r.confidence, domain: manifest.domain };
}

const plugin: SabakiPlugin = { manifest, classify };
export default plugin;
