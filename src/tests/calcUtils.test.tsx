import {
  calcConsumption,
  calcConsumptionDifference,
  calcTimeDifference,
  calcTotalConsumption,
  formatMinutes,
  travelTime,
} from '../utils';

describe('calcUtils tests', () => {
  test('Minutes are formatted right', () => {
    const time = formatMinutes(200);
    expect(time).toBe('3h 20min ');
  });

  test('Consumption is correct when base is 3l 1km/h @ 10km/h speed', () => {
    const consumption = calcConsumption(3, 10);

    expect(consumption).toBe(3.2519342105129603);
  });

  test('travelTime returns correct minutes when traveling 432km at 114km/h', () => {
    const minutes = travelTime(432, 114);

    expect(minutes).toBe(227.36842105263157894736842105263);
  });

  test('calculated travelTime is formatted correctly', () => {
    const formattedTime = formatMinutes(227.36842105263157894736842105263);

    expect(formattedTime).toBe('3h 47min 22s');
  });

  test('calcTotalConsumption returns correct total consumption when traveling 432km at 114km/h with a base of 3l @ 1km/h', () => {
    const totalConsumption = calcTotalConsumption(432, 3, 114);

    expect(totalConsumption).toBe('35.67');
  });

  test('calcTimeDifference returns the correct time', () => {
    const difference = calcTimeDifference(432, 114, 100);

    expect(difference).toBe('-31min 49s');
  });

  test('calcConsumptionDifference returns the correct difference', () => {
    const difference = calcConsumptionDifference(432, 3, 100, 114);

    expect(difference).toBe('+4.21');
  });
});
