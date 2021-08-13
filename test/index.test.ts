import { Option } from '../src';

it('tests Some', () => {
    const someObj = Option.some(1);
    if (someObj.isNone) {
        throw new Error('should not be None');
    } else {
        expect(someObj.value).toBe(1);
    }
});

it('tests None', () => {
    const errorObj = Option.none();
    if (errorObj.isNone) {
        return;
    } else {
        throw new Error('should be None');
    }
});
