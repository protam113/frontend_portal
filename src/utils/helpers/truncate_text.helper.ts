/**
 * Cắt ngắn đoạn text dài quá maxLength, thêm dấu ... nếu cần
 * @param text Chuỗi gốc
 * @param maxLength Độ dài tối đa được hiển thị
 * @returns Text đã cắt ngắn
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

export function truncateHtmlToText(html: string, maxLength: number): string {
  const div = document.createElement('div');
  div.innerHTML = html;

  const text = div.textContent || div.innerText || '';

  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text;
}
