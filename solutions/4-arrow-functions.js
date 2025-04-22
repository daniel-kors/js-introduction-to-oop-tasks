// BEGIN
export default function each(collection, callback) {
    for (const item of collection) {
        callback.call(item);
    }
}
// END
