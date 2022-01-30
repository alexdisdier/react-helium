import colorLuminance from './colorLuminance';
import {
  getHTMLString,
  getBlockStyle,
  findLinkEntities,
  hasInlineStyle,
  hasBlockType,
  isActive,
  isValidURL,
} from './editor';

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

describe('hasInlineStyle', () => {
  const styleMap = ['bold', 'italic'];

  const has = (style) => styleMap.includes(style);

  it('current style is not among the style map', () => {
    const editorState = {
      getCurrentInlineStyle: () => ({ has }),
    };

    expect(hasInlineStyle(editorState, null)).toBe(false);
  });

  it('current style is among the style map', () => {
    const editorState = {
      getCurrentInlineStyle: () => ({ has }),
    };

    expect(hasInlineStyle(editorState, 'bold')).toBe(true);
  });
});

describe('hasBlockType', () => {
  const editorState = {
    getSelection: () => ({
      getStartKey: jest.fn(),
    }),
    getCurrentContent: () => ({
      getBlockForKey: () => ({
        getType: () => 'h1', // active type
      }),
    }),
  };

  it('h2 is not an active blocktype', () => {
    expect(hasBlockType(editorState, 'h2')).toBe(false);
  });

  it('h1 is not an active blocktype', () => {
    expect(hasBlockType(editorState, 'h1')).toBe(true);
  });
});

describe('isActive', () => {
  const styleMap = ['bold', 'italic'];

  const has = (style) => styleMap.includes(style);

  it('current style is not among the selected text style map', () => {
    const editorState = {
      getCurrentInlineStyle: () => ({ has }),
    };

    expect(isActive(editorState, null)).toBe(false);
  });

  it('current style is among the selected text style map', () => {
    const editorState = {
      getCurrentInlineStyle: () => ({ has }),
    };

    expect(isActive(editorState, 'bold')).toBe(true);
  });
});

describe('isValidURL', () => {
  it('is not a valid url', () => {
    expect(isValidURL('not valid')).toBe(false);
  });

  it('is a valid url', () => {
    expect(isValidURL('https://google.com')).toBe(true);
  });
});
