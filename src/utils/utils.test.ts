import colorLuminance from './colorLuminance';
import { getHTMLString, getBlockStyle, findLinkEntities } from './editor';

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

describe('getHTMLString', () => {
  it('returns html without any <a> elements', () => {
    expect(
      getHTMLString({
        getCurrentContent: () => ({ getBlocksAsArray: () => [] }),
      })
    ).toMatchInlineSnapshot(`""`);
  });
});

describe('getBlockStyle', () => {
  it('header-one should return h1', () => {
    expect(
      getBlockStyle({
        getType: () => 'header-one',
      })
    ).toEqual('h1');
  });

  it('header-two should return h2', () => {
    expect(
      getBlockStyle({
        getType: () => 'header-two',
      })
    ).toEqual('h2');
  });

  it('unordered-list-item should return ul', () => {
    expect(
      getBlockStyle({
        getType: () => 'unordered-list-item',
      })
    ).toEqual('ul');
  });

  it('ordered-list-item should return ol', () => {
    expect(
      getBlockStyle({
        getType: () => 'ordered-list-item',
      })
    ).toEqual('ol');
  });

  describe('it should return an empty string when the block is', () => {
    it('undefined', () => {
      expect(
        getBlockStyle({
          getType: () => undefined,
        })
      ).toEqual('');
    });

    it('null', () => {
      expect(
        getBlockStyle({
          getType: () => null,
        })
      ).toEqual('');
    });

    it('empty', () => {
      expect(
        getBlockStyle({
          getType: () => '',
        })
      ).toEqual('');
    });
  });
});

describe('findLinkEntities', () => {
  it('returns our own link', () => {
    expect(
      findLinkEntities({ findEntityRanges: () => true }, '')
    ).toMatchInlineSnapshot(`undefined`);
  });
});
