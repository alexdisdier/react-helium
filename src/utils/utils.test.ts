import colorLuminance from './colorLuminance';
// import { getHTMLString } from './editor';

// jest.mock('draft-js', () => ({
//   editorState: {
//     getCurrentContent: jest.fn(),
//   },
// }));

describe('colorLuminance', () => {
  it('receives hex less than 2', () => {
    expect(colorLuminance('#1', null)).toMatchInlineSnapshot(`"#0000aa"`);
  });

  it('receives hex', () => {
    expect(colorLuminance('#123456', -0.1)).toMatchInlineSnapshot(`"#0f1f2e"`);
  });

  it('receives harcoded color', () => {
    expect(colorLuminance('red', -0.1)).toMatchInlineSnapshot(`"#000099"`);
  });
});

// describe('getHTMLString', () => {
//   it('returns html without any <a> elements', () => {
//     expect(getHTMLString('')).toMatchInlineSnapshot();
//   });
// });
