import Char from "./char";
import ProgressiveIterable from "./progressiveIterable";

import { File } from "explorer";

export default class CharList extends ProgressiveIterable<Char> {

    constructor(private file: File) {
        super();

        this.reset();
    }

    public reset(): this {
        this.list = [];

        for (const charString of this.file.content) {
            const charCode = charString.charCodeAt(0);
            const char = Char.fromCharCode(charCode);

            if (char) {
                this.list.push(char);
            }
        }

        return super.reset();
    }
}