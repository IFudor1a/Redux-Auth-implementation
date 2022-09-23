export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export function increment(payload) {
    return {
        type: INCREMENT_COUNT,
        payload
    }
}
export function decrement(payload) {
    return {
        type: DECREMENT_COUNT,
        payload
    }
}