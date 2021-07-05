const drichletBox = require('../index');

describe('`drichlet-box`', () => {
  it('assigns the right pigeonhole', () => {
    const holeIndex = drichletBox({
      holesCount: 3,
      pigeonsCount: 10,
      pigeonIndex: 3,
    });
    expect(holeIndex).toBe(0);
  });

  it('assigns the right pigeonhole', () => {
    const holeIndex = drichletBox({
      holesCount: 3,
      pigeonsCount: 10,
      pigeonIndex: 4,
    });
    expect(holeIndex).toBe(1);
  });

  it('assigns the right pigeonhole', () => {
    const holeIndex = drichletBox({
      holesCount: 11,
      pigeonsCount: 15,
      pigeonIndex: 14,
    });
    expect(holeIndex).toBe(10);
  });

  it('assigns the right pigeonhole', () => {
    const holeIndex = drichletBox({
      holesCount: 11,
      pigeonsCount: 15,
      pigeonIndex: 7,
    });
    expect(holeIndex).toBe(3);
  });

  it('assigns the right pigeonhole', () => {
    const holeIndex = drichletBox({
      holesCount: 11,
      pigeonsCount: 15,
      pigeonIndex: 8,
    });
    expect(holeIndex).toBe(4);
  });
});
