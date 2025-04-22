// BEGIN
export default function make(numer = 0, denom = 1) {
    return {
        numer,
        denom,

        setNumer(num) {
            this.numer = num;
        },

        setDenom(den) {
            this.denom = den;
        },

        getNumer() {
            return this.numer;
        },

        getDenom() {
            return this.denom;
        },

        toString() {
            return `${this.numer}/${this.denom}`;
        },

        add(rat) {
            const newNumer = this.numer * rat.getDenom() + this.denom * rat.getNumer();
            const newDenom = this.denom * rat.getDenom();
            return make(newNumer, newDenom);
        },
    };
}
// END