import moment from 'moment';
import { 
        setTextFilter, 
        sortByAmount, 
        sortByDate, 
        setStartDate, 
        setEndDate } from '../../actions/filters';

test('should generate set start date action objrct', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action objrct', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter object', () => {
    const text = 'rent';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text
    });
});

test('should generate set text filter object for nothing entered', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by amount filter object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sort by date filter object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});