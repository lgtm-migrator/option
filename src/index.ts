export type Some<TValue> = {
    isNone: false;
    value: TValue;
};

export type None = {
    isNone: true;
};

export type Option<T> = Some<T> | None;

export const Option = {
    some: <T>(value: T): Some<T> => ({ isNone: false, value }),
    none: (): None => ({
        isNone: true,
    }),
    get: <T>(source: Option<T>): T => {
        if (source.isNone) {
            throw new Error('isNone must not be true');
        }
        return source.value;
    },
};
