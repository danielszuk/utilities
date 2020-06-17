/**
 * Removes all html markup from a string (converts line breaks into spaces).
 *
 * @param html a string decorated with html markup
 */
export default function htmlToText(html: string): string {
  return html.replace(/<br(\/)?>/g, ' ').replace(/<([^>])*>/g, '');
}
