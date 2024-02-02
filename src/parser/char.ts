export default class Char {
    private static readonly CHAR_LIST: Char[] = [
        new Char(32, "SPACE"),
        new Char(33, "EXCLAMATION"),
        new Char(34, "DOUBLE_QUOTE"),
        new Char(35, "SHARP"),
        new Char(36, "DOLLAR"),
        new Char(37, "MODULO"),
        new Char(38, "AND"),
        new Char(39, "QUOTE"),
        new Char(40, "OPEN_PARENTHESIS"),
        new Char(41, "CLOSE_PARENTHESIS"),
        new Char(42, "STAR"),
        new Char(43, "PLUS"),
        new Char(44, "COMMA"),
        new Char(45, "DASH"),
        new Char(46, "DOT"),
        new Char(47, "SLASH"),
        new Char(48, "0"),
        new Char(49, "1"),
        new Char(50, "2"),
        new Char(51, "3"),
        new Char(52, "4"),
        new Char(53, "5"),
        new Char(54, "6"),
        new Char(55, "7"),
        new Char(56, "8"),
        new Char(57, "9"),
        new Char(58, "COLON"),
        new Char(59, "SEMI_COLON"),
        new Char(60, "LESSER"),
        new Char(61, "EQUAL"),
        new Char(62, "GREATER"),
        new Char(63, "QUESTIONMARK"),
        new Char(64, "AT"),
        new Char(65, "A"),
        new Char(66, "B"),
        new Char(67, "C"),
        new Char(68, "D"),
        new Char(69, "E"),
        new Char(70, "F"),
        new Char(71, "G"),
        new Char(72, "H"),
        new Char(73, "I"),
        new Char(74, "J"),
        new Char(75, "K"),
        new Char(76, "L"),
        new Char(77, "M"),
        new Char(78, "N"),
        new Char(79, "O"),
        new Char(80, "P"),
        new Char(81, "Q"),
        new Char(82, "R"),
        new Char(83, "S"),
        new Char(84, "T"),
        new Char(85, "U"),
        new Char(86, "V"),
        new Char(87, "W"),
        new Char(88, "X"),
        new Char(89, "Y"),
        new Char(90, "Z"),
        new Char(91, "OPEN_BRACKETS"),
        new Char(92, "BACKSLASH"),
        new Char(93, "CLOSE_BRACKETS"),
        new Char(94, "CIRCUMFLEX"),
        new Char(95, "UNDERSCORE"),
        new Char(96, "BACK_QUOTE"),
        new Char(97, "a"),
        new Char(98, "b"),
        new Char(99, "c"),
        new Char(100, "d"),
        new Char(101, "e"),
        new Char(102, "f"),
        new Char(103, "g"),
        new Char(104, "h"),
        new Char(105, "i"),
        new Char(106, "j"),
        new Char(107, "k"),
        new Char(108, "l"),
        new Char(109, "m"),
        new Char(110, "n"),
        new Char(111, "o"),
        new Char(112, "p"),
        new Char(113, "q"),
        new Char(114, "r"),
        new Char(115, "s"),
        new Char(116, "t"),
        new Char(117, "u"),
        new Char(118, "v"),
        new Char(119, "w"),
        new Char(120, "x"),
        new Char(121, "y"),
        new Char(122, "z"),
        new Char(123, "OPEN_BRACES"),
        new Char(124, "OR"),
        new Char(125, "CLOSE_BRACES"),
        new Char(126, "EQUIVALENCY"),
    ];

    static readonly SPACE = Char.CHAR_LIST[0]
    static readonly EXCLAMATION = Char.CHAR_LIST[1]
    static readonly DOUBLE_QUOTE = Char.CHAR_LIST[2]
    static readonly SHARP = Char.CHAR_LIST[3]
    static readonly DOLLAR = Char.CHAR_LIST[4]
    static readonly MODULO = Char.CHAR_LIST[5]
    static readonly AND = Char.CHAR_LIST[6]
    static readonly QUOTE = Char.CHAR_LIST[7]
    static readonly OPEN_PARENTHESIS = Char.CHAR_LIST[8]
    static readonly CLOSE_PARENTHESIS = Char.CHAR_LIST[9]
    static readonly STAR = Char.CHAR_LIST[10]
    static readonly PLUS = Char.CHAR_LIST[11]
    static readonly COMMA = Char.CHAR_LIST[12]
    static readonly DASH = Char.CHAR_LIST[13]
    static readonly DOT = Char.CHAR_LIST[14]
    static readonly SLASH = Char.CHAR_LIST[15]
    static readonly D0 = Char.CHAR_LIST[16]
    static readonly D1 = Char.CHAR_LIST[17]
    static readonly D2 = Char.CHAR_LIST[18]
    static readonly D3 = Char.CHAR_LIST[19]
    static readonly D4 = Char.CHAR_LIST[20]
    static readonly D5 = Char.CHAR_LIST[21]
    static readonly D6 = Char.CHAR_LIST[22]
    static readonly D7 = Char.CHAR_LIST[23]
    static readonly D8 = Char.CHAR_LIST[24]
    static readonly D9 = Char.CHAR_LIST[25]
    static readonly COLON = Char.CHAR_LIST[26]
    static readonly SEMI_COLON = Char.CHAR_LIST[27]
    static readonly LESSER = Char.CHAR_LIST[28]
    static readonly EQUAL = Char.CHAR_LIST[29]
    static readonly GREATER = Char.CHAR_LIST[30]
    static readonly QUESTIONMARK = Char.CHAR_LIST[31]
    static readonly AT = Char.CHAR_LIST[32]
    static readonly A = Char.CHAR_LIST[33]
    static readonly B = Char.CHAR_LIST[34]
    static readonly C = Char.CHAR_LIST[35]
    static readonly D = Char.CHAR_LIST[36]
    static readonly E = Char.CHAR_LIST[37]
    static readonly F = Char.CHAR_LIST[38]
    static readonly G = Char.CHAR_LIST[39]
    static readonly H = Char.CHAR_LIST[40]
    static readonly I = Char.CHAR_LIST[41]
    static readonly J = Char.CHAR_LIST[42]
    static readonly K = Char.CHAR_LIST[43]
    static readonly L = Char.CHAR_LIST[44]
    static readonly M = Char.CHAR_LIST[45]
    static readonly N = Char.CHAR_LIST[46]
    static readonly O = Char.CHAR_LIST[47]
    static readonly P = Char.CHAR_LIST[48]
    static readonly Q = Char.CHAR_LIST[49]
    static readonly R = Char.CHAR_LIST[50]
    static readonly S = Char.CHAR_LIST[51]
    static readonly T = Char.CHAR_LIST[52]
    static readonly U = Char.CHAR_LIST[53]
    static readonly V = Char.CHAR_LIST[54]
    static readonly W = Char.CHAR_LIST[55]
    static readonly X = Char.CHAR_LIST[56]
    static readonly Y = Char.CHAR_LIST[57]
    static readonly Z = Char.CHAR_LIST[58]
    static readonly OPEN_BRACKETS = Char.CHAR_LIST[59]
    static readonly BACKSLASH = Char.CHAR_LIST[60]
    static readonly CLOSE_BRACKETS = Char.CHAR_LIST[61]
    static readonly CIRCUMFLEX = Char.CHAR_LIST[62]
    static readonly UNDERSCORE = Char.CHAR_LIST[63]
    static readonly BACK_QUOTE = Char.CHAR_LIST[64]
    static readonly a = Char.CHAR_LIST[65]
    static readonly b = Char.CHAR_LIST[66]
    static readonly c = Char.CHAR_LIST[67]
    static readonly d = Char.CHAR_LIST[68]
    static readonly e = Char.CHAR_LIST[69]
    static readonly f = Char.CHAR_LIST[70]
    static readonly g = Char.CHAR_LIST[71]
    static readonly h = Char.CHAR_LIST[72]
    static readonly i = Char.CHAR_LIST[73]
    static readonly j = Char.CHAR_LIST[74]
    static readonly k = Char.CHAR_LIST[75]
    static readonly l = Char.CHAR_LIST[76]
    static readonly m = Char.CHAR_LIST[77]
    static readonly n = Char.CHAR_LIST[78]
    static readonly o = Char.CHAR_LIST[79]
    static readonly p = Char.CHAR_LIST[80]
    static readonly q = Char.CHAR_LIST[81]
    static readonly r = Char.CHAR_LIST[82]
    static readonly s = Char.CHAR_LIST[83]
    static readonly t = Char.CHAR_LIST[84]
    static readonly u = Char.CHAR_LIST[85]
    static readonly v = Char.CHAR_LIST[86]
    static readonly w = Char.CHAR_LIST[87]
    static readonly x = Char.CHAR_LIST[88]
    static readonly y = Char.CHAR_LIST[89]
    static readonly z = Char.CHAR_LIST[90]
    static readonly OPEN_BRACES = Char.CHAR_LIST[91]
    static readonly OR = Char.CHAR_LIST[92]
    static readonly CLOSE_BRACES = Char.CHAR_LIST[93]
    static readonly EQUIVALENCY = Char.CHAR_LIST[94]

    public static fromCharCode(charCode: number): Char | null {
        if (charCode > 31 && charCode < 127) {
            return Char.CHAR_LIST[charCode - 32];
        }

        return null;
    }

    private constructor(
        public readonly charCode: number,
        public readonly name: string
    ) { }

    public is(char: Char) {
        return this === char;
    }

    public isNot(char: Char) {
        return this !== char;
    }

    public get stringValue(): string {
        return String.fromCharCode(this.charCode);
    }

    public get isUpperCase(): boolean {
        return this.charCode > 64 && this.charCode < 91;
    }

    public get isLowerCase(): boolean {
        return this.charCode > 96 && this.charCode < 123;
    }

    public get isAlpha(): boolean {
        return this.isUpperCase || this.isLowerCase;
    }

    public get isNumber(): boolean {
        return this.charCode > 47 && this.charCode < 58;
    }

    public get isAlphaNumeric(): boolean {
        return this.isAlpha || this.isNumber;
    }

    public get isSymbol(): boolean {
        return !this.isAlphaNumeric;
    }
}
