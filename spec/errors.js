const drichletBox = require('../index');

describe('`drichlet-box`', () => {
  it('throws when given non numbers', () => {
    expect(() => {
      drichletBox({
        holesCount: 'something',
        pigeonsCount: 10,
        pigeonIndex: 3,
      });
    }).toThrow();

    expect(() => {
      drichletBox({
        holesCount: 9,
        pigeonsCount: new Date(),
        pigeonIndex: 3,
      });
    }).toThrow();

    expect(() => {
      drichletBox({
        holesCount: 9,
        pigeonsCount: 20,
        pigeonIndex: [],
      });
    }).toThrow();
  });

  it('throws when `pigeonIndex` >= `pigeonsCount`', () => {
    expect(() => {
      drichletBox({
        holesCount: 9,
        pigeonsCount: 9,
        pigeonIndex: 9,
      });
    }).toThrow();
  });
});
