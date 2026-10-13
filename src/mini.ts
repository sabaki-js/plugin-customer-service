import {
	loadMini,
	type ClassifyOutput,
	type MiniModel,
	type SabakiInput,
} from "sabaki";

let cached: MiniModel | null = null;
/** Charge le mode mini (poids ONNX). modelDir contient model.json + tokenizer.json + .onnx.
 *  Téléchargement : huggingface_hub snapshot_download fox3000foxy/sabaki minilaya-onnx/customer_service* */
export async function loadMiniClassifier(
	modelDir: string,
): Promise<(input: SabakiInput) => Promise<ClassifyOutput>> {
	cached ??= await loadMini(modelDir);
	const mini = cached;
	return async (input: SabakiInput) => {
		const q = input.question ?? "category";
		const r = await mini.run(input.state, q);
		return {
			decision: r.decision,
			confidence: r.confidence,
			domain: "customer_service",
		};
	};
}
