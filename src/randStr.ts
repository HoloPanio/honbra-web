/**
 * Simple Random String Generator
 * 
 * @author Jackson Roberts <jackson@holopanio.com>
 * @param length - The length of the random string
 * @returns A random string
 */
export default function randStr(length: number): string {
  let result = [];
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charsLength = chars.length;

  for (let i = 0; i < length; i++) {
    result.push(chars.charAt(Math.floor(Math.random() * charsLength)));
  }

  return result.join('');
}