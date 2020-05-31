import { assert } from 'chai';
import { dateStringToMonthString, dateStringToYearString } from '../../utils/dateTools';

describe('Test dataTools', () => {
    it('Test dateStringToMonthString()', () => {
        const dateSteing = '2016-04-03T16:35:00.000Z';
        assert.equal(dateStringToMonthString(dateSteing), '04', 'Month equal 04');
    });

    it('Test dateStringToYearString()', () => {
        const dateSteing = '2016-04-03T16:35:00.000Z';
        assert.equal(dateStringToYearString(dateSteing), '2016', 'Year equal 04');
    });
});
