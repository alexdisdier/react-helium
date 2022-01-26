/**
 * NAME TO HEX
 * source: https://css-tricks.com/converting-color-spaces-in-javascript/
 * @param name
 */
const nameToHex = (name: string) => {
  // Get RGB from named color in temporary div
  const fakeDiv = document.createElement('div');
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  const cs = window.getComputedStyle(fakeDiv);
  const pv = cs.getPropertyValue('color');

  document.body.removeChild(fakeDiv);

  // Code ripped from RGBToHex() (except pv is substringed)
  const rgb = pv.substr(4).split(')')[0].split(',');
  let r = (+rgb[0]).toString(16);
  let g = (+rgb[1]).toString(16);
  let b = (+rgb[2]).toString(16);

  if (r.length === 1) r = `0${r}`;
  if (g.length === 1) g = `0${g}`;
  if (b.length === 1) b = `0${b}`;

  return `#${r}${g}${b}`;
};

/**
 * source: https://www.sitepoint.com/javascript-generate-lighter-darker-color/
 * ColorLuminance accepts two parameters:
 * @param hex — a hex color value such as “#abc” or “#123456” (the hash is optional
 * @param lum — the luminosity factor, i.e. -0.1 is 10% darker, 0.2 is 20% lighter, etc.
 */

export default (hex: string, lum: unknown) => {
  let nameFromHex;
  if (hex.charAt(0) !== '#') {
    nameFromHex = nameToHex(hex);
  }
  // validate hex string
  let newHex = String(nameFromHex || hex).replace(/[^0-9a-f]/gi, '');
  if (newHex.length < 6 && newHex.length > 2) {
    newHex =
      newHex[0] + newHex[0] + newHex[1] + newHex[1] + newHex[2] + newHex[2];
  }
  const newLum = lum || 0;

  // convert to decimal and change luminosity
  let rgb = '#';
  let c;
  let i;
  for (i = 0; i < 3; i += 1) {
    c = parseInt(newHex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * newLum), 255)).toString(16);
    rgb += `00${c}`.substr(c.length);
  }

  return rgb;
};
