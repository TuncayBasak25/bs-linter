/**
 * Iterable clas for iterating over an array of generic with the ability to get previous or next values.
 * It also keep the index in case a for loop has been broken so you can continue where you left off in the next for loop.
 * You can redefine the {@link reset} method to perform some functionnality at reset otherwise this only sets the index to 0.
 */

export default class ProgressiveIterable<T> {

    protected index = 0;
    protected list: T[] = [];

    [Symbol.iterator]() {
        return {
            next: () => {
                return {
                    done: this.done,
                    value: this.list[this.index++]
                }
            }
        }
    }

    public reset(): this {
        this.index = 0;

        return this;
    }

    get done() {
        return this.index >= this.list.length;
    }

    get undone() {
        return this.index < this.list.length;
    }

    /**
     * Returns the value offsetted from the actual index, returns index element by default.
     * @throws Will throw an error {@link index} + {@link offset} is out of range.
     */
    public get(offset: number = 0): T {
        if (this.index + offset < 0 || this.index + offset >= this.list.length) {
            throw new Error(`Requested index is out of range! index = ${this.index + offset} || range: [0 ; ${this.list.length}]`);
        }

        return this.list[this.index + offset];
    }

    /**
     * Decrement the {@link index} to revert last iteration.
     */
    public revert(): void {
        this.index--;
    }

    public clone(): T[] {
        return [...this.list];
    }
}
