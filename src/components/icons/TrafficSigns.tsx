/**
 * Deprecated.
 *
 * The quiz no longer renders procedural / polygon SVG signs or fetches
 * external sign images. Every question that needs a picture sets
 * `imagePath` to a file inside `/public/images/quiz/` and is rendered
 * by <QuestionCard /> directly via next/image.
 *
 * This file is kept (empty) so any stale imports fail loudly at build
 * time rather than silently render a polygon fallback.
 */
export {};
