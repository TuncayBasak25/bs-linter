export default class Char {
    static readonly SPACE = new Char(32);
    static readonly EXCLAMATION = new Char(33);
    static readonly DOUBLE_QUOTE = new Char(34);
    static readonly SHARP = new Char(35);
    static readonly DOLLAR = new Char(36);
    static readonly MODULO = new Char(37);
    static readonly AND = new Char(38);
    static readonly QUOTE = new Char(39);
    static readonly OPEN_PARENTHESIS = new Char(40);
    static readonly CLOSE_PARENTHESIS = new Char(41);
    static readonly STAR = new Char(42);
    static readonly PLUS = new Char(43);
    static readonly COMMA = new Char(44);
    static readonly DASH = new Char(45);
    static readonly DOT = new Char(46);
    static readonly SLASH = new Char(47);
    static readonly D0 = new Char(48);
    static readonly D1 = new Char(49);
    static readonly D2 = new Char(50);
    static readonly D3 = new Char(51);
    static readonly D4 = new Char(52);
    static readonly D5 = new Char(53);
    static readonly D6 = new Char(54);
    static readonly D7 = new Char(55);
    static readonly D8 = new Char(56);
    static readonly D9 = new Char(57);
    static readonly COLON = new Char(58);
    static readonly SEMI_COLON = new Char(59);
    static readonly LESSER = new Char(60);
    static readonly EQUAL = new Char(61);
    static readonly GREATER = new Char(62);
    static readonly QUESTIONMARK = new Char(63);
    static readonly AT = new Char(64);
    static readonly A = new Char(65);
    static readonly B = new Char(66);
    static readonly C = new Char(67);
    static readonly D = new Char(68);
    static readonly E = new Char(69);
    static readonly F = new Char(70);
    static readonly G = new Char(71);
    static readonly H = new Char(72);
    static readonly I = new Char(73);
    static readonly J = new Char(74);
    static readonly K = new Char(75);
    static readonly L = new Char(76);
    static readonly M = new Char(77);
    static readonly N = new Char(78);
    static readonly O = new Char(79);
    static readonly P = new Char(80);
    static readonly Q = new Char(81);
    static readonly R = new Char(82);
    static readonly S = new Char(83);
    static readonly T = new Char(84);
    static readonly U = new Char(85);
    static readonly V = new Char(86);
    static readonly W = new Char(87);
    static readonly X = new Char(88);
    static readonly Y = new Char(89);
    static readonly Z = new Char(90);
    static readonly OPEN_BRACKETS = new Char(91);
    static readonly BACKSLASH = new Char(92);
    static readonly CLOSE_BRACKETS = new Char(93);
    static readonly CIRCUMFLEX = new Char(94);
    static readonly UNDERSCORE = new Char(95);
    static readonly BACK_QUOTE = new Char(96);
    static readonly a = new Char(97);
    static readonly b = new Char(98);
    static readonly c = new Char(99);
    static readonly d = new Char(100);
    static readonly e = new Char(101);
    static readonly f = new Char(102);
    static readonly g = new Char(103);
    static readonly h = new Char(104);
    static readonly i = new Char(105);
    static readonly j = new Char(106);
    static readonly k = new Char(107);
    static readonly l = new Char(108);
    static readonly m = new Char(109);
    static readonly n = new Char(110);
    static readonly o = new Char(111);
    static readonly p = new Char(112);
    static readonly q = new Char(113);
    static readonly r = new Char(114);
    static readonly s = new Char(115);
    static readonly t = new Char(116);
    static readonly u = new Char(117);
    static readonly v = new Char(118);
    static readonly w = new Char(119);
    static readonly x = new Char(120);
    static readonly y = new Char(121);
    static readonly z = new Char(122);
    static readonly OPEN_BRACES = new Char(123);
    static readonly OR = new Char(124);
    static readonly CLOSE_BRACES = new Char(125);
    static readonly EQUIVALENCY = new Char(126);

    private constructor(
        public readonly charCode: number
    ) { }

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
