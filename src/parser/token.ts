import Char from "./char";
import CharList from "./charList";

export enum TokenTypes {
    EMPTY,

    WORD,

    NUMBER,

    SYMBOL
}

export default class Token {

    public type: TokenTypes = TokenTypes.EMPTY;
    
    public value: string = "";
    public char?: Char;

    constructor(charList: CharList) {
        for (const char of charList) {

            if (char.isNot(Char.SPACE)) {
                if (!this.consumeChar(char)) {
                    //If this is a whitespace, we dont want it to become a token
                    charList.revert();
                    break;
                }
            }
            else if (this.type !== TokenTypes.EMPTY) {
                break
            }

        }
    }

    private consumeChar(char: Char): boolean {
        switch (this.type) {
            case TokenTypes.EMPTY: {
                this.defineTokenType(char);

                break;
            }

            case TokenTypes.WORD: {
                if (!char.isAlphaNumeric) {
                    return false;
                };

                break;
            }

            case TokenTypes.NUMBER: {
                if (!char.isNumber && char.isNot(Char.UNDERSCORE)) {
                    return false;
                }

                break;
            }


            case TokenTypes.SYMBOL: {
                return false;
            };
        }

        this.value += char.stringValue;

        return true;
    }

    private defineTokenType(char: Char) {
        if (char.isAlpha) {
            this.type = TokenTypes.WORD;

            return;
        }

        if (char.isNumber) {
            this.type = TokenTypes.NUMBER;

            return;
        }

        this.type = TokenTypes.SYMBOL;
        this.char = char;
    }
}