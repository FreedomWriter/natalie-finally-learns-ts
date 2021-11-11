// Function that returns the `any` type

/**
 * Any is a type, just like string or number
 *
 * When we see `any` it means that ts can't figure out
 * what it's looking at, it can't check for correct property
 * references
 *
 * We want to avoid `any` - the whole point of ts is using types
 * to catch errors
 */

const json = '{"x": 10, "y": 20}';

// JSON.parse returns type of `any` regardless of
// the value (string, num, bool, etc) from the
// perspective of ts

// in order to get the benefits of ts, we need to annotate
// coordinates
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);
