import analyseArray from './analyseArray';

test('analyse array', () => {
  const object = analyseArray([1,8,3,4,2,6])

  expect(object.average).toEqual(4);
  expect(object.min).toEqual(1);
  expect(object.max).toEqual(8);
  expect(object.length).toEqual(6);
})