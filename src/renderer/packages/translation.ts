/**
 * Translation utility — disabled in this fork.
 * In the upstream project, this uses an LLM-based translation API.
 * Here we just return the original text as-is.
 */

export async function translateTexts(
  texts: string[],
  _targetLang: string,
  _options?: { sourceLang?: string },
): Promise<(string | null)[]> {
  // Translation API disabled in fork — return original text
  return texts.map(() => null)
}
