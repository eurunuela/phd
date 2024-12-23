import {
  require_extend,
  unified
} from "/build/_shared/chunk-ZFADRSFR.js";
import {
  require_mdurl,
  require_regex,
  require_uc,
  u
} from "/build/_shared/chunk-3WPAJQ6A.js";
import {
  require_classnames
} from "/build/_shared/chunk-XJ2I6HXP.js";
import {
  AdmonitionKind,
  admonitionKindToTitle,
  liftChildren,
  normalizeLabel,
  remove,
  select,
  selectAll,
  setTextAsChild,
  zwitch
} from "/build/_shared/chunk-DXW3BAL6.js";
import {
  EXIT,
  SKIP,
  visit,
  visitParents
} from "/build/_shared/chunk-63RQRREX.js";
import {
  convert
} from "/build/_shared/chunk-6RGX3KNX.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/myst-to-html/node_modules/entities/lib/maps/entities.json
var require_entities = __commonJS({
  "../../node_modules/myst-to-html/node_modules/entities/lib/maps/entities.json"(exports, module) {
    module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  }
});

// ../../node_modules/myst-to-html/node_modules/markdown-it/lib/common/entities.js
var require_entities2 = __commonJS({
  "../../node_modules/myst-to-html/node_modules/markdown-it/lib/common/entities.js"(exports, module) {
    "use strict";
    module.exports = require_entities();
  }
});

// ../../node_modules/myst-to-html/node_modules/markdown-it/lib/common/utils.js
var require_utils = __commonJS({
  "../../node_modules/myst-to-html/node_modules/markdown-it/lib/common/utils.js"(exports) {
    "use strict";
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has(object, key2) {
      return _hasOwnProperty.call(object, key2);
    }
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source2) {
        if (!source2) {
          return;
        }
        if (typeof source2 !== "object") {
          throw new TypeError(source2 + "must be object");
        }
        Object.keys(source2).forEach(function(key2) {
          obj[key2] = source2[key2];
        });
      });
      return obj;
    }
    function arrayReplaceAt(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    function isValidEntityCode(c) {
      if (c >= 55296 && c <= 57343) {
        return false;
      }
      if (c >= 64976 && c <= 65007) {
        return false;
      }
      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }
      if (c >= 0 && c <= 8) {
        return false;
      }
      if (c === 11) {
        return false;
      }
      if (c >= 14 && c <= 31) {
        return false;
      }
      if (c >= 127 && c <= 159) {
        return false;
      }
      if (c > 1114111) {
        return false;
      }
      return true;
    }
    function fromCodePoint(c) {
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
    var entities = require_entities2();
    function replaceEntityPattern(match, name) {
      var code4;
      if (has(entities, name)) {
        return entities[name];
      }
      if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code4 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if (isValidEntityCode(code4)) {
          return fromCodePoint(code4);
        }
      }
      return match;
    }
    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_MD_RE, "$1");
    }
    function unescapeAll(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
        if (escaped) {
          return escaped;
        }
        return replaceEntityPattern(match, entity);
      });
    }
    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml2(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }
      return str;
    }
    var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }
    function isSpace(code4) {
      switch (code4) {
        case 9:
        case 32:
          return true;
      }
      return false;
    }
    function isWhiteSpace(code4) {
      if (code4 >= 8192 && code4 <= 8202) {
        return true;
      }
      switch (code4) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return true;
      }
      return false;
    }
    var UNICODE_PUNCT_RE = require_regex();
    function isPunctChar(ch) {
      return UNICODE_PUNCT_RE.test(ch);
    }
    function isMdAsciiPunct(ch) {
      switch (ch) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    function normalizeReference(str) {
      str = str.trim().replace(/\s+/g, " ");
      if ("\u1E9E".toLowerCase() === "\u1E7E") {
        str = str.replace(/ẞ/g, "\xDF");
      }
      return str.toLowerCase().toUpperCase();
    }
    exports.lib = {};
    exports.lib.mdurl = require_mdurl();
    exports.lib.ucmicro = require_uc();
    exports.assign = assign;
    exports.isString = isString;
    exports.has = has;
    exports.unescapeMd = unescapeMd;
    exports.unescapeAll = unescapeAll;
    exports.isValidEntityCode = isValidEntityCode;
    exports.fromCodePoint = fromCodePoint;
    exports.escapeHtml = escapeHtml2;
    exports.arrayReplaceAt = arrayReplaceAt;
    exports.isSpace = isSpace;
    exports.isWhiteSpace = isWhiteSpace;
    exports.isMdAsciiPunct = isMdAsciiPunct;
    exports.isPunctChar = isPunctChar;
    exports.escapeRE = escapeRE;
    exports.normalizeReference = normalizeReference;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/common/unicode.js
var require_unicode = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/common/unicode.js"(exports) {
    "use strict";
    var UNDEFINED_CODE_POINTS = [
      65534,
      65535,
      131070,
      131071,
      196606,
      196607,
      262142,
      262143,
      327678,
      327679,
      393214,
      393215,
      458750,
      458751,
      524286,
      524287,
      589822,
      589823,
      655358,
      655359,
      720894,
      720895,
      786430,
      786431,
      851966,
      851967,
      917502,
      917503,
      983038,
      983039,
      1048574,
      1048575,
      1114110,
      1114111
    ];
    exports.REPLACEMENT_CHARACTER = "\uFFFD";
    exports.CODE_POINTS = {
      EOF: -1,
      NULL: 0,
      TABULATION: 9,
      CARRIAGE_RETURN: 13,
      LINE_FEED: 10,
      FORM_FEED: 12,
      SPACE: 32,
      EXCLAMATION_MARK: 33,
      QUOTATION_MARK: 34,
      NUMBER_SIGN: 35,
      AMPERSAND: 38,
      APOSTROPHE: 39,
      HYPHEN_MINUS: 45,
      SOLIDUS: 47,
      DIGIT_0: 48,
      DIGIT_9: 57,
      SEMICOLON: 59,
      LESS_THAN_SIGN: 60,
      EQUALS_SIGN: 61,
      GREATER_THAN_SIGN: 62,
      QUESTION_MARK: 63,
      LATIN_CAPITAL_A: 65,
      LATIN_CAPITAL_F: 70,
      LATIN_CAPITAL_X: 88,
      LATIN_CAPITAL_Z: 90,
      RIGHT_SQUARE_BRACKET: 93,
      GRAVE_ACCENT: 96,
      LATIN_SMALL_A: 97,
      LATIN_SMALL_F: 102,
      LATIN_SMALL_X: 120,
      LATIN_SMALL_Z: 122,
      REPLACEMENT_CHARACTER: 65533
    };
    exports.CODE_POINT_SEQUENCES = {
      DASH_DASH_STRING: [45, 45],
      //--
      DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
      //DOCTYPE
      CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
      //[CDATA[
      SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
      //script
      PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
      //PUBLIC
      SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
      //SYSTEM
    };
    exports.isSurrogate = function(cp) {
      return cp >= 55296 && cp <= 57343;
    };
    exports.isSurrogatePair = function(cp) {
      return cp >= 56320 && cp <= 57343;
    };
    exports.getSurrogatePairCodePoint = function(cp1, cp2) {
      return (cp1 - 55296) * 1024 + 9216 + cp2;
    };
    exports.isControlCodePoint = function(cp) {
      return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
    };
    exports.isUndefinedCodePoint = function(cp) {
      return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.indexOf(cp) > -1;
    };
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/common/error-codes.js
var require_error_codes = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/common/error-codes.js"(exports, module) {
    "use strict";
    module.exports = {
      controlCharacterInInputStream: "control-character-in-input-stream",
      noncharacterInInputStream: "noncharacter-in-input-stream",
      surrogateInInputStream: "surrogate-in-input-stream",
      nonVoidHtmlElementStartTagWithTrailingSolidus: "non-void-html-element-start-tag-with-trailing-solidus",
      endTagWithAttributes: "end-tag-with-attributes",
      endTagWithTrailingSolidus: "end-tag-with-trailing-solidus",
      unexpectedSolidusInTag: "unexpected-solidus-in-tag",
      unexpectedNullCharacter: "unexpected-null-character",
      unexpectedQuestionMarkInsteadOfTagName: "unexpected-question-mark-instead-of-tag-name",
      invalidFirstCharacterOfTagName: "invalid-first-character-of-tag-name",
      unexpectedEqualsSignBeforeAttributeName: "unexpected-equals-sign-before-attribute-name",
      missingEndTagName: "missing-end-tag-name",
      unexpectedCharacterInAttributeName: "unexpected-character-in-attribute-name",
      unknownNamedCharacterReference: "unknown-named-character-reference",
      missingSemicolonAfterCharacterReference: "missing-semicolon-after-character-reference",
      unexpectedCharacterAfterDoctypeSystemIdentifier: "unexpected-character-after-doctype-system-identifier",
      unexpectedCharacterInUnquotedAttributeValue: "unexpected-character-in-unquoted-attribute-value",
      eofBeforeTagName: "eof-before-tag-name",
      eofInTag: "eof-in-tag",
      missingAttributeValue: "missing-attribute-value",
      missingWhitespaceBetweenAttributes: "missing-whitespace-between-attributes",
      missingWhitespaceAfterDoctypePublicKeyword: "missing-whitespace-after-doctype-public-keyword",
      missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: "missing-whitespace-between-doctype-public-and-system-identifiers",
      missingWhitespaceAfterDoctypeSystemKeyword: "missing-whitespace-after-doctype-system-keyword",
      missingQuoteBeforeDoctypePublicIdentifier: "missing-quote-before-doctype-public-identifier",
      missingQuoteBeforeDoctypeSystemIdentifier: "missing-quote-before-doctype-system-identifier",
      missingDoctypePublicIdentifier: "missing-doctype-public-identifier",
      missingDoctypeSystemIdentifier: "missing-doctype-system-identifier",
      abruptDoctypePublicIdentifier: "abrupt-doctype-public-identifier",
      abruptDoctypeSystemIdentifier: "abrupt-doctype-system-identifier",
      cdataInHtmlContent: "cdata-in-html-content",
      incorrectlyOpenedComment: "incorrectly-opened-comment",
      eofInScriptHtmlCommentLikeText: "eof-in-script-html-comment-like-text",
      eofInDoctype: "eof-in-doctype",
      nestedComment: "nested-comment",
      abruptClosingOfEmptyComment: "abrupt-closing-of-empty-comment",
      eofInComment: "eof-in-comment",
      incorrectlyClosedComment: "incorrectly-closed-comment",
      eofInCdata: "eof-in-cdata",
      absenceOfDigitsInNumericCharacterReference: "absence-of-digits-in-numeric-character-reference",
      nullCharacterReference: "null-character-reference",
      surrogateCharacterReference: "surrogate-character-reference",
      characterReferenceOutsideUnicodeRange: "character-reference-outside-unicode-range",
      controlCharacterReference: "control-character-reference",
      noncharacterCharacterReference: "noncharacter-character-reference",
      missingWhitespaceBeforeDoctypeName: "missing-whitespace-before-doctype-name",
      missingDoctypeName: "missing-doctype-name",
      invalidCharacterSequenceAfterDoctypeName: "invalid-character-sequence-after-doctype-name",
      duplicateAttribute: "duplicate-attribute",
      nonConformingDoctype: "non-conforming-doctype",
      missingDoctype: "missing-doctype",
      misplacedDoctype: "misplaced-doctype",
      endTagWithoutMatchingOpenElement: "end-tag-without-matching-open-element",
      closingOfElementWithOpenChildElements: "closing-of-element-with-open-child-elements",
      disallowedContentInNoscriptInHead: "disallowed-content-in-noscript-in-head",
      openElementsLeftAfterEof: "open-elements-left-after-eof",
      abandonedHeadElementChild: "abandoned-head-element-child",
      misplacedStartTagForHeadElement: "misplaced-start-tag-for-head-element",
      nestedNoscriptInHead: "nested-noscript-in-head",
      eofInElementThatCanContainOnlyText: "eof-in-element-that-can-contain-only-text"
    };
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/preprocessor.js
var require_preprocessor = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/preprocessor.js"(exports, module) {
    "use strict";
    var unicode = require_unicode();
    var ERR = require_error_codes();
    var $ = unicode.CODE_POINTS;
    var DEFAULT_BUFFER_WATERLINE = 1 << 16;
    var Preprocessor = class {
      constructor() {
        this.html = null;
        this.pos = -1;
        this.lastGapPos = -1;
        this.lastCharPos = -1;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
      }
      _err() {
      }
      _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
      }
      _processSurrogate(cp) {
        if (this.pos !== this.lastCharPos) {
          const nextCp = this.html.charCodeAt(this.pos + 1);
          if (unicode.isSurrogatePair(nextCp)) {
            this.pos++;
            this._addGap();
            return unicode.getSurrogatePairCodePoint(cp, nextCp);
          }
        } else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return $.EOF;
        }
        this._err(ERR.surrogateInInputStream);
        return cp;
      }
      dropParsedChunk() {
        if (this.pos > this.bufferWaterline) {
          this.lastCharPos -= this.pos;
          this.html = this.html.substring(this.pos);
          this.pos = 0;
          this.lastGapPos = -1;
          this.gapStack = [];
        }
      }
      write(chunk, isLastChunk) {
        if (this.html) {
          this.html += chunk;
        } else {
          this.html = chunk;
        }
        this.lastCharPos = this.html.length - 1;
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
      }
      insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1, this.html.length);
        this.lastCharPos = this.html.length - 1;
        this.endOfChunkHit = false;
      }
      advance() {
        this.pos++;
        if (this.pos > this.lastCharPos) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return $.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        if (this.skipNextNewLine && cp === $.LINE_FEED) {
          this.skipNextNewLine = false;
          this._addGap();
          return this.advance();
        }
        if (cp === $.CARRIAGE_RETURN) {
          this.skipNextNewLine = true;
          return $.LINE_FEED;
        }
        this.skipNextNewLine = false;
        if (unicode.isSurrogate(cp)) {
          cp = this._processSurrogate(cp);
        }
        const isCommonValidRange = cp > 31 && cp < 127 || cp === $.LINE_FEED || cp === $.CARRIAGE_RETURN || cp > 159 && cp < 64976;
        if (!isCommonValidRange) {
          this._checkForProblematicCharacters(cp);
        }
        return cp;
      }
      _checkForProblematicCharacters(cp) {
        if (unicode.isControlCodePoint(cp)) {
          this._err(ERR.controlCharacterInInputStream);
        } else if (unicode.isUndefinedCodePoint(cp)) {
          this._err(ERR.noncharacterInInputStream);
        }
      }
      retreat() {
        if (this.pos === this.lastGapPos) {
          this.lastGapPos = this.gapStack.pop();
          this.pos--;
        }
        this.pos--;
      }
    };
    module.exports = Preprocessor;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/named-entity-data.js
var require_named_entity_data = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/named-entity-data.js"(exports, module) {
    "use strict";
    module.exports = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4e3, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 1e4, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13e3, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204]);
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/index.js
var require_tokenizer = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/tokenizer/index.js"(exports, module) {
    "use strict";
    var Preprocessor = require_preprocessor();
    var unicode = require_unicode();
    var neTree = require_named_entity_data();
    var ERR = require_error_codes();
    var $ = unicode.CODE_POINTS;
    var $$ = unicode.CODE_POINT_SEQUENCES;
    var C1_CONTROLS_REFERENCE_REPLACEMENTS = {
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };
    var HAS_DATA_FLAG = 1 << 0;
    var DATA_DUPLET_FLAG = 1 << 1;
    var HAS_BRANCHES_FLAG = 1 << 2;
    var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG;
    var DATA_STATE = "DATA_STATE";
    var RCDATA_STATE = "RCDATA_STATE";
    var RAWTEXT_STATE = "RAWTEXT_STATE";
    var SCRIPT_DATA_STATE = "SCRIPT_DATA_STATE";
    var PLAINTEXT_STATE = "PLAINTEXT_STATE";
    var TAG_OPEN_STATE = "TAG_OPEN_STATE";
    var END_TAG_OPEN_STATE = "END_TAG_OPEN_STATE";
    var TAG_NAME_STATE = "TAG_NAME_STATE";
    var RCDATA_LESS_THAN_SIGN_STATE = "RCDATA_LESS_THAN_SIGN_STATE";
    var RCDATA_END_TAG_OPEN_STATE = "RCDATA_END_TAG_OPEN_STATE";
    var RCDATA_END_TAG_NAME_STATE = "RCDATA_END_TAG_NAME_STATE";
    var RAWTEXT_LESS_THAN_SIGN_STATE = "RAWTEXT_LESS_THAN_SIGN_STATE";
    var RAWTEXT_END_TAG_OPEN_STATE = "RAWTEXT_END_TAG_OPEN_STATE";
    var RAWTEXT_END_TAG_NAME_STATE = "RAWTEXT_END_TAG_NAME_STATE";
    var SCRIPT_DATA_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_LESS_THAN_SIGN_STATE";
    var SCRIPT_DATA_END_TAG_OPEN_STATE = "SCRIPT_DATA_END_TAG_OPEN_STATE";
    var SCRIPT_DATA_END_TAG_NAME_STATE = "SCRIPT_DATA_END_TAG_NAME_STATE";
    var SCRIPT_DATA_ESCAPE_START_STATE = "SCRIPT_DATA_ESCAPE_START_STATE";
    var SCRIPT_DATA_ESCAPE_START_DASH_STATE = "SCRIPT_DATA_ESCAPE_START_DASH_STATE";
    var SCRIPT_DATA_ESCAPED_STATE = "SCRIPT_DATA_ESCAPED_STATE";
    var SCRIPT_DATA_ESCAPED_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_STATE";
    var SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE";
    var SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";
    var SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE";
    var SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPED_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE";
    var BEFORE_ATTRIBUTE_NAME_STATE = "BEFORE_ATTRIBUTE_NAME_STATE";
    var ATTRIBUTE_NAME_STATE = "ATTRIBUTE_NAME_STATE";
    var AFTER_ATTRIBUTE_NAME_STATE = "AFTER_ATTRIBUTE_NAME_STATE";
    var BEFORE_ATTRIBUTE_VALUE_STATE = "BEFORE_ATTRIBUTE_VALUE_STATE";
    var ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE";
    var ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE";
    var ATTRIBUTE_VALUE_UNQUOTED_STATE = "ATTRIBUTE_VALUE_UNQUOTED_STATE";
    var AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE";
    var SELF_CLOSING_START_TAG_STATE = "SELF_CLOSING_START_TAG_STATE";
    var BOGUS_COMMENT_STATE = "BOGUS_COMMENT_STATE";
    var MARKUP_DECLARATION_OPEN_STATE = "MARKUP_DECLARATION_OPEN_STATE";
    var COMMENT_START_STATE = "COMMENT_START_STATE";
    var COMMENT_START_DASH_STATE = "COMMENT_START_DASH_STATE";
    var COMMENT_STATE = "COMMENT_STATE";
    var COMMENT_LESS_THAN_SIGN_STATE = "COMMENT_LESS_THAN_SIGN_STATE";
    var COMMENT_LESS_THAN_SIGN_BANG_STATE = "COMMENT_LESS_THAN_SIGN_BANG_STATE";
    var COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE = "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE";
    var COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE";
    var COMMENT_END_DASH_STATE = "COMMENT_END_DASH_STATE";
    var COMMENT_END_STATE = "COMMENT_END_STATE";
    var COMMENT_END_BANG_STATE = "COMMENT_END_BANG_STATE";
    var DOCTYPE_STATE = "DOCTYPE_STATE";
    var BEFORE_DOCTYPE_NAME_STATE = "BEFORE_DOCTYPE_NAME_STATE";
    var DOCTYPE_NAME_STATE = "DOCTYPE_NAME_STATE";
    var AFTER_DOCTYPE_NAME_STATE = "AFTER_DOCTYPE_NAME_STATE";
    var AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE = "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE";
    var BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
    var DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE";
    var DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE";
    var AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
    var BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE";
    var AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE = "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE";
    var BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
    var DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";
    var DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";
    var AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
    var BOGUS_DOCTYPE_STATE = "BOGUS_DOCTYPE_STATE";
    var CDATA_SECTION_STATE = "CDATA_SECTION_STATE";
    var CDATA_SECTION_BRACKET_STATE = "CDATA_SECTION_BRACKET_STATE";
    var CDATA_SECTION_END_STATE = "CDATA_SECTION_END_STATE";
    var CHARACTER_REFERENCE_STATE = "CHARACTER_REFERENCE_STATE";
    var NAMED_CHARACTER_REFERENCE_STATE = "NAMED_CHARACTER_REFERENCE_STATE";
    var AMBIGUOUS_AMPERSAND_STATE = "AMBIGUOS_AMPERSAND_STATE";
    var NUMERIC_CHARACTER_REFERENCE_STATE = "NUMERIC_CHARACTER_REFERENCE_STATE";
    var HEXADEMICAL_CHARACTER_REFERENCE_START_STATE = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE";
    var DECIMAL_CHARACTER_REFERENCE_START_STATE = "DECIMAL_CHARACTER_REFERENCE_START_STATE";
    var HEXADEMICAL_CHARACTER_REFERENCE_STATE = "HEXADEMICAL_CHARACTER_REFERENCE_STATE";
    var DECIMAL_CHARACTER_REFERENCE_STATE = "DECIMAL_CHARACTER_REFERENCE_STATE";
    var NUMERIC_CHARACTER_REFERENCE_END_STATE = "NUMERIC_CHARACTER_REFERENCE_END_STATE";
    function isWhitespace(cp) {
      return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
    }
    function isAsciiDigit(cp) {
      return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
    }
    function isAsciiUpper(cp) {
      return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
    }
    function isAsciiLower(cp) {
      return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
    }
    function isAsciiLetter(cp) {
      return isAsciiLower(cp) || isAsciiUpper(cp);
    }
    function isAsciiAlphaNumeric(cp) {
      return isAsciiLetter(cp) || isAsciiDigit(cp);
    }
    function isAsciiUpperHexDigit(cp) {
      return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F;
    }
    function isAsciiLowerHexDigit(cp) {
      return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F;
    }
    function isAsciiHexDigit(cp) {
      return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
    }
    function toAsciiLowerCodePoint(cp) {
      return cp + 32;
    }
    function toChar(cp) {
      if (cp <= 65535) {
        return String.fromCharCode(cp);
      }
      cp -= 65536;
      return String.fromCharCode(cp >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | cp & 1023);
    }
    function toAsciiLowerChar(cp) {
      return String.fromCharCode(toAsciiLowerCodePoint(cp));
    }
    function findNamedEntityTreeBranch(nodeIx, cp) {
      const branchCount = neTree[++nodeIx];
      let lo = ++nodeIx;
      let hi = lo + branchCount - 1;
      while (lo <= hi) {
        const mid = lo + hi >>> 1;
        const midCp = neTree[mid];
        if (midCp < cp) {
          lo = mid + 1;
        } else if (midCp > cp) {
          hi = mid - 1;
        } else {
          return neTree[mid + branchCount];
        }
      }
      return -1;
    }
    var Tokenizer = class {
      constructor() {
        this.preprocessor = new Preprocessor();
        this.tokenQueue = [];
        this.allowCDATA = false;
        this.state = DATA_STATE;
        this.returnState = "";
        this.charRefCode = -1;
        this.tempBuff = [];
        this.lastStartTagName = "";
        this.consumedAfterSnapshot = -1;
        this.active = false;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = null;
      }
      //Errors
      _err() {
      }
      _errOnNextCodePoint(err) {
        this._consume();
        this._err(err);
        this._unconsume();
      }
      //API
      getNextToken() {
        while (!this.tokenQueue.length && this.active) {
          this.consumedAfterSnapshot = 0;
          const cp = this._consume();
          if (!this._ensureHibernation()) {
            this[this.state](cp);
          }
        }
        return this.tokenQueue.shift();
      }
      write(chunk, isLastChunk) {
        this.active = true;
        this.preprocessor.write(chunk, isLastChunk);
      }
      insertHtmlAtCurrentPos(chunk) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk);
      }
      //Hibernation
      _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
          for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
            this.preprocessor.retreat();
          }
          this.active = false;
          this.tokenQueue.push({ type: Tokenizer.HIBERNATION_TOKEN });
          return true;
        }
        return false;
      }
      //Consumption
      _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
      }
      _unconsume() {
        this.consumedAfterSnapshot--;
        this.preprocessor.retreat();
      }
      _reconsumeInState(state) {
        this.state = state;
        this._unconsume();
      }
      _consumeSequenceIfMatch(pattern, startCp, caseSensitive) {
        let consumedCount = 0;
        let isMatch = true;
        const patternLength = pattern.length;
        let patternPos = 0;
        let cp = startCp;
        let patternCp = void 0;
        for (; patternPos < patternLength; patternPos++) {
          if (patternPos > 0) {
            cp = this._consume();
            consumedCount++;
          }
          if (cp === $.EOF) {
            isMatch = false;
            break;
          }
          patternCp = pattern[patternPos];
          if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
            isMatch = false;
            break;
          }
        }
        if (!isMatch) {
          while (consumedCount--) {
            this._unconsume();
          }
        }
        return isMatch;
      }
      //Temp buffer
      _isTempBufferEqualToScriptString() {
        if (this.tempBuff.length !== $$.SCRIPT_STRING.length) {
          return false;
        }
        for (let i = 0; i < this.tempBuff.length; i++) {
          if (this.tempBuff[i] !== $$.SCRIPT_STRING[i]) {
            return false;
          }
        }
        return true;
      }
      //Token creation
      _createStartTagToken() {
        this.currentToken = {
          type: Tokenizer.START_TAG_TOKEN,
          tagName: "",
          selfClosing: false,
          ackSelfClosing: false,
          attrs: []
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: Tokenizer.END_TAG_TOKEN,
          tagName: "",
          selfClosing: false,
          attrs: []
        };
      }
      _createCommentToken() {
        this.currentToken = {
          type: Tokenizer.COMMENT_TOKEN,
          data: ""
        };
      }
      _createDoctypeToken(initialName) {
        this.currentToken = {
          type: Tokenizer.DOCTYPE_TOKEN,
          name: initialName,
          forceQuirks: false,
          publicId: null,
          systemId: null
        };
      }
      _createCharacterToken(type, ch) {
        this.currentCharacterToken = {
          type,
          chars: ch
        };
      }
      _createEOFToken() {
        this.currentToken = { type: Tokenizer.EOF_TOKEN };
      }
      //Tag attributes
      _createAttr(attrNameFirstCh) {
        this.currentAttr = {
          name: attrNameFirstCh,
          value: ""
        };
      }
      _leaveAttrName(toState) {
        if (Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) === null) {
          this.currentToken.attrs.push(this.currentAttr);
        } else {
          this._err(ERR.duplicateAttribute);
        }
        this.state = toState;
      }
      _leaveAttrValue(toState) {
        this.state = toState;
      }
      //Token emission
      _emitCurrentToken() {
        this._emitCurrentCharacterToken();
        const ct = this.currentToken;
        this.currentToken = null;
        if (ct.type === Tokenizer.START_TAG_TOKEN) {
          this.lastStartTagName = ct.tagName;
        } else if (ct.type === Tokenizer.END_TAG_TOKEN) {
          if (ct.attrs.length > 0) {
            this._err(ERR.endTagWithAttributes);
          }
          if (ct.selfClosing) {
            this._err(ERR.endTagWithTrailingSolidus);
          }
        }
        this.tokenQueue.push(ct);
      }
      _emitCurrentCharacterToken() {
        if (this.currentCharacterToken) {
          this.tokenQueue.push(this.currentCharacterToken);
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        this._createEOFToken();
        this._emitCurrentToken();
      }
      //Characters emission
      //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
      //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
      //If we have a sequence of characters that belong to the same group, parser can process it
      //as a single solid character token.
      //So, there are 3 types of character tokens in parse5:
      //1)NULL_CHARACTER_TOKEN - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
      //2)WHITESPACE_CHARACTER_TOKEN - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
      //3)CHARACTER_TOKEN - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
      _appendCharToCurrentCharacterToken(type, ch) {
        if (this.currentCharacterToken && this.currentCharacterToken.type !== type) {
          this._emitCurrentCharacterToken();
        }
        if (this.currentCharacterToken) {
          this.currentCharacterToken.chars += ch;
        } else {
          this._createCharacterToken(type, ch);
        }
      }
      _emitCodePoint(cp) {
        let type = Tokenizer.CHARACTER_TOKEN;
        if (isWhitespace(cp)) {
          type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;
        } else if (cp === $.NULL) {
          type = Tokenizer.NULL_CHARACTER_TOKEN;
        }
        this._appendCharToCurrentCharacterToken(type, toChar(cp));
      }
      _emitSeveralCodePoints(codePoints) {
        for (let i = 0; i < codePoints.length; i++) {
          this._emitCodePoint(codePoints[i]);
        }
      }
      //NOTE: used then we emit character explicitly. This is always a non-whitespace and a non-null character.
      //So we can avoid additional checks here.
      _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
      }
      // Character reference helpers
      _matchNamedCharacterReference(startCp) {
        let result = null;
        let excess = 1;
        let i = findNamedEntityTreeBranch(0, startCp);
        this.tempBuff.push(startCp);
        while (i > -1) {
          const current = neTree[i];
          const inNode = current < MAX_BRANCH_MARKER_VALUE;
          const nodeWithData = inNode && current & HAS_DATA_FLAG;
          if (nodeWithData) {
            result = current & DATA_DUPLET_FLAG ? [neTree[++i], neTree[++i]] : [neTree[++i]];
            excess = 0;
          }
          const cp = this._consume();
          this.tempBuff.push(cp);
          excess++;
          if (cp === $.EOF) {
            break;
          }
          if (inNode) {
            i = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i, cp) : -1;
          } else {
            i = cp === current ? ++i : -1;
          }
        }
        while (excess--) {
          this.tempBuff.pop();
          this._unconsume();
        }
        return result;
      }
      _isCharacterReferenceInAttribute() {
        return this.returnState === ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_UNQUOTED_STATE;
      }
      _isCharacterReferenceAttributeQuirk(withSemicolon) {
        if (!withSemicolon && this._isCharacterReferenceInAttribute()) {
          const nextCp = this._consume();
          this._unconsume();
          return nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
        }
        return false;
      }
      _flushCodePointsConsumedAsCharacterReference() {
        if (this._isCharacterReferenceInAttribute()) {
          for (let i = 0; i < this.tempBuff.length; i++) {
            this.currentAttr.value += toChar(this.tempBuff[i]);
          }
        } else {
          this._emitSeveralCodePoints(this.tempBuff);
        }
        this.tempBuff = [];
      }
      // State machine
      // Data state
      //------------------------------------------------------------------
      [DATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = TAG_OPEN_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = DATA_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitCodePoint(cp);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      //  RCDATA state
      //------------------------------------------------------------------
      [RCDATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.AMPERSAND) {
          this.returnState = RCDATA_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = RCDATA_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      // RAWTEXT state
      //------------------------------------------------------------------
      [RAWTEXT_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = RAWTEXT_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      // Script data state
      //------------------------------------------------------------------
      [SCRIPT_DATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      // PLAINTEXT state
      //------------------------------------------------------------------
      [PLAINTEXT_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      // Tag open state
      //------------------------------------------------------------------
      [TAG_OPEN_STATE](cp) {
        if (cp === $.EXCLAMATION_MARK) {
          this.state = MARKUP_DECLARATION_OPEN_STATE;
        } else if (cp === $.SOLIDUS) {
          this.state = END_TAG_OPEN_STATE;
        } else if (isAsciiLetter(cp)) {
          this._createStartTagToken();
          this._reconsumeInState(TAG_NAME_STATE);
        } else if (cp === $.QUESTION_MARK) {
          this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        } else if (cp === $.EOF) {
          this._err(ERR.eofBeforeTagName);
          this._emitChars("<");
          this._emitEOFToken();
        } else {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._emitChars("<");
          this._reconsumeInState(DATA_STATE);
        }
      }
      // End tag open state
      //------------------------------------------------------------------
      [END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(TAG_NAME_STATE);
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingEndTagName);
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofBeforeTagName);
          this._emitChars("</");
          this._emitEOFToken();
        } else {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        }
      }
      // Tag name state
      //------------------------------------------------------------------
      [TAG_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_ATTRIBUTE_NAME_STATE;
        } else if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.tagName += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentToken.tagName += toChar(cp);
        }
      }
      // RCDATA less-than sign state
      //------------------------------------------------------------------
      [RCDATA_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = RCDATA_END_TAG_OPEN_STATE;
        } else {
          this._emitChars("<");
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      // RCDATA end tag open state
      //------------------------------------------------------------------
      [RCDATA_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
        } else {
          this._emitChars("</");
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      // RCDATA end tag name state
      //------------------------------------------------------------------
      [RCDATA_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this.state = DATA_STATE;
              this._emitCurrentToken();
              return;
            }
          }
          this._emitChars("</");
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      // RAWTEXT less-than sign state
      //------------------------------------------------------------------
      [RAWTEXT_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = RAWTEXT_END_TAG_OPEN_STATE;
        } else {
          this._emitChars("<");
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      // RAWTEXT end tag open state
      //------------------------------------------------------------------
      [RAWTEXT_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
        } else {
          this._emitChars("</");
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      // RAWTEXT end tag name state
      //------------------------------------------------------------------
      [RAWTEXT_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars("</");
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      // Script data less-than sign state
      //------------------------------------------------------------------
      [SCRIPT_DATA_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
        } else if (cp === $.EXCLAMATION_MARK) {
          this.state = SCRIPT_DATA_ESCAPE_START_STATE;
          this._emitChars("<!");
        } else {
          this._emitChars("<");
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      // Script data end tag open state
      //------------------------------------------------------------------
      [SCRIPT_DATA_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
        } else {
          this._emitChars("</");
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      // Script data end tag name state
      //------------------------------------------------------------------
      [SCRIPT_DATA_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            } else if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            } else if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars("</");
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      // Script data escape start state
      //------------------------------------------------------------------
      [SCRIPT_DATA_ESCAPE_START_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
          this._emitChars("-");
        } else {
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      // Script data escape start dash state
      //------------------------------------------------------------------
      [SCRIPT_DATA_ESCAPE_START_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
          this._emitChars("-");
        } else {
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      // Script data escaped state
      //------------------------------------------------------------------
      [SCRIPT_DATA_ESCAPED_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      // Script data escaped dash state
      //------------------------------------------------------------------
      [SCRIPT_DATA_ESCAPED_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      // Script data escaped dash dash state
      //------------------------------------------------------------------
      [SCRIPT_DATA_ESCAPED_DASH_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = SCRIPT_DATA_STATE;
          this._emitChars(">");
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      // Script data escaped less-than sign state
      //------------------------------------------------------------------
      [SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
        } else if (isAsciiLetter(cp)) {
          this.tempBuff = [];
          this._emitChars("<");
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
        } else {
          this._emitChars("<");
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      // Script data escaped end tag open state
      //------------------------------------------------------------------
      [SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
        } else {
          this._emitChars("</");
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      // Script data escaped end tag name state
      //------------------------------------------------------------------
      [SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars("</");
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      // Script data double escape start state
      //------------------------------------------------------------------
      [SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
          this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        } else if (isAsciiUpper(cp)) {
          this.tempBuff.push(toAsciiLowerCodePoint(cp));
          this._emitCodePoint(cp);
        } else if (isAsciiLower(cp)) {
          this.tempBuff.push(cp);
          this._emitCodePoint(cp);
        } else {
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      // Script data double escaped state
      //------------------------------------------------------------------
      [SCRIPT_DATA_DOUBLE_ESCAPED_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars("<");
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      // Script data double escaped dash state
      //------------------------------------------------------------------
      [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars("<");
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      // Script data double escaped dash dash state
      //------------------------------------------------------------------
      [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars("<");
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = SCRIPT_DATA_STATE;
          this._emitChars(">");
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      // Script data double escaped less-than sign state
      //------------------------------------------------------------------
      [SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
          this._emitChars("/");
        } else {
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
        }
      }
      // Script data double escape end state
      //------------------------------------------------------------------
      [SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
          this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        } else if (isAsciiUpper(cp)) {
          this.tempBuff.push(toAsciiLowerCodePoint(cp));
          this._emitCodePoint(cp);
        } else if (isAsciiLower(cp)) {
          this.tempBuff.push(cp);
          this._emitCodePoint(cp);
        } else {
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
        }
      }
      // Before attribute name state
      //------------------------------------------------------------------
      [BEFORE_ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
          this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.EQUALS_SIGN) {
          this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
          this._createAttr("=");
          this.state = ATTRIBUTE_NAME_STATE;
        } else {
          this._createAttr("");
          this._reconsumeInState(ATTRIBUTE_NAME_STATE);
        }
      }
      // Attribute name state
      //------------------------------------------------------------------
      [ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
          this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);
          this._unconsume();
        } else if (cp === $.EQUALS_SIGN) {
          this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);
        } else if (isAsciiUpper(cp)) {
          this.currentAttr.name += toAsciiLowerChar(cp);
        } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN) {
          this._err(ERR.unexpectedCharacterInAttributeName);
          this.currentAttr.name += toChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.name += unicode.REPLACEMENT_CHARACTER;
        } else {
          this.currentAttr.name += toChar(cp);
        }
      }
      // After attribute name state
      //------------------------------------------------------------------
      [AFTER_ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
        } else if (cp === $.EQUALS_SIGN) {
          this.state = BEFORE_ATTRIBUTE_VALUE_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._createAttr("");
          this._reconsumeInState(ATTRIBUTE_NAME_STATE);
        }
      }
      // Before attribute value state
      //------------------------------------------------------------------
      [BEFORE_ATTRIBUTE_VALUE_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingAttributeValue);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else {
          this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
        }
      }
      // Attribute value (double-quoted) state
      //------------------------------------------------------------------
      [ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      // Attribute value (single-quoted) state
      //------------------------------------------------------------------
      [ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      // Attribute value (unquoted) state
      //------------------------------------------------------------------
      [ATTRIBUTE_VALUE_UNQUOTED_STATE](cp) {
        if (isWhitespace(cp)) {
          this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_UNQUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._leaveAttrValue(DATA_STATE);
          this._emitCurrentToken();
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT) {
          this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
          this.currentAttr.value += toChar(cp);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      // After attribute value (quoted) state
      //------------------------------------------------------------------
      [AFTER_ATTRIBUTE_VALUE_QUOTED_STATE](cp) {
        if (isWhitespace(cp)) {
          this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.SOLIDUS) {
          this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._leaveAttrValue(DATA_STATE);
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._err(ERR.missingWhitespaceBetweenAttributes);
          this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
        }
      }
      // Self-closing start tag state
      //------------------------------------------------------------------
      [SELF_CLOSING_START_TAG_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.currentToken.selfClosing = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._err(ERR.unexpectedSolidusInTag);
          this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
        }
      }
      // Bogus comment state
      //------------------------------------------------------------------
      [BOGUS_COMMENT_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._emitCurrentToken();
          this._emitEOFToken();
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
        } else {
          this.currentToken.data += toChar(cp);
        }
      }
      // Markup declaration open state
      //------------------------------------------------------------------
      [MARKUP_DECLARATION_OPEN_STATE](cp) {
        if (this._consumeSequenceIfMatch($$.DASH_DASH_STRING, cp, true)) {
          this._createCommentToken();
          this.state = COMMENT_START_STATE;
        } else if (this._consumeSequenceIfMatch($$.DOCTYPE_STRING, cp, false)) {
          this.state = DOCTYPE_STATE;
        } else if (this._consumeSequenceIfMatch($$.CDATA_START_STRING, cp, true)) {
          if (this.allowCDATA) {
            this.state = CDATA_SECTION_STATE;
          } else {
            this._err(ERR.cdataInHtmlContent);
            this._createCommentToken();
            this.currentToken.data = "[CDATA[";
            this.state = BOGUS_COMMENT_STATE;
          }
        } else if (!this._ensureHibernation()) {
          this._err(ERR.incorrectlyOpenedComment);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        }
      }
      // Comment start state
      //------------------------------------------------------------------
      [COMMENT_START_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_START_DASH_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptClosingOfEmptyComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      // Comment start dash state
      //------------------------------------------------------------------
      [COMMENT_START_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptClosingOfEmptyComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += "-";
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      // Comment state
      //------------------------------------------------------------------
      [COMMENT_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_DASH_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.currentToken.data += "<";
          this.state = COMMENT_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += toChar(cp);
        }
      }
      // Comment less-than sign state
      //------------------------------------------------------------------
      [COMMENT_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.EXCLAMATION_MARK) {
          this.currentToken.data += "!";
          this.state = COMMENT_LESS_THAN_SIGN_BANG_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.currentToken.data += "!";
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      // Comment less-than sign bang state
      //------------------------------------------------------------------
      [COMMENT_LESS_THAN_SIGN_BANG_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE;
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      // Comment less-than sign bang dash state
      //------------------------------------------------------------------
      [COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE;
        } else {
          this._reconsumeInState(COMMENT_END_DASH_STATE);
        }
      }
      // Comment less-than sign bang dash dash state
      //------------------------------------------------------------------
      [COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE](cp) {
        if (cp !== $.GREATER_THAN_SIGN && cp !== $.EOF) {
          this._err(ERR.nestedComment);
        }
        this._reconsumeInState(COMMENT_END_STATE);
      }
      // Comment end dash state
      //------------------------------------------------------------------
      [COMMENT_END_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += "-";
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      // Comment end state
      //------------------------------------------------------------------
      [COMMENT_END_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EXCLAMATION_MARK) {
          this.state = COMMENT_END_BANG_STATE;
        } else if (cp === $.HYPHEN_MINUS) {
          this.currentToken.data += "-";
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += "--";
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      // Comment end bang state
      //------------------------------------------------------------------
      [COMMENT_END_BANG_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.currentToken.data += "--!";
          this.state = COMMENT_END_DASH_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.incorrectlyClosedComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += "--!";
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      // DOCTYPE state
      //------------------------------------------------------------------
      [DOCTYPE_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingWhitespaceBeforeDoctypeName);
          this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
        }
      }
      // Before DOCTYPE name state
      //------------------------------------------------------------------
      [BEFORE_DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (isAsciiUpper(cp)) {
          this._createDoctypeToken(toAsciiLowerChar(cp));
          this.state = DOCTYPE_NAME_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._createDoctypeToken(unicode.REPLACEMENT_CHARACTER);
          this.state = DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeName);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._createDoctypeToken(toChar(cp));
          this.state = DOCTYPE_NAME_STATE;
        }
      }
      // DOCTYPE name state
      //------------------------------------------------------------------
      [DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = AFTER_DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (isAsciiUpper(cp)) {
          this.currentToken.name += toAsciiLowerChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.name += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.name += toChar(cp);
        }
      }
      // After DOCTYPE name state
      //------------------------------------------------------------------
      [AFTER_DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else if (this._consumeSequenceIfMatch($$.PUBLIC_STRING, cp, false)) {
          this.state = AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;
        } else if (this._consumeSequenceIfMatch($$.SYSTEM_STRING, cp, false)) {
          this.state = AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;
        } else if (!this._ensureHibernation()) {
          this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      // After DOCTYPE public keyword state
      //------------------------------------------------------------------
      [AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
          this.currentToken.publicId = "";
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
          this.currentToken.publicId = "";
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      // Before DOCTYPE public identifier state
      //------------------------------------------------------------------
      [BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.currentToken.publicId = "";
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.publicId = "";
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      // DOCTYPE public identifier (double-quoted) state
      //------------------------------------------------------------------
      [DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.publicId += toChar(cp);
        }
      }
      // DOCTYPE public identifier (single-quoted) state
      //------------------------------------------------------------------
      [DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.publicId += toChar(cp);
        }
      }
      // After DOCTYPE public identifier state
      //------------------------------------------------------------------
      [AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      // Between DOCTYPE public and system identifiers state
      //------------------------------------------------------------------
      [BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      // After DOCTYPE system keyword state
      //------------------------------------------------------------------
      [AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      // Before DOCTYPE system identifier state
      //------------------------------------------------------------------
      [BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      // DOCTYPE system identifier (double-quoted) state
      //------------------------------------------------------------------
      [DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.systemId += toChar(cp);
        }
      }
      // DOCTYPE system identifier (single-quoted) state
      //------------------------------------------------------------------
      [DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.systemId += toChar(cp);
        }
      }
      // After DOCTYPE system identifier state
      //------------------------------------------------------------------
      [AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      // Bogus DOCTYPE state
      //------------------------------------------------------------------
      [BOGUS_DOCTYPE_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
        } else if (cp === $.EOF) {
          this._emitCurrentToken();
          this._emitEOFToken();
        }
      }
      // CDATA section state
      //------------------------------------------------------------------
      [CDATA_SECTION_STATE](cp) {
        if (cp === $.RIGHT_SQUARE_BRACKET) {
          this.state = CDATA_SECTION_BRACKET_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInCdata);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      // CDATA section bracket state
      //------------------------------------------------------------------
      [CDATA_SECTION_BRACKET_STATE](cp) {
        if (cp === $.RIGHT_SQUARE_BRACKET) {
          this.state = CDATA_SECTION_END_STATE;
        } else {
          this._emitChars("]");
          this._reconsumeInState(CDATA_SECTION_STATE);
        }
      }
      // CDATA section end state
      //------------------------------------------------------------------
      [CDATA_SECTION_END_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
        } else if (cp === $.RIGHT_SQUARE_BRACKET) {
          this._emitChars("]");
        } else {
          this._emitChars("]]");
          this._reconsumeInState(CDATA_SECTION_STATE);
        }
      }
      // Character reference state
      //------------------------------------------------------------------
      [CHARACTER_REFERENCE_STATE](cp) {
        this.tempBuff = [$.AMPERSAND];
        if (cp === $.NUMBER_SIGN) {
          this.tempBuff.push(cp);
          this.state = NUMERIC_CHARACTER_REFERENCE_STATE;
        } else if (isAsciiAlphaNumeric(cp)) {
          this._reconsumeInState(NAMED_CHARACTER_REFERENCE_STATE);
        } else {
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      // Named character reference state
      //------------------------------------------------------------------
      [NAMED_CHARACTER_REFERENCE_STATE](cp) {
        const matchResult = this._matchNamedCharacterReference(cp);
        if (this._ensureHibernation()) {
          this.tempBuff = [$.AMPERSAND];
        } else if (matchResult) {
          const withSemicolon = this.tempBuff[this.tempBuff.length - 1] === $.SEMICOLON;
          if (!this._isCharacterReferenceAttributeQuirk(withSemicolon)) {
            if (!withSemicolon) {
              this._errOnNextCodePoint(ERR.missingSemicolonAfterCharacterReference);
            }
            this.tempBuff = matchResult;
          }
          this._flushCodePointsConsumedAsCharacterReference();
          this.state = this.returnState;
        } else {
          this._flushCodePointsConsumedAsCharacterReference();
          this.state = AMBIGUOUS_AMPERSAND_STATE;
        }
      }
      // Ambiguos ampersand state
      //------------------------------------------------------------------
      [AMBIGUOUS_AMPERSAND_STATE](cp) {
        if (isAsciiAlphaNumeric(cp)) {
          if (this._isCharacterReferenceInAttribute()) {
            this.currentAttr.value += toChar(cp);
          } else {
            this._emitCodePoint(cp);
          }
        } else {
          if (cp === $.SEMICOLON) {
            this._err(ERR.unknownNamedCharacterReference);
          }
          this._reconsumeInState(this.returnState);
        }
      }
      // Numeric character reference state
      //------------------------------------------------------------------
      [NUMERIC_CHARACTER_REFERENCE_STATE](cp) {
        this.charRefCode = 0;
        if (cp === $.LATIN_SMALL_X || cp === $.LATIN_CAPITAL_X) {
          this.tempBuff.push(cp);
          this.state = HEXADEMICAL_CHARACTER_REFERENCE_START_STATE;
        } else {
          this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_START_STATE);
        }
      }
      // Hexademical character reference start state
      //------------------------------------------------------------------
      [HEXADEMICAL_CHARACTER_REFERENCE_START_STATE](cp) {
        if (isAsciiHexDigit(cp)) {
          this._reconsumeInState(HEXADEMICAL_CHARACTER_REFERENCE_STATE);
        } else {
          this._err(ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      // Decimal character reference start state
      //------------------------------------------------------------------
      [DECIMAL_CHARACTER_REFERENCE_START_STATE](cp) {
        if (isAsciiDigit(cp)) {
          this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_STATE);
        } else {
          this._err(ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      // Hexademical character reference state
      //------------------------------------------------------------------
      [HEXADEMICAL_CHARACTER_REFERENCE_STATE](cp) {
        if (isAsciiUpperHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 55;
        } else if (isAsciiLowerHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 87;
        } else if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 48;
        } else if (cp === $.SEMICOLON) {
          this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
        } else {
          this._err(ERR.missingSemicolonAfterCharacterReference);
          this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
        }
      }
      // Decimal character reference state
      //------------------------------------------------------------------
      [DECIMAL_CHARACTER_REFERENCE_STATE](cp) {
        if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 10 + cp - 48;
        } else if (cp === $.SEMICOLON) {
          this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
        } else {
          this._err(ERR.missingSemicolonAfterCharacterReference);
          this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
        }
      }
      // Numeric character reference end state
      //------------------------------------------------------------------
      [NUMERIC_CHARACTER_REFERENCE_END_STATE]() {
        if (this.charRefCode === $.NULL) {
          this._err(ERR.nullCharacterReference);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (this.charRefCode > 1114111) {
          this._err(ERR.characterReferenceOutsideUnicodeRange);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (unicode.isSurrogate(this.charRefCode)) {
          this._err(ERR.surrogateCharacterReference);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (unicode.isUndefinedCodePoint(this.charRefCode)) {
          this._err(ERR.noncharacterCharacterReference);
        } else if (unicode.isControlCodePoint(this.charRefCode) || this.charRefCode === $.CARRIAGE_RETURN) {
          this._err(ERR.controlCharacterReference);
          const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS[this.charRefCode];
          if (replacement) {
            this.charRefCode = replacement;
          }
        }
        this.tempBuff = [this.charRefCode];
        this._flushCodePointsConsumedAsCharacterReference();
        this._reconsumeInState(this.returnState);
      }
    };
    Tokenizer.CHARACTER_TOKEN = "CHARACTER_TOKEN";
    Tokenizer.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN";
    Tokenizer.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN";
    Tokenizer.START_TAG_TOKEN = "START_TAG_TOKEN";
    Tokenizer.END_TAG_TOKEN = "END_TAG_TOKEN";
    Tokenizer.COMMENT_TOKEN = "COMMENT_TOKEN";
    Tokenizer.DOCTYPE_TOKEN = "DOCTYPE_TOKEN";
    Tokenizer.EOF_TOKEN = "EOF_TOKEN";
    Tokenizer.HIBERNATION_TOKEN = "HIBERNATION_TOKEN";
    Tokenizer.MODE = {
      DATA: DATA_STATE,
      RCDATA: RCDATA_STATE,
      RAWTEXT: RAWTEXT_STATE,
      SCRIPT_DATA: SCRIPT_DATA_STATE,
      PLAINTEXT: PLAINTEXT_STATE
    };
    Tokenizer.getTokenAttr = function(token, attrName) {
      for (let i = token.attrs.length - 1; i >= 0; i--) {
        if (token.attrs[i].name === attrName) {
          return token.attrs[i].value;
        }
      }
      return null;
    };
    module.exports = Tokenizer;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/common/html.js
var require_html = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/common/html.js"(exports) {
    "use strict";
    var NS = exports.NAMESPACES = {
      HTML: "http://www.w3.org/1999/xhtml",
      MATHML: "http://www.w3.org/1998/Math/MathML",
      SVG: "http://www.w3.org/2000/svg",
      XLINK: "http://www.w3.org/1999/xlink",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/"
    };
    exports.ATTRS = {
      TYPE: "type",
      ACTION: "action",
      ENCODING: "encoding",
      PROMPT: "prompt",
      NAME: "name",
      COLOR: "color",
      FACE: "face",
      SIZE: "size"
    };
    exports.DOCUMENT_MODE = {
      NO_QUIRKS: "no-quirks",
      QUIRKS: "quirks",
      LIMITED_QUIRKS: "limited-quirks"
    };
    var $ = exports.TAG_NAMES = {
      A: "a",
      ADDRESS: "address",
      ANNOTATION_XML: "annotation-xml",
      APPLET: "applet",
      AREA: "area",
      ARTICLE: "article",
      ASIDE: "aside",
      B: "b",
      BASE: "base",
      BASEFONT: "basefont",
      BGSOUND: "bgsound",
      BIG: "big",
      BLOCKQUOTE: "blockquote",
      BODY: "body",
      BR: "br",
      BUTTON: "button",
      CAPTION: "caption",
      CENTER: "center",
      CODE: "code",
      COL: "col",
      COLGROUP: "colgroup",
      DD: "dd",
      DESC: "desc",
      DETAILS: "details",
      DIALOG: "dialog",
      DIR: "dir",
      DIV: "div",
      DL: "dl",
      DT: "dt",
      EM: "em",
      EMBED: "embed",
      FIELDSET: "fieldset",
      FIGCAPTION: "figcaption",
      FIGURE: "figure",
      FONT: "font",
      FOOTER: "footer",
      FOREIGN_OBJECT: "foreignObject",
      FORM: "form",
      FRAME: "frame",
      FRAMESET: "frameset",
      H1: "h1",
      H2: "h2",
      H3: "h3",
      H4: "h4",
      H5: "h5",
      H6: "h6",
      HEAD: "head",
      HEADER: "header",
      HGROUP: "hgroup",
      HR: "hr",
      HTML: "html",
      I: "i",
      IMG: "img",
      IMAGE: "image",
      INPUT: "input",
      IFRAME: "iframe",
      KEYGEN: "keygen",
      LABEL: "label",
      LI: "li",
      LINK: "link",
      LISTING: "listing",
      MAIN: "main",
      MALIGNMARK: "malignmark",
      MARQUEE: "marquee",
      MATH: "math",
      MENU: "menu",
      META: "meta",
      MGLYPH: "mglyph",
      MI: "mi",
      MO: "mo",
      MN: "mn",
      MS: "ms",
      MTEXT: "mtext",
      NAV: "nav",
      NOBR: "nobr",
      NOFRAMES: "noframes",
      NOEMBED: "noembed",
      NOSCRIPT: "noscript",
      OBJECT: "object",
      OL: "ol",
      OPTGROUP: "optgroup",
      OPTION: "option",
      P: "p",
      PARAM: "param",
      PLAINTEXT: "plaintext",
      PRE: "pre",
      RB: "rb",
      RP: "rp",
      RT: "rt",
      RTC: "rtc",
      RUBY: "ruby",
      S: "s",
      SCRIPT: "script",
      SECTION: "section",
      SELECT: "select",
      SOURCE: "source",
      SMALL: "small",
      SPAN: "span",
      STRIKE: "strike",
      STRONG: "strong",
      STYLE: "style",
      SUB: "sub",
      SUMMARY: "summary",
      SUP: "sup",
      TABLE: "table",
      TBODY: "tbody",
      TEMPLATE: "template",
      TEXTAREA: "textarea",
      TFOOT: "tfoot",
      TD: "td",
      TH: "th",
      THEAD: "thead",
      TITLE: "title",
      TR: "tr",
      TRACK: "track",
      TT: "tt",
      U: "u",
      UL: "ul",
      SVG: "svg",
      VAR: "var",
      WBR: "wbr",
      XMP: "xmp"
    };
    exports.SPECIAL_ELEMENTS = {
      [NS.HTML]: {
        [$.ADDRESS]: true,
        [$.APPLET]: true,
        [$.AREA]: true,
        [$.ARTICLE]: true,
        [$.ASIDE]: true,
        [$.BASE]: true,
        [$.BASEFONT]: true,
        [$.BGSOUND]: true,
        [$.BLOCKQUOTE]: true,
        [$.BODY]: true,
        [$.BR]: true,
        [$.BUTTON]: true,
        [$.CAPTION]: true,
        [$.CENTER]: true,
        [$.COL]: true,
        [$.COLGROUP]: true,
        [$.DD]: true,
        [$.DETAILS]: true,
        [$.DIR]: true,
        [$.DIV]: true,
        [$.DL]: true,
        [$.DT]: true,
        [$.EMBED]: true,
        [$.FIELDSET]: true,
        [$.FIGCAPTION]: true,
        [$.FIGURE]: true,
        [$.FOOTER]: true,
        [$.FORM]: true,
        [$.FRAME]: true,
        [$.FRAMESET]: true,
        [$.H1]: true,
        [$.H2]: true,
        [$.H3]: true,
        [$.H4]: true,
        [$.H5]: true,
        [$.H6]: true,
        [$.HEAD]: true,
        [$.HEADER]: true,
        [$.HGROUP]: true,
        [$.HR]: true,
        [$.HTML]: true,
        [$.IFRAME]: true,
        [$.IMG]: true,
        [$.INPUT]: true,
        [$.LI]: true,
        [$.LINK]: true,
        [$.LISTING]: true,
        [$.MAIN]: true,
        [$.MARQUEE]: true,
        [$.MENU]: true,
        [$.META]: true,
        [$.NAV]: true,
        [$.NOEMBED]: true,
        [$.NOFRAMES]: true,
        [$.NOSCRIPT]: true,
        [$.OBJECT]: true,
        [$.OL]: true,
        [$.P]: true,
        [$.PARAM]: true,
        [$.PLAINTEXT]: true,
        [$.PRE]: true,
        [$.SCRIPT]: true,
        [$.SECTION]: true,
        [$.SELECT]: true,
        [$.SOURCE]: true,
        [$.STYLE]: true,
        [$.SUMMARY]: true,
        [$.TABLE]: true,
        [$.TBODY]: true,
        [$.TD]: true,
        [$.TEMPLATE]: true,
        [$.TEXTAREA]: true,
        [$.TFOOT]: true,
        [$.TH]: true,
        [$.THEAD]: true,
        [$.TITLE]: true,
        [$.TR]: true,
        [$.TRACK]: true,
        [$.UL]: true,
        [$.WBR]: true,
        [$.XMP]: true
      },
      [NS.MATHML]: {
        [$.MI]: true,
        [$.MO]: true,
        [$.MN]: true,
        [$.MS]: true,
        [$.MTEXT]: true,
        [$.ANNOTATION_XML]: true
      },
      [NS.SVG]: {
        [$.TITLE]: true,
        [$.FOREIGN_OBJECT]: true,
        [$.DESC]: true
      }
    };
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/parser/open-element-stack.js
var require_open_element_stack = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/parser/open-element-stack.js"(exports, module) {
    "use strict";
    var HTML = require_html();
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    function isImpliedEndTagRequired(tn) {
      switch (tn.length) {
        case 1:
          return tn === $.P;
        case 2:
          return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;
        case 3:
          return tn === $.RTC;
        case 6:
          return tn === $.OPTION;
        case 8:
          return tn === $.OPTGROUP;
      }
      return false;
    }
    function isImpliedEndTagRequiredThoroughly(tn) {
      switch (tn.length) {
        case 1:
          return tn === $.P;
        case 2:
          return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI || tn === $.TD || tn === $.TH || tn === $.TR;
        case 3:
          return tn === $.RTC;
        case 5:
          return tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD;
        case 6:
          return tn === $.OPTION;
        case 7:
          return tn === $.CAPTION;
        case 8:
          return tn === $.OPTGROUP || tn === $.COLGROUP;
      }
      return false;
    }
    function isScopingElement(tn, ns) {
      switch (tn.length) {
        case 2:
          if (tn === $.TD || tn === $.TH) {
            return ns === NS.HTML;
          } else if (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS) {
            return ns === NS.MATHML;
          }
          break;
        case 4:
          if (tn === $.HTML) {
            return ns === NS.HTML;
          } else if (tn === $.DESC) {
            return ns === NS.SVG;
          }
          break;
        case 5:
          if (tn === $.TABLE) {
            return ns === NS.HTML;
          } else if (tn === $.MTEXT) {
            return ns === NS.MATHML;
          } else if (tn === $.TITLE) {
            return ns === NS.SVG;
          }
          break;
        case 6:
          return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;
        case 7:
          return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;
        case 8:
          return tn === $.TEMPLATE && ns === NS.HTML;
        case 13:
          return tn === $.FOREIGN_OBJECT && ns === NS.SVG;
        case 14:
          return tn === $.ANNOTATION_XML && ns === NS.MATHML;
      }
      return false;
    }
    var OpenElementStack = class {
      constructor(document, treeAdapter) {
        this.stackTop = -1;
        this.items = [];
        this.current = document;
        this.currentTagName = null;
        this.currentTmplContent = null;
        this.tmplCount = 0;
        this.treeAdapter = treeAdapter;
      }
      //Index of element
      _indexOf(element4) {
        let idx = -1;
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.items[i] === element4) {
            idx = i;
            break;
          }
        }
        return idx;
      }
      //Update current element
      _isInTemplate() {
        return this.currentTagName === $.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
      }
      _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
        this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
      }
      //Mutations
      push(element4) {
        this.items[++this.stackTop] = element4;
        this._updateCurrentElement();
        if (this._isInTemplate()) {
          this.tmplCount++;
        }
      }
      pop() {
        this.stackTop--;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount--;
        }
        this._updateCurrentElement();
      }
      replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
          this._updateCurrentElement();
        }
      }
      insertAfter(referenceElement, newElement) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        if (insertionIdx === ++this.stackTop) {
          this._updateCurrentElement();
        }
      }
      popUntilTagNamePopped(tagName) {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (tn === tagName && ns === NS.HTML) {
            break;
          }
        }
      }
      popUntilElementPopped(element4) {
        while (this.stackTop > -1) {
          const poppedElement = this.current;
          this.pop();
          if (poppedElement === element4) {
            break;
          }
        }
      }
      popUntilNumberedHeaderPopped() {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6 && ns === NS.HTML) {
            break;
          }
        }
      }
      popUntilTableCellPopped() {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (tn === $.TD || tn === $.TH && ns === NS.HTML) {
            break;
          }
        }
      }
      popAllUpToHtmlElement() {
        this.stackTop = 0;
        this._updateCurrentElement();
      }
      clearBackToTableContext() {
        while (this.currentTagName !== $.TABLE && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
          this.pop();
        }
      }
      clearBackToTableBodyContext() {
        while (this.currentTagName !== $.TBODY && this.currentTagName !== $.TFOOT && this.currentTagName !== $.THEAD && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
          this.pop();
        }
      }
      clearBackToTableRowContext() {
        while (this.currentTagName !== $.TR && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
          this.pop();
        }
      }
      remove(element4) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.items[i] === element4) {
            this.items.splice(i, 1);
            this.stackTop--;
            this._updateCurrentElement();
            break;
          }
        }
      }
      //Search
      tryPeekProperlyNestedBodyElement() {
        const element4 = this.items[1];
        return element4 && this.treeAdapter.getTagName(element4) === $.BODY ? element4 : null;
      }
      contains(element4) {
        return this._indexOf(element4) > -1;
      }
      getCommonAncestor(element4) {
        let elementIdx = this._indexOf(element4);
        return --elementIdx >= 0 ? this.items[elementIdx] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.currentTagName === $.HTML;
      }
      //Element in scope
      hasInScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if (isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if ((tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) && ns === NS.HTML) {
            return true;
          }
          if (isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInListItemScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if ((tn === $.UL || tn === $.OL) && ns === NS.HTML || isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInButtonScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if (tn === $.BUTTON && ns === NS.HTML || isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML) {
            return false;
          }
        }
        return true;
      }
      hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT) {
            return true;
          }
          if (tn === $.TABLE || tn === $.HTML) {
            return false;
          }
        }
        return true;
      }
      hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn !== $.OPTION && tn !== $.OPTGROUP) {
            return false;
          }
        }
        return true;
      }
      //Implied end tags
      generateImpliedEndTags() {
        while (isImpliedEndTagRequired(this.currentTagName)) {
          this.pop();
        }
      }
      generateImpliedEndTagsThoroughly() {
        while (isImpliedEndTagRequiredThoroughly(this.currentTagName)) {
          this.pop();
        }
      }
      generateImpliedEndTagsWithExclusion(exclusionTagName) {
        while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName) {
          this.pop();
        }
      }
    };
    module.exports = OpenElementStack;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/parser/formatting-element-list.js
var require_formatting_element_list = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/parser/formatting-element-list.js"(exports, module) {
    "use strict";
    var NOAH_ARK_CAPACITY = 3;
    var FormattingElementList = class {
      constructor(treeAdapter) {
        this.length = 0;
        this.entries = [];
        this.treeAdapter = treeAdapter;
        this.bookmark = null;
      }
      //Noah Ark's condition
      //OPTIMIZATION: at first we try to find possible candidates for exclusion using
      //lightweight heuristics without thorough attributes check.
      _getNoahArkConditionCandidates(newElement) {
        const candidates = [];
        if (this.length >= NOAH_ARK_CAPACITY) {
          const neAttrsLength = this.treeAdapter.getAttrList(newElement).length;
          const neTagName = this.treeAdapter.getTagName(newElement);
          const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
          for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];
            if (entry.type === FormattingElementList.MARKER_ENTRY) {
              break;
            }
            const element4 = entry.element;
            const elementAttrs = this.treeAdapter.getAttrList(element4);
            const isCandidate = this.treeAdapter.getTagName(element4) === neTagName && this.treeAdapter.getNamespaceURI(element4) === neNamespaceURI && elementAttrs.length === neAttrsLength;
            if (isCandidate) {
              candidates.push({ idx: i, attrs: elementAttrs });
            }
          }
        }
        return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
      }
      _ensureNoahArkCondition(newElement) {
        const candidates = this._getNoahArkConditionCandidates(newElement);
        let cLength = candidates.length;
        if (cLength) {
          const neAttrs = this.treeAdapter.getAttrList(newElement);
          const neAttrsLength = neAttrs.length;
          const neAttrsMap = /* @__PURE__ */ Object.create(null);
          for (let i = 0; i < neAttrsLength; i++) {
            const neAttr = neAttrs[i];
            neAttrsMap[neAttr.name] = neAttr.value;
          }
          for (let i = 0; i < neAttrsLength; i++) {
            for (let j = 0; j < cLength; j++) {
              const cAttr = candidates[j].attrs[i];
              if (neAttrsMap[cAttr.name] !== cAttr.value) {
                candidates.splice(j, 1);
                cLength--;
              }
              if (candidates.length < NOAH_ARK_CAPACITY) {
                return;
              }
            }
          }
          for (let i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
            this.entries.splice(candidates[i].idx, 1);
            this.length--;
          }
        }
      }
      //Mutations
      insertMarker() {
        this.entries.push({ type: FormattingElementList.MARKER_ENTRY });
        this.length++;
      }
      pushElement(element4, token) {
        this._ensureNoahArkCondition(element4);
        this.entries.push({
          type: FormattingElementList.ELEMENT_ENTRY,
          element: element4,
          token
        });
        this.length++;
      }
      insertElementAfterBookmark(element4, token) {
        let bookmarkIdx = this.length - 1;
        for (; bookmarkIdx >= 0; bookmarkIdx--) {
          if (this.entries[bookmarkIdx] === this.bookmark) {
            break;
          }
        }
        this.entries.splice(bookmarkIdx + 1, 0, {
          type: FormattingElementList.ELEMENT_ENTRY,
          element: element4,
          token
        });
        this.length++;
      }
      removeEntry(entry) {
        for (let i = this.length - 1; i >= 0; i--) {
          if (this.entries[i] === entry) {
            this.entries.splice(i, 1);
            this.length--;
            break;
          }
        }
      }
      clearToLastMarker() {
        while (this.length) {
          const entry = this.entries.pop();
          this.length--;
          if (entry.type === FormattingElementList.MARKER_ENTRY) {
            break;
          }
        }
      }
      //Search
      getElementEntryInScopeWithTagName(tagName) {
        for (let i = this.length - 1; i >= 0; i--) {
          const entry = this.entries[i];
          if (entry.type === FormattingElementList.MARKER_ENTRY) {
            return null;
          }
          if (this.treeAdapter.getTagName(entry.element) === tagName) {
            return entry;
          }
        }
        return null;
      }
      getElementEntry(element4) {
        for (let i = this.length - 1; i >= 0; i--) {
          const entry = this.entries[i];
          if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element4) {
            return entry;
          }
        }
        return null;
      }
    };
    FormattingElementList.MARKER_ENTRY = "MARKER_ENTRY";
    FormattingElementList.ELEMENT_ENTRY = "ELEMENT_ENTRY";
    module.exports = FormattingElementList;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/utils/mixin.js
var require_mixin = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/utils/mixin.js"(exports, module) {
    "use strict";
    var Mixin = class {
      constructor(host) {
        const originalMethods = {};
        const overriddenMethods = this._getOverriddenMethods(this, originalMethods);
        for (const key2 of Object.keys(overriddenMethods)) {
          if (typeof overriddenMethods[key2] === "function") {
            originalMethods[key2] = host[key2];
            host[key2] = overriddenMethods[key2];
          }
        }
      }
      _getOverriddenMethods() {
        throw new Error("Not implemented");
      }
    };
    Mixin.install = function(host, Ctor, opts) {
      if (!host.__mixins) {
        host.__mixins = [];
      }
      for (let i = 0; i < host.__mixins.length; i++) {
        if (host.__mixins[i].constructor === Ctor) {
          return host.__mixins[i];
        }
      }
      const mixin = new Ctor(host, opts);
      host.__mixins.push(mixin);
      return mixin;
    };
    module.exports = Mixin;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/position-tracking/preprocessor-mixin.js
var require_preprocessor_mixin = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/position-tracking/preprocessor-mixin.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var PositionTrackingPreprocessorMixin = class extends Mixin {
      constructor(preprocessor) {
        super(preprocessor);
        this.preprocessor = preprocessor;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.offset = 0;
        this.col = 0;
        this.line = 1;
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          advance() {
            const pos = this.pos + 1;
            const ch = this.html[pos];
            if (mxn.isEol) {
              mxn.isEol = false;
              mxn.line++;
              mxn.lineStartPos = pos;
            }
            if (ch === "\n" || ch === "\r" && this.html[pos + 1] !== "\n") {
              mxn.isEol = true;
            }
            mxn.col = pos - mxn.lineStartPos + 1;
            mxn.offset = mxn.droppedBufferSize + pos;
            return orig.advance.call(this);
          },
          retreat() {
            orig.retreat.call(this);
            mxn.isEol = false;
            mxn.col = this.pos - mxn.lineStartPos + 1;
          },
          dropParsedChunk() {
            const prevPos = this.pos;
            orig.dropParsedChunk.call(this);
            const reduction = prevPos - this.pos;
            mxn.lineStartPos -= reduction;
            mxn.droppedBufferSize += reduction;
            mxn.offset = mxn.droppedBufferSize + this.pos;
          }
        };
      }
    };
    module.exports = PositionTrackingPreprocessorMixin;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js
var require_tokenizer_mixin = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var Tokenizer = require_tokenizer();
    var PositionTrackingPreprocessorMixin = require_preprocessor_mixin();
    var LocationInfoTokenizerMixin = class extends Mixin {
      constructor(tokenizer) {
        super(tokenizer);
        this.tokenizer = tokenizer;
        this.posTracker = Mixin.install(tokenizer.preprocessor, PositionTrackingPreprocessorMixin);
        this.currentAttrLocation = null;
        this.ctLoc = null;
      }
      _getCurrentLocation() {
        return {
          startLine: this.posTracker.line,
          startCol: this.posTracker.col,
          startOffset: this.posTracker.offset,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
      }
      _attachCurrentAttrLocationInfo() {
        this.currentAttrLocation.endLine = this.posTracker.line;
        this.currentAttrLocation.endCol = this.posTracker.col;
        this.currentAttrLocation.endOffset = this.posTracker.offset;
        const currentToken = this.tokenizer.currentToken;
        const currentAttr = this.tokenizer.currentAttr;
        if (!currentToken.location.attrs) {
          currentToken.location.attrs = /* @__PURE__ */ Object.create(null);
        }
        currentToken.location.attrs[currentAttr.name] = this.currentAttrLocation;
      }
      _getOverriddenMethods(mxn, orig) {
        const methods = {
          _createStartTagToken() {
            orig._createStartTagToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createEndTagToken() {
            orig._createEndTagToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createCommentToken() {
            orig._createCommentToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createDoctypeToken(initialName) {
            orig._createDoctypeToken.call(this, initialName);
            this.currentToken.location = mxn.ctLoc;
          },
          _createCharacterToken(type, ch) {
            orig._createCharacterToken.call(this, type, ch);
            this.currentCharacterToken.location = mxn.ctLoc;
          },
          _createEOFToken() {
            orig._createEOFToken.call(this);
            this.currentToken.location = mxn._getCurrentLocation();
          },
          _createAttr(attrNameFirstCh) {
            orig._createAttr.call(this, attrNameFirstCh);
            mxn.currentAttrLocation = mxn._getCurrentLocation();
          },
          _leaveAttrName(toState) {
            orig._leaveAttrName.call(this, toState);
            mxn._attachCurrentAttrLocationInfo();
          },
          _leaveAttrValue(toState) {
            orig._leaveAttrValue.call(this, toState);
            mxn._attachCurrentAttrLocationInfo();
          },
          _emitCurrentToken() {
            const ctLoc = this.currentToken.location;
            if (this.currentCharacterToken) {
              this.currentCharacterToken.location.endLine = ctLoc.startLine;
              this.currentCharacterToken.location.endCol = ctLoc.startCol;
              this.currentCharacterToken.location.endOffset = ctLoc.startOffset;
            }
            if (this.currentToken.type === Tokenizer.EOF_TOKEN) {
              ctLoc.endLine = ctLoc.startLine;
              ctLoc.endCol = ctLoc.startCol;
              ctLoc.endOffset = ctLoc.startOffset;
            } else {
              ctLoc.endLine = mxn.posTracker.line;
              ctLoc.endCol = mxn.posTracker.col + 1;
              ctLoc.endOffset = mxn.posTracker.offset + 1;
            }
            orig._emitCurrentToken.call(this);
          },
          _emitCurrentCharacterToken() {
            const ctLoc = this.currentCharacterToken && this.currentCharacterToken.location;
            if (ctLoc && ctLoc.endOffset === -1) {
              ctLoc.endLine = mxn.posTracker.line;
              ctLoc.endCol = mxn.posTracker.col;
              ctLoc.endOffset = mxn.posTracker.offset;
            }
            orig._emitCurrentCharacterToken.call(this);
          }
        };
        Object.keys(Tokenizer.MODE).forEach((modeName) => {
          const state = Tokenizer.MODE[modeName];
          methods[state] = function(cp) {
            mxn.ctLoc = mxn._getCurrentLocation();
            orig[state].call(this, cp);
          };
        });
        return methods;
      }
    };
    module.exports = LocationInfoTokenizerMixin;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js
var require_open_element_stack_mixin = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var LocationInfoOpenElementStackMixin = class extends Mixin {
      constructor(stack, opts) {
        super(stack);
        this.onItemPop = opts.onItemPop;
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          pop() {
            mxn.onItemPop(this.current);
            orig.pop.call(this);
          },
          popAllUpToHtmlElement() {
            for (let i = this.stackTop; i > 0; i--) {
              mxn.onItemPop(this.items[i]);
            }
            orig.popAllUpToHtmlElement.call(this);
          },
          remove(element4) {
            mxn.onItemPop(this.current);
            orig.remove.call(this, element4);
          }
        };
      }
    };
    module.exports = LocationInfoOpenElementStackMixin;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/parser-mixin.js
var require_parser_mixin = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/location-info/parser-mixin.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var Tokenizer = require_tokenizer();
    var LocationInfoTokenizerMixin = require_tokenizer_mixin();
    var LocationInfoOpenElementStackMixin = require_open_element_stack_mixin();
    var HTML = require_html();
    var $ = HTML.TAG_NAMES;
    var LocationInfoParserMixin = class extends Mixin {
      constructor(parser) {
        super(parser);
        this.parser = parser;
        this.treeAdapter = this.parser.treeAdapter;
        this.posTracker = null;
        this.lastStartTagToken = null;
        this.lastFosterParentingLocation = null;
        this.currentToken = null;
      }
      _setStartLocation(element4) {
        let loc = null;
        if (this.lastStartTagToken) {
          loc = Object.assign({}, this.lastStartTagToken.location);
          loc.startTag = this.lastStartTagToken.location;
        }
        this.treeAdapter.setNodeSourceCodeLocation(element4, loc);
      }
      _setEndLocation(element4, closingToken) {
        const loc = this.treeAdapter.getNodeSourceCodeLocation(element4);
        if (loc) {
          if (closingToken.location) {
            const ctLoc = closingToken.location;
            const tn = this.treeAdapter.getTagName(element4);
            const isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN && tn === closingToken.tagName;
            const endLoc = {};
            if (isClosingEndTag) {
              endLoc.endTag = Object.assign({}, ctLoc);
              endLoc.endLine = ctLoc.endLine;
              endLoc.endCol = ctLoc.endCol;
              endLoc.endOffset = ctLoc.endOffset;
            } else {
              endLoc.endLine = ctLoc.startLine;
              endLoc.endCol = ctLoc.startCol;
              endLoc.endOffset = ctLoc.startOffset;
            }
            this.treeAdapter.updateNodeSourceCodeLocation(element4, endLoc);
          }
        }
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          _bootstrap(document, fragmentContext) {
            orig._bootstrap.call(this, document, fragmentContext);
            mxn.lastStartTagToken = null;
            mxn.lastFosterParentingLocation = null;
            mxn.currentToken = null;
            const tokenizerMixin = Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
            mxn.posTracker = tokenizerMixin.posTracker;
            Mixin.install(this.openElements, LocationInfoOpenElementStackMixin, {
              onItemPop: function(element4) {
                mxn._setEndLocation(element4, mxn.currentToken);
              }
            });
          },
          _runParsingLoop(scriptHandler) {
            orig._runParsingLoop.call(this, scriptHandler);
            for (let i = this.openElements.stackTop; i >= 0; i--) {
              mxn._setEndLocation(this.openElements.items[i], mxn.currentToken);
            }
          },
          //Token processing
          _processTokenInForeignContent(token) {
            mxn.currentToken = token;
            orig._processTokenInForeignContent.call(this, token);
          },
          _processToken(token) {
            mxn.currentToken = token;
            orig._processToken.call(this, token);
            const requireExplicitUpdate = token.type === Tokenizer.END_TAG_TOKEN && (token.tagName === $.HTML || token.tagName === $.BODY && this.openElements.hasInScope($.BODY));
            if (requireExplicitUpdate) {
              for (let i = this.openElements.stackTop; i >= 0; i--) {
                const element4 = this.openElements.items[i];
                if (this.treeAdapter.getTagName(element4) === token.tagName) {
                  mxn._setEndLocation(element4, token);
                  break;
                }
              }
            }
          },
          //Doctype
          _setDocumentType(token) {
            orig._setDocumentType.call(this, token);
            const documentChildren = this.treeAdapter.getChildNodes(this.document);
            const cnLength = documentChildren.length;
            for (let i = 0; i < cnLength; i++) {
              const node3 = documentChildren[i];
              if (this.treeAdapter.isDocumentTypeNode(node3)) {
                this.treeAdapter.setNodeSourceCodeLocation(node3, token.location);
                break;
              }
            }
          },
          //Elements
          _attachElementToTree(element4) {
            mxn._setStartLocation(element4);
            mxn.lastStartTagToken = null;
            orig._attachElementToTree.call(this, element4);
          },
          _appendElement(token, namespaceURI) {
            mxn.lastStartTagToken = token;
            orig._appendElement.call(this, token, namespaceURI);
          },
          _insertElement(token, namespaceURI) {
            mxn.lastStartTagToken = token;
            orig._insertElement.call(this, token, namespaceURI);
          },
          _insertTemplate(token) {
            mxn.lastStartTagToken = token;
            orig._insertTemplate.call(this, token);
            const tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);
            this.treeAdapter.setNodeSourceCodeLocation(tmplContent, null);
          },
          _insertFakeRootElement() {
            orig._insertFakeRootElement.call(this);
            this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
          },
          //Comments
          _appendCommentNode(token, parent) {
            orig._appendCommentNode.call(this, token, parent);
            const children = this.treeAdapter.getChildNodes(parent);
            const commentNode = children[children.length - 1];
            this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
          },
          //Text
          _findFosterParentingLocation() {
            mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);
            return mxn.lastFosterParentingLocation;
          },
          _insertCharacters(token) {
            orig._insertCharacters.call(this, token);
            const hasFosterParent = this._shouldFosterParentOnInsertion();
            const parent = hasFosterParent && mxn.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current;
            const siblings2 = this.treeAdapter.getChildNodes(parent);
            const textNodeIdx = hasFosterParent && mxn.lastFosterParentingLocation.beforeElement ? siblings2.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1 : siblings2.length - 1;
            const textNode = siblings2[textNodeIdx];
            const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
            if (tnLoc) {
              const { endLine, endCol, endOffset } = token.location;
              this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
            } else {
              this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
            }
          }
        };
      }
    };
    module.exports = LocationInfoParserMixin;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/mixin-base.js
var require_mixin_base = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/mixin-base.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var ErrorReportingMixinBase = class extends Mixin {
      constructor(host, opts) {
        super(host);
        this.posTracker = null;
        this.onParseError = opts.onParseError;
      }
      _setErrorLocation(err) {
        err.startLine = err.endLine = this.posTracker.line;
        err.startCol = err.endCol = this.posTracker.col;
        err.startOffset = err.endOffset = this.posTracker.offset;
      }
      _reportError(code4) {
        const err = {
          code: code4,
          startLine: -1,
          startCol: -1,
          startOffset: -1,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
        this._setErrorLocation(err);
        this.onParseError(err);
      }
      _getOverriddenMethods(mxn) {
        return {
          _err(code4) {
            mxn._reportError(code4);
          }
        };
      }
    };
    module.exports = ErrorReportingMixinBase;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/preprocessor-mixin.js
var require_preprocessor_mixin2 = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/preprocessor-mixin.js"(exports, module) {
    "use strict";
    var ErrorReportingMixinBase = require_mixin_base();
    var PositionTrackingPreprocessorMixin = require_preprocessor_mixin();
    var Mixin = require_mixin();
    var ErrorReportingPreprocessorMixin = class extends ErrorReportingMixinBase {
      constructor(preprocessor, opts) {
        super(preprocessor, opts);
        this.posTracker = Mixin.install(preprocessor, PositionTrackingPreprocessorMixin);
        this.lastErrOffset = -1;
      }
      _reportError(code4) {
        if (this.lastErrOffset !== this.posTracker.offset) {
          this.lastErrOffset = this.posTracker.offset;
          super._reportError(code4);
        }
      }
    };
    module.exports = ErrorReportingPreprocessorMixin;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/tokenizer-mixin.js
var require_tokenizer_mixin2 = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/tokenizer-mixin.js"(exports, module) {
    "use strict";
    var ErrorReportingMixinBase = require_mixin_base();
    var ErrorReportingPreprocessorMixin = require_preprocessor_mixin2();
    var Mixin = require_mixin();
    var ErrorReportingTokenizerMixin = class extends ErrorReportingMixinBase {
      constructor(tokenizer, opts) {
        super(tokenizer, opts);
        const preprocessorMixin = Mixin.install(tokenizer.preprocessor, ErrorReportingPreprocessorMixin, opts);
        this.posTracker = preprocessorMixin.posTracker;
      }
    };
    module.exports = ErrorReportingTokenizerMixin;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js
var require_parser_mixin2 = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js"(exports, module) {
    "use strict";
    var ErrorReportingMixinBase = require_mixin_base();
    var ErrorReportingTokenizerMixin = require_tokenizer_mixin2();
    var LocationInfoTokenizerMixin = require_tokenizer_mixin();
    var Mixin = require_mixin();
    var ErrorReportingParserMixin = class extends ErrorReportingMixinBase {
      constructor(parser, opts) {
        super(parser, opts);
        this.opts = opts;
        this.ctLoc = null;
        this.locBeforeToken = false;
      }
      _setErrorLocation(err) {
        if (this.ctLoc) {
          err.startLine = this.ctLoc.startLine;
          err.startCol = this.ctLoc.startCol;
          err.startOffset = this.ctLoc.startOffset;
          err.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine;
          err.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol;
          err.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset;
        }
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          _bootstrap(document, fragmentContext) {
            orig._bootstrap.call(this, document, fragmentContext);
            Mixin.install(this.tokenizer, ErrorReportingTokenizerMixin, mxn.opts);
            Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
          },
          _processInputToken(token) {
            mxn.ctLoc = token.location;
            orig._processInputToken.call(this, token);
          },
          _err(code4, options) {
            mxn.locBeforeToken = options && options.beforeToken;
            mxn._reportError(code4);
          }
        };
      }
    };
    module.exports = ErrorReportingParserMixin;
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/tree-adapters/default.js
var require_default = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/tree-adapters/default.js"(exports) {
    "use strict";
    var { DOCUMENT_MODE } = require_html();
    exports.createDocument = function() {
      return {
        nodeName: "#document",
        mode: DOCUMENT_MODE.NO_QUIRKS,
        childNodes: []
      };
    };
    exports.createDocumentFragment = function() {
      return {
        nodeName: "#document-fragment",
        childNodes: []
      };
    };
    exports.createElement = function(tagName, namespaceURI, attrs) {
      return {
        nodeName: tagName,
        tagName,
        attrs,
        namespaceURI,
        childNodes: [],
        parentNode: null
      };
    };
    exports.createCommentNode = function(data) {
      return {
        nodeName: "#comment",
        data,
        parentNode: null
      };
    };
    var createTextNode = function(value) {
      return {
        nodeName: "#text",
        value,
        parentNode: null
      };
    };
    var appendChild = exports.appendChild = function(parentNode, newNode) {
      parentNode.childNodes.push(newNode);
      newNode.parentNode = parentNode;
    };
    var insertBefore = exports.insertBefore = function(parentNode, newNode, referenceNode) {
      const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
      parentNode.childNodes.splice(insertionIdx, 0, newNode);
      newNode.parentNode = parentNode;
    };
    exports.setTemplateContent = function(templateElement, contentElement) {
      templateElement.content = contentElement;
    };
    exports.getTemplateContent = function(templateElement) {
      return templateElement.content;
    };
    exports.setDocumentType = function(document, name, publicId, systemId) {
      let doctypeNode = null;
      for (let i = 0; i < document.childNodes.length; i++) {
        if (document.childNodes[i].nodeName === "#documentType") {
          doctypeNode = document.childNodes[i];
          break;
        }
      }
      if (doctypeNode) {
        doctypeNode.name = name;
        doctypeNode.publicId = publicId;
        doctypeNode.systemId = systemId;
      } else {
        appendChild(document, {
          nodeName: "#documentType",
          name,
          publicId,
          systemId
        });
      }
    };
    exports.setDocumentMode = function(document, mode) {
      document.mode = mode;
    };
    exports.getDocumentMode = function(document) {
      return document.mode;
    };
    exports.detachNode = function(node3) {
      if (node3.parentNode) {
        const idx = node3.parentNode.childNodes.indexOf(node3);
        node3.parentNode.childNodes.splice(idx, 1);
        node3.parentNode = null;
      }
    };
    exports.insertText = function(parentNode, text4) {
      if (parentNode.childNodes.length) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
        if (prevNode.nodeName === "#text") {
          prevNode.value += text4;
          return;
        }
      }
      appendChild(parentNode, createTextNode(text4));
    };
    exports.insertTextBefore = function(parentNode, text4, referenceNode) {
      const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
      if (prevNode && prevNode.nodeName === "#text") {
        prevNode.value += text4;
      } else {
        insertBefore(parentNode, createTextNode(text4), referenceNode);
      }
    };
    exports.adoptAttributes = function(recipient, attrs) {
      const recipientAttrsMap = [];
      for (let i = 0; i < recipient.attrs.length; i++) {
        recipientAttrsMap.push(recipient.attrs[i].name);
      }
      for (let j = 0; j < attrs.length; j++) {
        if (recipientAttrsMap.indexOf(attrs[j].name) === -1) {
          recipient.attrs.push(attrs[j]);
        }
      }
    };
    exports.getFirstChild = function(node3) {
      return node3.childNodes[0];
    };
    exports.getChildNodes = function(node3) {
      return node3.childNodes;
    };
    exports.getParentNode = function(node3) {
      return node3.parentNode;
    };
    exports.getAttrList = function(element4) {
      return element4.attrs;
    };
    exports.getTagName = function(element4) {
      return element4.tagName;
    };
    exports.getNamespaceURI = function(element4) {
      return element4.namespaceURI;
    };
    exports.getTextNodeContent = function(textNode) {
      return textNode.value;
    };
    exports.getCommentNodeContent = function(commentNode) {
      return commentNode.data;
    };
    exports.getDocumentTypeNodeName = function(doctypeNode) {
      return doctypeNode.name;
    };
    exports.getDocumentTypeNodePublicId = function(doctypeNode) {
      return doctypeNode.publicId;
    };
    exports.getDocumentTypeNodeSystemId = function(doctypeNode) {
      return doctypeNode.systemId;
    };
    exports.isTextNode = function(node3) {
      return node3.nodeName === "#text";
    };
    exports.isCommentNode = function(node3) {
      return node3.nodeName === "#comment";
    };
    exports.isDocumentTypeNode = function(node3) {
      return node3.nodeName === "#documentType";
    };
    exports.isElementNode = function(node3) {
      return !!node3.tagName;
    };
    exports.setNodeSourceCodeLocation = function(node3, location2) {
      node3.sourceCodeLocation = location2;
    };
    exports.getNodeSourceCodeLocation = function(node3) {
      return node3.sourceCodeLocation;
    };
    exports.updateNodeSourceCodeLocation = function(node3, endLocation) {
      node3.sourceCodeLocation = Object.assign(node3.sourceCodeLocation, endLocation);
    };
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/utils/merge-options.js
var require_merge_options = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/utils/merge-options.js"(exports, module) {
    "use strict";
    module.exports = function mergeOptions(defaults, options) {
      options = options || /* @__PURE__ */ Object.create(null);
      return [defaults, options].reduce((merged, optObj) => {
        Object.keys(optObj).forEach((key2) => {
          merged[key2] = optObj[key2];
        });
        return merged;
      }, /* @__PURE__ */ Object.create(null));
    };
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/common/doctype.js
var require_doctype = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/common/doctype.js"(exports) {
    "use strict";
    var { DOCUMENT_MODE } = require_html();
    var VALID_DOCTYPE_NAME = "html";
    var VALID_SYSTEM_ID = "about:legacy-compat";
    var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
    var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
      "+//silmaril//dtd html pro v0r11 19970101//",
      "-//as//dtd html 3.0 aswedit + extensions//",
      "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
      "-//ietf//dtd html 2.0 level 1//",
      "-//ietf//dtd html 2.0 level 2//",
      "-//ietf//dtd html 2.0 strict level 1//",
      "-//ietf//dtd html 2.0 strict level 2//",
      "-//ietf//dtd html 2.0 strict//",
      "-//ietf//dtd html 2.0//",
      "-//ietf//dtd html 2.1e//",
      "-//ietf//dtd html 3.0//",
      "-//ietf//dtd html 3.2 final//",
      "-//ietf//dtd html 3.2//",
      "-//ietf//dtd html 3//",
      "-//ietf//dtd html level 0//",
      "-//ietf//dtd html level 1//",
      "-//ietf//dtd html level 2//",
      "-//ietf//dtd html level 3//",
      "-//ietf//dtd html strict level 0//",
      "-//ietf//dtd html strict level 1//",
      "-//ietf//dtd html strict level 2//",
      "-//ietf//dtd html strict level 3//",
      "-//ietf//dtd html strict//",
      "-//ietf//dtd html//",
      "-//metrius//dtd metrius presentational//",
      "-//microsoft//dtd internet explorer 2.0 html strict//",
      "-//microsoft//dtd internet explorer 2.0 html//",
      "-//microsoft//dtd internet explorer 2.0 tables//",
      "-//microsoft//dtd internet explorer 3.0 html strict//",
      "-//microsoft//dtd internet explorer 3.0 html//",
      "-//microsoft//dtd internet explorer 3.0 tables//",
      "-//netscape comm. corp.//dtd html//",
      "-//netscape comm. corp.//dtd strict html//",
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      "-//sq//dtd html 2.0 hotmetal + extensions//",
      "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
      "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
      "-//spyglass//dtd html 2.0 extended//",
      "-//sun microsystems corp.//dtd hotjava html//",
      "-//sun microsystems corp.//dtd hotjava strict html//",
      "-//w3c//dtd html 3 1995-03-24//",
      "-//w3c//dtd html 3.2 draft//",
      "-//w3c//dtd html 3.2 final//",
      "-//w3c//dtd html 3.2//",
      "-//w3c//dtd html 3.2s draft//",
      "-//w3c//dtd html 4.0 frameset//",
      "-//w3c//dtd html 4.0 transitional//",
      "-//w3c//dtd html experimental 19960712//",
      "-//w3c//dtd html experimental 970421//",
      "-//w3c//dtd w3 html//",
      "-//w3o//dtd w3 html 3.0//",
      "-//webtechs//dtd mozilla html 2.0//",
      "-//webtechs//dtd mozilla html//"
    ];
    var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat([
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ]);
    var QUIRKS_MODE_PUBLIC_IDS = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"];
    var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
    var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat([
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ]);
    function enquoteDoctypeId(id) {
      const quote = id.indexOf('"') !== -1 ? "'" : '"';
      return quote + id + quote;
    }
    function hasPrefix(publicId, prefixes) {
      for (let i = 0; i < prefixes.length; i++) {
        if (publicId.indexOf(prefixes[i]) === 0) {
          return true;
        }
      }
      return false;
    }
    exports.isConforming = function(token) {
      return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
    };
    exports.getDocumentMode = function(token) {
      if (token.name !== VALID_DOCTYPE_NAME) {
        return DOCUMENT_MODE.QUIRKS;
      }
      const systemId = token.systemId;
      if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return DOCUMENT_MODE.QUIRKS;
      }
      let publicId = token.publicId;
      if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1) {
          return DOCUMENT_MODE.QUIRKS;
        }
        let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return DOCUMENT_MODE.QUIRKS;
        }
        prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return DOCUMENT_MODE.LIMITED_QUIRKS;
        }
      }
      return DOCUMENT_MODE.NO_QUIRKS;
    };
    exports.serializeContent = function(name, publicId, systemId) {
      let str = "!DOCTYPE ";
      if (name) {
        str += name;
      }
      if (publicId) {
        str += " PUBLIC " + enquoteDoctypeId(publicId);
      } else if (systemId) {
        str += " SYSTEM";
      }
      if (systemId !== null) {
        str += " " + enquoteDoctypeId(systemId);
      }
      return str;
    };
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/common/foreign-content.js
var require_foreign_content = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/common/foreign-content.js"(exports) {
    "use strict";
    var Tokenizer = require_tokenizer();
    var HTML = require_html();
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    var ATTRS = HTML.ATTRS;
    var MIME_TYPES = {
      TEXT_HTML: "text/html",
      APPLICATION_XML: "application/xhtml+xml"
    };
    var DEFINITION_URL_ATTR = "definitionurl";
    var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
    var SVG_ATTRS_ADJUSTMENT_MAP = {
      attributename: "attributeName",
      attributetype: "attributeType",
      basefrequency: "baseFrequency",
      baseprofile: "baseProfile",
      calcmode: "calcMode",
      clippathunits: "clipPathUnits",
      diffuseconstant: "diffuseConstant",
      edgemode: "edgeMode",
      filterunits: "filterUnits",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      limitingconeangle: "limitingConeAngle",
      markerheight: "markerHeight",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      numoctaves: "numOctaves",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      refx: "refX",
      refy: "refY",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stitchtiles: "stitchTiles",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textlength: "textLength",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      xchannelselector: "xChannelSelector",
      ychannelselector: "yChannelSelector",
      zoomandpan: "zoomAndPan"
    };
    var XML_ATTRS_ADJUSTMENT_MAP = {
      "xlink:actuate": { prefix: "xlink", name: "actuate", namespace: NS.XLINK },
      "xlink:arcrole": { prefix: "xlink", name: "arcrole", namespace: NS.XLINK },
      "xlink:href": { prefix: "xlink", name: "href", namespace: NS.XLINK },
      "xlink:role": { prefix: "xlink", name: "role", namespace: NS.XLINK },
      "xlink:show": { prefix: "xlink", name: "show", namespace: NS.XLINK },
      "xlink:title": { prefix: "xlink", name: "title", namespace: NS.XLINK },
      "xlink:type": { prefix: "xlink", name: "type", namespace: NS.XLINK },
      "xml:base": { prefix: "xml", name: "base", namespace: NS.XML },
      "xml:lang": { prefix: "xml", name: "lang", namespace: NS.XML },
      "xml:space": { prefix: "xml", name: "space", namespace: NS.XML },
      xmlns: { prefix: "", name: "xmlns", namespace: NS.XMLNS },
      "xmlns:xlink": { prefix: "xmlns", name: "xlink", namespace: NS.XMLNS }
    };
    var SVG_TAG_NAMES_ADJUSTMENT_MAP = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient",
      textpath: "textPath"
    };
    var EXITS_FOREIGN_CONTENT = {
      [$.B]: true,
      [$.BIG]: true,
      [$.BLOCKQUOTE]: true,
      [$.BODY]: true,
      [$.BR]: true,
      [$.CENTER]: true,
      [$.CODE]: true,
      [$.DD]: true,
      [$.DIV]: true,
      [$.DL]: true,
      [$.DT]: true,
      [$.EM]: true,
      [$.EMBED]: true,
      [$.H1]: true,
      [$.H2]: true,
      [$.H3]: true,
      [$.H4]: true,
      [$.H5]: true,
      [$.H6]: true,
      [$.HEAD]: true,
      [$.HR]: true,
      [$.I]: true,
      [$.IMG]: true,
      [$.LI]: true,
      [$.LISTING]: true,
      [$.MENU]: true,
      [$.META]: true,
      [$.NOBR]: true,
      [$.OL]: true,
      [$.P]: true,
      [$.PRE]: true,
      [$.RUBY]: true,
      [$.S]: true,
      [$.SMALL]: true,
      [$.SPAN]: true,
      [$.STRONG]: true,
      [$.STRIKE]: true,
      [$.SUB]: true,
      [$.SUP]: true,
      [$.TABLE]: true,
      [$.TT]: true,
      [$.U]: true,
      [$.UL]: true,
      [$.VAR]: true
    };
    exports.causesExit = function(startTagToken) {
      const tn = startTagToken.tagName;
      const isFontWithAttrs = tn === $.FONT && (Tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null || Tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null || Tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null);
      return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
    };
    exports.adjustTokenMathMLAttrs = function(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
          token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
          break;
        }
      }
    };
    exports.adjustTokenSVGAttrs = function(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
        if (adjustedAttrName) {
          token.attrs[i].name = adjustedAttrName;
        }
      }
    };
    exports.adjustTokenXMLAttrs = function(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
        if (adjustedAttrEntry) {
          token.attrs[i].prefix = adjustedAttrEntry.prefix;
          token.attrs[i].name = adjustedAttrEntry.name;
          token.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
      }
    };
    exports.adjustTokenSVGTagName = function(token) {
      const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];
      if (adjustedTagName) {
        token.tagName = adjustedTagName;
      }
    };
    function isMathMLTextIntegrationPoint(tn, ns) {
      return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
    }
    function isHtmlIntegrationPoint(tn, ns, attrs) {
      if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
        for (let i = 0; i < attrs.length; i++) {
          if (attrs[i].name === ATTRS.ENCODING) {
            const value = attrs[i].value.toLowerCase();
            return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
          }
        }
      }
      return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
    }
    exports.isIntegrationPoint = function(tn, ns, attrs, foreignNS) {
      if ((!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) {
        return true;
      }
      if ((!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)) {
        return true;
      }
      return false;
    };
  }
});

// ../../node_modules/rehype-parse/node_modules/parse5/lib/parser/index.js
var require_parser = __commonJS({
  "../../node_modules/rehype-parse/node_modules/parse5/lib/parser/index.js"(exports, module) {
    "use strict";
    var Tokenizer = require_tokenizer();
    var OpenElementStack = require_open_element_stack();
    var FormattingElementList = require_formatting_element_list();
    var LocationInfoParserMixin = require_parser_mixin();
    var ErrorReportingParserMixin = require_parser_mixin2();
    var Mixin = require_mixin();
    var defaultTreeAdapter = require_default();
    var mergeOptions = require_merge_options();
    var doctype2 = require_doctype();
    var foreignContent = require_foreign_content();
    var ERR = require_error_codes();
    var unicode = require_unicode();
    var HTML = require_html();
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    var ATTRS = HTML.ATTRS;
    var DEFAULT_OPTIONS = {
      scriptingEnabled: true,
      sourceCodeLocationInfo: false,
      onParseError: null,
      treeAdapter: defaultTreeAdapter
    };
    var HIDDEN_INPUT_TYPE = "hidden";
    var AA_OUTER_LOOP_ITER = 8;
    var AA_INNER_LOOP_ITER = 3;
    var INITIAL_MODE = "INITIAL_MODE";
    var BEFORE_HTML_MODE = "BEFORE_HTML_MODE";
    var BEFORE_HEAD_MODE = "BEFORE_HEAD_MODE";
    var IN_HEAD_MODE = "IN_HEAD_MODE";
    var IN_HEAD_NO_SCRIPT_MODE = "IN_HEAD_NO_SCRIPT_MODE";
    var AFTER_HEAD_MODE = "AFTER_HEAD_MODE";
    var IN_BODY_MODE = "IN_BODY_MODE";
    var TEXT_MODE = "TEXT_MODE";
    var IN_TABLE_MODE = "IN_TABLE_MODE";
    var IN_TABLE_TEXT_MODE = "IN_TABLE_TEXT_MODE";
    var IN_CAPTION_MODE = "IN_CAPTION_MODE";
    var IN_COLUMN_GROUP_MODE = "IN_COLUMN_GROUP_MODE";
    var IN_TABLE_BODY_MODE = "IN_TABLE_BODY_MODE";
    var IN_ROW_MODE = "IN_ROW_MODE";
    var IN_CELL_MODE = "IN_CELL_MODE";
    var IN_SELECT_MODE = "IN_SELECT_MODE";
    var IN_SELECT_IN_TABLE_MODE = "IN_SELECT_IN_TABLE_MODE";
    var IN_TEMPLATE_MODE = "IN_TEMPLATE_MODE";
    var AFTER_BODY_MODE = "AFTER_BODY_MODE";
    var IN_FRAMESET_MODE = "IN_FRAMESET_MODE";
    var AFTER_FRAMESET_MODE = "AFTER_FRAMESET_MODE";
    var AFTER_AFTER_BODY_MODE = "AFTER_AFTER_BODY_MODE";
    var AFTER_AFTER_FRAMESET_MODE = "AFTER_AFTER_FRAMESET_MODE";
    var INSERTION_MODE_RESET_MAP = {
      [$.TR]: IN_ROW_MODE,
      [$.TBODY]: IN_TABLE_BODY_MODE,
      [$.THEAD]: IN_TABLE_BODY_MODE,
      [$.TFOOT]: IN_TABLE_BODY_MODE,
      [$.CAPTION]: IN_CAPTION_MODE,
      [$.COLGROUP]: IN_COLUMN_GROUP_MODE,
      [$.TABLE]: IN_TABLE_MODE,
      [$.BODY]: IN_BODY_MODE,
      [$.FRAMESET]: IN_FRAMESET_MODE
    };
    var TEMPLATE_INSERTION_MODE_SWITCH_MAP = {
      [$.CAPTION]: IN_TABLE_MODE,
      [$.COLGROUP]: IN_TABLE_MODE,
      [$.TBODY]: IN_TABLE_MODE,
      [$.TFOOT]: IN_TABLE_MODE,
      [$.THEAD]: IN_TABLE_MODE,
      [$.COL]: IN_COLUMN_GROUP_MODE,
      [$.TR]: IN_TABLE_BODY_MODE,
      [$.TD]: IN_ROW_MODE,
      [$.TH]: IN_ROW_MODE
    };
    var TOKEN_HANDLERS = {
      [INITIAL_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInInitialMode,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInInitialMode,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: doctypeInInitialMode,
        [Tokenizer.START_TAG_TOKEN]: tokenInInitialMode,
        [Tokenizer.END_TAG_TOKEN]: tokenInInitialMode,
        [Tokenizer.EOF_TOKEN]: tokenInInitialMode
      },
      [BEFORE_HTML_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHtml,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHtml,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagBeforeHtml,
        [Tokenizer.END_TAG_TOKEN]: endTagBeforeHtml,
        [Tokenizer.EOF_TOKEN]: tokenBeforeHtml
      },
      [BEFORE_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagBeforeHead,
        [Tokenizer.END_TAG_TOKEN]: endTagBeforeHead,
        [Tokenizer.EOF_TOKEN]: tokenBeforeHead
      },
      [IN_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagInHead,
        [Tokenizer.END_TAG_TOKEN]: endTagInHead,
        [Tokenizer.EOF_TOKEN]: tokenInHead
      },
      [IN_HEAD_NO_SCRIPT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInHeadNoScript,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHeadNoScript,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagInHeadNoScript,
        [Tokenizer.END_TAG_TOKEN]: endTagInHeadNoScript,
        [Tokenizer.EOF_TOKEN]: tokenInHeadNoScript
      },
      [AFTER_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterHead,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterHead,
        [Tokenizer.EOF_TOKEN]: tokenAfterHead
      },
      [IN_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInBody,
        [Tokenizer.END_TAG_TOKEN]: endTagInBody,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [TEXT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: ignoreToken,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: ignoreToken,
        [Tokenizer.END_TAG_TOKEN]: endTagInText,
        [Tokenizer.EOF_TOKEN]: eofInText
      },
      [IN_TABLE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTable,
        [Tokenizer.END_TAG_TOKEN]: endTagInTable,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TABLE_TEXT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTableText,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInTableText,
        [Tokenizer.COMMENT_TOKEN]: tokenInTableText,
        [Tokenizer.DOCTYPE_TOKEN]: tokenInTableText,
        [Tokenizer.START_TAG_TOKEN]: tokenInTableText,
        [Tokenizer.END_TAG_TOKEN]: tokenInTableText,
        [Tokenizer.EOF_TOKEN]: tokenInTableText
      },
      [IN_CAPTION_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInCaption,
        [Tokenizer.END_TAG_TOKEN]: endTagInCaption,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_COLUMN_GROUP_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInColumnGroup,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInColumnGroup,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInColumnGroup,
        [Tokenizer.END_TAG_TOKEN]: endTagInColumnGroup,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TABLE_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTableBody,
        [Tokenizer.END_TAG_TOKEN]: endTagInTableBody,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_ROW_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInRow,
        [Tokenizer.END_TAG_TOKEN]: endTagInRow,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_CELL_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInCell,
        [Tokenizer.END_TAG_TOKEN]: endTagInCell,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_SELECT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInSelect,
        [Tokenizer.END_TAG_TOKEN]: endTagInSelect,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_SELECT_IN_TABLE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInSelectInTable,
        [Tokenizer.END_TAG_TOKEN]: endTagInSelectInTable,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TEMPLATE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTemplate,
        [Tokenizer.END_TAG_TOKEN]: endTagInTemplate,
        [Tokenizer.EOF_TOKEN]: eofInTemplate
      },
      [AFTER_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterBody,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToRootHtmlElement,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterBody,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterBody,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [IN_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInFrameset,
        [Tokenizer.END_TAG_TOKEN]: endTagInFrameset,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterFrameset,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterFrameset,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_AFTER_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterBody,
        [Tokenizer.END_TAG_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_AFTER_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterFrameset,
        [Tokenizer.END_TAG_TOKEN]: ignoreToken,
        [Tokenizer.EOF_TOKEN]: stopParsing
      }
    };
    var Parser = class {
      constructor(options) {
        this.options = mergeOptions(DEFAULT_OPTIONS, options);
        this.treeAdapter = this.options.treeAdapter;
        this.pendingScript = null;
        if (this.options.sourceCodeLocationInfo) {
          Mixin.install(this, LocationInfoParserMixin);
        }
        if (this.options.onParseError) {
          Mixin.install(this, ErrorReportingParserMixin, { onParseError: this.options.onParseError });
        }
      }
      // API
      parse(html6) {
        const document = this.treeAdapter.createDocument();
        this._bootstrap(document, null);
        this.tokenizer.write(html6, true);
        this._runParsingLoop(null);
        return document;
      }
      parseFragment(html6, fragmentContext) {
        if (!fragmentContext) {
          fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []);
        }
        const documentMock = this.treeAdapter.createElement("documentmock", NS.HTML, []);
        this._bootstrap(documentMock, fragmentContext);
        if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE) {
          this._pushTmplInsertionMode(IN_TEMPLATE_MODE);
        }
        this._initTokenizerForFragmentParsing();
        this._insertFakeRootElement();
        this._resetInsertionMode();
        this._findFormInFragmentContext();
        this.tokenizer.write(html6, true);
        this._runParsingLoop(null);
        const rootElement = this.treeAdapter.getFirstChild(documentMock);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
      }
      //Bootstrap parser
      _bootstrap(document, fragmentContext) {
        this.tokenizer = new Tokenizer(this.options);
        this.stopped = false;
        this.insertionMode = INITIAL_MODE;
        this.originalInsertionMode = "";
        this.document = document;
        this.fragmentContext = fragmentContext;
        this.headElement = null;
        this.formElement = null;
        this.openElements = new OpenElementStack(this.document, this.treeAdapter);
        this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
        this.tmplInsertionModeStack = [];
        this.tmplInsertionModeStackTop = -1;
        this.currentTmplInsertionMode = null;
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
      }
      //Errors
      _err() {
      }
      //Parsing loop
      _runParsingLoop(scriptHandler) {
        while (!this.stopped) {
          this._setupTokenizerCDATAMode();
          const token = this.tokenizer.getNextToken();
          if (token.type === Tokenizer.HIBERNATION_TOKEN) {
            break;
          }
          if (this.skipNextNewLine) {
            this.skipNextNewLine = false;
            if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === "\n") {
              if (token.chars.length === 1) {
                continue;
              }
              token.chars = token.chars.substr(1);
            }
          }
          this._processInputToken(token);
          if (scriptHandler && this.pendingScript) {
            break;
          }
        }
      }
      runParsingLoopForCurrentChunk(writeCallback, scriptHandler) {
        this._runParsingLoop(scriptHandler);
        if (scriptHandler && this.pendingScript) {
          const script = this.pendingScript;
          this.pendingScript = null;
          scriptHandler(script);
          return;
        }
        if (writeCallback) {
          writeCallback();
        }
      }
      //Text parsing
      _setupTokenizerCDATAMode() {
        const current = this._getAdjustedCurrentElement();
        this.tokenizer.allowCDATA = current && current !== this.document && this.treeAdapter.getNamespaceURI(current) !== NS.HTML && !this._isIntegrationPoint(current);
      }
      _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = TEXT_MODE;
      }
      switchToPlaintextParsing() {
        this.insertionMode = TEXT_MODE;
        this.originalInsertionMode = IN_BODY_MODE;
        this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
      }
      //Fragment parsing
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
      }
      _findFormInFragmentContext() {
        let node3 = this.fragmentContext;
        do {
          if (this.treeAdapter.getTagName(node3) === $.FORM) {
            this.formElement = node3;
            break;
          }
          node3 = this.treeAdapter.getParentNode(node3);
        } while (node3);
      }
      _initTokenizerForFragmentParsing() {
        if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS.HTML) {
          const tn = this.treeAdapter.getTagName(this.fragmentContext);
          if (tn === $.TITLE || tn === $.TEXTAREA) {
            this.tokenizer.state = Tokenizer.MODE.RCDATA;
          } else if (tn === $.STYLE || tn === $.XMP || tn === $.IFRAME || tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT) {
            this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
          } else if (tn === $.SCRIPT) {
            this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;
          } else if (tn === $.PLAINTEXT) {
            this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
          }
        }
      }
      //Tree mutation
      _setDocumentType(token) {
        const name = token.name || "";
        const publicId = token.publicId || "";
        const systemId = token.systemId || "";
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
      }
      _attachElementToTree(element4) {
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentElement(element4);
        } else {
          const parent = this.openElements.currentTmplContent || this.openElements.current;
          this.treeAdapter.appendChild(parent, element4);
        }
      }
      _appendElement(token, namespaceURI) {
        const element4 = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element4);
      }
      _insertElement(token, namespaceURI) {
        const element4 = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element4);
        this.openElements.push(element4);
      }
      _insertFakeElement(tagName) {
        const element4 = this.treeAdapter.createElement(tagName, NS.HTML, []);
        this._attachElementToTree(element4);
        this.openElements.push(element4);
      }
      _insertTemplate(token) {
        const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
        const content3 = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content3);
        this._attachElementToTree(tmpl);
        this.openElements.push(tmpl);
      }
      _insertFakeRootElement() {
        const element4 = this.treeAdapter.createElement($.HTML, NS.HTML, []);
        this.treeAdapter.appendChild(this.openElements.current, element4);
        this.openElements.push(element4);
      }
      _appendCommentNode(token, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token.data);
        this.treeAdapter.appendChild(parent, commentNode);
      }
      _insertCharacters(token) {
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentText(token.chars);
        } else {
          const parent = this.openElements.currentTmplContent || this.openElements.current;
          this.treeAdapter.insertText(parent, token.chars);
        }
      }
      _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
          this.treeAdapter.detachNode(child);
          this.treeAdapter.appendChild(recipient, child);
        }
      }
      //Token processing
      _shouldProcessTokenInForeignContent(token) {
        const current = this._getAdjustedCurrentElement();
        if (!current || current === this.document) {
          return false;
        }
        const ns = this.treeAdapter.getNamespaceURI(current);
        if (ns === NS.HTML) {
          return false;
        }
        if (this.treeAdapter.getTagName(current) === $.ANNOTATION_XML && ns === NS.MATHML && token.type === Tokenizer.START_TAG_TOKEN && token.tagName === $.SVG) {
          return false;
        }
        const isCharacterToken = token.type === Tokenizer.CHARACTER_TOKEN || token.type === Tokenizer.NULL_CHARACTER_TOKEN || token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN;
        const isMathMLTextStartTag = token.type === Tokenizer.START_TAG_TOKEN && token.tagName !== $.MGLYPH && token.tagName !== $.MALIGNMARK;
        if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS.MATHML)) {
          return false;
        }
        if ((token.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isIntegrationPoint(current, NS.HTML)) {
          return false;
        }
        return token.type !== Tokenizer.EOF_TOKEN;
      }
      _processToken(token) {
        TOKEN_HANDLERS[this.insertionMode][token.type](this, token);
      }
      _processTokenInBodyMode(token) {
        TOKEN_HANDLERS[IN_BODY_MODE][token.type](this, token);
      }
      _processTokenInForeignContent(token) {
        if (token.type === Tokenizer.CHARACTER_TOKEN) {
          characterInForeignContent(this, token);
        } else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN) {
          nullCharacterInForeignContent(this, token);
        } else if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN) {
          insertCharacters(this, token);
        } else if (token.type === Tokenizer.COMMENT_TOKEN) {
          appendComment(this, token);
        } else if (token.type === Tokenizer.START_TAG_TOKEN) {
          startTagInForeignContent(this, token);
        } else if (token.type === Tokenizer.END_TAG_TOKEN) {
          endTagInForeignContent(this, token);
        }
      }
      _processInputToken(token) {
        if (this._shouldProcessTokenInForeignContent(token)) {
          this._processTokenInForeignContent(token);
        } else {
          this._processToken(token);
        }
        if (token.type === Tokenizer.START_TAG_TOKEN && token.selfClosing && !token.ackSelfClosing) {
          this._err(ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
      }
      //Integration points
      _isIntegrationPoint(element4, foreignNS) {
        const tn = this.treeAdapter.getTagName(element4);
        const ns = this.treeAdapter.getNamespaceURI(element4);
        const attrs = this.treeAdapter.getAttrList(element4);
        return foreignContent.isIntegrationPoint(tn, ns, attrs, foreignNS);
      }
      //Active formatting elements reconstruction
      _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.length;
        if (listLength) {
          let unopenIdx = listLength;
          let entry = null;
          do {
            unopenIdx--;
            entry = this.activeFormattingElements.entries[unopenIdx];
            if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
              unopenIdx++;
              break;
            }
          } while (unopenIdx > 0);
          for (let i = unopenIdx; i < listLength; i++) {
            entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
          }
        }
      }
      //Close elements
      _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = IN_ROW_MODE;
      }
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion($.P);
        this.openElements.popUntilTagNamePopped($.P);
      }
      //Insertion modes
      _resetInsertionMode() {
        for (let i = this.openElements.stackTop, last = false; i >= 0; i--) {
          let element4 = this.openElements.items[i];
          if (i === 0) {
            last = true;
            if (this.fragmentContext) {
              element4 = this.fragmentContext;
            }
          }
          const tn = this.treeAdapter.getTagName(element4);
          const newInsertionMode = INSERTION_MODE_RESET_MAP[tn];
          if (newInsertionMode) {
            this.insertionMode = newInsertionMode;
            break;
          } else if (!last && (tn === $.TD || tn === $.TH)) {
            this.insertionMode = IN_CELL_MODE;
            break;
          } else if (!last && tn === $.HEAD) {
            this.insertionMode = IN_HEAD_MODE;
            break;
          } else if (tn === $.SELECT) {
            this._resetInsertionModeForSelect(i);
            break;
          } else if (tn === $.TEMPLATE) {
            this.insertionMode = this.currentTmplInsertionMode;
            break;
          } else if (tn === $.HTML) {
            this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
            break;
          } else if (last) {
            this.insertionMode = IN_BODY_MODE;
            break;
          }
        }
      }
      _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
          for (let i = selectIdx - 1; i > 0; i--) {
            const ancestor = this.openElements.items[i];
            const tn = this.treeAdapter.getTagName(ancestor);
            if (tn === $.TEMPLATE) {
              break;
            } else if (tn === $.TABLE) {
              this.insertionMode = IN_SELECT_IN_TABLE_MODE;
              return;
            }
          }
        }
        this.insertionMode = IN_SELECT_MODE;
      }
      _pushTmplInsertionMode(mode) {
        this.tmplInsertionModeStack.push(mode);
        this.tmplInsertionModeStackTop++;
        this.currentTmplInsertionMode = mode;
      }
      _popTmplInsertionMode() {
        this.tmplInsertionModeStack.pop();
        this.tmplInsertionModeStackTop--;
        this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
      }
      //Foster parenting
      _isElementCausesFosterParenting(element4) {
        const tn = this.treeAdapter.getTagName(element4);
        return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR;
      }
      _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
      }
      _findFosterParentingLocation() {
        const location2 = {
          parent: null,
          beforeElement: null
        };
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          const openElement = this.openElements.items[i];
          const tn = this.treeAdapter.getTagName(openElement);
          const ns = this.treeAdapter.getNamespaceURI(openElement);
          if (tn === $.TEMPLATE && ns === NS.HTML) {
            location2.parent = this.treeAdapter.getTemplateContent(openElement);
            break;
          } else if (tn === $.TABLE) {
            location2.parent = this.treeAdapter.getParentNode(openElement);
            if (location2.parent) {
              location2.beforeElement = openElement;
            } else {
              location2.parent = this.openElements.items[i - 1];
            }
            break;
          }
        }
        if (!location2.parent) {
          location2.parent = this.openElements.items[0];
        }
        return location2;
      }
      _fosterParentElement(element4) {
        const location2 = this._findFosterParentingLocation();
        if (location2.beforeElement) {
          this.treeAdapter.insertBefore(location2.parent, element4, location2.beforeElement);
        } else {
          this.treeAdapter.appendChild(location2.parent, element4);
        }
      }
      _fosterParentText(chars) {
        const location2 = this._findFosterParentingLocation();
        if (location2.beforeElement) {
          this.treeAdapter.insertTextBefore(location2.parent, chars, location2.beforeElement);
        } else {
          this.treeAdapter.insertText(location2.parent, chars);
        }
      }
      //Special elements
      _isSpecialElement(element4) {
        const tn = this.treeAdapter.getTagName(element4);
        const ns = this.treeAdapter.getNamespaceURI(element4);
        return HTML.SPECIAL_ELEMENTS[ns][tn];
      }
    };
    module.exports = Parser;
    function aaObtainFormattingElementEntry(p5, token) {
      let formattingElementEntry = p5.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
      if (formattingElementEntry) {
        if (!p5.openElements.contains(formattingElementEntry.element)) {
          p5.activeFormattingElements.removeEntry(formattingElementEntry);
          formattingElementEntry = null;
        } else if (!p5.openElements.hasInScope(token.tagName)) {
          formattingElementEntry = null;
        }
      } else {
        genericEndTagInBody(p5, token);
      }
      return formattingElementEntry;
    }
    function aaObtainFurthestBlock(p5, formattingElementEntry) {
      let furthestBlock = null;
      for (let i = p5.openElements.stackTop; i >= 0; i--) {
        const element4 = p5.openElements.items[i];
        if (element4 === formattingElementEntry.element) {
          break;
        }
        if (p5._isSpecialElement(element4)) {
          furthestBlock = element4;
        }
      }
      if (!furthestBlock) {
        p5.openElements.popUntilElementPopped(formattingElementEntry.element);
        p5.activeFormattingElements.removeEntry(formattingElementEntry);
      }
      return furthestBlock;
    }
    function aaInnerLoop(p5, furthestBlock, formattingElement) {
      let lastElement = furthestBlock;
      let nextElement = p5.openElements.getCommonAncestor(furthestBlock);
      for (let i = 0, element4 = nextElement; element4 !== formattingElement; i++, element4 = nextElement) {
        nextElement = p5.openElements.getCommonAncestor(element4);
        const elementEntry = p5.activeFormattingElements.getElementEntry(element4);
        const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
        const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
        if (shouldRemoveFromOpenElements) {
          if (counterOverflow) {
            p5.activeFormattingElements.removeEntry(elementEntry);
          }
          p5.openElements.remove(element4);
        } else {
          element4 = aaRecreateElementFromEntry(p5, elementEntry);
          if (lastElement === furthestBlock) {
            p5.activeFormattingElements.bookmark = elementEntry;
          }
          p5.treeAdapter.detachNode(lastElement);
          p5.treeAdapter.appendChild(element4, lastElement);
          lastElement = element4;
        }
      }
      return lastElement;
    }
    function aaRecreateElementFromEntry(p5, elementEntry) {
      const ns = p5.treeAdapter.getNamespaceURI(elementEntry.element);
      const newElement = p5.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
      p5.openElements.replace(elementEntry.element, newElement);
      elementEntry.element = newElement;
      return newElement;
    }
    function aaInsertLastNodeInCommonAncestor(p5, commonAncestor, lastElement) {
      if (p5._isElementCausesFosterParenting(commonAncestor)) {
        p5._fosterParentElement(lastElement);
      } else {
        const tn = p5.treeAdapter.getTagName(commonAncestor);
        const ns = p5.treeAdapter.getNamespaceURI(commonAncestor);
        if (tn === $.TEMPLATE && ns === NS.HTML) {
          commonAncestor = p5.treeAdapter.getTemplateContent(commonAncestor);
        }
        p5.treeAdapter.appendChild(commonAncestor, lastElement);
      }
    }
    function aaReplaceFormattingElement(p5, furthestBlock, formattingElementEntry) {
      const ns = p5.treeAdapter.getNamespaceURI(formattingElementEntry.element);
      const token = formattingElementEntry.token;
      const newElement = p5.treeAdapter.createElement(token.tagName, ns, token.attrs);
      p5._adoptNodes(furthestBlock, newElement);
      p5.treeAdapter.appendChild(furthestBlock, newElement);
      p5.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
      p5.activeFormattingElements.removeEntry(formattingElementEntry);
      p5.openElements.remove(formattingElementEntry.element);
      p5.openElements.insertAfter(furthestBlock, newElement);
    }
    function callAdoptionAgency(p5, token) {
      let formattingElementEntry;
      for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        formattingElementEntry = aaObtainFormattingElementEntry(p5, token, formattingElementEntry);
        if (!formattingElementEntry) {
          break;
        }
        const furthestBlock = aaObtainFurthestBlock(p5, formattingElementEntry);
        if (!furthestBlock) {
          break;
        }
        p5.activeFormattingElements.bookmark = formattingElementEntry;
        const lastElement = aaInnerLoop(p5, furthestBlock, formattingElementEntry.element);
        const commonAncestor = p5.openElements.getCommonAncestor(formattingElementEntry.element);
        p5.treeAdapter.detachNode(lastElement);
        aaInsertLastNodeInCommonAncestor(p5, commonAncestor, lastElement);
        aaReplaceFormattingElement(p5, furthestBlock, formattingElementEntry);
      }
    }
    function ignoreToken() {
    }
    function misplacedDoctype(p5) {
      p5._err(ERR.misplacedDoctype);
    }
    function appendComment(p5, token) {
      p5._appendCommentNode(token, p5.openElements.currentTmplContent || p5.openElements.current);
    }
    function appendCommentToRootHtmlElement(p5, token) {
      p5._appendCommentNode(token, p5.openElements.items[0]);
    }
    function appendCommentToDocument(p5, token) {
      p5._appendCommentNode(token, p5.document);
    }
    function insertCharacters(p5, token) {
      p5._insertCharacters(token);
    }
    function stopParsing(p5) {
      p5.stopped = true;
    }
    function doctypeInInitialMode(p5, token) {
      p5._setDocumentType(token);
      const mode = token.forceQuirks ? HTML.DOCUMENT_MODE.QUIRKS : doctype2.getDocumentMode(token);
      if (!doctype2.isConforming(token)) {
        p5._err(ERR.nonConformingDoctype);
      }
      p5.treeAdapter.setDocumentMode(p5.document, mode);
      p5.insertionMode = BEFORE_HTML_MODE;
    }
    function tokenInInitialMode(p5, token) {
      p5._err(ERR.missingDoctype, { beforeToken: true });
      p5.treeAdapter.setDocumentMode(p5.document, HTML.DOCUMENT_MODE.QUIRKS);
      p5.insertionMode = BEFORE_HTML_MODE;
      p5._processToken(token);
    }
    function startTagBeforeHtml(p5, token) {
      if (token.tagName === $.HTML) {
        p5._insertElement(token, NS.HTML);
        p5.insertionMode = BEFORE_HEAD_MODE;
      } else {
        tokenBeforeHtml(p5, token);
      }
    }
    function endTagBeforeHtml(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR) {
        tokenBeforeHtml(p5, token);
      }
    }
    function tokenBeforeHtml(p5, token) {
      p5._insertFakeRootElement();
      p5.insertionMode = BEFORE_HEAD_MODE;
      p5._processToken(token);
    }
    function startTagBeforeHead(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.HEAD) {
        p5._insertElement(token, NS.HTML);
        p5.headElement = p5.openElements.current;
        p5.insertionMode = IN_HEAD_MODE;
      } else {
        tokenBeforeHead(p5, token);
      }
    }
    function endTagBeforeHead(p5, token) {
      const tn = token.tagName;
      if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR) {
        tokenBeforeHead(p5, token);
      } else {
        p5._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenBeforeHead(p5, token) {
      p5._insertFakeElement($.HEAD);
      p5.headElement = p5.openElements.current;
      p5.insertionMode = IN_HEAD_MODE;
      p5._processToken(token);
    }
    function startTagInHead(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META) {
        p5._appendElement(token, NS.HTML);
        token.ackSelfClosing = true;
      } else if (tn === $.TITLE) {
        p5._switchToTextParsing(token, Tokenizer.MODE.RCDATA);
      } else if (tn === $.NOSCRIPT) {
        if (p5.options.scriptingEnabled) {
          p5._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
        } else {
          p5._insertElement(token, NS.HTML);
          p5.insertionMode = IN_HEAD_NO_SCRIPT_MODE;
        }
      } else if (tn === $.NOFRAMES || tn === $.STYLE) {
        p5._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
      } else if (tn === $.SCRIPT) {
        p5._switchToTextParsing(token, Tokenizer.MODE.SCRIPT_DATA);
      } else if (tn === $.TEMPLATE) {
        p5._insertTemplate(token, NS.HTML);
        p5.activeFormattingElements.insertMarker();
        p5.framesetOk = false;
        p5.insertionMode = IN_TEMPLATE_MODE;
        p5._pushTmplInsertionMode(IN_TEMPLATE_MODE);
      } else if (tn === $.HEAD) {
        p5._err(ERR.misplacedStartTagForHeadElement);
      } else {
        tokenInHead(p5, token);
      }
    }
    function endTagInHead(p5, token) {
      const tn = token.tagName;
      if (tn === $.HEAD) {
        p5.openElements.pop();
        p5.insertionMode = AFTER_HEAD_MODE;
      } else if (tn === $.BODY || tn === $.BR || tn === $.HTML) {
        tokenInHead(p5, token);
      } else if (tn === $.TEMPLATE) {
        if (p5.openElements.tmplCount > 0) {
          p5.openElements.generateImpliedEndTagsThoroughly();
          if (p5.openElements.currentTagName !== $.TEMPLATE) {
            p5._err(ERR.closingOfElementWithOpenChildElements);
          }
          p5.openElements.popUntilTagNamePopped($.TEMPLATE);
          p5.activeFormattingElements.clearToLastMarker();
          p5._popTmplInsertionMode();
          p5._resetInsertionMode();
        } else {
          p5._err(ERR.endTagWithoutMatchingOpenElement);
        }
      } else {
        p5._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHead(p5, token) {
      p5.openElements.pop();
      p5.insertionMode = AFTER_HEAD_MODE;
      p5._processToken(token);
    }
    function startTagInHeadNoScript(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.BASEFONT || tn === $.BGSOUND || tn === $.HEAD || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.STYLE) {
        startTagInHead(p5, token);
      } else if (tn === $.NOSCRIPT) {
        p5._err(ERR.nestedNoscriptInHead);
      } else {
        tokenInHeadNoScript(p5, token);
      }
    }
    function endTagInHeadNoScript(p5, token) {
      const tn = token.tagName;
      if (tn === $.NOSCRIPT) {
        p5.openElements.pop();
        p5.insertionMode = IN_HEAD_MODE;
      } else if (tn === $.BR) {
        tokenInHeadNoScript(p5, token);
      } else {
        p5._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHeadNoScript(p5, token) {
      const errCode = token.type === Tokenizer.EOF_TOKEN ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
      p5._err(errCode);
      p5.openElements.pop();
      p5.insertionMode = IN_HEAD_MODE;
      p5._processToken(token);
    }
    function startTagAfterHead(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.BODY) {
        p5._insertElement(token, NS.HTML);
        p5.framesetOk = false;
        p5.insertionMode = IN_BODY_MODE;
      } else if (tn === $.FRAMESET) {
        p5._insertElement(token, NS.HTML);
        p5.insertionMode = IN_FRAMESET_MODE;
      } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
        p5._err(ERR.abandonedHeadElementChild);
        p5.openElements.push(p5.headElement);
        startTagInHead(p5, token);
        p5.openElements.remove(p5.headElement);
      } else if (tn === $.HEAD) {
        p5._err(ERR.misplacedStartTagForHeadElement);
      } else {
        tokenAfterHead(p5, token);
      }
    }
    function endTagAfterHead(p5, token) {
      const tn = token.tagName;
      if (tn === $.BODY || tn === $.HTML || tn === $.BR) {
        tokenAfterHead(p5, token);
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p5, token);
      } else {
        p5._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenAfterHead(p5, token) {
      p5._insertFakeElement($.BODY);
      p5.insertionMode = IN_BODY_MODE;
      p5._processToken(token);
    }
    function whitespaceCharacterInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      p5._insertCharacters(token);
    }
    function characterInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      p5._insertCharacters(token);
      p5.framesetOk = false;
    }
    function htmlStartTagInBody(p5, token) {
      if (p5.openElements.tmplCount === 0) {
        p5.treeAdapter.adoptAttributes(p5.openElements.items[0], token.attrs);
      }
    }
    function bodyStartTagInBody(p5, token) {
      const bodyElement = p5.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement && p5.openElements.tmplCount === 0) {
        p5.framesetOk = false;
        p5.treeAdapter.adoptAttributes(bodyElement, token.attrs);
      }
    }
    function framesetStartTagInBody(p5, token) {
      const bodyElement = p5.openElements.tryPeekProperlyNestedBodyElement();
      if (p5.framesetOk && bodyElement) {
        p5.treeAdapter.detachNode(bodyElement);
        p5.openElements.popAllUpToHtmlElement();
        p5._insertElement(token, NS.HTML);
        p5.insertionMode = IN_FRAMESET_MODE;
      }
    }
    function addressStartTagInBody(p5, token) {
      if (p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      p5._insertElement(token, NS.HTML);
    }
    function numberedHeaderStartTagInBody(p5, token) {
      if (p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      const tn = p5.openElements.currentTagName;
      if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
        p5.openElements.pop();
      }
      p5._insertElement(token, NS.HTML);
    }
    function preStartTagInBody(p5, token) {
      if (p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      p5._insertElement(token, NS.HTML);
      p5.skipNextNewLine = true;
      p5.framesetOk = false;
    }
    function formStartTagInBody(p5, token) {
      const inTemplate = p5.openElements.tmplCount > 0;
      if (!p5.formElement || inTemplate) {
        if (p5.openElements.hasInButtonScope($.P)) {
          p5._closePElement();
        }
        p5._insertElement(token, NS.HTML);
        if (!inTemplate) {
          p5.formElement = p5.openElements.current;
        }
      }
    }
    function listItemStartTagInBody(p5, token) {
      p5.framesetOk = false;
      const tn = token.tagName;
      for (let i = p5.openElements.stackTop; i >= 0; i--) {
        const element4 = p5.openElements.items[i];
        const elementTn = p5.treeAdapter.getTagName(element4);
        let closeTn = null;
        if (tn === $.LI && elementTn === $.LI) {
          closeTn = $.LI;
        } else if ((tn === $.DD || tn === $.DT) && (elementTn === $.DD || elementTn === $.DT)) {
          closeTn = elementTn;
        }
        if (closeTn) {
          p5.openElements.generateImpliedEndTagsWithExclusion(closeTn);
          p5.openElements.popUntilTagNamePopped(closeTn);
          break;
        }
        if (elementTn !== $.ADDRESS && elementTn !== $.DIV && elementTn !== $.P && p5._isSpecialElement(element4)) {
          break;
        }
      }
      if (p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      p5._insertElement(token, NS.HTML);
    }
    function plaintextStartTagInBody(p5, token) {
      if (p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      p5._insertElement(token, NS.HTML);
      p5.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
    }
    function buttonStartTagInBody(p5, token) {
      if (p5.openElements.hasInScope($.BUTTON)) {
        p5.openElements.generateImpliedEndTags();
        p5.openElements.popUntilTagNamePopped($.BUTTON);
      }
      p5._reconstructActiveFormattingElements();
      p5._insertElement(token, NS.HTML);
      p5.framesetOk = false;
    }
    function aStartTagInBody(p5, token) {
      const activeElementEntry = p5.activeFormattingElements.getElementEntryInScopeWithTagName($.A);
      if (activeElementEntry) {
        callAdoptionAgency(p5, token);
        p5.openElements.remove(activeElementEntry.element);
        p5.activeFormattingElements.removeEntry(activeElementEntry);
      }
      p5._reconstructActiveFormattingElements();
      p5._insertElement(token, NS.HTML);
      p5.activeFormattingElements.pushElement(p5.openElements.current, token);
    }
    function bStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      p5._insertElement(token, NS.HTML);
      p5.activeFormattingElements.pushElement(p5.openElements.current, token);
    }
    function nobrStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      if (p5.openElements.hasInScope($.NOBR)) {
        callAdoptionAgency(p5, token);
        p5._reconstructActiveFormattingElements();
      }
      p5._insertElement(token, NS.HTML);
      p5.activeFormattingElements.pushElement(p5.openElements.current, token);
    }
    function appletStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      p5._insertElement(token, NS.HTML);
      p5.activeFormattingElements.insertMarker();
      p5.framesetOk = false;
    }
    function tableStartTagInBody(p5, token) {
      if (p5.treeAdapter.getDocumentMode(p5.document) !== HTML.DOCUMENT_MODE.QUIRKS && p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      p5._insertElement(token, NS.HTML);
      p5.framesetOk = false;
      p5.insertionMode = IN_TABLE_MODE;
    }
    function areaStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      p5._appendElement(token, NS.HTML);
      p5.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function inputStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      p5._appendElement(token, NS.HTML);
      const inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);
      if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE) {
        p5.framesetOk = false;
      }
      token.ackSelfClosing = true;
    }
    function paramStartTagInBody(p5, token) {
      p5._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
    }
    function hrStartTagInBody(p5, token) {
      if (p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      p5._appendElement(token, NS.HTML);
      p5.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function imageStartTagInBody(p5, token) {
      token.tagName = $.IMG;
      areaStartTagInBody(p5, token);
    }
    function textareaStartTagInBody(p5, token) {
      p5._insertElement(token, NS.HTML);
      p5.skipNextNewLine = true;
      p5.tokenizer.state = Tokenizer.MODE.RCDATA;
      p5.originalInsertionMode = p5.insertionMode;
      p5.framesetOk = false;
      p5.insertionMode = TEXT_MODE;
    }
    function xmpStartTagInBody(p5, token) {
      if (p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      p5._reconstructActiveFormattingElements();
      p5.framesetOk = false;
      p5._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
    }
    function iframeStartTagInBody(p5, token) {
      p5.framesetOk = false;
      p5._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
    }
    function noembedStartTagInBody(p5, token) {
      p5._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
    }
    function selectStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      p5._insertElement(token, NS.HTML);
      p5.framesetOk = false;
      if (p5.insertionMode === IN_TABLE_MODE || p5.insertionMode === IN_CAPTION_MODE || p5.insertionMode === IN_TABLE_BODY_MODE || p5.insertionMode === IN_ROW_MODE || p5.insertionMode === IN_CELL_MODE) {
        p5.insertionMode = IN_SELECT_IN_TABLE_MODE;
      } else {
        p5.insertionMode = IN_SELECT_MODE;
      }
    }
    function optgroupStartTagInBody(p5, token) {
      if (p5.openElements.currentTagName === $.OPTION) {
        p5.openElements.pop();
      }
      p5._reconstructActiveFormattingElements();
      p5._insertElement(token, NS.HTML);
    }
    function rbStartTagInBody(p5, token) {
      if (p5.openElements.hasInScope($.RUBY)) {
        p5.openElements.generateImpliedEndTags();
      }
      p5._insertElement(token, NS.HTML);
    }
    function rtStartTagInBody(p5, token) {
      if (p5.openElements.hasInScope($.RUBY)) {
        p5.openElements.generateImpliedEndTagsWithExclusion($.RTC);
      }
      p5._insertElement(token, NS.HTML);
    }
    function menuStartTagInBody(p5, token) {
      if (p5.openElements.hasInButtonScope($.P)) {
        p5._closePElement();
      }
      p5._insertElement(token, NS.HTML);
    }
    function mathStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      foreignContent.adjustTokenMathMLAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p5._appendElement(token, NS.MATHML);
      } else {
        p5._insertElement(token, NS.MATHML);
      }
      token.ackSelfClosing = true;
    }
    function svgStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      foreignContent.adjustTokenSVGAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p5._appendElement(token, NS.SVG);
      } else {
        p5._insertElement(token, NS.SVG);
      }
      token.ackSelfClosing = true;
    }
    function genericStartTagInBody(p5, token) {
      p5._reconstructActiveFormattingElements();
      p5._insertElement(token, NS.HTML);
    }
    function startTagInBody(p5, token) {
      const tn = token.tagName;
      switch (tn.length) {
        case 1:
          if (tn === $.I || tn === $.S || tn === $.B || tn === $.U) {
            bStartTagInBody(p5, token);
          } else if (tn === $.P) {
            addressStartTagInBody(p5, token);
          } else if (tn === $.A) {
            aStartTagInBody(p5, token);
          } else {
            genericStartTagInBody(p5, token);
          }
          break;
        case 2:
          if (tn === $.DL || tn === $.OL || tn === $.UL) {
            addressStartTagInBody(p5, token);
          } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
            numberedHeaderStartTagInBody(p5, token);
          } else if (tn === $.LI || tn === $.DD || tn === $.DT) {
            listItemStartTagInBody(p5, token);
          } else if (tn === $.EM || tn === $.TT) {
            bStartTagInBody(p5, token);
          } else if (tn === $.BR) {
            areaStartTagInBody(p5, token);
          } else if (tn === $.HR) {
            hrStartTagInBody(p5, token);
          } else if (tn === $.RB) {
            rbStartTagInBody(p5, token);
          } else if (tn === $.RT || tn === $.RP) {
            rtStartTagInBody(p5, token);
          } else if (tn !== $.TH && tn !== $.TD && tn !== $.TR) {
            genericStartTagInBody(p5, token);
          }
          break;
        case 3:
          if (tn === $.DIV || tn === $.DIR || tn === $.NAV) {
            addressStartTagInBody(p5, token);
          } else if (tn === $.PRE) {
            preStartTagInBody(p5, token);
          } else if (tn === $.BIG) {
            bStartTagInBody(p5, token);
          } else if (tn === $.IMG || tn === $.WBR) {
            areaStartTagInBody(p5, token);
          } else if (tn === $.XMP) {
            xmpStartTagInBody(p5, token);
          } else if (tn === $.SVG) {
            svgStartTagInBody(p5, token);
          } else if (tn === $.RTC) {
            rbStartTagInBody(p5, token);
          } else if (tn !== $.COL) {
            genericStartTagInBody(p5, token);
          }
          break;
        case 4:
          if (tn === $.HTML) {
            htmlStartTagInBody(p5, token);
          } else if (tn === $.BASE || tn === $.LINK || tn === $.META) {
            startTagInHead(p5, token);
          } else if (tn === $.BODY) {
            bodyStartTagInBody(p5, token);
          } else if (tn === $.MAIN || tn === $.MENU) {
            addressStartTagInBody(p5, token);
          } else if (tn === $.FORM) {
            formStartTagInBody(p5, token);
          } else if (tn === $.CODE || tn === $.FONT) {
            bStartTagInBody(p5, token);
          } else if (tn === $.NOBR) {
            nobrStartTagInBody(p5, token);
          } else if (tn === $.AREA) {
            areaStartTagInBody(p5, token);
          } else if (tn === $.MATH) {
            mathStartTagInBody(p5, token);
          } else if (tn === $.MENU) {
            menuStartTagInBody(p5, token);
          } else if (tn !== $.HEAD) {
            genericStartTagInBody(p5, token);
          }
          break;
        case 5:
          if (tn === $.STYLE || tn === $.TITLE) {
            startTagInHead(p5, token);
          } else if (tn === $.ASIDE) {
            addressStartTagInBody(p5, token);
          } else if (tn === $.SMALL) {
            bStartTagInBody(p5, token);
          } else if (tn === $.TABLE) {
            tableStartTagInBody(p5, token);
          } else if (tn === $.EMBED) {
            areaStartTagInBody(p5, token);
          } else if (tn === $.INPUT) {
            inputStartTagInBody(p5, token);
          } else if (tn === $.PARAM || tn === $.TRACK) {
            paramStartTagInBody(p5, token);
          } else if (tn === $.IMAGE) {
            imageStartTagInBody(p5, token);
          } else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD) {
            genericStartTagInBody(p5, token);
          }
          break;
        case 6:
          if (tn === $.SCRIPT) {
            startTagInHead(p5, token);
          } else if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP || tn === $.DIALOG) {
            addressStartTagInBody(p5, token);
          } else if (tn === $.BUTTON) {
            buttonStartTagInBody(p5, token);
          } else if (tn === $.STRIKE || tn === $.STRONG) {
            bStartTagInBody(p5, token);
          } else if (tn === $.APPLET || tn === $.OBJECT) {
            appletStartTagInBody(p5, token);
          } else if (tn === $.KEYGEN) {
            areaStartTagInBody(p5, token);
          } else if (tn === $.SOURCE) {
            paramStartTagInBody(p5, token);
          } else if (tn === $.IFRAME) {
            iframeStartTagInBody(p5, token);
          } else if (tn === $.SELECT) {
            selectStartTagInBody(p5, token);
          } else if (tn === $.OPTION) {
            optgroupStartTagInBody(p5, token);
          } else {
            genericStartTagInBody(p5, token);
          }
          break;
        case 7:
          if (tn === $.BGSOUND) {
            startTagInHead(p5, token);
          } else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY) {
            addressStartTagInBody(p5, token);
          } else if (tn === $.LISTING) {
            preStartTagInBody(p5, token);
          } else if (tn === $.MARQUEE) {
            appletStartTagInBody(p5, token);
          } else if (tn === $.NOEMBED) {
            noembedStartTagInBody(p5, token);
          } else if (tn !== $.CAPTION) {
            genericStartTagInBody(p5, token);
          }
          break;
        case 8:
          if (tn === $.BASEFONT) {
            startTagInHead(p5, token);
          } else if (tn === $.FRAMESET) {
            framesetStartTagInBody(p5, token);
          } else if (tn === $.FIELDSET) {
            addressStartTagInBody(p5, token);
          } else if (tn === $.TEXTAREA) {
            textareaStartTagInBody(p5, token);
          } else if (tn === $.TEMPLATE) {
            startTagInHead(p5, token);
          } else if (tn === $.NOSCRIPT) {
            if (p5.options.scriptingEnabled) {
              noembedStartTagInBody(p5, token);
            } else {
              genericStartTagInBody(p5, token);
            }
          } else if (tn === $.OPTGROUP) {
            optgroupStartTagInBody(p5, token);
          } else if (tn !== $.COLGROUP) {
            genericStartTagInBody(p5, token);
          }
          break;
        case 9:
          if (tn === $.PLAINTEXT) {
            plaintextStartTagInBody(p5, token);
          } else {
            genericStartTagInBody(p5, token);
          }
          break;
        case 10:
          if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
            addressStartTagInBody(p5, token);
          } else {
            genericStartTagInBody(p5, token);
          }
          break;
        default:
          genericStartTagInBody(p5, token);
      }
    }
    function bodyEndTagInBody(p5) {
      if (p5.openElements.hasInScope($.BODY)) {
        p5.insertionMode = AFTER_BODY_MODE;
      }
    }
    function htmlEndTagInBody(p5, token) {
      if (p5.openElements.hasInScope($.BODY)) {
        p5.insertionMode = AFTER_BODY_MODE;
        p5._processToken(token);
      }
    }
    function addressEndTagInBody(p5, token) {
      const tn = token.tagName;
      if (p5.openElements.hasInScope(tn)) {
        p5.openElements.generateImpliedEndTags();
        p5.openElements.popUntilTagNamePopped(tn);
      }
    }
    function formEndTagInBody(p5) {
      const inTemplate = p5.openElements.tmplCount > 0;
      const formElement = p5.formElement;
      if (!inTemplate) {
        p5.formElement = null;
      }
      if ((formElement || inTemplate) && p5.openElements.hasInScope($.FORM)) {
        p5.openElements.generateImpliedEndTags();
        if (inTemplate) {
          p5.openElements.popUntilTagNamePopped($.FORM);
        } else {
          p5.openElements.remove(formElement);
        }
      }
    }
    function pEndTagInBody(p5) {
      if (!p5.openElements.hasInButtonScope($.P)) {
        p5._insertFakeElement($.P);
      }
      p5._closePElement();
    }
    function liEndTagInBody(p5) {
      if (p5.openElements.hasInListItemScope($.LI)) {
        p5.openElements.generateImpliedEndTagsWithExclusion($.LI);
        p5.openElements.popUntilTagNamePopped($.LI);
      }
    }
    function ddEndTagInBody(p5, token) {
      const tn = token.tagName;
      if (p5.openElements.hasInScope(tn)) {
        p5.openElements.generateImpliedEndTagsWithExclusion(tn);
        p5.openElements.popUntilTagNamePopped(tn);
      }
    }
    function numberedHeaderEndTagInBody(p5) {
      if (p5.openElements.hasNumberedHeaderInScope()) {
        p5.openElements.generateImpliedEndTags();
        p5.openElements.popUntilNumberedHeaderPopped();
      }
    }
    function appletEndTagInBody(p5, token) {
      const tn = token.tagName;
      if (p5.openElements.hasInScope(tn)) {
        p5.openElements.generateImpliedEndTags();
        p5.openElements.popUntilTagNamePopped(tn);
        p5.activeFormattingElements.clearToLastMarker();
      }
    }
    function brEndTagInBody(p5) {
      p5._reconstructActiveFormattingElements();
      p5._insertFakeElement($.BR);
      p5.openElements.pop();
      p5.framesetOk = false;
    }
    function genericEndTagInBody(p5, token) {
      const tn = token.tagName;
      for (let i = p5.openElements.stackTop; i > 0; i--) {
        const element4 = p5.openElements.items[i];
        if (p5.treeAdapter.getTagName(element4) === tn) {
          p5.openElements.generateImpliedEndTagsWithExclusion(tn);
          p5.openElements.popUntilElementPopped(element4);
          break;
        }
        if (p5._isSpecialElement(element4)) {
          break;
        }
      }
    }
    function endTagInBody(p5, token) {
      const tn = token.tagName;
      switch (tn.length) {
        case 1:
          if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn === $.U) {
            callAdoptionAgency(p5, token);
          } else if (tn === $.P) {
            pEndTagInBody(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        case 2:
          if (tn === $.DL || tn === $.UL || tn === $.OL) {
            addressEndTagInBody(p5, token);
          } else if (tn === $.LI) {
            liEndTagInBody(p5, token);
          } else if (tn === $.DD || tn === $.DT) {
            ddEndTagInBody(p5, token);
          } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
            numberedHeaderEndTagInBody(p5, token);
          } else if (tn === $.BR) {
            brEndTagInBody(p5, token);
          } else if (tn === $.EM || tn === $.TT) {
            callAdoptionAgency(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        case 3:
          if (tn === $.BIG) {
            callAdoptionAgency(p5, token);
          } else if (tn === $.DIR || tn === $.DIV || tn === $.NAV || tn === $.PRE) {
            addressEndTagInBody(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        case 4:
          if (tn === $.BODY) {
            bodyEndTagInBody(p5, token);
          } else if (tn === $.HTML) {
            htmlEndTagInBody(p5, token);
          } else if (tn === $.FORM) {
            formEndTagInBody(p5, token);
          } else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR) {
            callAdoptionAgency(p5, token);
          } else if (tn === $.MAIN || tn === $.MENU) {
            addressEndTagInBody(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        case 5:
          if (tn === $.ASIDE) {
            addressEndTagInBody(p5, token);
          } else if (tn === $.SMALL) {
            callAdoptionAgency(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        case 6:
          if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP || tn === $.DIALOG) {
            addressEndTagInBody(p5, token);
          } else if (tn === $.APPLET || tn === $.OBJECT) {
            appletEndTagInBody(p5, token);
          } else if (tn === $.STRIKE || tn === $.STRONG) {
            callAdoptionAgency(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        case 7:
          if (tn === $.ADDRESS || tn === $.ARTICLE || tn === $.DETAILS || tn === $.SECTION || tn === $.SUMMARY || tn === $.LISTING) {
            addressEndTagInBody(p5, token);
          } else if (tn === $.MARQUEE) {
            appletEndTagInBody(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        case 8:
          if (tn === $.FIELDSET) {
            addressEndTagInBody(p5, token);
          } else if (tn === $.TEMPLATE) {
            endTagInHead(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        case 10:
          if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
            addressEndTagInBody(p5, token);
          } else {
            genericEndTagInBody(p5, token);
          }
          break;
        default:
          genericEndTagInBody(p5, token);
      }
    }
    function eofInBody(p5, token) {
      if (p5.tmplInsertionModeStackTop > -1) {
        eofInTemplate(p5, token);
      } else {
        p5.stopped = true;
      }
    }
    function endTagInText(p5, token) {
      if (token.tagName === $.SCRIPT) {
        p5.pendingScript = p5.openElements.current;
      }
      p5.openElements.pop();
      p5.insertionMode = p5.originalInsertionMode;
    }
    function eofInText(p5, token) {
      p5._err(ERR.eofInElementThatCanContainOnlyText);
      p5.openElements.pop();
      p5.insertionMode = p5.originalInsertionMode;
      p5._processToken(token);
    }
    function characterInTable(p5, token) {
      const curTn = p5.openElements.currentTagName;
      if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
        p5.pendingCharacterTokens = [];
        p5.hasNonWhitespacePendingCharacterToken = false;
        p5.originalInsertionMode = p5.insertionMode;
        p5.insertionMode = IN_TABLE_TEXT_MODE;
        p5._processToken(token);
      } else {
        tokenInTable(p5, token);
      }
    }
    function captionStartTagInTable(p5, token) {
      p5.openElements.clearBackToTableContext();
      p5.activeFormattingElements.insertMarker();
      p5._insertElement(token, NS.HTML);
      p5.insertionMode = IN_CAPTION_MODE;
    }
    function colgroupStartTagInTable(p5, token) {
      p5.openElements.clearBackToTableContext();
      p5._insertElement(token, NS.HTML);
      p5.insertionMode = IN_COLUMN_GROUP_MODE;
    }
    function colStartTagInTable(p5, token) {
      p5.openElements.clearBackToTableContext();
      p5._insertFakeElement($.COLGROUP);
      p5.insertionMode = IN_COLUMN_GROUP_MODE;
      p5._processToken(token);
    }
    function tbodyStartTagInTable(p5, token) {
      p5.openElements.clearBackToTableContext();
      p5._insertElement(token, NS.HTML);
      p5.insertionMode = IN_TABLE_BODY_MODE;
    }
    function tdStartTagInTable(p5, token) {
      p5.openElements.clearBackToTableContext();
      p5._insertFakeElement($.TBODY);
      p5.insertionMode = IN_TABLE_BODY_MODE;
      p5._processToken(token);
    }
    function tableStartTagInTable(p5, token) {
      if (p5.openElements.hasInTableScope($.TABLE)) {
        p5.openElements.popUntilTagNamePopped($.TABLE);
        p5._resetInsertionMode();
        p5._processToken(token);
      }
    }
    function inputStartTagInTable(p5, token) {
      const inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);
      if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE) {
        p5._appendElement(token, NS.HTML);
      } else {
        tokenInTable(p5, token);
      }
      token.ackSelfClosing = true;
    }
    function formStartTagInTable(p5, token) {
      if (!p5.formElement && p5.openElements.tmplCount === 0) {
        p5._insertElement(token, NS.HTML);
        p5.formElement = p5.openElements.current;
        p5.openElements.pop();
      }
    }
    function startTagInTable(p5, token) {
      const tn = token.tagName;
      switch (tn.length) {
        case 2:
          if (tn === $.TD || tn === $.TH || tn === $.TR) {
            tdStartTagInTable(p5, token);
          } else {
            tokenInTable(p5, token);
          }
          break;
        case 3:
          if (tn === $.COL) {
            colStartTagInTable(p5, token);
          } else {
            tokenInTable(p5, token);
          }
          break;
        case 4:
          if (tn === $.FORM) {
            formStartTagInTable(p5, token);
          } else {
            tokenInTable(p5, token);
          }
          break;
        case 5:
          if (tn === $.TABLE) {
            tableStartTagInTable(p5, token);
          } else if (tn === $.STYLE) {
            startTagInHead(p5, token);
          } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
            tbodyStartTagInTable(p5, token);
          } else if (tn === $.INPUT) {
            inputStartTagInTable(p5, token);
          } else {
            tokenInTable(p5, token);
          }
          break;
        case 6:
          if (tn === $.SCRIPT) {
            startTagInHead(p5, token);
          } else {
            tokenInTable(p5, token);
          }
          break;
        case 7:
          if (tn === $.CAPTION) {
            captionStartTagInTable(p5, token);
          } else {
            tokenInTable(p5, token);
          }
          break;
        case 8:
          if (tn === $.COLGROUP) {
            colgroupStartTagInTable(p5, token);
          } else if (tn === $.TEMPLATE) {
            startTagInHead(p5, token);
          } else {
            tokenInTable(p5, token);
          }
          break;
        default:
          tokenInTable(p5, token);
      }
    }
    function endTagInTable(p5, token) {
      const tn = token.tagName;
      if (tn === $.TABLE) {
        if (p5.openElements.hasInTableScope($.TABLE)) {
          p5.openElements.popUntilTagNamePopped($.TABLE);
          p5._resetInsertionMode();
        }
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p5, token);
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
        tokenInTable(p5, token);
      }
    }
    function tokenInTable(p5, token) {
      const savedFosterParentingState = p5.fosterParentingEnabled;
      p5.fosterParentingEnabled = true;
      p5._processTokenInBodyMode(token);
      p5.fosterParentingEnabled = savedFosterParentingState;
    }
    function whitespaceCharacterInTableText(p5, token) {
      p5.pendingCharacterTokens.push(token);
    }
    function characterInTableText(p5, token) {
      p5.pendingCharacterTokens.push(token);
      p5.hasNonWhitespacePendingCharacterToken = true;
    }
    function tokenInTableText(p5, token) {
      let i = 0;
      if (p5.hasNonWhitespacePendingCharacterToken) {
        for (; i < p5.pendingCharacterTokens.length; i++) {
          tokenInTable(p5, p5.pendingCharacterTokens[i]);
        }
      } else {
        for (; i < p5.pendingCharacterTokens.length; i++) {
          p5._insertCharacters(p5.pendingCharacterTokens[i]);
        }
      }
      p5.insertionMode = p5.originalInsertionMode;
      p5._processToken(token);
    }
    function startTagInCaption(p5, token) {
      const tn = token.tagName;
      if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
        if (p5.openElements.hasInTableScope($.CAPTION)) {
          p5.openElements.generateImpliedEndTags();
          p5.openElements.popUntilTagNamePopped($.CAPTION);
          p5.activeFormattingElements.clearToLastMarker();
          p5.insertionMode = IN_TABLE_MODE;
          p5._processToken(token);
        }
      } else {
        startTagInBody(p5, token);
      }
    }
    function endTagInCaption(p5, token) {
      const tn = token.tagName;
      if (tn === $.CAPTION || tn === $.TABLE) {
        if (p5.openElements.hasInTableScope($.CAPTION)) {
          p5.openElements.generateImpliedEndTags();
          p5.openElements.popUntilTagNamePopped($.CAPTION);
          p5.activeFormattingElements.clearToLastMarker();
          p5.insertionMode = IN_TABLE_MODE;
          if (tn === $.TABLE) {
            p5._processToken(token);
          }
        }
      } else if (tn !== $.BODY && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
        endTagInBody(p5, token);
      }
    }
    function startTagInColumnGroup(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.COL) {
        p5._appendElement(token, NS.HTML);
        token.ackSelfClosing = true;
      } else if (tn === $.TEMPLATE) {
        startTagInHead(p5, token);
      } else {
        tokenInColumnGroup(p5, token);
      }
    }
    function endTagInColumnGroup(p5, token) {
      const tn = token.tagName;
      if (tn === $.COLGROUP) {
        if (p5.openElements.currentTagName === $.COLGROUP) {
          p5.openElements.pop();
          p5.insertionMode = IN_TABLE_MODE;
        }
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p5, token);
      } else if (tn !== $.COL) {
        tokenInColumnGroup(p5, token);
      }
    }
    function tokenInColumnGroup(p5, token) {
      if (p5.openElements.currentTagName === $.COLGROUP) {
        p5.openElements.pop();
        p5.insertionMode = IN_TABLE_MODE;
        p5._processToken(token);
      }
    }
    function startTagInTableBody(p5, token) {
      const tn = token.tagName;
      if (tn === $.TR) {
        p5.openElements.clearBackToTableBodyContext();
        p5._insertElement(token, NS.HTML);
        p5.insertionMode = IN_ROW_MODE;
      } else if (tn === $.TH || tn === $.TD) {
        p5.openElements.clearBackToTableBodyContext();
        p5._insertFakeElement($.TR);
        p5.insertionMode = IN_ROW_MODE;
        p5._processToken(token);
      } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p5.openElements.hasTableBodyContextInTableScope()) {
          p5.openElements.clearBackToTableBodyContext();
          p5.openElements.pop();
          p5.insertionMode = IN_TABLE_MODE;
          p5._processToken(token);
        }
      } else {
        startTagInTable(p5, token);
      }
    }
    function endTagInTableBody(p5, token) {
      const tn = token.tagName;
      if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p5.openElements.hasInTableScope(tn)) {
          p5.openElements.clearBackToTableBodyContext();
          p5.openElements.pop();
          p5.insertionMode = IN_TABLE_MODE;
        }
      } else if (tn === $.TABLE) {
        if (p5.openElements.hasTableBodyContextInTableScope()) {
          p5.openElements.clearBackToTableBodyContext();
          p5.openElements.pop();
          p5.insertionMode = IN_TABLE_MODE;
          p5._processToken(token);
        }
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR) {
        endTagInTable(p5, token);
      }
    }
    function startTagInRow(p5, token) {
      const tn = token.tagName;
      if (tn === $.TH || tn === $.TD) {
        p5.openElements.clearBackToTableRowContext();
        p5._insertElement(token, NS.HTML);
        p5.insertionMode = IN_CELL_MODE;
        p5.activeFormattingElements.insertMarker();
      } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        if (p5.openElements.hasInTableScope($.TR)) {
          p5.openElements.clearBackToTableRowContext();
          p5.openElements.pop();
          p5.insertionMode = IN_TABLE_BODY_MODE;
          p5._processToken(token);
        }
      } else {
        startTagInTable(p5, token);
      }
    }
    function endTagInRow(p5, token) {
      const tn = token.tagName;
      if (tn === $.TR) {
        if (p5.openElements.hasInTableScope($.TR)) {
          p5.openElements.clearBackToTableRowContext();
          p5.openElements.pop();
          p5.insertionMode = IN_TABLE_BODY_MODE;
        }
      } else if (tn === $.TABLE) {
        if (p5.openElements.hasInTableScope($.TR)) {
          p5.openElements.clearBackToTableRowContext();
          p5.openElements.pop();
          p5.insertionMode = IN_TABLE_BODY_MODE;
          p5._processToken(token);
        }
      } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p5.openElements.hasInTableScope(tn) || p5.openElements.hasInTableScope($.TR)) {
          p5.openElements.clearBackToTableRowContext();
          p5.openElements.pop();
          p5.insertionMode = IN_TABLE_BODY_MODE;
          p5._processToken(token);
        }
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH) {
        endTagInTable(p5, token);
      }
    }
    function startTagInCell(p5, token) {
      const tn = token.tagName;
      if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
        if (p5.openElements.hasInTableScope($.TD) || p5.openElements.hasInTableScope($.TH)) {
          p5._closeTableCell();
          p5._processToken(token);
        }
      } else {
        startTagInBody(p5, token);
      }
    }
    function endTagInCell(p5, token) {
      const tn = token.tagName;
      if (tn === $.TD || tn === $.TH) {
        if (p5.openElements.hasInTableScope(tn)) {
          p5.openElements.generateImpliedEndTags();
          p5.openElements.popUntilTagNamePopped(tn);
          p5.activeFormattingElements.clearToLastMarker();
          p5.insertionMode = IN_ROW_MODE;
        }
      } else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        if (p5.openElements.hasInTableScope(tn)) {
          p5._closeTableCell();
          p5._processToken(token);
        }
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML) {
        endTagInBody(p5, token);
      }
    }
    function startTagInSelect(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.OPTION) {
        if (p5.openElements.currentTagName === $.OPTION) {
          p5.openElements.pop();
        }
        p5._insertElement(token, NS.HTML);
      } else if (tn === $.OPTGROUP) {
        if (p5.openElements.currentTagName === $.OPTION) {
          p5.openElements.pop();
        }
        if (p5.openElements.currentTagName === $.OPTGROUP) {
          p5.openElements.pop();
        }
        p5._insertElement(token, NS.HTML);
      } else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA || tn === $.SELECT) {
        if (p5.openElements.hasInSelectScope($.SELECT)) {
          p5.openElements.popUntilTagNamePopped($.SELECT);
          p5._resetInsertionMode();
          if (tn !== $.SELECT) {
            p5._processToken(token);
          }
        }
      } else if (tn === $.SCRIPT || tn === $.TEMPLATE) {
        startTagInHead(p5, token);
      }
    }
    function endTagInSelect(p5, token) {
      const tn = token.tagName;
      if (tn === $.OPTGROUP) {
        const prevOpenElement = p5.openElements.items[p5.openElements.stackTop - 1];
        const prevOpenElementTn = prevOpenElement && p5.treeAdapter.getTagName(prevOpenElement);
        if (p5.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP) {
          p5.openElements.pop();
        }
        if (p5.openElements.currentTagName === $.OPTGROUP) {
          p5.openElements.pop();
        }
      } else if (tn === $.OPTION) {
        if (p5.openElements.currentTagName === $.OPTION) {
          p5.openElements.pop();
        }
      } else if (tn === $.SELECT && p5.openElements.hasInSelectScope($.SELECT)) {
        p5.openElements.popUntilTagNamePopped($.SELECT);
        p5._resetInsertionMode();
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p5, token);
      }
    }
    function startTagInSelectInTable(p5, token) {
      const tn = token.tagName;
      if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
        p5.openElements.popUntilTagNamePopped($.SELECT);
        p5._resetInsertionMode();
        p5._processToken(token);
      } else {
        startTagInSelect(p5, token);
      }
    }
    function endTagInSelectInTable(p5, token) {
      const tn = token.tagName;
      if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
        if (p5.openElements.hasInTableScope(tn)) {
          p5.openElements.popUntilTagNamePopped($.SELECT);
          p5._resetInsertionMode();
          p5._processToken(token);
        }
      } else {
        endTagInSelect(p5, token);
      }
    }
    function startTagInTemplate(p5, token) {
      const tn = token.tagName;
      if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
        startTagInHead(p5, token);
      } else {
        const newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;
        p5._popTmplInsertionMode();
        p5._pushTmplInsertionMode(newInsertionMode);
        p5.insertionMode = newInsertionMode;
        p5._processToken(token);
      }
    }
    function endTagInTemplate(p5, token) {
      if (token.tagName === $.TEMPLATE) {
        endTagInHead(p5, token);
      }
    }
    function eofInTemplate(p5, token) {
      if (p5.openElements.tmplCount > 0) {
        p5.openElements.popUntilTagNamePopped($.TEMPLATE);
        p5.activeFormattingElements.clearToLastMarker();
        p5._popTmplInsertionMode();
        p5._resetInsertionMode();
        p5._processToken(token);
      } else {
        p5.stopped = true;
      }
    }
    function startTagAfterBody(p5, token) {
      if (token.tagName === $.HTML) {
        startTagInBody(p5, token);
      } else {
        tokenAfterBody(p5, token);
      }
    }
    function endTagAfterBody(p5, token) {
      if (token.tagName === $.HTML) {
        if (!p5.fragmentContext) {
          p5.insertionMode = AFTER_AFTER_BODY_MODE;
        }
      } else {
        tokenAfterBody(p5, token);
      }
    }
    function tokenAfterBody(p5, token) {
      p5.insertionMode = IN_BODY_MODE;
      p5._processToken(token);
    }
    function startTagInFrameset(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.FRAMESET) {
        p5._insertElement(token, NS.HTML);
      } else if (tn === $.FRAME) {
        p5._appendElement(token, NS.HTML);
        token.ackSelfClosing = true;
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p5, token);
      }
    }
    function endTagInFrameset(p5, token) {
      if (token.tagName === $.FRAMESET && !p5.openElements.isRootHtmlElementCurrent()) {
        p5.openElements.pop();
        if (!p5.fragmentContext && p5.openElements.currentTagName !== $.FRAMESET) {
          p5.insertionMode = AFTER_FRAMESET_MODE;
        }
      }
    }
    function startTagAfterFrameset(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p5, token);
      }
    }
    function endTagAfterFrameset(p5, token) {
      if (token.tagName === $.HTML) {
        p5.insertionMode = AFTER_AFTER_FRAMESET_MODE;
      }
    }
    function startTagAfterAfterBody(p5, token) {
      if (token.tagName === $.HTML) {
        startTagInBody(p5, token);
      } else {
        tokenAfterAfterBody(p5, token);
      }
    }
    function tokenAfterAfterBody(p5, token) {
      p5.insertionMode = IN_BODY_MODE;
      p5._processToken(token);
    }
    function startTagAfterAfterFrameset(p5, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p5, token);
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p5, token);
      }
    }
    function nullCharacterInForeignContent(p5, token) {
      token.chars = unicode.REPLACEMENT_CHARACTER;
      p5._insertCharacters(token);
    }
    function characterInForeignContent(p5, token) {
      p5._insertCharacters(token);
      p5.framesetOk = false;
    }
    function startTagInForeignContent(p5, token) {
      if (foreignContent.causesExit(token) && !p5.fragmentContext) {
        while (p5.treeAdapter.getNamespaceURI(p5.openElements.current) !== NS.HTML && !p5._isIntegrationPoint(p5.openElements.current)) {
          p5.openElements.pop();
        }
        p5._processToken(token);
      } else {
        const current = p5._getAdjustedCurrentElement();
        const currentNs = p5.treeAdapter.getNamespaceURI(current);
        if (currentNs === NS.MATHML) {
          foreignContent.adjustTokenMathMLAttrs(token);
        } else if (currentNs === NS.SVG) {
          foreignContent.adjustTokenSVGTagName(token);
          foreignContent.adjustTokenSVGAttrs(token);
        }
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p5._appendElement(token, currentNs);
        } else {
          p5._insertElement(token, currentNs);
        }
        token.ackSelfClosing = true;
      }
    }
    function endTagInForeignContent(p5, token) {
      for (let i = p5.openElements.stackTop; i > 0; i--) {
        const element4 = p5.openElements.items[i];
        if (p5.treeAdapter.getNamespaceURI(element4) === NS.HTML) {
          p5._processToken(token);
          break;
        }
        if (p5.treeAdapter.getTagName(element4).toLowerCase() === token.tagName) {
          p5.openElements.popUntilElementPopped(element4);
          break;
        }
      }
    }
  }
});

// ../../node_modules/hast-util-is-element/index.js
var isElement = (
  /**
   * @type {(
   *   (() => false) &
   *   (<T extends Element = Element>(node: unknown, test?: PredicateTest<T>, index?: number, parent?: Parent, context?: unknown) => node is T) &
   *   ((node: unknown, test: Test, index?: number, parent?: Parent, context?: unknown) => boolean)
   * )}
   */
  /**
   * @param {unknown} [node]
   * @param {Test | undefined} [test]
   * @param {number | null | undefined} [index]
   * @param {Parent | null | undefined} [parent]
   * @param {unknown} [context]
   * @returns {boolean}
   */
  // eslint-disable-next-line max-params
  function(node3, test, index, parent, context) {
    const check = convertElement(test);
    if (index !== void 0 && index !== null && (typeof index !== "number" || index < 0 || index === Number.POSITIVE_INFINITY)) {
      throw new Error("Expected positive finite index for child node");
    }
    if (parent !== void 0 && parent !== null && (!parent.type || !parent.children)) {
      throw new Error("Expected parent node");
    }
    if (!node3 || !node3.type || typeof node3.type !== "string") {
      return false;
    }
    if ((parent === void 0 || parent === null) !== (index === void 0 || index === null)) {
      throw new Error("Expected both parent and index");
    }
    return check.call(context, node3, index, parent);
  }
);
var convertElement = (
  /**
   * @type {(
   *   (<T extends Element>(test: T['tagName'] | TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {AssertAnything}
   */
  function(test) {
    if (test === void 0 || test === null) {
      return element;
    }
    if (typeof test === "string") {
      return tagNameFactory(test);
    }
    if (typeof test === "object") {
      return anyFactory(test);
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    throw new Error("Expected function, string, or array as test");
  }
);
function anyFactory(tests) {
  const checks2 = [];
  let index = -1;
  while (++index < tests.length) {
    checks2[index] = convertElement(tests[index]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    while (++index2 < checks2.length) {
      if (checks2[index2].call(this, ...parameters)) {
        return true;
      }
    }
    return false;
  }
}
function tagNameFactory(check) {
  return tagName;
  function tagName(node3) {
    return element(node3) && node3.tagName === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(node3, ...parameters) {
    return element(node3) && Boolean(check.call(this, node3, ...parameters));
  }
}
function element(node3) {
  return Boolean(
    node3 && typeof node3 === "object" && // @ts-expect-error Looks like a node.
    node3.type === "element" && // @ts-expect-error Looks like an element.
    typeof node3.tagName === "string"
  );
}

// ../../node_modules/hast-util-embedded/lib/index.js
var embedded = convertElement([
  "audio",
  "canvas",
  "embed",
  "iframe",
  "img",
  "math",
  "object",
  "picture",
  "svg",
  "video"
]);

// ../../node_modules/hast-util-whitespace/index.js
function whitespace(thing) {
  const value = (
    // @ts-expect-error looks like a node.
    thing && typeof thing === "object" && thing.type === "text" ? (
      // @ts-expect-error looks like a text.
      thing.value || ""
    ) : thing
  );
  return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}

// ../../node_modules/rehype-minify-whitespace/block.js
var blocks = [
  "address",
  // Flow content.
  "article",
  // Sections and headings.
  "aside",
  // Sections and headings.
  "blockquote",
  // Flow content.
  "body",
  // Page.
  "br",
  // Contribute whitespace intrinsically.
  "caption",
  // Similar to block.
  "center",
  // Flow content, legacy.
  "col",
  // Similar to block.
  "colgroup",
  // Similar to block.
  "dd",
  // Lists.
  "dialog",
  // Flow content.
  "dir",
  // Lists, legacy.
  "div",
  // Flow content.
  "dl",
  // Lists.
  "dt",
  // Lists.
  "figcaption",
  // Flow content.
  "figure",
  // Flow content.
  "footer",
  // Flow content.
  "form",
  // Flow content.
  "h1",
  // Sections and headings.
  "h2",
  // Sections and headings.
  "h3",
  // Sections and headings.
  "h4",
  // Sections and headings.
  "h5",
  // Sections and headings.
  "h6",
  // Sections and headings.
  "head",
  // Page.
  "header",
  // Flow content.
  "hgroup",
  // Sections and headings.
  "hr",
  // Flow content.
  "html",
  // Page.
  "legend",
  // Flow content.
  "li",
  // Block-like.
  "li",
  // Similar to block.
  "listing",
  // Flow content, legacy
  "main",
  // Flow content.
  "menu",
  // Lists.
  "nav",
  // Sections and headings.
  "ol",
  // Lists.
  "optgroup",
  // Similar to block.
  "option",
  // Similar to block.
  "p",
  // Flow content.
  "plaintext",
  // Flow content, legacy
  "pre",
  // Flow content.
  "section",
  // Sections and headings.
  "summary",
  // Similar to block.
  "table",
  // Similar to block.
  "tbody",
  // Similar to block.
  "td",
  // Block-like.
  "td",
  // Similar to block.
  "tfoot",
  // Similar to block.
  "th",
  // Block-like.
  "th",
  // Similar to block.
  "thead",
  // Similar to block.
  "tr",
  // Similar to block.
  "ul",
  // Lists.
  "wbr",
  // Contribute whitespace intrinsically.
  "xmp"
  // Flow content, legacy
];

// ../../node_modules/rehype-minify-whitespace/content.js
var content = [
  // Form.
  "button",
  "input",
  "select",
  "textarea"
];

// ../../node_modules/rehype-minify-whitespace/skippable.js
var skippable = [
  "area",
  "base",
  "basefont",
  "dialog",
  "datalist",
  "head",
  "link",
  "meta",
  "noembed",
  "noframes",
  "param",
  "rp",
  "script",
  "source",
  "style",
  "template",
  "track",
  "title"
];

// ../../node_modules/rehype-minify-whitespace/index.js
var ignorableNode = convert(["doctype", "comment"]);
function rehypeMinifyWhitespace(options = {}) {
  const collapse = collapseFactory(
    options.newlines ? replaceNewlines : replaceWhitespace
  );
  return (tree) => {
    minify(tree, { collapse, whitespace: "normal" });
  };
}
function minify(node3, context) {
  if ("children" in node3) {
    const settings = Object.assign({}, context);
    if (node3.type === "root" || blocklike(node3)) {
      settings.before = true;
      settings.after = true;
    }
    settings.whitespace = inferWhiteSpace(node3, context);
    return all(node3, settings);
  }
  if (node3.type === "text") {
    if (context.whitespace === "normal") {
      return minifyText(node3, context);
    }
    if (context.whitespace === "nowrap") {
      node3.value = context.collapse(node3.value);
    }
  }
  return { remove: false, ignore: ignorableNode(node3), stripAtStart: false };
}
function minifyText(node3, context) {
  const value = context.collapse(node3.value);
  const result = { remove: false, ignore: false, stripAtStart: false };
  let start = 0;
  let end = value.length;
  if (context.before && removable(value.charAt(0))) {
    start++;
  }
  if (start !== end && removable(value.charAt(end - 1))) {
    if (context.after) {
      end--;
    } else {
      result.stripAtStart = true;
    }
  }
  if (start === end) {
    result.remove = true;
  } else {
    node3.value = value.slice(start, end);
  }
  return result;
}
function all(parent, context) {
  let before = context.before;
  const after = context.after;
  const children = parent.children;
  let length = children.length;
  let index = -1;
  while (++index < length) {
    const result = minify(
      children[index],
      Object.assign({}, context, {
        before,
        after: collapsableAfter(children, index, after)
      })
    );
    if (result.remove) {
      children.splice(index, 1);
      index--;
      length--;
    } else if (!result.ignore) {
      before = result.stripAtStart;
    }
    if (content2(children[index])) {
      before = false;
    }
  }
  return { remove: false, ignore: false, stripAtStart: Boolean(before || after) };
}
function collapsableAfter(nodes, index, after) {
  while (++index < nodes.length) {
    const node3 = nodes[index];
    let result = inferBoundary(node3);
    if (result === void 0 && "children" in node3 && !skippable2(node3)) {
      result = collapsableAfter(node3.children, -1);
    }
    if (typeof result === "boolean") {
      return result;
    }
  }
  return after;
}
function inferBoundary(node3) {
  if (node3.type === "element") {
    if (content2(node3)) {
      return false;
    }
    if (blocklike(node3)) {
      return true;
    }
  } else if (node3.type === "text") {
    if (!whitespace(node3)) {
      return false;
    }
  } else if (!ignorableNode(node3)) {
    return false;
  }
}
function content2(node3) {
  return embedded(node3) || isElement(node3, content);
}
function blocklike(node3) {
  return isElement(node3, blocks);
}
function skippable2(node3) {
  return Boolean(
    "properties" in node3 && node3.properties && node3.properties.hidden
  ) || ignorableNode(node3) || isElement(node3, skippable);
}
function removable(character) {
  return character === " " || character === "\n";
}
function replaceNewlines(value) {
  const match = /\r?\n|\r/.exec(value);
  return match ? match[0] : " ";
}
function replaceWhitespace() {
  return " ";
}
function collapseFactory(replace) {
  return collapse;
  function collapse(value) {
    return String(value).replace(/[\t\n\v\f\r ]+/g, replace);
  }
}
function inferWhiteSpace(node3, context) {
  if ("tagName" in node3 && node3.properties) {
    switch (node3.tagName) {
      case "listing":
      case "plaintext":
      case "script":
      case "style":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return node3.properties.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return node3.properties.noWrap ? "nowrap" : context.whitespace;
      case "textarea":
        return "pre-wrap";
      default:
    }
  }
  return context.whitespace;
}

// ../../node_modules/hast-util-has-property/lib/index.js
var own = {}.hasOwnProperty;
function hasProperty(node3, field) {
  const value = typeof field === "string" && isNode(node3) && node3.type === "element" && node3.properties && own.call(node3.properties, field) && node3.properties[field];
  return value !== null && value !== void 0 && value !== false;
}
function isNode(value) {
  return Boolean(value && typeof value === "object" && "type" in value);
}

// ../../node_modules/hast-util-is-body-ok-link/index.js
var list = /* @__PURE__ */ new Set(["pingback", "prefetch", "stylesheet"]);
function isBodyOkLink(node3) {
  if (!isElement(node3, "link")) {
    return false;
  }
  if (hasProperty(node3, "itemProp")) {
    return true;
  }
  const props = node3.properties || {};
  const rel = props.rel || [];
  let index = -1;
  if (!Array.isArray(rel) || rel.length === 0) {
    return false;
  }
  while (++index < rel.length) {
    if (!list.has(String(rel[index]))) {
      return false;
    }
  }
  return true;
}

// ../../node_modules/hast-util-phrasing/lib/index.js
var basic = convertElement([
  "a",
  "abbr",
  // `area` is in fact only phrasing if it is inside a `map` element.
  // However, since `area`s are required to be inside a `map` element, and it’s
  // a rather involved check, it’s ignored here for now.
  "area",
  "b",
  "bdi",
  "bdo",
  "br",
  "button",
  "cite",
  "code",
  "data",
  "datalist",
  "del",
  "dfn",
  "em",
  "i",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "map",
  "mark",
  "meter",
  "noscript",
  "output",
  "progress",
  "q",
  "ruby",
  "s",
  "samp",
  "script",
  "select",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "template",
  "textarea",
  "time",
  "u",
  "var",
  "wbr"
]);
var meta = convertElement("meta");
function phrasing(value) {
  return Boolean(
    node(value) && (value.type === "text" || basic(value) || embedded(value) || isBodyOkLink(value) || meta(value) && hasProperty(value, "itemProp"))
  );
}
function node(value) {
  return value && typeof value === "object" && "type" in value;
}

// ../../node_modules/html-whitespace-sensitive-tag-names/index.js
var whitespaceSensitiveTagNames = [
  "pre",
  "script",
  "style",
  "textarea"
];

// ../../node_modules/rehype-format/index.js
var minify2 = rehypeMinifyWhitespace({ newlines: true });
function rehypeFormat(options = {}) {
  let indent = options.indent || 2;
  let indentInitial = options.indentInitial;
  if (typeof indent === "number") {
    indent = " ".repeat(indent);
  }
  if (indentInitial === null || indentInitial === void 0) {
    indentInitial = true;
  }
  return (tree) => {
    let head2;
    minify2(tree);
    visitParents(tree, (node3, parents) => {
      let index = -1;
      if (!("children" in node3)) {
        return;
      }
      if (isElement(node3, "head")) {
        head2 = true;
      }
      if (head2 && isElement(node3, "body")) {
        head2 = void 0;
      }
      if (isElement(node3, whitespaceSensitiveTagNames)) {
        return SKIP;
      }
      const children = node3.children;
      let level = parents.length;
      if (children.length === 0 || !padding(node3, head2)) {
        return;
      }
      if (!indentInitial) {
        level--;
      }
      let eol;
      while (++index < children.length) {
        const child = children[index];
        if (child.type === "text" || child.type === "comment") {
          if (child.value.includes("\n")) {
            eol = true;
          }
          child.value = child.value.replace(
            / *\n/g,
            "$&" + String(indent).repeat(level)
          );
        }
      }
      const result = [];
      let previous;
      index = -1;
      while (++index < children.length) {
        const child = children[index];
        if (padding(child, head2) || eol && !index) {
          addBreak(result, level, child);
          eol = true;
        }
        previous = child;
        result.push(child);
      }
      if (previous && (eol || padding(previous, head2))) {
        if (whitespace(previous)) {
          result.pop();
          previous = result[result.length - 1];
        }
        addBreak(result, level - 1);
      }
      node3.children = result;
    });
  };
  function addBreak(list4, level, next) {
    const tail = list4[list4.length - 1];
    const previous = whitespace(tail) ? list4[list4.length - 2] : tail;
    const replace = (blank(previous) && blank(next) ? "\n\n" : "\n") + String(indent).repeat(Math.max(level, 0));
    if (tail && tail.type === "text") {
      tail.value = whitespace(tail) ? replace : tail.value + replace;
    } else {
      list4.push({ type: "text", value: replace });
    }
  }
  function blank(node3) {
    return Boolean(
      node3 && node3.type === "element" && options.blanks && options.blanks.length > 0 && options.blanks.includes(node3.tagName)
    );
  }
}
function padding(node3, head2) {
  return node3.type === "root" || (node3.type === "element" ? head2 || isElement(node3, "script") || embedded(node3) || !phrasing(node3) : false);
}

// ../../node_modules/myst-to-html/dist/format.js
var formatHtml = function formatHtml2(opt) {
  if (!opt)
    return () => void 0;
  return rehypeFormat(typeof opt === "boolean" ? {} : opt);
};

// ../../node_modules/myst-to-html/dist/utils.js
var import_utils = __toESM(require_utils(), 1);
var HTML_EMPTY_ELEMENTS = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
var formatAttr = (key2, value) => {
  let v;
  if (value == null)
    return null;
  if (Array.isArray(value)) {
    v = value.join(" ");
  } else if (typeof value === "number") {
    v = String(value);
  } else if (typeof value === "boolean") {
    if (!value)
      return null;
    v = "";
  } else {
    v = value;
  }
  return `${key2}="${(0, import_utils.escapeHtml)(v)}"`;
};
function formatTag(tag, attributes, inline) {
  const { children, ...rest } = attributes;
  const join = inline ? "" : "\n";
  const attrs = Object.entries(rest).filter(([, value]) => value != null && value !== false).map(([key2, value]) => formatAttr(key2, value)).filter((value) => value != null).join(" ");
  const html6 = `<${(0, import_utils.escapeHtml)(tag)}${attrs ? ` ${attrs}` : ""}>`;
  if (children)
    return `${html6}${join}${(0, import_utils.escapeHtml)(String(children))}`;
  return html6;
}
function toHTMLRecurse(template, inline) {
  const T = template;
  const atMostOneHole = T.flat(Infinity).filter((v) => v === 0).length <= 1;
  if (!atMostOneHole)
    throw new Error("There cannot be more than one hole in the template.");
  const tag = T[0];
  const hasAttrs = !Array.isArray(T === null || T === void 0 ? void 0 : T[1]) && typeof (T === null || T === void 0 ? void 0 : T[1]) === "object";
  const attrs = hasAttrs ? T[1] : {};
  const before = [];
  const after = [];
  before.push(formatTag(tag, attrs, inline));
  let foundHole = false;
  T.slice(hasAttrs ? 2 : 1).forEach((value) => {
    const v = value;
    if (v === 0) {
      foundHole = true;
      return;
    }
    const [b, a2] = toHTMLRecurse(v, inline);
    before.push(b);
    if (a2) {
      foundHole = true;
      after.push(a2);
    }
  });
  const join = inline ? "" : "\n";
  const closingTag = HTML_EMPTY_ELEMENTS.has(tag) ? "" : `</${tag}>`;
  if (!foundHole) {
    if (closingTag)
      before.push(closingTag);
    return [before.join(join), null];
  }
  if (closingTag)
    after.push(closingTag);
  return [before.join(join), after.join(join)];
}
function toHTML(template, opts = { inline: false }) {
  const [before, after] = toHTMLRecurse(template, opts.inline);
  const join = opts.inline ? "" : "\n";
  return [`${before}${join}`, after ? `${after}${join}` : null];
}

// ../../node_modules/myst-to-html/dist/renderer.js
var renderMath = (math2, block3, target) => {
  const { id, number: number2 } = target !== null && target !== void 0 ? target : {};
  const [html6] = toHTML([
    block3 ? "div" : "span",
    {
      class: target ? ["math", "numbered"] : "math",
      id,
      number: number2,
      children: block3 ? `\\[
${math2}
\\]` : `\\(${math2}\\)`
    }
  ], { inline: true });
  return block3 ? `${html6}
` : html6;
};
function addMathRenderers(md) {
  const { renderer } = md;
  renderer.rules.math_inline = (tokens, idx) => renderMath(tokens[idx].content, false);
  renderer.rules.math_inline_double = (tokens, idx) => renderMath(tokens[idx].content, true);
  renderer.rules.math_block = (tokens, idx) => renderMath(tokens[idx].content, true);
  renderer.rules.math_block_label = (tokens, idx) => {
    var _a;
    return renderMath(tokens[idx].content, true, (_a = tokens[idx].meta) === null || _a === void 0 ? void 0 : _a.target);
  };
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function blockquote(state, node3) {
  const result = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: state.wrap(state.all(node3), true)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/break.js
function hardBreak(state, node3) {
  const result = { type: "element", tagName: "br", properties: {}, children: [] };
  state.patch(node3, result);
  return [state.applyData(node3, result), { type: "text", value: "\n" }];
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/code.js
function code(state, node3) {
  const value = node3.value ? node3.value + "\n" : "";
  const lang = node3.lang ? node3.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null;
  const properties = {};
  if (lang) {
    properties.className = ["language-" + lang];
  }
  let result = {
    type: "element",
    tagName: "code",
    properties,
    children: [{ type: "text", value }]
  };
  if (node3.meta) {
    result.data = { meta: node3.meta };
  }
  state.patch(node3, result);
  result = state.applyData(node3, result);
  result = { type: "element", tagName: "pre", properties: {}, children: [result] };
  state.patch(node3, result);
  return result;
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/delete.js
function strikethrough(state, node3) {
  const result = {
    type: "element",
    tagName: "del",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function emphasis(state, node3) {
  const result = {
    type: "element",
    tagName: "em",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
var unicodePunctuationRegex = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

// ../../node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
var asciiDigit = regexCheck(/\d/);
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
var unicodePunctuation = regexCheck(unicodePunctuationRegex);
var unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex) {
  return check;
  function check(code4) {
    return code4 !== null && regex.test(String.fromCharCode(code4));
  }
}

// ../../node_modules/micromark-util-sanitize-uri/index.js
function normalizeUri(value) {
  const result = [];
  let index = -1;
  let start = 0;
  let skip = 0;
  while (++index < value.length) {
    const code4 = value.charCodeAt(index);
    let replace = "";
    if (code4 === 37 && asciiAlphanumeric(value.charCodeAt(index + 1)) && asciiAlphanumeric(value.charCodeAt(index + 2))) {
      skip = 2;
    } else if (code4 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code4))) {
        replace = String.fromCharCode(code4);
      }
    } else if (code4 > 55295 && code4 < 57344) {
      const next = value.charCodeAt(index + 1);
      if (code4 < 56320 && next > 56319 && next < 57344) {
        replace = String.fromCharCode(code4, next);
        skip = 1;
      } else {
        replace = "\uFFFD";
      }
    } else {
      replace = String.fromCharCode(code4);
    }
    if (replace) {
      result.push(value.slice(start, index), encodeURIComponent(replace));
      start = index + skip + 1;
      replace = "";
    }
    if (skip) {
      index += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function footnoteReference(state, node3) {
  const id = String(node3.identifier).toUpperCase();
  const safeId = normalizeUri(id.toLowerCase());
  const index = state.footnoteOrder.indexOf(id);
  let counter;
  if (index === -1) {
    state.footnoteOrder.push(id);
    state.footnoteCounts[id] = 1;
    counter = state.footnoteOrder.length;
  } else {
    state.footnoteCounts[id]++;
    counter = index + 1;
  }
  const reuseCounter = state.footnoteCounts[id];
  const link2 = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + state.clobberPrefix + "fn-" + safeId,
      id: state.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(counter) }]
  };
  state.patch(node3, link2);
  const sup = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [link2]
  };
  state.patch(node3, sup);
  return state.applyData(node3, sup);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/footnote.js
function footnote(state, node3) {
  const footnoteById = state.footnoteById;
  let no = 1;
  while (no in footnoteById)
    no++;
  const identifier = String(no);
  footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node3.children }],
    position: node3.position
  };
  return footnoteReference(state, {
    type: "footnoteReference",
    identifier,
    position: node3.position
  });
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/heading.js
function heading(state, node3) {
  const result = {
    type: "element",
    tagName: "h" + node3.depth,
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/html.js
function html(state, node3) {
  if (state.dangerous) {
    const result = { type: "raw", value: node3.value };
    state.patch(node3, result);
    return state.applyData(node3, result);
  }
  return null;
}

// ../../node_modules/mdast-util-to-hast/lib/revert.js
function revert(state, node3) {
  const subtype = node3.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node3.label || node3.identifier) + "]";
  }
  if (node3.type === "imageReference") {
    return { type: "text", value: "![" + node3.alt + suffix };
  }
  const contents = state.all(node3);
  const head2 = contents[0];
  if (head2 && head2.type === "text") {
    head2.value = "[" + head2.value;
  } else {
    contents.unshift({ type: "text", value: "[" });
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push({ type: "text", value: suffix });
  }
  return contents;
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference(state, node3) {
  const def = state.definition(node3.identifier);
  if (!def) {
    return revert(state, node3);
  }
  const properties = { src: normalizeUri(def.url || ""), alt: node3.alt };
  if (def.title !== null && def.title !== void 0) {
    properties.title = def.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/image.js
function image(state, node3) {
  const properties = { src: normalizeUri(node3.url) };
  if (node3.alt !== null && node3.alt !== void 0) {
    properties.alt = node3.alt;
  }
  if (node3.title !== null && node3.title !== void 0) {
    properties.title = node3.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function inlineCode(state, node3) {
  const text4 = { type: "text", value: node3.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node3, text4);
  const result = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [text4]
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function linkReference(state, node3) {
  const def = state.definition(node3.identifier);
  if (!def) {
    return revert(state, node3);
  }
  const properties = { href: normalizeUri(def.url || "") };
  if (def.title !== null && def.title !== void 0) {
    properties.title = def.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/link.js
function link(state, node3) {
  const properties = { href: normalizeUri(node3.url) };
  if (node3.title !== null && node3.title !== void 0) {
    properties.title = node3.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function listItem(state, node3, parent) {
  const results = state.all(node3);
  const loose = parent ? listLoose(parent) : listItemLoose(node3);
  const properties = {};
  const children = [];
  if (typeof node3.checked === "boolean") {
    const head2 = results[0];
    let paragraph2;
    if (head2 && head2.type === "element" && head2.tagName === "p") {
      paragraph2 = head2;
    } else {
      paragraph2 = { type: "element", tagName: "p", properties: {}, children: [] };
      results.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift({ type: "text", value: " " });
    }
    paragraph2.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: node3.checked, disabled: true },
      children: []
    });
    properties.className = ["task-list-item"];
  }
  let index = -1;
  while (++index < results.length) {
    const child = results[index];
    if (loose || index !== 0 || child.type !== "element" || child.tagName !== "p") {
      children.push({ type: "text", value: "\n" });
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      children.push(...child.children);
    } else {
      children.push(child);
    }
  }
  const tail = results[results.length - 1];
  if (tail && (loose || tail.type !== "element" || tail.tagName !== "p")) {
    children.push({ type: "text", value: "\n" });
  }
  const result = { type: "element", tagName: "li", properties, children };
  state.patch(node3, result);
  return state.applyData(node3, result);
}
function listLoose(node3) {
  let loose = false;
  if (node3.type === "list") {
    loose = node3.spread || false;
    const children = node3.children;
    let index = -1;
    while (!loose && ++index < children.length) {
      loose = listItemLoose(children[index]);
    }
  }
  return loose;
}
function listItemLoose(node3) {
  const spread = node3.spread;
  return spread === void 0 || spread === null ? node3.children.length > 1 : spread;
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/list.js
function list2(state, node3) {
  const properties = {};
  const results = state.all(node3);
  let index = -1;
  if (typeof node3.start === "number" && node3.start !== 1) {
    properties.start = node3.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  const result = {
    type: "element",
    tagName: node3.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function paragraph(state, node3) {
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/root.js
function root(state, node3) {
  const result = { type: "root", children: state.wrap(state.all(node3)) };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/strong.js
function strong(state, node3) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/unist-util-position/lib/index.js
var pointStart = point("start");
var pointEnd = point("end");
function position(node3) {
  return { start: pointStart(node3), end: pointEnd(node3) };
}
function point(type) {
  return point3;
  function point3(node3) {
    const point4 = node3 && node3.position && node3.position[type] || {};
    return {
      // @ts-expect-error: in practice, null is allowed.
      line: point4.line || null,
      // @ts-expect-error: in practice, null is allowed.
      column: point4.column || null,
      // @ts-expect-error: in practice, null is allowed.
      offset: point4.offset > -1 ? point4.offset : null
    };
  }
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/table.js
function table(state, node3) {
  const rows = state.all(node3);
  const firstRow = rows.shift();
  const tableContent = [];
  if (firstRow) {
    const head2 = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: state.wrap([firstRow], true)
    };
    state.patch(node3.children[0], head2);
    tableContent.push(head2);
  }
  if (rows.length > 0) {
    const body3 = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: state.wrap(rows, true)
    };
    const start = pointStart(node3.children[1]);
    const end = pointEnd(node3.children[node3.children.length - 1]);
    if (start.line && end.line)
      body3.position = { start, end };
    tableContent.push(body3);
  }
  const result = {
    type: "element",
    tagName: "table",
    properties: {},
    children: state.wrap(tableContent, true)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function tableRow(state, node3, parent) {
  const siblings2 = parent ? parent.children : void 0;
  const rowIndex = siblings2 ? siblings2.indexOf(node3) : 1;
  const tagName = rowIndex === 0 ? "th" : "td";
  const align = parent && parent.type === "table" ? parent.align : void 0;
  const length = align ? align.length : node3.children.length;
  let cellIndex = -1;
  const cells2 = [];
  while (++cellIndex < length) {
    const cell3 = node3.children[cellIndex];
    const properties = {};
    const alignValue = align ? align[cellIndex] : void 0;
    if (alignValue) {
      properties.align = alignValue;
    }
    let result2 = { type: "element", tagName, properties, children: [] };
    if (cell3) {
      result2.children = state.all(cell3);
      state.patch(cell3, result2);
      result2 = state.applyData(node3, result2);
    }
    cells2.push(result2);
  }
  const result = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: state.wrap(cells2, true)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function tableCell(state, node3) {
  const result = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/trim-lines/index.js
var tab = 9;
var space = 32;
function trimLines(value) {
  const source2 = String(value);
  const search2 = /\r?\n|\r/g;
  let match = search2.exec(source2);
  let last = 0;
  const lines = [];
  while (match) {
    lines.push(
      trimLine(source2.slice(last, match.index), last > 0, true),
      match[0]
    );
    last = match.index + match[0].length;
    match = search2.exec(source2);
  }
  lines.push(trimLine(source2.slice(last), last > 0, false));
  return lines.join("");
}
function trimLine(value, start, end) {
  let startIndex = 0;
  let endIndex = value.length;
  if (start) {
    let code4 = value.codePointAt(startIndex);
    while (code4 === tab || code4 === space) {
      startIndex++;
      code4 = value.codePointAt(startIndex);
    }
  }
  if (end) {
    let code4 = value.codePointAt(endIndex - 1);
    while (code4 === tab || code4 === space) {
      endIndex--;
      code4 = value.codePointAt(endIndex - 1);
    }
  }
  return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/text.js
function text(state, node3) {
  const result = { type: "text", value: trimLines(String(node3.value)) };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function thematicBreak(state, node3) {
  const result = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// ../../node_modules/mdast-util-to-hast/lib/handlers/index.js
var handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list: list2,
  paragraph,
  root,
  strong,
  table,
  tableCell,
  tableRow,
  text,
  thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}

// ../../node_modules/unist-util-generated/lib/index.js
function generated(node3) {
  return !node3 || !node3.position || !node3.position.start || !node3.position.start.line || !node3.position.start.column || !node3.position.end || !node3.position.end.line || !node3.position.end.column;
}

// ../../node_modules/mdast-util-definitions/lib/index.js
var own2 = {}.hasOwnProperty;
function definitions(tree) {
  const cache = /* @__PURE__ */ Object.create(null);
  if (!tree || !tree.type) {
    throw new Error("mdast-util-definitions expected node");
  }
  visit(tree, "definition", (definition2) => {
    const id = clean(definition2.identifier);
    if (id && !own2.call(cache, id)) {
      cache[id] = definition2;
    }
  });
  return definition;
  function definition(identifier) {
    const id = clean(identifier);
    return id && own2.call(cache, id) ? cache[id] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}

// ../../node_modules/mdast-util-to-hast/lib/state.js
var own3 = {}.hasOwnProperty;
function createState(tree, options) {
  const settings = options || {};
  const dangerous2 = settings.allowDangerousHtml || false;
  const footnoteById = {};
  state.dangerous = dangerous2;
  state.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix;
  state.footnoteLabel = settings.footnoteLabel || "Footnotes";
  state.footnoteLabelTagName = settings.footnoteLabelTagName || "h2";
  state.footnoteLabelProperties = settings.footnoteLabelProperties || {
    className: ["sr-only"]
  };
  state.footnoteBackLabel = settings.footnoteBackLabel || "Back to content";
  state.unknownHandler = settings.unknownHandler;
  state.passThrough = settings.passThrough;
  state.handlers = { ...handlers, ...settings.handlers };
  state.definition = definitions(tree);
  state.footnoteById = footnoteById;
  state.footnoteOrder = [];
  state.footnoteCounts = {};
  state.patch = patch;
  state.applyData = applyData;
  state.one = oneBound;
  state.all = allBound;
  state.wrap = wrap;
  state.augment = augment;
  visit(tree, "footnoteDefinition", (definition) => {
    const id = String(definition.identifier).toUpperCase();
    if (!own3.call(footnoteById, id)) {
      footnoteById[id] = definition;
    }
  });
  return state;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      const data = left.data;
      if (data.hName) {
        if (right.type !== "element") {
          right = {
            type: "element",
            tagName: "",
            properties: {},
            children: []
          };
        }
        right.tagName = data.hName;
      }
      if (right.type === "element" && data.hProperties) {
        right.properties = { ...right.properties, ...data.hProperties };
      }
      if ("children" in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }
    if (left) {
      const ctx = "type" in left ? left : { position: left };
      if (!generated(ctx)) {
        right.position = { start: pointStart(ctx), end: pointEnd(ctx) };
      }
    }
    return right;
  }
  function state(node3, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }
    return augment(node3, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
  function oneBound(node3, parent) {
    return one(state, node3, parent);
  }
  function allBound(parent) {
    return all2(state, parent);
  }
}
function patch(from, to) {
  if (from.position)
    to.position = position(from);
}
function applyData(from, to) {
  let result = to;
  if (from && from.data) {
    const hName = from.data.hName;
    const hChildren = from.data.hChildren;
    const hProperties = from.data.hProperties;
    if (typeof hName === "string") {
      if (result.type === "element") {
        result.tagName = hName;
      } else {
        result = {
          type: "element",
          tagName: hName,
          properties: {},
          children: []
        };
      }
    }
    if (result.type === "element" && hProperties) {
      result.properties = { ...result.properties, ...hProperties };
    }
    if ("children" in result && result.children && hChildren !== null && hChildren !== void 0) {
      result.children = hChildren;
    }
  }
  return result;
}
function one(state, node3, parent) {
  const type = node3 && node3.type;
  if (!type) {
    throw new Error("Expected node, got `" + node3 + "`");
  }
  if (own3.call(state.handlers, type)) {
    return state.handlers[type](state, node3, parent);
  }
  if (state.passThrough && state.passThrough.includes(type)) {
    return "children" in node3 ? { ...node3, children: all2(state, node3) } : node3;
  }
  if (state.unknownHandler) {
    return state.unknownHandler(state, node3, parent);
  }
  return defaultUnknownHandler(state, node3);
}
function all2(state, parent) {
  const values = [];
  if ("children" in parent) {
    const nodes = parent.children;
    let index = -1;
    while (++index < nodes.length) {
      const result = one(state, nodes[index], parent);
      if (result) {
        if (index && nodes[index - 1].type === "break") {
          if (!Array.isArray(result) && result.type === "text") {
            result.value = result.value.replace(/^\s+/, "");
          }
          if (!Array.isArray(result) && result.type === "element") {
            const head2 = result.children[0];
            if (head2 && head2.type === "text") {
              head2.value = head2.value.replace(/^\s+/, "");
            }
          }
        }
        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }
  return values;
}
function defaultUnknownHandler(state, node3) {
  const data = node3.data || {};
  const result = "value" in node3 && !(own3.call(data, "hProperties") || own3.call(data, "hChildren")) ? { type: "text", value: node3.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: all2(state, node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}
function wrap(nodes, loose) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push({ type: "text", value: "\n" });
  }
  while (++index < nodes.length) {
    if (index)
      result.push({ type: "text", value: "\n" });
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push({ type: "text", value: "\n" });
  }
  return result;
}

// ../../node_modules/mdast-util-to-hast/lib/footer.js
function footer(state) {
  const listItems = [];
  let index = -1;
  while (++index < state.footnoteOrder.length) {
    const def = state.footnoteById[state.footnoteOrder[index]];
    if (!def) {
      continue;
    }
    const content3 = state.all(def);
    const id = String(def.identifier).toUpperCase();
    const safeId = normalizeUri(id.toLowerCase());
    let referenceIndex = 0;
    const backReferences = [];
    while (++referenceIndex <= state.footnoteCounts[id]) {
      const backReference = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + state.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
          dataFootnoteBackref: true,
          className: ["data-footnote-backref"],
          ariaLabel: state.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      if (referenceIndex > 1) {
        backReference.children.push({
          type: "element",
          tagName: "sup",
          children: [{ type: "text", value: String(referenceIndex) }]
        });
      }
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      backReferences.push(backReference);
    }
    const tail = content3[content3.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content3.push(...backReferences);
    }
    const listItem2 = {
      type: "element",
      tagName: "li",
      properties: { id: state.clobberPrefix + "fn-" + safeId },
      children: state.wrap(content3, true)
    };
    state.patch(def, listItem2);
    listItems.push(listItem2);
  }
  if (listItems.length === 0) {
    return;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: state.footnoteLabelTagName,
        properties: {
          // To do: use structured clone.
          ...JSON.parse(JSON.stringify(state.footnoteLabelProperties)),
          id: "footnote-label"
        },
        children: [{ type: "text", value: state.footnoteLabel }]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: state.wrap(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}

// ../../node_modules/mdast-util-to-hast/lib/index.js
function toHast(tree, options) {
  const state = createState(tree, options);
  const node3 = state.one(tree, null);
  const foot = footer(state);
  if (foot) {
    node3.children.push({ type: "text", value: "\n" }, foot);
  }
  return Array.isArray(node3) ? { type: "root", children: node3 } : node3;
}

// ../../node_modules/myst-to-html/dist/schema.js
var import_classnames = __toESM(require_classnames(), 1);
var abbreviation = (h2, node3) => h2(node3, "abbr", { title: node3.title }, all2(h2, node3));
var subscript = (h2, node3) => h2(node3, "sub", all2(h2, node3));
var superscript = (h2, node3) => h2(node3, "sup", all2(h2, node3));
var image2 = (h2, node3) => h2(node3, "img", {
  src: node3.url,
  alt: node3.alt,
  title: node3.title,
  class: (0, import_classnames.default)(node3.align ? `align-${node3.align}` : "", node3.class) || void 0,
  height: node3.height,
  width: node3.width
});
var caption = (h2, node3) => h2(node3, "figcaption", all2(h2, node3));
var legend = (h2, node3) => h2(node3, "div", { class: "legend" }, all2(h2, node3));
var container = (h2, node3) => h2(node3, "figure", {
  id: node3.identifier || node3.label || void 0,
  class: (0, import_classnames.default)({ numbered: node3.enumerated !== false }, node3.class) || void 0
}, all2(h2, node3));
var admonitionTitle = (h2, node3) => h2(node3, "p", { class: "admonition-title" }, all2(h2, node3));
var admonition = (h2, node3) => h2(node3, "aside", {
  class: (0, import_classnames.default)({
    [node3.class]: node3.class,
    admonition: true,
    [node3.kind]: node3.kind && node3.kind !== "admonition"
  })
}, all2(h2, node3));
var captionNumber = (h2, node3) => {
  var _a, _b;
  const captionKind = ((_a = node3.kind) === null || _a === void 0 ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = node3.kind) === null || _b === void 0 ? void 0 : _b.slice(1));
  return h2(node3, "span", { class: "caption-number" }, [u("text", `${captionKind} ${node3.value}`)]);
};
var math = (h2, node3) => {
  const attrs = { id: node3.identifier || void 0, class: "math-display" };
  if (node3.value.indexOf("\n") !== -1) {
    const mathHast = h2(node3, "div", attrs, [u("text", node3.value)]);
    return h2(node3, "pre", [mathHast]);
  }
  return h2(node3, "div", attrs, [u("text", node3.value.replace(/\r?\n|\r/g, " "))]);
};
var inlineMath = (h2, node3) => {
  return h2(node3, "span", { class: "math-inline" }, [
    u("text", node3.value.replace(/\r?\n|\r/g, " "))
  ]);
};
var definitionList = (h2, node3) => h2(node3, "dl", all2(h2, node3));
var definitionTerm = (h2, node3) => h2(node3, "dt", all2(h2, node3));
var definitionDescription = (h2, node3) => h2(node3, "dd", all2(h2, node3));
var mystRole = (h2, node3) => {
  const children = [h2(node3, "code", { class: "kind" }, [u("text", `{${node3.name}}`)])];
  if (node3.value) {
    children.push(h2(node3, "code", {}, [u("text", node3.value)]));
  }
  return h2(node3, "span", { class: "role unhandled" }, children);
};
var mystDirective = (h2, node3) => {
  const directiveHeader = [
    h2(node3, "code", { class: "kind" }, [u("text", `{${node3.name}}`)])
  ];
  if (node3.args) {
    directiveHeader.push(h2(node3, "code", { class: "args" }, [u("text", node3.args)]));
  }
  const directiveBody = [];
  if (node3.options) {
    const optionsString = Object.keys(node3.options).map((k) => `:${k}: ${node3.options[k]}`).join("\n");
    directiveBody.push(h2(node3, "pre", [h2(node3, "code", { class: "options" }, [u("text", optionsString)])]));
  }
  directiveBody.push(h2(node3, "pre", [h2(node3, "code", [u("text", node3.value)])]));
  return h2(node3, "div", { class: "directive unhandled" }, [
    h2(node3, "p", {}, directiveHeader),
    ...directiveBody
  ]);
};
var block = (h2, node3) => h2(node3, "div", { class: "block", "data-block": node3.meta }, all2(h2, node3));
var comment = (h2, node3) => u("comment", node3.value);
var heading2 = (h2, node3) => h2(node3, `h${node3.depth}`, { id: node3.identifier || void 0 }, all2(h2, node3));
var crossReference = (h2, node3) => {
  if (node3.resolved) {
    return h2(node3, "a", { href: `#${node3.identifier}`, title: node3.title || void 0 }, all2(h2, node3));
  } else {
    return h2(node3, "span", { class: "reference role unhandled" }, [
      h2(node3, "code", { class: "kind" }, [u("text", `{${node3.kind}}`)]),
      h2(node3, "code", {}, [u("text", node3.identifier)])
    ]);
  }
};
var table2 = (h2, node3) => {
  node3.data = { hProperties: { align: node3.align } };
  delete node3.align;
  return handlers.table(h2, node3);
};
var code2 = (h2, node3) => {
  const value = node3.value ? node3.value + "\n" : "";
  const props = {};
  if (node3.identifier) {
    props.id = node3.identifier;
  }
  props.className = (0, import_classnames.default)({ ["language-" + node3.lang]: node3.lang }, node3.class) || void 0;
  const codeHast = h2(node3, "code", props, [u("text", value)]);
  return h2(node3.position, "pre", [codeHast]);
};
var iframe = (h2, node3) => h2(node3, "div", { class: "iframe" });
var bibliography = (h2, node3) => h2(node3, "div", { class: "bibliography" });
var details = (h2, node3) => h2(node3, "details");
var summary = (h2, node3) => h2(node3, "summary");
var embed = (h2, node3) => h2(node3, "div");
var include = (h2, node3) => h2(node3, "div", { file: node3.file });
var linkBlock = (h2, node3) => h2(node3, "a");
var margin = (h2, node3) => h2(node3, "aside", { class: "margin" });
var mdast = (h2, node3) => h2(node3, "div", { id: node3.id });
var mermaid = (h2, node3) => h2(node3, "div", { class: "margin" });
var myst = (h2, node3) => h2(node3, "div", { class: "margin" });
var output = (h2, node3) => h2(node3, "div", { class: "output" });
var mystToHast = (opts) => (tree) => {
  return toHast(tree, {
    ...opts,
    handlers: {
      admonition,
      admonitionTitle,
      container,
      image: image2,
      caption,
      captionNumber,
      legend,
      abbreviation,
      subscript,
      superscript,
      math,
      inlineMath,
      definitionList,
      definitionTerm,
      definitionDescription,
      mystRole,
      mystDirective,
      block,
      comment,
      heading: heading2,
      crossReference,
      code: code2,
      table: table2,
      iframe,
      bibliography,
      details,
      summary,
      embed,
      include,
      linkBlock,
      margin,
      mdast,
      mermaid,
      myst,
      output,
      ...opts === null || opts === void 0 ? void 0 : opts.handlers
    }
  });
};

// ../../node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// ../../node_modules/mdast-util-find-and-replace/lib/index.js
var own4 = {}.hasOwnProperty;
var findAndReplace = (
  /**
   * @type {(
   *   (<Tree extends Node>(tree: Tree, find: Find, replace?: Replace | null | undefined, options?: Options | null | undefined) => Tree) &
   *   (<Tree extends Node>(tree: Tree, schema: FindAndReplaceSchema | FindAndReplaceList, options?: Options | null | undefined) => Tree)
   * )}
   **/
  /**
   * @template {Node} Tree
   * @param {Tree} tree
   * @param {Find | FindAndReplaceSchema | FindAndReplaceList} find
   * @param {Replace | Options | null | undefined} [replace]
   * @param {Options | null | undefined} [options]
   * @returns {Tree}
   */
  function(tree, find2, replace, options) {
    let settings;
    let schema;
    if (typeof find2 === "string" || find2 instanceof RegExp) {
      schema = [[find2, replace]];
      settings = options;
    } else {
      schema = find2;
      settings = replace;
    }
    if (!settings) {
      settings = {};
    }
    const ignored = convert(settings.ignore || []);
    const pairs = toPairs(schema);
    let pairIndex = -1;
    while (++pairIndex < pairs.length) {
      visitParents(tree, "text", visitor);
    }
    return tree;
    function visitor(node3, parents) {
      let index = -1;
      let grandparent;
      while (++index < parents.length) {
        const parent = parents[index];
        if (ignored(
          parent,
          // @ts-expect-error: TS doesn’t understand but it’s perfect.
          grandparent ? grandparent.children.indexOf(parent) : void 0,
          grandparent
        )) {
          return;
        }
        grandparent = parent;
      }
      if (grandparent) {
        return handler(node3, parents);
      }
    }
    function handler(node3, parents) {
      const parent = parents[parents.length - 1];
      const find3 = pairs[pairIndex][0];
      const replace2 = pairs[pairIndex][1];
      let start = 0;
      const index = parent.children.indexOf(node3);
      let change = false;
      let nodes = [];
      find3.lastIndex = 0;
      let match = find3.exec(node3.value);
      while (match) {
        const position3 = match.index;
        const matchObject = {
          index: match.index,
          input: match.input,
          // @ts-expect-error: stack is fine.
          stack: [...parents, node3]
        };
        let value = replace2(...match, matchObject);
        if (typeof value === "string") {
          value = value.length > 0 ? { type: "text", value } : void 0;
        }
        if (value !== false) {
          if (start !== position3) {
            nodes.push({
              type: "text",
              value: node3.value.slice(start, position3)
            });
          }
          if (Array.isArray(value)) {
            nodes.push(...value);
          } else if (value) {
            nodes.push(value);
          }
          start = position3 + match[0].length;
          change = true;
        }
        if (!find3.global) {
          break;
        }
        match = find3.exec(node3.value);
      }
      if (change) {
        if (start < node3.value.length) {
          nodes.push({ type: "text", value: node3.value.slice(start) });
        }
        parent.children.splice(index, 1, ...nodes);
      } else {
        nodes = [node3];
      }
      return index + nodes.length;
    }
  }
);
function toPairs(schema) {
  const result = [];
  if (typeof schema !== "object") {
    throw new TypeError("Expected array or object as schema");
  }
  if (Array.isArray(schema)) {
    let index = -1;
    while (++index < schema.length) {
      result.push([
        toExpression(schema[index][0]),
        toFunction(schema[index][1])
      ]);
    }
  } else {
    let key2;
    for (key2 in schema) {
      if (own4.call(schema, key2)) {
        result.push([toExpression(key2), toFunction(schema[key2])]);
      }
    }
  }
  return result;
}
function toExpression(find2) {
  return typeof find2 === "string" ? new RegExp(escapeStringRegexp(find2), "g") : find2;
}
function toFunction(replace) {
  return typeof replace === "function" ? replace : () => replace;
}

// ../../node_modules/myst-to-html/dist/state.js
var TargetKind;
(function(TargetKind2) {
  TargetKind2["heading"] = "heading";
  TargetKind2["math"] = "math";
  TargetKind2["figure"] = "figure";
  TargetKind2["table"] = "table";
  TargetKind2["code"] = "code";
})(TargetKind || (TargetKind = {}));
var ReferenceKind;
(function(ReferenceKind2) {
  ReferenceKind2["ref"] = "ref";
  ReferenceKind2["numref"] = "numref";
  ReferenceKind2["eq"] = "eq";
})(ReferenceKind || (ReferenceKind = {}));
function fillReferenceEnumerators(node3, enumerator) {
  const num = String(enumerator);
  findAndReplace(node3, { "%s": num, "{number}": num });
}
function copyNode(node3) {
  return JSON.parse(JSON.stringify(node3));
}
function kindFromNode(node3) {
  return node3.type === "container" ? node3.kind : node3.type;
}
function incrementHeadingCounts(depth, counts) {
  const incrementIndex = depth - 1;
  return counts.map((count, index) => {
    if (count === null || index < incrementIndex)
      return count;
    if (index === incrementIndex)
      return count + 1;
    return 0;
  });
}
function formatHeadingEnumerator(counts) {
  counts = counts.filter((d) => d !== null);
  while (counts && counts[counts.length - 1] === 0) {
    counts.pop();
  }
  return counts.join(".");
}
var State = class {
  constructor(targetCounts, targets) {
    this.targetCounts = targetCounts || {};
    this.targets = targets || {};
  }
  addTarget(node3) {
    const kind = kindFromNode(node3);
    if (kind && kind in TargetKind) {
      let enumerator = null;
      if (node3.enumerated !== false) {
        enumerator = this.incrementCount(node3, kind);
        node3.enumerator = enumerator;
      }
      if (node3.identifier) {
        this.targets[node3.identifier] = {
          node: copyNode(node3),
          kind
        };
      }
    }
  }
  initializeNumberedHeadingDepths(tree) {
    const headings = selectAll("heading", tree).filter((node3) => node3.enumerated !== false);
    const headingDepths = new Set(headings.map((node3) => node3.depth));
    this.targetCounts.heading = [1, 2, 3, 4, 5, 6].map((depth) => headingDepths.has(depth) ? 0 : null);
  }
  incrementCount(node3, kind) {
    if (kind === TargetKind.heading) {
      if (!this.targetCounts.heading)
        this.targetCounts.heading = [0, 0, 0, 0, 0, 0];
      this.targetCounts.heading = incrementHeadingCounts(node3.depth, this.targetCounts.heading);
      return formatHeadingEnumerator(this.targetCounts.heading);
    }
    if (kind in this.targetCounts) {
      this.targetCounts[kind] += 1;
    } else {
      this.targetCounts[kind] = 1;
    }
    return String(this.targetCounts[kind]);
  }
  getTarget(identifier) {
    if (!identifier)
      return void 0;
    return this.targets[identifier];
  }
  resolveReferenceContent(node3) {
    var _a;
    const target = this.getTarget(node3.identifier);
    if (!target) {
      return;
    }
    const kinds = {
      ref: {
        eq: node3.kind === ReferenceKind.eq,
        ref: node3.kind === ReferenceKind.ref,
        numref: node3.kind === ReferenceKind.numref
      },
      target: {
        math: target.kind === TargetKind.math,
        figure: target.kind === TargetKind.figure,
        table: target.kind === TargetKind.table,
        heading: target.kind === TargetKind.heading
      }
    };
    const noNodeChildren = !((_a = node3.children) === null || _a === void 0 ? void 0 : _a.length);
    if (kinds.ref.eq && kinds.target.math && target.node.enumerator) {
      if (noNodeChildren) {
        setTextAsChild(node3, `(${target.node.enumerator})`);
      }
      node3.resolved = true;
    } else if (kinds.ref.ref && kinds.target.heading) {
      if (noNodeChildren) {
        node3.children = copyNode(target.node).children;
      }
      node3.resolved = true;
    } else if (kinds.ref.ref && (kinds.target.figure || kinds.target.table)) {
      if (noNodeChildren) {
        const caption2 = select("caption > paragraph", target.node);
        node3.children = copyNode(caption2).children;
      }
      node3.resolved = true;
    } else if (kinds.ref.numref && kinds.target.figure && target.node.enumerator) {
      if (noNodeChildren) {
        setTextAsChild(node3, "Figure %s");
      }
      fillReferenceEnumerators(node3, target.node.enumerator);
      node3.resolved = true;
    } else if (kinds.ref.numref && kinds.target.table && target.node.enumerator) {
      if (noNodeChildren) {
        setTextAsChild(node3, "Table %s");
      }
      fillReferenceEnumerators(node3, target.node.enumerator);
      node3.resolved = true;
    }
  }
};
var enumerateTargets = (state, tree, opts) => {
  state.initializeNumberedHeadingDepths(tree);
  if (!opts.disableContainerEnumeration) {
    visit(tree, "container", (node3) => state.addTarget(node3));
  }
  if (!opts.disableEquationEnumeration) {
    visit(tree, "math", (node3) => state.addTarget(node3));
  }
  if (!opts.disableHeadingEnumeration) {
    visit(tree, "heading", (node3) => state.addTarget(node3));
  }
  return tree;
};
var resolveReferences = (state, tree) => {
  selectAll("link", tree).forEach((node3) => {
    const reference = normalizeLabel(node3.url);
    if (reference && reference.identifier in state.targets) {
      node3.type = "crossReference";
      node3.kind = state.targets[reference.identifier].kind === TargetKind.math ? "eq" : "ref";
      node3.identifier = reference.identifier;
      node3.label = reference.label;
      delete node3.url;
    }
  });
  visit(tree, "crossReference", (node3) => {
    state.resolveReferenceContent(node3);
  });
};

// ../../node_modules/rehype-parse/lib/index.js
var import_parser = __toESM(require_parser(), 1);

// ../../node_modules/property-information/lib/util/schema.js
var Schema = class {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(property, normal, space2) {
    this.property = property;
    this.normal = normal;
    if (space2) {
      this.space = space2;
    }
  }
};
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;

// ../../node_modules/property-information/lib/util/merge.js
function merge(definitions2, space2) {
  const property = {};
  const normal = {};
  let index = -1;
  while (++index < definitions2.length) {
    Object.assign(property, definitions2[index].property);
    Object.assign(normal, definitions2[index].normal);
  }
  return new Schema(property, normal, space2);
}

// ../../node_modules/property-information/lib/normalize.js
function normalize(value) {
  return value.toLowerCase();
}

// ../../node_modules/property-information/lib/util/info.js
var Info = class {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(property, attribute) {
    this.property = property;
    this.attribute = attribute;
  }
};
Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;

// ../../node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// ../../node_modules/property-information/lib/util/defined-info.js
var checks = Object.keys(types_exports);
var DefinedInfo = class extends Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(property, attribute, mask, space2) {
    let index = -1;
    super(property, attribute);
    mark(this, "space", space2);
    if (typeof mask === "number") {
      while (++index < checks.length) {
        const check = checks[index];
        mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
      }
    }
  }
};
DefinedInfo.prototype.defined = true;
function mark(values, key2, value) {
  if (value) {
    values[key2] = value;
  }
}

// ../../node_modules/property-information/lib/util/create.js
var own5 = {}.hasOwnProperty;
function create(definition) {
  const property = {};
  const normal = {};
  let prop;
  for (prop in definition.properties) {
    if (own5.call(definition.properties, prop)) {
      const value = definition.properties[prop];
      const info = new DefinedInfo(
        prop,
        definition.transform(definition.attributes || {}, prop),
        value,
        definition.space
      );
      if (definition.mustUseProperty && definition.mustUseProperty.includes(prop)) {
        info.mustUseProperty = true;
      }
      property[prop] = info;
      normal[normalize(prop)] = prop;
      normal[normalize(info.attribute)] = prop;
    }
  }
  return new Schema(property, normal, definition.space);
}

// ../../node_modules/property-information/lib/xlink.js
var xlink = create({
  space: "xlink",
  transform(_, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

// ../../node_modules/property-information/lib/xml.js
var xml = create({
  space: "xml",
  transform(_, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});

// ../../node_modules/property-information/lib/util/case-sensitive-transform.js
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

// ../../node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

// ../../node_modules/property-information/lib/xmlns.js
var xmlns = create({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: caseInsensitiveTransform,
  properties: { xmlns: null, xmlnsXLink: null }
});

// ../../node_modules/property-information/lib/aria.js
var aria = create({
  transform(_, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

// ../../node_modules/property-information/lib/html.js
var html2 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    blocking: spaceSeparated,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: boolean,
    // `<frame>`
    noHref: boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

// ../../node_modules/property-information/lib/svg.js
var svg = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

// ../../node_modules/property-information/lib/find.js
var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;
function find(schema, value) {
  const normal = normalize(value);
  let prop = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// ../../node_modules/property-information/index.js
var html3 = merge([xml, xlink, xmlns, aria, html2], "html");
var svg2 = merge([xml, xlink, xmlns, aria, svg], "svg");

// ../../node_modules/rehype-parse/node_modules/hast-util-parse-selector/lib/index.js
var search = /[#.]/g;
function parseSelector(selector, defaultTagName) {
  const value = selector || "";
  const props = {};
  let start = 0;
  let previous;
  let tagName;
  while (start < value.length) {
    search.lastIndex = start;
    const match = search.exec(value);
    const subvalue = value.slice(start, match ? match.index : value.length);
    if (subvalue) {
      if (!previous) {
        tagName = subvalue;
      } else if (previous === "#") {
        props.id = subvalue;
      } else if (Array.isArray(props.className)) {
        props.className.push(subvalue);
      } else {
        props.className = [subvalue];
      }
      start += subvalue.length;
    }
    if (match) {
      previous = match[0];
      start++;
    }
  }
  return {
    type: "element",
    // @ts-expect-error: fine.
    tagName: tagName || defaultTagName || "div",
    properties: props,
    children: []
  };
}

// ../../node_modules/space-separated-tokens/index.js
function parse(value) {
  const input3 = String(value || "").trim();
  return input3 ? input3.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
  return values.join(" ").trim();
}

// ../../node_modules/comma-separated-tokens/index.js
function parse2(value) {
  const tokens = [];
  const input3 = String(value || "");
  let index = input3.indexOf(",");
  let start = 0;
  let end = false;
  while (!end) {
    if (index === -1) {
      index = input3.length;
      end = true;
    }
    const token = input3.slice(start, index).trim();
    if (token || !end) {
      tokens.push(token);
    }
    start = index + 1;
    index = input3.indexOf(",", start);
  }
  return tokens;
}
function stringify2(values, options) {
  const settings = options || {};
  const input3 = values[values.length - 1] === "" ? [...values, ""] : values;
  return input3.join(
    (settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")
  ).trim();
}

// ../../node_modules/rehype-parse/node_modules/hastscript/lib/core.js
var buttonTypes = /* @__PURE__ */ new Set(["menu", "submit", "reset", "button"]);
var own6 = {}.hasOwnProperty;
function core(schema, defaultTagName, caseSensitive) {
  const adjust = caseSensitive && createAdjustMap(caseSensitive);
  const h2 = (
    /**
     * @type {{
     *   (): Root
     *   (selector: null | undefined, ...children: Array<HChild>): Root
     *   (selector: string, properties?: HProperties, ...children: Array<HChild>): Element
     *   (selector: string, ...children: Array<HChild>): Element
     * }}
     */
    /**
     * Hyperscript compatible DSL for creating virtual hast trees.
     *
     * @param {string | null} [selector]
     * @param {HProperties | HChild} [properties]
     * @param {Array<HChild>} children
     * @returns {HResult}
     */
    function(selector, properties, ...children) {
      let index = -1;
      let node3;
      if (selector === void 0 || selector === null) {
        node3 = { type: "root", children: [] };
        children.unshift(properties);
      } else {
        node3 = parseSelector(selector, defaultTagName);
        node3.tagName = node3.tagName.toLowerCase();
        if (adjust && own6.call(adjust, node3.tagName)) {
          node3.tagName = adjust[node3.tagName];
        }
        if (isProperties(properties, node3.tagName)) {
          let key2;
          for (key2 in properties) {
            if (own6.call(properties, key2)) {
              addProperty(schema, node3.properties, key2, properties[key2]);
            }
          }
        } else {
          children.unshift(properties);
        }
      }
      while (++index < children.length) {
        addChild(node3.children, children[index]);
      }
      if (node3.type === "element" && node3.tagName === "template") {
        node3.content = { type: "root", children: node3.children };
        node3.children = [];
      }
      return node3;
    }
  );
  return h2;
}
function isProperties(value, name) {
  if (value === null || value === void 0 || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  if (name === "input" || !value.type || typeof value.type !== "string") {
    return true;
  }
  if ("children" in value && Array.isArray(value.children)) {
    return false;
  }
  if (name === "button") {
    return buttonTypes.has(value.type.toLowerCase());
  }
  return !("value" in value);
}
function addProperty(schema, properties, key2, value) {
  const info = find(schema, key2);
  let index = -1;
  let result;
  if (value === void 0 || value === null)
    return;
  if (typeof value === "number") {
    if (Number.isNaN(value))
      return;
    result = value;
  } else if (typeof value === "boolean") {
    result = value;
  } else if (typeof value === "string") {
    if (info.spaceSeparated) {
      result = parse(value);
    } else if (info.commaSeparated) {
      result = parse2(value);
    } else if (info.commaOrSpaceSeparated) {
      result = parse(parse2(value).join(" "));
    } else {
      result = parsePrimitive(info, info.property, value);
    }
  } else if (Array.isArray(value)) {
    result = value.concat();
  } else {
    result = info.property === "style" ? style(value) : String(value);
  }
  if (Array.isArray(result)) {
    const finalResult = [];
    while (++index < result.length) {
      finalResult[index] = parsePrimitive(info, info.property, result[index]);
    }
    result = finalResult;
  }
  if (info.property === "className" && Array.isArray(properties.className)) {
    result = properties.className.concat(result);
  }
  properties[info.property] = result;
}
function addChild(nodes, value) {
  let index = -1;
  if (value === void 0 || value === null) {
  } else if (typeof value === "string" || typeof value === "number") {
    nodes.push({ type: "text", value: String(value) });
  } else if (Array.isArray(value)) {
    while (++index < value.length) {
      addChild(nodes, value[index]);
    }
  } else if (typeof value === "object" && "type" in value) {
    if (value.type === "root") {
      addChild(nodes, value.children);
    } else {
      nodes.push(value);
    }
  } else {
    throw new Error("Expected node, nodes, or string, got `" + value + "`");
  }
}
function parsePrimitive(info, name, value) {
  if (typeof value === "string") {
    if (info.number && value && !Number.isNaN(Number(value))) {
      return Number(value);
    }
    if ((info.boolean || info.overloadedBoolean) && (value === "" || normalize(value) === normalize(name))) {
      return true;
    }
  }
  return value;
}
function style(value) {
  const result = [];
  let key2;
  for (key2 in value) {
    if (own6.call(value, key2)) {
      result.push([key2, value[key2]].join(": "));
    }
  }
  return result.join("; ");
}
function createAdjustMap(values) {
  const result = {};
  let index = -1;
  while (++index < values.length) {
    result[values[index].toLowerCase()] = values[index];
  }
  return result;
}

// ../../node_modules/rehype-parse/node_modules/hastscript/lib/html.js
var h = core(html3, "div");

// ../../node_modules/rehype-parse/node_modules/hastscript/lib/svg-case-sensitive-tag-names.js
var svgCaseSensitiveTagNames = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
];

// ../../node_modules/rehype-parse/node_modules/hastscript/lib/svg.js
var s = core(svg2, "g", svgCaseSensitiveTagNames);

// ../../node_modules/rehype-parse/node_modules/vfile-location/lib/index.js
function location(file) {
  const value = String(file);
  const indices = [];
  const search2 = /\r?\n|\r/g;
  while (search2.test(value)) {
    indices.push(search2.lastIndex);
  }
  indices.push(value.length + 1);
  return { toPoint, toOffset };
  function toPoint(offset) {
    let index = -1;
    if (typeof offset === "number" && offset > -1 && offset < indices[indices.length - 1]) {
      while (++index < indices.length) {
        if (indices[index] > offset) {
          return {
            line: index + 1,
            column: offset - (index > 0 ? indices[index - 1] : 0) + 1,
            offset
          };
        }
      }
    }
    return { line: void 0, column: void 0, offset: void 0 };
  }
  function toOffset(point3) {
    const line = point3 && point3.line;
    const column = point3 && point3.column;
    if (typeof line === "number" && typeof column === "number" && !Number.isNaN(line) && !Number.isNaN(column) && line - 1 in indices) {
      const offset = (indices[line - 2] || 0) + column - 1 || 0;
      if (offset > -1 && offset < indices[indices.length - 1]) {
        return offset;
      }
    }
    return -1;
  }
}

// ../../node_modules/web-namespaces/index.js
var webNamespaces = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// ../../node_modules/rehype-parse/node_modules/hast-util-from-parse5/lib/index.js
var own7 = {}.hasOwnProperty;
var proto = Object.prototype;
function fromParse5(tree, options) {
  const options_ = options || {};
  let settings;
  let file;
  if (isFile(options_)) {
    file = options_;
    settings = {};
  } else {
    file = options_.file || void 0;
    settings = options_;
  }
  return one2(
    {
      schema: settings.space === "svg" ? svg2 : html3,
      file,
      verbose: settings.verbose,
      location: false
    },
    tree
  );
}
function one2(state, node3) {
  let result;
  switch (node3.nodeName) {
    case "#comment": {
      const reference = (
        /** @type {P5Comment} */
        node3
      );
      result = { type: "comment", value: reference.data };
      patch2(state, reference, result);
      return result;
    }
    case "#document":
    case "#document-fragment": {
      const reference = (
        /** @type {P5Document | P5DocumentFragment} */
        node3
      );
      const quirksMode = "mode" in reference ? reference.mode === "quirks" || reference.mode === "limited-quirks" : false;
      result = {
        type: "root",
        children: all3(state, node3.childNodes),
        data: { quirksMode }
      };
      if (state.file && state.location) {
        const doc = String(state.file);
        const loc = location(doc);
        const start = loc.toPoint(0);
        const end = loc.toPoint(doc.length);
        result.position = { start, end };
      }
      return result;
    }
    case "#documentType": {
      const reference = (
        /** @type {P5DocumentType} */
        node3
      );
      result = { type: "doctype" };
      patch2(state, reference, result);
      return result;
    }
    case "#text": {
      const reference = (
        /** @type {P5Text} */
        node3
      );
      result = { type: "text", value: reference.value };
      patch2(state, reference, result);
      return result;
    }
    default: {
      const reference = (
        /** @type {P5Element} */
        node3
      );
      result = element2(state, reference);
      return result;
    }
  }
}
function all3(state, nodes) {
  let index = -1;
  const result = [];
  while (++index < nodes.length) {
    result[index] = one2(state, nodes[index]);
  }
  return result;
}
function element2(state, node3) {
  const schema = state.schema;
  state.schema = node3.namespaceURI === webNamespaces.svg ? svg2 : html3;
  let index = -1;
  const props = {};
  while (++index < node3.attrs.length) {
    const attribute = node3.attrs[index];
    const name = (attribute.prefix ? attribute.prefix + ":" : "") + attribute.name;
    if (!own7.call(proto, name)) {
      props[name] = attribute.value;
    }
  }
  const fn = state.schema.space === "svg" ? s : h;
  const result = fn(node3.tagName, props, all3(state, node3.childNodes));
  patch2(state, node3, result);
  if (result.tagName === "template") {
    const reference = (
      /** @type {P5Template} */
      node3
    );
    const pos = reference.sourceCodeLocation;
    const startTag = pos && pos.startTag && position2(pos.startTag);
    const endTag = pos && pos.endTag && position2(pos.endTag);
    const content3 = one2(state, reference.content);
    if (startTag && endTag && state.file) {
      content3.position = { start: startTag.end, end: endTag.start };
    }
    result.content = content3;
  }
  state.schema = schema;
  return result;
}
function patch2(state, from, to) {
  if ("sourceCodeLocation" in from && from.sourceCodeLocation && state.file) {
    const position3 = createLocation(state, to, from.sourceCodeLocation);
    if (position3) {
      state.location = true;
      to.position = position3;
    }
  }
}
function createLocation(state, node3, location2) {
  const result = position2(location2);
  if (node3.type === "element") {
    const tail = node3.children[node3.children.length - 1];
    if (result && !location2.endTag && tail && tail.position && tail.position.end) {
      result.end = Object.assign({}, tail.position.end);
    }
    if (state.verbose) {
      const props = {};
      let key2;
      if (location2.attrs) {
        for (key2 in location2.attrs) {
          if (own7.call(location2.attrs, key2)) {
            props[find(state.schema, key2).property] = position2(
              location2.attrs[key2]
            );
          }
        }
      }
      node3.data = {
        position: {
          // @ts-expect-error: assume not `undefined`.
          opening: position2(location2.startTag),
          closing: location2.endTag ? position2(location2.endTag) : null,
          properties: props
        }
      };
    }
  }
  return result;
}
function position2(loc) {
  const start = point2({
    line: loc.startLine,
    column: loc.startCol,
    offset: loc.startOffset
  });
  const end = point2({
    line: loc.endLine,
    column: loc.endCol,
    offset: loc.endOffset
  });
  return start || end ? { start, end } : void 0;
}
function point2(point3) {
  return point3.line && point3.column ? point3 : void 0;
}
function isFile(value) {
  return "messages" in value;
}

// ../../node_modules/rehype-parse/lib/errors.js
var errors = {
  abandonedHeadElementChild: {
    reason: "Unexpected metadata element after head",
    description: "Unexpected element after head. Expected the element before `</head>`",
    url: false
  },
  abruptClosingOfEmptyComment: {
    reason: "Unexpected abruptly closed empty comment",
    description: "Unexpected `>` or `->`. Expected `-->` to close comments"
  },
  abruptDoctypePublicIdentifier: {
    reason: "Unexpected abruptly closed public identifier",
    description: "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"
  },
  abruptDoctypeSystemIdentifier: {
    reason: "Unexpected abruptly closed system identifier",
    description: "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"
  },
  absenceOfDigitsInNumericCharacterReference: {
    reason: "Unexpected non-digit at start of numeric character reference",
    description: "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"
  },
  cdataInHtmlContent: {
    reason: "Unexpected CDATA section in HTML",
    description: "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"
  },
  characterReferenceOutsideUnicodeRange: {
    reason: "Unexpected too big numeric character reference",
    description: "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"
  },
  closingOfElementWithOpenChildElements: {
    reason: "Unexpected closing tag with open child elements",
    description: "Unexpectedly closing tag. Expected other tags to be closed first",
    url: false
  },
  controlCharacterInInputStream: {
    reason: "Unexpected control character",
    description: "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"
  },
  controlCharacterReference: {
    reason: "Unexpected control character reference",
    description: "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"
  },
  disallowedContentInNoscriptInHead: {
    reason: "Disallowed content inside `<noscript>` in `<head>`",
    description: "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",
    url: false
  },
  duplicateAttribute: {
    reason: "Unexpected duplicate attribute",
    description: "Unexpectedly double attribute. Expected attributes to occur only once"
  },
  endTagWithAttributes: {
    reason: "Unexpected attribute on closing tag",
    description: "Unexpected attribute. Expected `>` instead"
  },
  endTagWithTrailingSolidus: {
    reason: "Unexpected slash at end of closing tag",
    description: "Unexpected `%c-1`. Expected `>` instead"
  },
  endTagWithoutMatchingOpenElement: {
    reason: "Unexpected unopened end tag",
    description: "Unexpected end tag. Expected no end tag or another end tag",
    url: false
  },
  eofBeforeTagName: {
    reason: "Unexpected end of file",
    description: "Unexpected end of file. Expected tag name instead"
  },
  eofInCdata: {
    reason: "Unexpected end of file in CDATA",
    description: "Unexpected end of file. Expected `]]>` to close the CDATA"
  },
  eofInComment: {
    reason: "Unexpected end of file in comment",
    description: "Unexpected end of file. Expected `-->` to close the comment"
  },
  eofInDoctype: {
    reason: "Unexpected end of file in doctype",
    description: "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"
  },
  eofInElementThatCanContainOnlyText: {
    reason: "Unexpected end of file in element that can only contain text",
    description: "Unexpected end of file. Expected text or a closing tag",
    url: false
  },
  eofInScriptHtmlCommentLikeText: {
    reason: "Unexpected end of file in comment inside script",
    description: "Unexpected end of file. Expected `-->` to close the comment"
  },
  eofInTag: {
    reason: "Unexpected end of file in tag",
    description: "Unexpected end of file. Expected `>` to close the tag"
  },
  incorrectlyClosedComment: {
    reason: "Incorrectly closed comment",
    description: "Unexpected `%c-1`. Expected `-->` to close the comment"
  },
  incorrectlyOpenedComment: {
    reason: "Incorrectly opened comment",
    description: "Unexpected `%c`. Expected `<!--` to open the comment"
  },
  invalidCharacterSequenceAfterDoctypeName: {
    reason: "Invalid sequence after doctype name",
    description: "Unexpected sequence at `%c`. Expected `public` or `system`"
  },
  invalidFirstCharacterOfTagName: {
    reason: "Invalid first character in tag name",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  misplacedDoctype: {
    reason: "Misplaced doctype",
    description: "Unexpected doctype. Expected doctype before head",
    url: false
  },
  misplacedStartTagForHeadElement: {
    reason: "Misplaced `<head>` start tag",
    description: "Unexpected start tag `<head>`. Expected `<head>` directly after doctype",
    url: false
  },
  missingAttributeValue: {
    reason: "Missing attribute value",
    description: "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"
  },
  missingDoctype: {
    reason: "Missing doctype before other content",
    description: "Expected a `<!doctype html>` before anything else",
    url: false
  },
  missingDoctypeName: {
    reason: "Missing doctype name",
    description: "Unexpected doctype end at `%c`. Expected `html` instead"
  },
  missingDoctypePublicIdentifier: {
    reason: "Missing public identifier in doctype",
    description: "Unexpected `%c`. Expected identifier for `public` instead"
  },
  missingDoctypeSystemIdentifier: {
    reason: "Missing system identifier in doctype",
    description: 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'
  },
  missingEndTagName: {
    reason: "Missing name in end tag",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  missingQuoteBeforeDoctypePublicIdentifier: {
    reason: "Missing quote before public identifier in doctype",
    description: "Unexpected `%c`. Expected `\"` or `'` instead"
  },
  missingQuoteBeforeDoctypeSystemIdentifier: {
    reason: "Missing quote before system identifier in doctype",
    description: "Unexpected `%c`. Expected `\"` or `'` instead"
  },
  missingSemicolonAfterCharacterReference: {
    reason: "Missing semicolon after character reference",
    description: "Unexpected `%c`. Expected `;` instead"
  },
  missingWhitespaceAfterDoctypePublicKeyword: {
    reason: "Missing whitespace after public identifier in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  missingWhitespaceAfterDoctypeSystemKeyword: {
    reason: "Missing whitespace after system identifier in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  missingWhitespaceBeforeDoctypeName: {
    reason: "Missing whitespace before doctype name",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  missingWhitespaceBetweenAttributes: {
    reason: "Missing whitespace between attributes",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
    reason: "Missing whitespace between public and system identifiers in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  nestedComment: {
    reason: "Unexpected nested comment",
    description: "Unexpected `<!--`. Expected `-->`"
  },
  nestedNoscriptInHead: {
    reason: "Unexpected nested `<noscript>` in `<head>`",
    description: "Unexpected `<noscript>`. Expected a closing tag or a meta element",
    url: false
  },
  nonConformingDoctype: {
    reason: "Unexpected non-conforming doctype declaration",
    description: 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',
    url: false
  },
  nonVoidHtmlElementStartTagWithTrailingSolidus: {
    reason: "Unexpected trailing slash on start tag of non-void element",
    description: "Unexpected `/`. Expected `>` instead"
  },
  noncharacterCharacterReference: {
    reason: "Unexpected noncharacter code point referenced by character reference",
    description: "Unexpected code point. Do not use noncharacters in HTML"
  },
  noncharacterInInputStream: {
    reason: "Unexpected noncharacter character",
    description: "Unexpected code point `%x`. Do not use noncharacters in HTML"
  },
  nullCharacterReference: {
    reason: "Unexpected NULL character referenced by character reference",
    description: "Unexpected code point. Do not use NULL characters in HTML"
  },
  openElementsLeftAfterEof: {
    reason: "Unexpected end of file",
    description: "Unexpected end of file. Expected closing tag instead",
    url: false
  },
  surrogateCharacterReference: {
    reason: "Unexpected surrogate character referenced by character reference",
    description: "Unexpected code point. Do not use lone surrogate characters in HTML"
  },
  surrogateInInputStream: {
    reason: "Unexpected surrogate character",
    description: "Unexpected code point `%x`. Do not use lone surrogate characters in HTML"
  },
  unexpectedCharacterAfterDoctypeSystemIdentifier: {
    reason: "Invalid character after system identifier in doctype",
    description: "Unexpected character at `%c`. Expected `>`"
  },
  unexpectedCharacterInAttributeName: {
    reason: "Unexpected character in attribute name",
    description: "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"
  },
  unexpectedCharacterInUnquotedAttributeValue: {
    reason: "Unexpected character in unquoted attribute value",
    description: "Unexpected `%c`. Quote the attribute value to include it"
  },
  unexpectedEqualsSignBeforeAttributeName: {
    reason: "Unexpected equals sign before attribute name",
    description: "Unexpected `%c`. Add an attribute name before it"
  },
  unexpectedNullCharacter: {
    reason: "Unexpected NULL character",
    description: "Unexpected code point `%x`. Do not use NULL characters in HTML"
  },
  unexpectedQuestionMarkInsteadOfTagName: {
    reason: "Unexpected question mark instead of tag name",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  unexpectedSolidusInTag: {
    reason: "Unexpected slash in tag",
    description: "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"
  },
  unknownNamedCharacterReference: {
    reason: "Unexpected unknown named character reference",
    description: "Unexpected character reference. Expected known named character references"
  }
};

// ../../node_modules/rehype-parse/lib/index.js
var base = "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-";
var fatalities = { 2: true, 1: false, 0: null };
function rehypeParse(options) {
  const processorSettings = (
    /** @type {Options} */
    this.data("settings")
  );
  const settings = Object.assign({}, processorSettings, options);
  Object.assign(this, { Parser: parser });
  function parser(doc, file) {
    const fn = settings.fragment ? "parseFragment" : "parse";
    const onParseError = settings.emitParseErrors ? onerror : null;
    const parse5 = new import_parser.default({
      sourceCodeLocationInfo: true,
      onParseError,
      scriptingEnabled: false
    });
    return fromParse5(parse5[fn](doc), {
      space: settings.space,
      file,
      verbose: settings.verbose
    });
    function onerror(error) {
      const code4 = error.code;
      const name = camelcase2(code4);
      const setting = settings[name];
      const config = setting === void 0 || setting === null ? true : setting;
      const level = typeof config === "number" ? config : config ? 1 : 0;
      const start = {
        line: error.startLine,
        column: error.startCol,
        offset: error.startOffset
      };
      const end = {
        line: error.endLine,
        column: error.endCol,
        offset: error.endOffset
      };
      if (level) {
        const info = errors[name] || { reason: "", description: "", url: "" };
        const message = file.message(format(info.reason), { start, end });
        message.source = "parse-error";
        message.ruleId = code4;
        message.fatal = fatalities[level];
        message.note = format(info.description);
        message.url = "url" in info && info.url === false ? null : base + code4;
      }
      function format(value) {
        return value.replace(/%c(?:-(\d+))?/g, (_, $1) => {
          const offset = $1 ? -Number.parseInt($1, 10) : 0;
          const char = doc.charAt(error.startOffset + offset);
          return char === "`" ? "` ` `" : char;
        }).replace(
          /%x/g,
          () => "0x" + doc.charCodeAt(error.startOffset).toString(16).toUpperCase()
        );
      }
    }
  }
}
function camelcase2(value) {
  return value.replace(/-[a-z]/g, ($0) => $0.charAt(1).toUpperCase());
}

// ../../node_modules/hast-util-to-mdast/lib/all.js
function all4(h2, parent) {
  const nodes = parent.children || [];
  const values = [];
  let index = -1;
  while (++index < nodes.length) {
    const result = one3(h2, nodes[index], parent);
    if (Array.isArray(result)) {
      values.push(...result);
    } else if (result) {
      values.push(result);
    }
  }
  let start = 0;
  let end = values.length;
  while (start < end && values[start].type === "break") {
    start++;
  }
  while (end > start && values[end - 1].type === "break") {
    end--;
  }
  return start === 0 && end === values.length ? values : values.slice(start, end);
}

// ../../node_modules/hast-util-to-mdast/lib/util/own.js
var own8 = {}.hasOwnProperty;

// ../../node_modules/hast-util-to-mdast/lib/util/wrap-text.js
function wrapText(h2, value) {
  return h2.wrapText ? value : value.replace(/\r?\n|\r/g, " ");
}

// ../../node_modules/hast-util-to-mdast/lib/one.js
function one3(h2, node3, parent) {
  let fn;
  if (node3.type === "element") {
    if (node3.properties && node3.properties.dataMdast === "ignore") {
      return;
    }
    if (own8.call(h2.handlers, node3.tagName)) {
      fn = h2.handlers[node3.tagName];
    }
  } else if (own8.call(h2.handlers, node3.type)) {
    fn = h2.handlers[node3.type];
  }
  if (typeof fn === "function") {
    return fn(h2, node3, parent);
  }
  return unknown(h2, node3);
}
function unknown(h2, node3) {
  if (typeof node3.value === "string") {
    return h2(node3, "text", wrapText(h2, node3.value));
  }
  return all4(h2, node3);
}

// ../../node_modules/hast-util-to-mdast/lib/util/wrap.js
var import_extend = __toESM(require_extend(), 1);

// ../../node_modules/mdast-util-phrasing/lib/index.js
var phrasing2 = (
  /** @type {AssertPredicatePhrasing} */
  convert([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "link",
    "linkReference",
    "strong",
    "text"
  ])
);

// ../../node_modules/hast-util-to-mdast/lib/util/wrap.js
function wrap2(nodes) {
  return runs(nodes, onphrasing);
  function onphrasing(nodes2) {
    const head2 = nodes2[0];
    if (nodes2.length === 1 && head2.type === "text" && (head2.value === " " || head2.value === "\n")) {
      return [];
    }
    return { type: "paragraph", children: nodes2 };
  }
}
function wrapNeeded(nodes) {
  let index = -1;
  let node3;
  while (++index < nodes.length) {
    node3 = nodes[index];
    if (!phrasing3(node3) || "children" in node3 && wrapNeeded(node3.children)) {
      return true;
    }
  }
  return false;
}
function runs(nodes, onphrasing, onnonphrasing) {
  const nonphrasing = onnonphrasing || identity;
  const flattened = flatten(nodes);
  let result = [];
  let index = -1;
  let queue;
  let node3;
  while (++index < flattened.length) {
    node3 = flattened[index];
    if (phrasing3(node3)) {
      if (!queue)
        queue = [];
      queue.push(node3);
    } else {
      if (queue) {
        result = result.concat(onphrasing(queue));
        queue = void 0;
      }
      result = result.concat(nonphrasing(node3));
    }
  }
  if (queue) {
    result = result.concat(onphrasing(queue));
  }
  return result;
}
function flatten(nodes) {
  let flattened = [];
  let index = -1;
  let node3;
  while (++index < nodes.length) {
    node3 = nodes[index];
    if ((node3.type === "delete" || node3.type === "link") && wrapNeeded(node3.children)) {
      flattened = flattened.concat(split(node3));
    } else {
      flattened.push(node3);
    }
  }
  return flattened;
}
function split(node3) {
  return runs(node3.children, onphrasing, onnonphrasing);
  function onnonphrasing(child) {
    if ("children" in child && "children" in node3) {
      const { children, ...rest } = node3;
      return {
        ...child,
        // @ts-expect-error: assume matching parent & child.
        children: [{ ...(0, import_extend.default)(true, {}, rest), children: child.children }]
      };
    }
    return { ...child };
  }
  function onphrasing(nodes) {
    const { children, ...rest } = node3;
    return { ...(0, import_extend.default)(true, {}, rest), children: nodes };
  }
}
function phrasing3(node3) {
  return node3.data && node3.data.hName ? phrasing({
    type: "element",
    tagName: node3.data.hName,
    properties: {},
    children: []
  }) : phrasing2(node3);
}
function identity(n) {
  return n;
}

// ../../node_modules/hast-util-to-mdast/lib/util/wrap-children.js
function wrapChildren(h2, node3) {
  return wrap2(all4(h2, node3));
}

// ../../node_modules/hast-util-to-mdast/lib/util/resolve.js
function resolve(h2, url) {
  if (url === null || url === void 0) {
    return "";
  }
  if (h2.frozenBaseUrl) {
    return String(new URL(url, h2.frozenBaseUrl));
  }
  return url;
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/a.js
function a(h2, node3) {
  const props = node3.properties;
  return h2(
    node3,
    "link",
    {
      title: props.title || null,
      url: resolve(h2, String(props.href || "") || null)
    },
    all4(h2, node3)
  );
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/base.js
function base2(h2, node3) {
  if (!h2.baseFound) {
    h2.frozenBaseUrl = String(node3.properties && node3.properties.href || "") || null;
    h2.baseFound = true;
  }
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/blockquote.js
function blockquote2(h2, node3) {
  return h2(node3, "blockquote", wrapChildren(h2, node3));
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/br.js
function br(h2, node3) {
  return h2.wrapText ? h2(node3, "break") : h2(node3, "text", " ");
}

// ../../node_modules/unist-util-find-after/lib/index.js
var findAfter = (
  /**
   * @type {(
   *  (<T extends Node>(node: Parent, index: Node | number, test: import('unist-util-is').PredicateTest<T>) => T | null) &
   *  ((node: Parent, index: Node | number, test?: Test) => Node | null)
   * )}
   */
  /**
   * @param {Parent} parent
   * @param {Node | number} index
   * @param {Test} [test]
   * @returns {Node | null}
   */
  function(parent, index, test) {
    const is = convert(test);
    if (!parent || !parent.type || !parent.children) {
      throw new Error("Expected parent node");
    }
    if (typeof index === "number") {
      if (index < 0 || index === Number.POSITIVE_INFINITY) {
        throw new Error("Expected positive finite number as index");
      }
    } else {
      index = parent.children.indexOf(index);
      if (index < 0) {
        throw new Error("Expected child node or index");
      }
    }
    while (++index < parent.children.length) {
      if (is(parent.children[index], index, parent)) {
        return parent.children[index];
      }
    }
    return null;
  }
);

// ../../node_modules/hast-util-to-text/lib/index.js
var searchLineFeeds = /\n/g;
var searchTabOrSpaces = /[\t ]+/g;
var br2 = convertElement("br");
var p = convertElement("p");
var cell = convertElement(["th", "td"]);
var row = convertElement("tr");
var notRendered = convertElement(
  [
    // List from: <https://html.spec.whatwg.org/#hidden-elements>
    "datalist",
    "head",
    "noembed",
    "noframes",
    "noscript",
    // Act as if we support scripting.
    "rp",
    "script",
    "style",
    "template",
    "title",
    // Hidden attribute.
    hidden,
    // From: <https://html.spec.whatwg.org/#flow-content-3>
    closedDialog
  ]
);
var blockOrCaption = convertElement([
  "address",
  // Flow content
  "article",
  // Sections and headings
  "aside",
  // Sections and headings
  "blockquote",
  // Flow content
  "body",
  // Page
  "caption",
  // `table-caption`
  "center",
  // Flow content (legacy)
  "dd",
  // Lists
  "dialog",
  // Flow content
  "dir",
  // Lists (legacy)
  "dl",
  // Lists
  "dt",
  // Lists
  "div",
  // Flow content
  "figure",
  // Flow content
  "figcaption",
  // Flow content
  "footer",
  // Flow content
  "form,",
  // Flow content
  "h1",
  // Sections and headings
  "h2",
  // Sections and headings
  "h3",
  // Sections and headings
  "h4",
  // Sections and headings
  "h5",
  // Sections and headings
  "h6",
  // Sections and headings
  "header",
  // Flow content
  "hgroup",
  // Sections and headings
  "hr",
  // Flow content
  "html",
  // Page
  "legend",
  // Flow content
  "listing",
  // Flow content (legacy)
  "main",
  // Flow content
  "menu",
  // Lists
  "nav",
  // Sections and headings
  "ol",
  // Lists
  "p",
  // Flow content
  "plaintext",
  // Flow content (legacy)
  "pre",
  // Flow content
  "section",
  // Sections and headings
  "ul",
  // Lists
  "xmp"
  // Flow content (legacy)
]);
function toText(tree, options = {}) {
  const children = "children" in tree ? tree.children : [];
  const block3 = blockOrCaption(tree);
  const whitespace2 = inferWhitespace(tree, {
    whitespace: options.whitespace || "normal",
    breakBefore: false,
    breakAfter: false
  });
  const results = [];
  if (tree.type === "text" || tree.type === "comment") {
    results.push(
      ...collectText(tree, {
        whitespace: whitespace2,
        breakBefore: true,
        breakAfter: true
      })
    );
  }
  let index = -1;
  while (++index < children.length) {
    results.push(
      ...innerTextCollection(children[index], tree, {
        whitespace: whitespace2,
        breakBefore: index ? void 0 : block3,
        breakAfter: index < children.length - 1 ? br2(children[index + 1]) : block3
      })
    );
  }
  const result = [];
  let count;
  index = -1;
  while (++index < results.length) {
    const value = results[index];
    if (typeof value === "number") {
      if (count !== void 0 && value > count)
        count = value;
    } else if (value) {
      if (count !== void 0 && count > -1) {
        result.push("\n".repeat(count) || " ");
      }
      count = -1;
      result.push(value);
    }
  }
  return result.join("");
}
function innerTextCollection(node3, parent, info) {
  if (node3.type === "element") {
    return collectElement(node3, parent, info);
  }
  if (node3.type === "text") {
    return info.whitespace === "normal" ? collectText(node3, info) : collectPreText(node3);
  }
  return [];
}
function collectElement(node3, parent, info) {
  const whitespace2 = inferWhitespace(node3, info);
  const children = node3.children || [];
  let index = -1;
  let items = [];
  if (notRendered(node3)) {
    return items;
  }
  let prefix2;
  let suffix;
  if (br2(node3)) {
    suffix = "\n";
  } else if (row(node3) && findAfter(parent, node3, row)) {
    suffix = "\n";
  } else if (p(node3)) {
    prefix2 = 2;
    suffix = 2;
  } else if (blockOrCaption(node3)) {
    prefix2 = 1;
    suffix = 1;
  }
  while (++index < children.length) {
    items = items.concat(
      innerTextCollection(children[index], node3, {
        whitespace: whitespace2,
        breakBefore: index ? void 0 : prefix2,
        breakAfter: index < children.length - 1 ? br2(children[index + 1]) : suffix
      })
    );
  }
  if (cell(node3) && findAfter(parent, node3, cell)) {
    items.push("	");
  }
  if (prefix2)
    items.unshift(prefix2);
  if (suffix)
    items.push(suffix);
  return items;
}
function collectText(node3, info) {
  const value = String(node3.value);
  const lines = [];
  const result = [];
  let start = 0;
  while (start <= value.length) {
    searchLineFeeds.lastIndex = start;
    const match = searchLineFeeds.exec(value);
    const end = match && "index" in match ? match.index : value.length;
    lines.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      trimAndCollapseSpacesAndTabs(
        // […] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        value.slice(start, end).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        start === 0 ? info.breakBefore : true,
        end === value.length ? info.breakAfter : true
      )
    );
    start = end + 1;
  }
  let index = -1;
  let join;
  while (++index < lines.length) {
    if (lines[index].charCodeAt(lines[index].length - 1) === 8203 || index < lines.length - 1 && lines[index + 1].charCodeAt(0) === 8203) {
      result.push(lines[index]);
      join = void 0;
    } else if (lines[index]) {
      if (typeof join === "number")
        result.push(join);
      result.push(lines[index]);
      join = 0;
    } else if (index === 0 || index === lines.length - 1) {
      result.push(0);
    }
  }
  return result;
}
function collectPreText(node3) {
  return [String(node3.value)];
}
function trimAndCollapseSpacesAndTabs(value, breakBefore, breakAfter) {
  const result = [];
  let start = 0;
  let end;
  while (start < value.length) {
    searchTabOrSpaces.lastIndex = start;
    const match = searchTabOrSpaces.exec(value);
    end = match ? match.index : value.length;
    if (!start && !end && match && !breakBefore) {
      result.push("");
    }
    if (start !== end) {
      result.push(value.slice(start, end));
    }
    start = match ? end + match[0].length : end;
  }
  if (start !== end && !breakAfter) {
    result.push("");
  }
  return result.join(" ");
}
function inferWhitespace(node3, info) {
  if (node3.type === "element") {
    const props = node3.properties || {};
    switch (node3.tagName) {
      case "listing":
      case "plaintext":
      case "xmp": {
        return "pre";
      }
      case "nobr": {
        return "nowrap";
      }
      case "pre": {
        return props.wrap ? "pre-wrap" : "pre";
      }
      case "td":
      case "th": {
        return props.noWrap ? "nowrap" : info.whitespace;
      }
      case "textarea": {
        return "pre-wrap";
      }
      default:
    }
  }
  return info.whitespace;
}
function hidden(node3) {
  return Boolean((node3.properties || {}).hidden);
}
function closedDialog(node3) {
  return node3.tagName === "dialog" && !(node3.properties || {}).open;
}

// ../../node_modules/trim-trailing-lines/index.js
function trimTrailingLines(value) {
  const input3 = String(value);
  let end = input3.length;
  while (end > 0) {
    const code4 = input3.codePointAt(end - 1);
    if (code4 !== void 0 && (code4 === 10 || code4 === 13)) {
      end--;
    } else {
      break;
    }
  }
  return input3.slice(0, end);
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/code.js
var prefix = "language-";
var pre = convertElement("pre");
var isCode = convertElement("code");
function code3(h2, node3) {
  const children = node3.children;
  let index = -1;
  let classList;
  let lang;
  if (pre(node3)) {
    while (++index < children.length) {
      const child = children[index];
      if (isCode(child) && child.properties && child.properties.className && Array.isArray(child.properties.className)) {
        classList = child.properties.className;
        break;
      }
    }
  }
  if (classList) {
    index = -1;
    while (++index < classList.length) {
      if (String(classList[index]).slice(0, prefix.length) === prefix) {
        lang = String(classList[index]).slice(prefix.length);
        break;
      }
    }
  }
  return h2(
    node3,
    "code",
    { lang: lang || null, meta: null },
    trimTrailingLines(wrapText(h2, toText(node3)))
  );
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/comment.js
function comment2(h2, node3) {
  return h2(node3, "html", "<!--" + wrapText(h2, node3.value) + "-->");
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/del.js
function del(h2, node3) {
  return h2(node3, "delete", all4(h2, node3));
}

// ../../node_modules/hast-util-to-mdast/lib/util/list-items-spread.js
function listItemsSpread(children) {
  let index = -1;
  if (children.length > 1) {
    while (++index < children.length) {
      if (children[index].spread) {
        return true;
      }
    }
  }
  return false;
}

// ../../node_modules/hast-util-to-mdast/lib/util/wrap-list-items.js
function wrapListItems(h2, node3) {
  const children = all4(h2, node3);
  let index = -1;
  while (++index < children.length) {
    const child = children[index];
    if (child.type !== "listItem") {
      children[index] = {
        type: "listItem",
        spread: false,
        checked: null,
        // @ts-expect-error Assume `children[index]` is block content.
        children: [child]
      };
    }
  }
  return children;
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/dl.js
var div = convertElement("div");
var dt = convertElement("dt");
var dd = convertElement("dd");
function dl(h2, node3) {
  const children = node3.children;
  let index = -1;
  let clean2 = [];
  const groups = [];
  let group = { titles: [], definitions: [] };
  let child;
  let result;
  while (++index < children.length) {
    child = children[index];
    clean2 = clean2.concat(div(child) ? child.children : child);
  }
  index = -1;
  while (++index < clean2.length) {
    child = clean2[index];
    if (dt(child)) {
      if (dd(clean2[index - 1])) {
        groups.push(group);
        group = { titles: [], definitions: [] };
      }
      group.titles.push(child);
    } else {
      group.definitions.push(child);
    }
  }
  groups.push(group);
  index = -1;
  const content3 = [];
  while (++index < groups.length) {
    result = [
      ...handle(h2, groups[index].titles),
      ...handle(h2, groups[index].definitions)
    ];
    if (result.length > 0) {
      content3.push({
        type: "listItem",
        spread: result.length > 1,
        checked: null,
        children: result
      });
    }
  }
  if (content3.length > 0) {
    return h2(
      node3,
      "list",
      { ordered: false, start: null, spread: listItemsSpread(content3) },
      content3
    );
  }
}
function handle(h2, children) {
  const nodes = wrapListItems(h2, { type: "element", tagName: "x", children });
  if (nodes.length === 0) {
    return [];
  }
  if (nodes.length === 1) {
    return nodes[0].children;
  }
  return [
    {
      type: "list",
      ordered: false,
      start: null,
      spread: listItemsSpread(nodes),
      children: nodes
    }
  ];
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/em.js
function em(h2, node3) {
  return h2(node3, "emphasis", all4(h2, node3));
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/heading.js
function heading3(h2, node3) {
  const depth = Number(node3.tagName.charAt(1)) || 1;
  const wrap3 = h2.wrapText;
  h2.wrapText = false;
  const result = h2(node3, "heading", { depth }, all4(h2, node3));
  h2.wrapText = wrap3;
  return result;
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/hr.js
function hr(h2, node3) {
  return h2(node3, "thematicBreak");
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/iframe.js
function iframe2(h2, node3) {
  const props = node3.properties;
  const src = String(props.src || "");
  const title = String(props.title || "");
  if (src && title) {
    return {
      type: "link",
      title: null,
      url: resolve(h2, src),
      children: [{ type: "text", value: wrapText(h2, title) }]
    };
  }
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/img.js
function img(h2, node3) {
  const props = node3.properties;
  return h2(node3, "image", {
    url: resolve(h2, String(props.src || "") || null),
    title: props.title || null,
    alt: props.alt || ""
  });
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/inline-code.js
function inlineCode2(h2, node3) {
  return h2(node3, "inlineCode", wrapText(h2, toText(node3)));
}

// ../../node_modules/hast-util-to-mdast/lib/util/find-selected-options.js
var option = convertElement("option");
function findSelectedOptions(h2, node3, properties) {
  const props = properties || node3.properties;
  let options = findOptions(node3);
  const size = Math.min(Number.parseInt(String(props.size), 10), 0) || (props.multiple ? 4 : 1);
  let index = -1;
  const selectedOptions = [];
  const values = [];
  while (++index < options.length) {
    if (hasProperty(options[index], "selected")) {
      selectedOptions.push(options[index]);
    }
  }
  const list4 = selectedOptions.length > 0 ? selectedOptions : options;
  options = list4.slice(0, size);
  index = -1;
  while (++index < options.length) {
    const option3 = options[index];
    const content3 = wrapText(h2, toText(option3));
    const props2 = option3.properties;
    const label = content3 || String(props2.label || "");
    const value = String(props2.value || "") || content3;
    values.push([value, label === value ? null : label]);
  }
  return values;
}
function findOptions(node3) {
  const children = node3.children;
  let index = -1;
  let results = [];
  let child;
  while (++index < children.length) {
    child = children[index];
    if (Array.isArray(child.children)) {
      results = results.concat(findOptions(child));
    }
    if (option(child) && !hasProperty(child, "disabled")) {
      results.push(child);
    }
  }
  return results;
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/input.js
var datalist = convertElement("datalist");
function input(h2, node3) {
  const props = node3.properties;
  let value = String(props.value || props.placeholder || "");
  const results = [];
  const texts = [];
  let values = [];
  let index = -1;
  let list4;
  if (props.disabled || props.type === "hidden" || props.type === "file") {
    return;
  }
  if (props.type === "checkbox" || props.type === "radio") {
    return h2(
      node3,
      "text",
      wrapText(h2, h2[props.checked ? "checked" : "unchecked"])
    );
  }
  if (props.type === "image") {
    return props.alt || value ? h2(node3, "image", {
      url: resolve(h2, String(props.src || "") || null),
      title: wrapText(h2, String(props.title || "")) || null,
      alt: wrapText(h2, String(props.alt || value))
    }) : [];
  }
  if (value) {
    values = [[value, null]];
  } else if (
    // `list` is not supported on these types:
    props.type !== "password" && props.type !== "file" && props.type !== "submit" && props.type !== "reset" && props.type !== "button" && props.list
  ) {
    list4 = String(props.list).toUpperCase();
    if (own8.call(h2.nodeById, list4) && datalist(h2.nodeById[list4])) {
      values = findSelectedOptions(h2, h2.nodeById[list4], props);
    }
  }
  if (values.length === 0) {
    return;
  }
  if (props.type === "password") {
    values[0] = ["\u2022".repeat(values[0][0].length), null];
  }
  if (props.type === "url" || props.type === "email") {
    while (++index < values.length) {
      value = resolve(h2, values[index][0]);
      results.push(
        h2(
          node3,
          "link",
          {
            title: null,
            url: wrapText(h2, props.type === "email" ? "mailto:" + value : value)
          },
          [{ type: "text", value: wrapText(h2, values[index][1] || value) }]
        )
      );
      if (index !== values.length - 1) {
        results.push({ type: "text", value: ", " });
      }
    }
    return results;
  }
  while (++index < values.length) {
    texts.push(
      values[index][1] ? values[index][1] + " (" + values[index][0] + ")" : values[index][0]
    );
  }
  return h2(node3, "text", wrapText(h2, texts.join(", ")));
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/li.js
var p2 = convertElement("p");
var input2 = convertElement("input");
function li(h2, node3) {
  const head2 = node3.children[0];
  let checked = null;
  let checkbox;
  let clone;
  if (p2(head2)) {
    checkbox = head2.children[0];
    if (input2(checkbox) && checkbox.properties && (checkbox.properties.type === "checkbox" || checkbox.properties.type === "radio")) {
      checked = Boolean(checkbox.properties.checked);
      clone = {
        ...node3,
        children: [
          { ...head2, children: head2.children.slice(1) },
          ...node3.children.slice(1)
        ]
      };
    }
  }
  const content3 = wrapChildren(h2, clone || node3);
  return h2(node3, "listItem", { spread: content3.length > 1, checked }, content3);
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/list.js
var ol = convertElement("ol");
function list3(h2, node3) {
  const ordered = ol(node3);
  const children = wrapListItems(h2, node3);
  let start = null;
  if (ordered) {
    start = hasProperty(node3, "start") ? (
      // @ts-expect-error: `props` exist.
      Number.parseInt(String(node3.properties.start), 10)
    ) : 1;
  }
  return h2(
    node3,
    "list",
    { ordered, start, spread: listItemsSpread(children) },
    children
  );
}

// ../../node_modules/mdast-util-to-string/lib/index.js
var emptyOptions = {};
function toString(value, options) {
  const settings = options || emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one4(value, includeImageAlt, includeHtml);
}
function one4(value, includeImageAlt, includeHtml) {
  if (node2(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all5(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all5(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all5(values, includeImageAlt, includeHtml) {
  const result = [];
  let index = -1;
  while (++index < values.length) {
    result[index] = one4(values[index], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node2(value) {
  return Boolean(value && typeof value === "object");
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/media.js
var source = convertElement("source");
var video = convertElement("video");
function media(h2, node3) {
  let nodes = all4(h2, node3);
  const properties = node3.properties;
  const poster = video(node3) && String(properties.poster || "");
  let src = String(properties.src || "");
  let index = -1;
  let linkInFallbackContent = false;
  let child;
  visit({ type: "root", children: nodes }, "link", findLink);
  if (linkInFallbackContent || wrapNeeded(nodes)) {
    return nodes;
  }
  while (!src && ++index < node3.children.length) {
    child = node3.children[index];
    if (source(child)) {
      src = String(child.properties.src || "");
    }
  }
  if (poster) {
    nodes = [
      {
        type: "image",
        title: null,
        url: resolve(h2, poster),
        alt: toString({ children: nodes })
      }
    ];
  }
  return {
    type: "link",
    // @ts-expect-error Types are broken.
    title: node3.properties.title || null,
    url: resolve(h2, src),
    // @ts-expect-error Assume phrasing content.
    children: nodes
  };
  function findLink() {
    linkInFallbackContent = true;
    return EXIT;
  }
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/p.js
function p3(h2, node3) {
  const nodes = all4(h2, node3);
  if (nodes.length > 0) {
    return h2(node3, "paragraph", nodes);
  }
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/q.js
function q(h2, node3) {
  const expected = h2.quotes[h2.qNesting % h2.quotes.length];
  h2.qNesting++;
  const contents = all4(h2, node3);
  h2.qNesting--;
  contents.unshift({ type: "text", value: expected.charAt(0) });
  contents.push({
    type: "text",
    value: expected.length > 1 ? expected.charAt(1) : expected
  });
  return contents;
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/root.js
function root2(h2, node3) {
  let children = all4(h2, node3);
  if (h2.document || wrapNeeded(children)) {
    children = wrap2(children);
  }
  return h2(node3, "root", children);
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/select.js
function select2(h2, node3) {
  const values = findSelectedOptions(h2, node3);
  let index = -1;
  const results = [];
  let value;
  while (++index < values.length) {
    value = values[index];
    results.push(value[1] ? value[1] + " (" + value[0] + ")" : value[0]);
  }
  if (results.length > 0) {
    return h2(node3, "text", wrapText(h2, results.join(", ")));
  }
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/strong.js
function strong2(h2, node3) {
  return h2(node3, "strong", all4(h2, node3));
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/table-cell.js
function tableCell2(h2, node3) {
  const wrap3 = h2.wrapText;
  h2.wrapText = false;
  const result = h2(node3, "tableCell", all4(h2, node3));
  if (node3.properties && (node3.properties.rowSpan || node3.properties.colSpan)) {
    const data = result.data || (result.data = {});
    if (node3.properties.rowSpan)
      data.rowSpan = node3.properties.rowSpan;
    if (node3.properties.colSpan)
      data.colSpan = node3.properties.colSpan;
  }
  h2.wrapText = wrap3;
  return result;
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/table-row.js
function tableRow2(h2, node3) {
  return h2(node3, "tableRow", all4(h2, node3));
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/table.js
var thead = convertElement("thead");
var tr = convertElement("tr");
var cell2 = convertElement(["th", "td"]);
function table3(h2, node3) {
  if (h2.inTable) {
    return h2(node3, "text", wrapText(h2, toText(node3)));
  }
  h2.inTable = true;
  const { headless, align } = inspect(node3);
  const rows = toRows(all4(h2, node3), headless);
  let columns = 1;
  let rowIndex = -1;
  while (++rowIndex < rows.length) {
    const cells2 = rows[rowIndex].children;
    let cellIndex = -1;
    while (++cellIndex < cells2.length) {
      const cell3 = cells2[cellIndex];
      if (cell3.data) {
        const colSpan = Number.parseInt(String(cell3.data.colSpan), 10) || 1;
        const rowSpan = Number.parseInt(String(cell3.data.rowSpan), 10) || 1;
        if (colSpan > 1 || rowSpan > 1) {
          let otherRowIndex = rowIndex - 1;
          while (++otherRowIndex < rowIndex + rowSpan) {
            let colIndex = cellIndex - 1;
            while (++colIndex < cellIndex + colSpan) {
              if (!rows[otherRowIndex]) {
                break;
              }
              const newCells = [];
              if (otherRowIndex !== rowIndex || colIndex !== cellIndex) {
                newCells.push({ type: "tableCell", children: [] });
              }
              rows[otherRowIndex].children.splice(colIndex, 0, ...newCells);
            }
          }
        }
        if ("colSpan" in cell3.data)
          delete cell3.data.colSpan;
        if ("rowSpan" in cell3.data)
          delete cell3.data.rowSpan;
        if (Object.keys(cell3.data).length === 0)
          delete cell3.data;
      }
    }
    if (cells2.length > columns)
      columns = cells2.length;
  }
  rowIndex = -1;
  while (++rowIndex < rows.length) {
    const cells2 = rows[rowIndex].children;
    let cellIndex = cells2.length - 1;
    while (++cellIndex < columns) {
      cells2.push({ type: "tableCell", children: [] });
    }
  }
  let alignIndex = align.length - 1;
  while (++alignIndex < columns) {
    align.push(null);
  }
  h2.inTable = false;
  return h2(node3, "table", { align }, rows);
}
function inspect(node3) {
  let headless = true;
  let rowIndex = 0;
  let cellIndex = 0;
  const align = [null];
  visit(node3, "element", (child) => {
    if (child.tagName === "table" && node3 !== child) {
      return SKIP;
    }
    if (cell2(child) && child.properties) {
      if (!align[cellIndex]) {
        align[cellIndex] = String(child.properties.align || "") || null;
      }
      if (headless && rowIndex < 2 && child.tagName === "th") {
        headless = false;
      }
      cellIndex++;
    } else if (thead(child)) {
      headless = false;
    } else if (tr(child)) {
      rowIndex++;
      cellIndex = 0;
    }
  });
  return { align, headless };
}
function toRows(children, headless) {
  let index = -1;
  const nodes = [];
  let queue;
  if (headless) {
    nodes.push({ type: "tableRow", children: [] });
  }
  while (++index < children.length) {
    const node3 = children[index];
    if (node3.type === "tableRow") {
      if (queue) {
        node3.children.unshift(...queue);
        queue = void 0;
      }
      nodes.push(node3);
    } else {
      if (!queue)
        queue = [];
      queue.push(node3);
    }
  }
  if (queue) {
    nodes[nodes.length - 1].children.push(...queue);
  }
  index = -1;
  while (++index < nodes.length) {
    nodes[index].children = toCells(nodes[index].children);
  }
  return nodes;
}
function toCells(children) {
  const nodes = [];
  let index = -1;
  let node3;
  let queue;
  while (++index < children.length) {
    node3 = children[index];
    if (node3.type === "tableCell") {
      if (queue) {
        node3.children.unshift(...queue);
        queue = void 0;
      }
      nodes.push(node3);
    } else {
      if (!queue)
        queue = [];
      queue.push(node3);
    }
  }
  if (queue) {
    node3 = nodes[nodes.length - 1];
    if (!node3) {
      node3 = { type: "tableCell", children: [] };
      nodes.push(node3);
    }
    node3.children.push(...queue);
  }
  return nodes;
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/text.js
function text2(h2, node3) {
  return h2(node3, "text", wrapText(h2, node3.value));
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/textarea.js
function textarea(h2, node3) {
  return h2(node3, "text", wrapText(h2, toText(node3)));
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/wbr.js
function wbr(h2, node3) {
  return h2(node3, "text", "\u200B");
}

// ../../node_modules/hast-util-to-mdast/lib/handlers/index.js
var handlers2 = {
  root: root2,
  text: text2,
  comment: comment2,
  doctype: ignore2,
  applet: ignore2,
  area: ignore2,
  basefont: ignore2,
  bgsound: ignore2,
  caption: ignore2,
  col: ignore2,
  colgroup: ignore2,
  command: ignore2,
  content: ignore2,
  datalist: ignore2,
  dialog: ignore2,
  element: ignore2,
  embed: ignore2,
  frame: ignore2,
  frameset: ignore2,
  isindex: ignore2,
  keygen: ignore2,
  link: ignore2,
  math: ignore2,
  menu: ignore2,
  menuitem: ignore2,
  meta: ignore2,
  nextid: ignore2,
  noembed: ignore2,
  noframes: ignore2,
  optgroup: ignore2,
  option: ignore2,
  param: ignore2,
  script: ignore2,
  shadow: ignore2,
  source: ignore2,
  spacer: ignore2,
  style: ignore2,
  svg: ignore2,
  template: ignore2,
  title: ignore2,
  track: ignore2,
  abbr: all4,
  acronym: all4,
  bdi: all4,
  bdo: all4,
  big: all4,
  blink: all4,
  button: all4,
  canvas: all4,
  cite: all4,
  data: all4,
  details: all4,
  dfn: all4,
  font: all4,
  ins: all4,
  label: all4,
  map: all4,
  marquee: all4,
  meter: all4,
  nobr: all4,
  noscript: all4,
  object: all4,
  output: all4,
  progress: all4,
  rb: all4,
  rbc: all4,
  rp: all4,
  rt: all4,
  rtc: all4,
  ruby: all4,
  slot: all4,
  small: all4,
  span: all4,
  sup: all4,
  sub: all4,
  tbody: all4,
  tfoot: all4,
  thead: all4,
  time: all4,
  address: wrapChildren,
  article: wrapChildren,
  aside: wrapChildren,
  body: wrapChildren,
  center: wrapChildren,
  div: wrapChildren,
  fieldset: wrapChildren,
  figcaption: wrapChildren,
  figure: wrapChildren,
  form: wrapChildren,
  footer: wrapChildren,
  header: wrapChildren,
  hgroup: wrapChildren,
  html: wrapChildren,
  legend: wrapChildren,
  main: wrapChildren,
  multicol: wrapChildren,
  nav: wrapChildren,
  picture: wrapChildren,
  section: wrapChildren,
  a,
  audio: media,
  b: strong2,
  base: base2,
  blockquote: blockquote2,
  br,
  code: inlineCode2,
  dir: list3,
  dl,
  dt: li,
  dd: li,
  del,
  em,
  h1: heading3,
  h2: heading3,
  h3: heading3,
  h4: heading3,
  h5: heading3,
  h6: heading3,
  hr,
  i: em,
  iframe: iframe2,
  img,
  image: img,
  input,
  kbd: inlineCode2,
  li,
  listing: code3,
  mark: em,
  ol: list3,
  p: p3,
  plaintext: code3,
  pre: code3,
  q,
  s: del,
  samp: inlineCode2,
  select: select2,
  strike: del,
  strong: strong2,
  summary: p3,
  table: table3,
  td: tableCell2,
  textarea,
  th: tableCell2,
  tr: tableRow2,
  tt: inlineCode2,
  u: em,
  ul: list3,
  var: inlineCode2,
  video: media,
  wbr,
  xmp: code3
};
function ignore2() {
}

// ../../node_modules/hast-util-to-mdast/lib/index.js
var block2 = convert(["heading", "paragraph", "root"]);
function toMdast(tree, options = {}) {
  const byId = {};
  let mdast2;
  const h2 = Object.assign(
    /**
     * @type {HWithProps & HWithoutProps}
     */
    /**
     * @param {Node} node
     * @param {string} type
     * @param {Properties|string|Array<Node>} [props]
     * @param {string|Array<Node>} [children]
     */
    (node3, type, props, children) => {
      let properties;
      if (typeof props === "string" || Array.isArray(props)) {
        children = props;
        properties = {};
      } else {
        properties = props;
      }
      const result2 = { type, ...properties };
      if (typeof children === "string") {
        result2.value = children;
      } else if (children) {
        result2.children = children;
      }
      if (node3.position) {
        result2.position = node3.position;
      }
      return result2;
    },
    {
      nodeById: byId,
      baseFound: false,
      inTable: false,
      wrapText: true,
      /** @type {string|null} */
      frozenBaseUrl: null,
      qNesting: 0,
      handlers: options.handlers ? { ...handlers2, ...options.handlers } : handlers2,
      document: options.document,
      checked: options.checked || "[x]",
      unchecked: options.unchecked || "[ ]",
      quotes: options.quotes || ['"']
    }
  );
  visit(tree, "element", (node3) => {
    const id = node3.properties && "id" in node3.properties && String(node3.properties.id).toUpperCase();
    if (id && !own8.call(byId, id)) {
      byId[id] = node3;
    }
  });
  rehypeMinifyWhitespace({ newlines: options.newlines === true })(tree);
  const result = one3(h2, tree, void 0);
  if (!result) {
    mdast2 = { type: "root", children: [] };
  } else if (Array.isArray(result)) {
    mdast2 = { type: "root", children: result };
  } else {
    mdast2 = result;
  }
  visit(mdast2, "text", ontext);
  return mdast2;
  function ontext(node3, index, parent) {
    if (index === null || !parent) {
      return;
    }
    const previous = parent.children[index - 1];
    if (previous && previous.type === node3.type) {
      previous.value += node3.value;
      parent.children.splice(index, 1);
      if (previous.position && node3.position) {
        previous.position.end = node3.position.end;
      }
      return index - 1;
    }
    node3.value = node3.value.replace(/[\t ]*(\r?\n|\r)[\t ]*/, "$1");
    if (parent && block2(parent)) {
      if (!index) {
        node3.value = node3.value.replace(/^[\t ]+/, "");
      }
      if (index === parent.children.length - 1) {
        node3.value = node3.value.replace(/[\t ]+$/, "");
      }
    }
    if (!node3.value) {
      parent.children.splice(index, 1);
      return index;
    }
  }
}

// ../../node_modules/rehype-remark/lib/index.js
var rehypeRemark = (
  /**
   * @type {(import('unified').Plugin<[Processor, Options?], HastRoot> & import('unified').Plugin<[Options?]|void[], HastRoot, MdastRoot>)}
   */
  /**
   * @param {Processor|Options} [destination]
   * @param {Options} [options]
   */
  function(destination, options) {
    let settings;
    let processor;
    if (typeof destination === "function") {
      processor = destination;
      settings = options || {};
    } else {
      settings = destination || {};
    }
    if (settings.document === void 0 || settings.document === null) {
      settings = Object.assign({}, settings, { document: true });
    }
    return processor ? bridge(processor, settings) : mutate(settings);
  }
);
var lib_default = rehypeRemark;
function bridge(destination, options) {
  return (node3, file, next) => {
    destination.run(toMdast(node3, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options = {}) {
  return (node3) => {
    const result = (
      /** @type {MdastRoot} */
      toMdast(node3, options)
    );
    return result;
  };
}

// ../../node_modules/myst-to-html/dist/transforms.js
var defaultOptions = {
  addAdmonitionHeaders: true,
  addContainerCaptionNumbers: true,
  disableHeadingEnumeration: false,
  disableContainerEnumeration: false,
  disableEquationEnumeration: false
};
function addAdmonitionHeaders(tree) {
  visit(tree, "admonition", (node3) => {
    var _a;
    if (!node3.kind || node3.kind === AdmonitionKind.admonition)
      return;
    node3.children = [
      {
        type: "admonitionTitle",
        children: [{ type: "text", value: admonitionKindToTitle(node3.kind) }]
      },
      ...(_a = node3.children) !== null && _a !== void 0 ? _a : []
    ];
  });
}
function addContainerCaptionNumbers(tree, state) {
  selectAll("container", tree).filter((container2) => container2.enumerator !== false).forEach((container2) => {
    var _a, _b;
    const enumerator = (_a = state.getTarget(container2.identifier)) === null || _a === void 0 ? void 0 : _a.node.enumerator;
    const para = select("caption > paragraph", container2);
    if (enumerator && para) {
      para.children = [
        { type: "captionNumber", kind: container2.kind, value: enumerator },
        ...(_b = para === null || para === void 0 ? void 0 : para.children) !== null && _b !== void 0 ? _b : []
      ];
    }
  });
}
function propagateTargets(tree) {
  visit(tree, "mystTarget", (node3, index) => {
    const nextNode = findAfter(tree, index);
    const normalized = normalizeLabel(node3.label);
    if (nextNode && normalized) {
      nextNode.identifier = normalized.identifier;
      nextNode.label = normalized.label;
    }
  });
  remove(tree, "mystTarget");
}
function ensureCaptionIsParagraph(tree) {
  visit(tree, "caption", (node3) => {
    if (node3.children && node3.children[0].type !== "paragraph") {
      node3.children = [{ type: "paragraph", children: node3.children }];
    }
  });
}
var transform = (state, o) => (tree) => {
  const opts = {
    ...defaultOptions,
    ...o
  };
  ensureCaptionIsParagraph(tree);
  propagateTargets(tree);
  enumerateTargets(state, tree, opts);
  resolveReferences(state, tree);
  liftChildren(tree, "mystDirective");
  liftChildren(tree, "mystRole");
  if (opts.addAdmonitionHeaders)
    addAdmonitionHeaders(tree);
  if (opts.addContainerCaptionNumbers)
    addContainerCaptionNumbers(tree, state);
};

// ../../node_modules/html-void-elements/index.js
var htmlVoidElements = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "nextid",
  "param",
  "source",
  "track",
  "wbr"
];

// ../../node_modules/stringify-entities/lib/core.js
function core2(value, options) {
  value = value.replace(
    options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g,
    basic2
  );
  if (options.subset || options.escapeOnly) {
    return value;
  }
  return value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate).replace(
    // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
    /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
    basic2
  );
  function surrogate(pair, index, all7) {
    return options.format(
      (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
      all7.charCodeAt(index + 2),
      options
    );
  }
  function basic2(character, index, all7) {
    return options.format(
      character.charCodeAt(0),
      all7.charCodeAt(index + 1),
      options
    );
  }
}
function charactersToExpression(subset) {
  const groups = [];
  let index = -1;
  while (++index < subset.length) {
    groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  }
  return new RegExp("(?:" + groups.join("|") + ")", "g");
}

// ../../node_modules/stringify-entities/lib/util/to-hexadecimal.js
function toHexadecimal(code4, next, omit) {
  const value = "&#x" + code4.toString(16).toUpperCase();
  return omit && next && !/[\dA-Fa-f]/.test(String.fromCharCode(next)) ? value : value + ";";
}

// ../../node_modules/stringify-entities/lib/util/to-decimal.js
function toDecimal(code4, next, omit) {
  const value = "&#" + String(code4);
  return omit && next && !/\d/.test(String.fromCharCode(next)) ? value : value + ";";
}

// ../../node_modules/character-entities-legacy/index.js
var characterEntitiesLegacy = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
];

// ../../node_modules/character-entities-html4/index.js
var characterEntitiesHtml4 = {
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  fnof: "\u0192",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  bull: "\u2022",
  hellip: "\u2026",
  prime: "\u2032",
  Prime: "\u2033",
  oline: "\u203E",
  frasl: "\u2044",
  weierp: "\u2118",
  image: "\u2111",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  circ: "\u02C6",
  tilde: "\u02DC",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  permil: "\u2030",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  euro: "\u20AC"
};

// ../../node_modules/stringify-entities/lib/constant/dangerous.js
var dangerous = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
];

// ../../node_modules/stringify-entities/lib/util/to-named.js
var own9 = {}.hasOwnProperty;
var characters = {};
var key;
for (key in characterEntitiesHtml4) {
  if (own9.call(characterEntitiesHtml4, key)) {
    characters[characterEntitiesHtml4[key]] = key;
  }
}
function toNamed(code4, next, omit, attribute) {
  const character = String.fromCharCode(code4);
  if (own9.call(characters, character)) {
    const name = characters[character];
    const value = "&" + name;
    if (omit && characterEntitiesLegacy.includes(name) && !dangerous.includes(name) && (!attribute || next && next !== 61 && /[^\da-z]/i.test(String.fromCharCode(next)))) {
      return value;
    }
    return value + ";";
  }
  return "";
}

// ../../node_modules/stringify-entities/lib/util/format-smart.js
function formatSmart(code4, next, options) {
  let numeric = toHexadecimal(code4, next, options.omitOptionalSemicolons);
  let named;
  if (options.useNamedReferences || options.useShortestReferences) {
    named = toNamed(
      code4,
      next,
      options.omitOptionalSemicolons,
      options.attribute
    );
  }
  if ((options.useShortestReferences || !named) && options.useShortestReferences) {
    const decimal = toDecimal(code4, next, options.omitOptionalSemicolons);
    if (decimal.length < numeric.length) {
      numeric = decimal;
    }
  }
  return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
}

// ../../node_modules/stringify-entities/lib/index.js
function stringifyEntities(value, options) {
  return core2(value, Object.assign({ format: formatSmart }, options));
}

// ../../node_modules/hast-util-to-html/lib/handle/comment.js
function comment3(node3, _1, _2, state) {
  return state.settings.bogusComments ? "<?" + stringifyEntities(
    node3.value,
    Object.assign({}, state.settings.characterReferences, { subset: [">"] })
  ) + ">" : "<!--" + node3.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, encode) + "-->";
  function encode($0) {
    return stringifyEntities(
      $0,
      Object.assign({}, state.settings.characterReferences, {
        subset: ["<", ">"]
      })
    );
  }
}

// ../../node_modules/hast-util-to-html/lib/handle/doctype.js
function doctype(_1, _2, _3, state) {
  return "<!" + (state.settings.upperDoctype ? "DOCTYPE" : "doctype") + (state.settings.tightDoctype ? "" : " ") + "html>";
}

// ../../node_modules/ccount/index.js
function ccount(value, character) {
  const source2 = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index = source2.indexOf(character);
  while (index !== -1) {
    count++;
    index = source2.indexOf(character, index + character.length);
  }
  return count;
}

// ../../node_modules/hast-util-to-html/lib/omission/util/siblings.js
var siblingAfter = siblings(1);
var siblingBefore = siblings(-1);
function siblings(increment2) {
  return sibling;
  function sibling(parent, index, includeWhitespace) {
    const siblings2 = parent ? parent.children : [];
    let offset = (index || 0) + increment2;
    let next = siblings2 && siblings2[offset];
    if (!includeWhitespace) {
      while (next && whitespace(next)) {
        offset += increment2;
        next = siblings2[offset];
      }
    }
    return next;
  }
}

// ../../node_modules/hast-util-to-html/lib/omission/omission.js
var own10 = {}.hasOwnProperty;
function omission(handlers3) {
  return omit;
  function omit(node3, index, parent) {
    return own10.call(handlers3, node3.tagName) && handlers3[node3.tagName](node3, index, parent);
  }
}

// ../../node_modules/hast-util-to-html/lib/omission/closing.js
var closing = omission({
  html: html4,
  head: headOrColgroupOrCaption,
  body,
  p: p4,
  li: li2,
  dt: dt2,
  dd: dd2,
  rt: rubyElement,
  rp: rubyElement,
  optgroup,
  option: option2,
  menuitem,
  colgroup: headOrColgroupOrCaption,
  caption: headOrColgroupOrCaption,
  thead: thead2,
  tbody,
  tfoot,
  tr: tr2,
  td: cells,
  th: cells
});
function headOrColgroupOrCaption(_, index, parent) {
  const next = siblingAfter(parent, index, true);
  return !next || next.type !== "comment" && !(next.type === "text" && whitespace(next.value.charAt(0)));
}
function html4(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type !== "comment";
}
function body(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type !== "comment";
}
function p4(_, index, parent) {
  const next = siblingAfter(parent, index);
  return next ? next.type === "element" && (next.tagName === "address" || next.tagName === "article" || next.tagName === "aside" || next.tagName === "blockquote" || next.tagName === "details" || next.tagName === "div" || next.tagName === "dl" || next.tagName === "fieldset" || next.tagName === "figcaption" || next.tagName === "figure" || next.tagName === "footer" || next.tagName === "form" || next.tagName === "h1" || next.tagName === "h2" || next.tagName === "h3" || next.tagName === "h4" || next.tagName === "h5" || next.tagName === "h6" || next.tagName === "header" || next.tagName === "hgroup" || next.tagName === "hr" || next.tagName === "main" || next.tagName === "menu" || next.tagName === "nav" || next.tagName === "ol" || next.tagName === "p" || next.tagName === "pre" || next.tagName === "section" || next.tagName === "table" || next.tagName === "ul") : !parent || // Confusing parent.
  !(parent.type === "element" && (parent.tagName === "a" || parent.tagName === "audio" || parent.tagName === "del" || parent.tagName === "ins" || parent.tagName === "map" || parent.tagName === "noscript" || parent.tagName === "video"));
}
function li2(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && next.tagName === "li";
}
function dt2(_, index, parent) {
  const next = siblingAfter(parent, index);
  return next && next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
}
function dd2(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
}
function rubyElement(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "rp" || next.tagName === "rt");
}
function optgroup(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && next.tagName === "optgroup";
}
function option2(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "option" || next.tagName === "optgroup");
}
function menuitem(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "menuitem" || next.tagName === "hr" || next.tagName === "menu");
}
function thead2(_, index, parent) {
  const next = siblingAfter(parent, index);
  return next && next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
}
function tbody(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
}
function tfoot(_, index, parent) {
  return !siblingAfter(parent, index);
}
function tr2(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && next.tagName === "tr";
}
function cells(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "td" || next.tagName === "th");
}

// ../../node_modules/hast-util-to-html/lib/omission/opening.js
var opening = omission({
  html: html5,
  head,
  body: body2,
  colgroup,
  tbody: tbody2
});
function html5(node3) {
  const head2 = siblingAfter(node3, -1);
  return !head2 || head2.type !== "comment";
}
function head(node3) {
  const children = node3.children;
  const seen = [];
  let index = -1;
  while (++index < children.length) {
    const child = children[index];
    if (child.type === "element" && (child.tagName === "title" || child.tagName === "base")) {
      if (seen.includes(child.tagName))
        return false;
      seen.push(child.tagName);
    }
  }
  return children.length > 0;
}
function body2(node3) {
  const head2 = siblingAfter(node3, -1, true);
  return !head2 || head2.type !== "comment" && !(head2.type === "text" && whitespace(head2.value.charAt(0))) && !(head2.type === "element" && (head2.tagName === "meta" || head2.tagName === "link" || head2.tagName === "script" || head2.tagName === "style" || head2.tagName === "template"));
}
function colgroup(node3, index, parent) {
  const previous = siblingBefore(parent, index);
  const head2 = siblingAfter(node3, -1, true);
  if (parent && previous && previous.type === "element" && previous.tagName === "colgroup" && closing(previous, parent.children.indexOf(previous), parent)) {
    return false;
  }
  return head2 && head2.type === "element" && head2.tagName === "col";
}
function tbody2(node3, index, parent) {
  const previous = siblingBefore(parent, index);
  const head2 = siblingAfter(node3, -1);
  if (parent && previous && previous.type === "element" && (previous.tagName === "thead" || previous.tagName === "tbody") && closing(previous, parent.children.indexOf(previous), parent)) {
    return false;
  }
  return head2 && head2.type === "element" && head2.tagName === "tr";
}

// ../../node_modules/hast-util-to-html/lib/handle/element.js
var constants = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
    [`\0	
\f\r "&'/<=>`.split(""), "\0	\n\f\r \"&'/<=>`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
    ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function element3(node3, index, parent, state) {
  const schema = state.schema;
  const omit = schema.space === "svg" ? false : state.settings.omitOptionalTags;
  let selfClosing = schema.space === "svg" ? state.settings.closeEmptyElements : state.settings.voids.includes(node3.tagName.toLowerCase());
  const parts = [];
  let last;
  if (schema.space === "html" && node3.tagName === "svg") {
    state.schema = svg2;
  }
  const attrs = serializeAttributes(state, node3.properties);
  const content3 = state.all(
    schema.space === "html" && node3.tagName === "template" ? node3.content : node3
  );
  state.schema = schema;
  if (content3)
    selfClosing = false;
  if (attrs || !omit || !opening(node3, index, parent)) {
    parts.push("<", node3.tagName, attrs ? " " + attrs : "");
    if (selfClosing && (schema.space === "svg" || state.settings.closeSelfClosing)) {
      last = attrs.charAt(attrs.length - 1);
      if (!state.settings.tightSelfClosing || last === "/" || last && last !== '"' && last !== "'") {
        parts.push(" ");
      }
      parts.push("/");
    }
    parts.push(">");
  }
  parts.push(content3);
  if (!selfClosing && (!omit || !closing(node3, index, parent))) {
    parts.push("</" + node3.tagName + ">");
  }
  return parts.join("");
}
function serializeAttributes(state, props) {
  const values = [];
  let index = -1;
  let key2;
  if (props) {
    for (key2 in props) {
      if (props[key2] !== void 0 && props[key2] !== null) {
        const value = serializeAttribute(state, key2, props[key2]);
        if (value)
          values.push(value);
      }
    }
  }
  while (++index < values.length) {
    const last = state.settings.tightAttributes ? values[index].charAt(values[index].length - 1) : null;
    if (index !== values.length - 1 && last !== '"' && last !== "'") {
      values[index] += " ";
    }
  }
  return values.join("");
}
function serializeAttribute(state, key2, value) {
  const info = find(state.schema, key2);
  const x = state.settings.allowParseErrors && state.schema.space === "html" ? 0 : 1;
  const y = state.settings.allowDangerousCharacters ? 0 : 1;
  let quote = state.quote;
  let result;
  if (info.overloadedBoolean && (value === info.attribute || value === "")) {
    value = true;
  } else if (info.boolean || info.overloadedBoolean && typeof value !== "string") {
    value = Boolean(value);
  }
  if (value === void 0 || value === null || value === false || typeof value === "number" && Number.isNaN(value)) {
    return "";
  }
  const name = stringifyEntities(
    info.attribute,
    Object.assign({}, state.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: constants.name[x][y]
    })
  );
  if (value === true)
    return name;
  value = Array.isArray(value) ? (info.commaSeparated ? stringify2 : stringify)(value, {
    padLeft: !state.settings.tightCommaSeparatedLists
  }) : String(value);
  if (state.settings.collapseEmptyAttributes && !value)
    return name;
  if (state.settings.preferUnquoted) {
    result = stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        subset: constants.unquoted[x][y],
        attribute: true
      })
    );
  }
  if (result !== value) {
    if (state.settings.quoteSmart && ccount(value, quote) > ccount(value, state.alternative)) {
      quote = state.alternative;
    }
    result = quote + stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: (quote === "'" ? constants.single : constants.double)[x][y],
        attribute: true
      })
    ) + quote;
  }
  return name + (result ? "=" + result : result);
}

// ../../node_modules/hast-util-to-html/lib/handle/text.js
function text3(node3, _, parent, state) {
  return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node3.value : stringifyEntities(
    node3.value,
    Object.assign({}, state.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}

// ../../node_modules/hast-util-to-html/lib/handle/raw.js
function raw(node3, index, parent, state) {
  return state.settings.allowDangerousHtml ? node3.value : text3(node3, index, parent, state);
}

// ../../node_modules/hast-util-to-html/lib/handle/root.js
function root3(node3, _1, _2, state) {
  return state.all(node3);
}

// ../../node_modules/hast-util-to-html/lib/handle/index.js
var handle2 = zwitch("type", {
  invalid,
  unknown: unknown2,
  handlers: { comment: comment3, doctype, element: element3, raw, root: root3, text: text3 }
});
function invalid(node3) {
  throw new Error("Expected node, not `" + node3 + "`");
}
function unknown2(node3) {
  throw new Error("Cannot compile unknown node `" + node3.type + "`");
}

// ../../node_modules/hast-util-to-html/lib/index.js
function toHtml(tree, options) {
  const options_ = options || {};
  const quote = options_.quote || '"';
  const alternative = quote === '"' ? "'" : '"';
  if (quote !== '"' && quote !== "'") {
    throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
  }
  const state = {
    one: one5,
    all: all6,
    settings: {
      omitOptionalTags: options_.omitOptionalTags || false,
      allowParseErrors: options_.allowParseErrors || false,
      allowDangerousCharacters: options_.allowDangerousCharacters || false,
      quoteSmart: options_.quoteSmart || false,
      preferUnquoted: options_.preferUnquoted || false,
      tightAttributes: options_.tightAttributes || false,
      upperDoctype: options_.upperDoctype || false,
      tightDoctype: options_.tightDoctype || false,
      bogusComments: options_.bogusComments || false,
      tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
      tightSelfClosing: options_.tightSelfClosing || false,
      collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
      allowDangerousHtml: options_.allowDangerousHtml || false,
      voids: options_.voids || htmlVoidElements,
      characterReferences: options_.characterReferences || options_.entities || {},
      closeSelfClosing: options_.closeSelfClosing || false,
      closeEmptyElements: options_.closeEmptyElements || false
    },
    schema: options_.space === "svg" ? svg2 : html3,
    quote,
    alternative
  };
  return state.one(
    Array.isArray(tree) ? { type: "root", children: tree } : tree,
    void 0,
    void 0
  );
}
function one5(node3, index, parent) {
  return handle2(node3, index, parent, this);
}
function all6(parent) {
  const results = [];
  const children = parent && parent.children || [];
  let index = -1;
  while (++index < children.length) {
    results[index] = this.one(children[index], index, parent);
  }
  return results.join("");
}

// ../../node_modules/rehype-stringify/lib/index.js
function rehypeStringify(config) {
  const processorSettings = (
    /** @type {Options} */
    this.data("settings")
  );
  const settings = Object.assign({}, processorSettings, config);
  Object.assign(this, { Compiler: compiler });
  function compiler(tree) {
    return toHtml(tree, settings);
  }
}

// ../../node_modules/myst-to-html/dist/renderMdast.js
function mystToHtml(tree, opts) {
  const state = new State();
  const pipe = unified().use(transform, state).use(mystToHast, opts === null || opts === void 0 ? void 0 : opts.hast).use(formatHtml, opts === null || opts === void 0 ? void 0 : opts.formatHtml).use(rehypeStringify, opts === null || opts === void 0 ? void 0 : opts.stringifyHtml);
  const result = pipe.runSync(tree);
  const html6 = pipe.stringify(result);
  return html6.trim();
}

export {
  formatHtml,
  renderMath,
  addMathRenderers,
  mystToHast,
  findAndReplace,
  State,
  normalize,
  find,
  html3 as html,
  svg2 as svg,
  parse,
  parse2,
  webNamespaces,
  rehypeParse,
  all4 as all,
  findAfter,
  lib_default,
  transform,
  mystToHtml
};
//# sourceMappingURL=/build/_shared/chunk-DMKKPIN6.js.map
