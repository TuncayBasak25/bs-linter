import CharList from "./charList";
import ProgressiveIterable from "./progressiveIterable";
import Token from "./token";
import { File } from "explorer";

export default class TokenList extends ProgressiveIterable<Token> {

    private charList: CharList;

    constructor(file: File) {
        super();

        this.charList = new CharList(file);
    }

    public reset(): this {
        this.list = [];

        this.charList.reset();

        while (this.charList.undone) {
            this.list.push(new Token(this.charList));
        }

        return super.reset();
    }
}