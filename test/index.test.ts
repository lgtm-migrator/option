import { Option } from '../dist';

describe('index', () => {
    it('works', () => {
        expect(Option.some(1)).toEqual({ isNone: false, value: 1 });
    });
});
