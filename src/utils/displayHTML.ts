import DOMPurify from 'dompurify';

export default (htmlData: {}, sanitizerConfig: any) => {
  const cleanHTML = DOMPurify.sanitize(htmlData.toString(), sanitizerConfig);
  return { __html: cleanHTML };
};
