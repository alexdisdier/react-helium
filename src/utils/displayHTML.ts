import DOMPurify from 'dompurify';

export default (
  htmlData: Record<string, unknown>,
  sanitizerConfig: unknown
) => {
  const cleanHTML = DOMPurify.sanitize(htmlData.toString(), sanitizerConfig);
  return { __html: cleanHTML };
};
