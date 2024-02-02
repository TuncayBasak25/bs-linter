export default class Char {
    static readonly SPACE = 32;
    static readonly EXCLAMATION = 33;
    static readonly DOUBLE_QUOTE = 34;
    static readonly SHARP = 35;
    static readonly DOLLAR = 36;
    static readonly MODULO = 37;
    static readonly AND = 38;
    static readonly QUOTE = 39;
    static readonly OPEN_PARENTHESIS = 40;
    static readonly CLOSE_PARENTHESIS = 41;
    static readonly STAR = 42;
    static readonly PLUS = 43;
    static readonly COMMA = 44;
    static readonly DASH = 45;
    static readonly DOT = 46;
    static readonly SLASH = 47;
    static readonly D0 = 48;
    static readonly D1 = 49;
    static readonly D2 = 50;
    static readonly D3 = 51;
    static readonly D4 = 52;
    static readonly D5 = 53;
    static readonly D6 = 54;
    static readonly D7 = 55;
    static readonly D8 = 56;
    static readonly D9 = 57;
    static readonly COLON = 58;
    static readonly SEMI_COLON = 59;
    static readonly LESSER = 60;
    static readonly EQUAL = 61;
    static readonly GREATER = 62;
    static readonly QUESTIONMARK = 63;
    static readonly AT = 64;
    static readonly A = 65;
    static readonly B = 66;
    static readonly C = 67;
    static readonly D = 68;
    static readonly E = 69;
    static readonly F = 70;
    static readonly G = 71;
    static readonly H = 72;
    static readonly I = 73;
    static readonly J = 74;
    static readonly K = 75;
    static readonly L = 76;
    static readonly M = 77;
    static readonly N = 78;
    static readonly O = 79;
    static readonly P = 80;
    static readonly Q = 81;
    static readonly R = 82;
    static readonly S = 83;
    static readonly T = 84;
    static readonly U = 85;
    static readonly V = 86;
    static readonly W = 87;
    static readonly X = 88;
    static readonly Y = 89;
    static readonly Z = 90;
    static readonly OPEN_BRACKETS = 91;
    static readonly BACKSLASH = 92;
    static readonly CLOSE_BRACKETS = 93;
    static readonly CIRCUMFLEX = 94;
    static readonly UNDERSCORE = 95;
    static readonly BACK_QUOTE = 96;
    static readonly a = 97;
    static readonly b = 98;
    static readonly c = 99;
    static readonly d = 100;
    static readonly e = 101;
    static readonly f = 102;
    static readonly g = 103;
    static readonly h = 104;
    static readonly i = 105;
    static readonly j = 106;
    static readonly k = 107;
    static readonly l = 108;
    static readonly m = 109;
    static readonly n = 110;
    static readonly o = 111;
    static readonly p = 112;
    static readonly q = 113;
    static readonly r = 114;
    static readonly s = 115;
    static readonly t = 116;
    static readonly u = 117;
    static readonly v = 118;
    static readonly w = 119;
    static readonly x = 120;
    static readonly y = 121;
    static readonly z = 122;
    static readonly OPEN_BRACES = 123;
    static readonly OR = 124;
    static readonly CLOSE_BRACES = 125;
    static readonly EQUIVALENCY = 126;

    static isUpperCase(charCode: number): boolean {
        return charCode > 64 && charCode < 91;
    }

    static isLowerCase(charCode: number): boolean {
        return charCode > 96 && charCode < 123;
    }

    static isAlpha(charCode: number): boolean {
        return this.isUpperCase(charCode) || this.isLowerCase(charCode);
    }

    static isNumber(charCode: number): boolean {
        return charCode > 47 && charCode < 58;
    }

    static isAlphaNumeric(charCode: number): boolean {
        return this.isAlpha(charCode) || this.isNumber(charCode);
    }

    static isSymbol(charCode: number): boolean {
        return !this.isAlphaNumeric(charCode);
    }
}