describe('about basic types', () => {

  it('you should know the type of true/false', () => {
    var exp = true;
    expect(typeof exp).toBe( 'boolean' );
  });

  it('you should know the type of some quoted characters', () => {
    var exp = 'SFEIR';
    expect(typeof exp).toBe( 'string' );
  });

  it('you should know the type of logically combined expressions', () => {
    var exp1 = 42 === 42 && 2 < 1;
    var exp2 = 0 || (0).toString();
    expect(typeof exp1).toBe( 'boolean' );
    expect(typeof exp2).toBe( 'string' );
  });

  it('you should know the type of numeric expressions', () => {
    var exp1 = 42;
    var exp2 = 3.1415;
    expect(typeof exp1).toBe( 'number' );
    expect(typeof exp2).toBe( 'number' );
  });

  it('you should know the type of special numbers', () => {
    var notANumber = NaN;
    var veryBigNumber = 1 / 0;
    expect(typeof notANumber).toBe( 'number' );
    expect(typeof veryBigNumber).toBe( 'number' );
  });

  it('you should know the type of something that is not (yet) anything', () => {
    var exp;
    expect(typeof exp).toBe( 'undefined' );
  });

  it('you should know the type of functions', () => {
    function fun() { }
    var exp = () => { };
    expect(typeof fun).toBe( 'function' );
    expect(typeof exp).toBe( 'function' );
  });

  it('you should know the type of objects', () => {
    var exp = { foo: 'bar' };
    expect(typeof exp).toBe( 'object' );
  });

  it('you should know the type of arrays', () => {
    var exp = [1, 2, 3];
    expect(typeof exp).toBe( 'object' );
  });

  it('you should know the type of some native things', () => {
    expect(typeof new Date()).toBe( 'object' );
    expect(typeof /Regexp/g).toBe( 'object' );
    expect(typeof Symbol()).toBe( 'symbol' );

    expect(typeof Date).toBe( 'function' );
  });

  it('you should know the type of null !', () => {
    var exp = null;
    expect(typeof exp).toBe( 'object' );
  });  
});
