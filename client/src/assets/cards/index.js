import aceCups from "./ace-cups.jpeg";
import acePentacles from "./ace-pentacles.jpeg";
import aceSwords from "./ace-swords.jpeg";
import aceWands from "./ace-wands.jpeg";
import chariot from "./chariot.jpeg";
import death from "./death.jpeg";
import devil from "./devil.jpeg";
import eightCups from "./eight-cups.jpeg";
import eightPentacles from "./eight-pentacles.jpeg";
import eightSwords from "./eight-swords.jpeg";
import eightWands from "./eight-wands.jpeg";
import emperor from "./emperor.jpeg";
import empress from "./empress.jpeg";
import fiveCups from "./five-cups.jpeg";
import fivePentacles from "./five-pentacles.jpeg";
import fiveSwords from "./five-swords.jpeg";
import fiveWands from "./five-wands.jpeg";
import fool from "./fool.jpeg";
import fortuneWheel from "./fortune-wheel.jpeg";
import fourCups from "./four-cups.jpeg";
import fourPentacles from "./four-pentacles.jpeg";
import fourSwords from "./four-swords.jpeg";
import fourWands from "./four-wands.jpeg";
import hangedMan from "./hanged-man.jpeg";
import hermit from "./hermit.jpeg";
import hierophant from "./hierophant.jpeg";
import highPriestess from "./high-priestess.jpeg";
import judgement from "./judgement.jpeg";
import justice from "./justice.jpeg";
import kingCups from "./king-cups.jpeg";
import kingPentacles from "./king-pentacles.jpeg";
import kingSwords from "./king-swords.jpeg";
import kingWands from "./king-wands.jpeg";
import knightCups from "./knight-cups.jpeg";
import knightPentacles from "./knight-pentacles.jpeg";
import knightSwords from "./knight-swords.jpeg";
import knightWands from "./knight-wands.jpeg";
import lovers from "./lovers.jpeg";
import magician from "./magician.jpeg";
import moon from "./moon.jpeg";
import nineCups from "./nine-cups.jpeg";
import ninePentacles from "./nine-pentacles.jpeg";
import nineSwords from "./nine-swords.jpeg";
import nineWands from "./nine-wands.jpeg";
import pageCups from "./page-cups.jpeg";
import pagePentacles from "./page-pentacles.jpeg";
import pageSwords from "./page-swords.jpeg";
import pageWands from "./page-wands.jpeg";
import queenCups from "./queen-cups.jpeg";
import queenPentacles from "./queen-pentacles.jpeg";
import queenSwords from "./queen-swords.jpeg";
import queenWands from "./queen-wands.jpeg";
import sevenCups from "./seven-cups.jpeg";
import sevenPentacles from "./seven-pentacles.jpeg";
import sevenSwords from "./seven-swords.jpeg";
import sevenWands from "./seven-wands.jpeg";
import sixCups from "./six-cups.jpeg";
import sixPentacles from "./six-pentacles.jpeg";
import sixSwords from "./six-swords.jpeg";
import sixWands from "./six-wands.jpeg";
import stars from "./stars.jpeg";
import strength from "./strength.jpeg";
import sun from "./sun.jpeg";
import temperance from "./temperance.jpeg";
import tenCups from "./ten-cups.jpeg";
import tenPentacles from "./ten-pentacles.jpeg";
import tenSwords from "./ten-swords.jpeg";
import tenWands from "./ten-wands.jpeg";
import threeCups from "./three-cups.jpeg";
import threePentacles from "./three-pentacles.jpeg";
import threeSwords from "./three-swords.jpeg";
import threeWands from "./three-wands.jpeg";
import tower from "./tower.jpeg";
import twoCups from "./two-cups.jpeg";
import twoPentacles from "./two-pentacles.jpeg";
import twoSwords from "./two-swords.jpeg";
import twoWands from "./two-wands.jpeg";
import world from "./world.jpeg";

// eslint-disable-next-line
export default [
  {
    name: "Ace of cups 聖杯一",
    img: aceCups,
    route: "aceofcups",
    order: 1,
  },
  {
    name: "Ace of pentacles 錢幣一",
    img: acePentacles,
    route: "aceofpentacles",
    order: 1,
  },
  {
    name: "Ace of swords 寶劍一",
    img: aceSwords,
    route: "aceofswords",
    order: 1,
  },
  {
    name: "Ace of wands 權杖一",
    img: aceWands,
    route: "aceofwands",
    order: 1,
  },
  {
    name: "Chariot 戰車",
    img: chariot,
    route: "chariot",
    order: 7,
    waiteExp: {
      forwardKeyword: "勝利，控制，意志力，勝利，斷言，決心",
      forwardExp:
        "它表明通過適當地運用意志力，信心和紀律，你將能夠克服所有的反對意見。卡片勸告你要大膽，但強調要控制你的衝動，這樣你才能把它們引導到更有創意的事情上。",
      reverseKeyword: "缺乏控制和方向，侵略",
      reverseExp:
        "它表明你由於你未能控制對立的力量而導致你目前的失落和無力感。這也可能表明你在壓力下崩潰了。目前不是擔心你無法控制的事情，把精力集中在你擁有的東西上，並努力改變現狀。",
      star: "巨蟹座",
    },
  },
  {
    name: "Death 死神",
    img: death,
    route: "death",
    order: 13,
    waiteExp: {
      forwardKeyword:
        "依戀，結束，也是另一個開始，嚴重疾病，轉化，失敗，死亡，重生",
      forwardExp:
        "它像徵著你生命中重要方面的終結，這反過來可能會帶來更有價值的東西。 雖然你可能最初發現很難繼續進行新的事情和改變，但最終你會成為贏家。",
      reverseKeyword: "抵制變革，無法繼續前進",
      reverseExp:
        "與正位相比，您生活中即將發生的變化將會減弱。抵抗即將發生的變化，痛苦掙扎，最後卻依然不得不面對必將發生的改變。",
      star: "天蠍座",
    },
  },
  {
    name: "Devil 惡魔",
    img: devil,
    route: "devil",
    order: 15,
    waiteExp: {
      forwardKeyword: "束縛，成癮，唯物主義，恐懼和誘惑",
      forwardExp:
        "它表明你的恐懼，成癮和其他負面衝動會限制你並讓你把它們視為無法控制的事物。因此，您無法前進或採取任何建設性步驟。 你也可能感到絕望或痴迷，甚至對生活抱有悲觀的看法。 該卡建議您擺脫這些負面模式，為您的生活帶來積極的變化。",
      reverseKeyword: "分離，打破自由，離婚",
      reverseExp:
        "它指的是由於非生產性職業，債務或成癮等因素造成的陷入困境。這些負面事件使你對生活採取悲觀態度。 它也可能會集中你對這些關係的自由需求。 你必須練習脫離物質的東西，以便戰勝你內心的恐懼，過上充滿動力和鼓勵的生活。",
      star: "摩羯座",
    },
  },
  {
    name: "Eight of cups 聖杯八",
    img: eightCups,
    route: "eightofcups",
    order: 8,
  },
  {
    name: "Eight of pentacles 錢幣八",
    img: eightPentacles,
    route: "eightofpentacles",
    order: 8,
  },
  {
    name: "Eight of swords 寶劍八",
    img: eightSwords,
    route: "eightofswords",
    order: 8,
  },
  {
    name: "Eight of wands 權杖八",
    img: eightWands,
    route: "eightofwands",
    order: 8,
  },
  {
    name: "Emperor 皇帝",
    img: emperor,
    route: "emperor",
    order: 4,
    waiteExp: {
      forwardKeyword: "通過規劃，權力，結構，秩序，穩定性，財務可行性",
      forwardExp:
        "表示明智，穩定和保護，您隨時準備為您身邊的人提供指導。<br>你也堅持你的計劃，並傾向於以有組織的方式執行它們。 事實上，你是一個天生的領導者，並且在獲得正確的位置時，你會努力實現完美。你傾聽別人的意見，但只做你認為正確的事，即使這意味著你必須面對反對。 最後，你成功並獲得你應得的認可。但是，過多遵守規則可能會使你看起來不靈活，從而剝奪了你對自發性和快樂的主張。 所以，堅持規則也要保持平衡。",
      reverseKeyword: "統治，過度控制，僵化，缺乏靈活性",
      reverseExp:
        "這張牌反映了你的權威和僵化，使你失去自我控制能力，反而成為不一致的犧牲品。 或者，也可能顯示存在頑固的身影，例如您的父親或老闆，您需要彰顯自己的個性以獲得突出地位。 可能是因為對你現在的情況不滿意而無法找到解決方案，你在不知不覺中對你周圍的人變得粗魯無禮。<br>過多的壓力對你造成了傷害，阻止了正能量的流動，使你看起來像一個不安全的人，非常需要控制。 你需要的是你日常生活中的一些空間。 接受值得信賴的朋友的支持，接受他們的建議，重新獲得失去的積極性。",
      star: "牡羊座",
    },
    lineStriderExp: "",
  },
  {
    name: "Empress 皇后",
    img: empress,
    route: "empress",
    order: 3,
    waiteExp: {
      forwardKeyword: "滿足感，創造力，激情，生育，富足，幸福，藝術，繁榮",
      forwardExp:
        "皇后代表著創造力，生育能力，藝術，和諧，奢華，美麗和優雅。皇后本身是一個完全發展的女人，象徵養育和和平的她戴著一個星星的王冠，代表她與宇宙的聯繫。她赤裸的乳房和開放的姿態提供了性，援助和母親的哺育。<br>在解牌中，女皇表示與女性有很深的關聯。她代表著思想和身體的新的力量，現在是培育新想法和新項目的時候了。在財務解牌中，皇后是繁榮的好兆頭，一般來說，它表示別人被你和你的想法所吸引，前景看好。如果是正在尋求商業問題方面的指導，女皇可能會告訴你要把注意力集中在溝通，人際關係和網絡建設上，而不是採取更具對抗性的方式來應對工作挑戰。在愛情解讀中，她可能暗示懷孕或是出生，或者與你生命中的孩子有更深的聯繫。她也有舒適的含義，可能包含家庭，婚姻，定居，和一個繁榮的家。如果看到她和&nbsp;戀人&nbsp;或&nbsp;聖杯十&nbsp;一起出現，要更認真地對待這個信息。<br>如果她出現在未來的位置上，你現在的道路將帶你走向富裕和舒適的生活。更廣泛地說，皇后鼓勵你與他人和大自然聯繫。如果由皇后主持，你會對其他人更有吸引力，他們可能會尋求你的建議和安慰。注意那些表達出想要保護感情或覬覦你注意的人。",
      reverseKeyword: "愛慕虛榮，怠惰，輕浮，情緒化，自我滿足",
      reverseExp:
        "在她的逆位，女皇可以表明你正在給予太多你的個人女性力量，也許你正在允許別人的情感或物質需求從你那里索取的超出你的負荷。你幫助他人的能力取決於你守護自己的力量和資源。這張牌的逆位也可以表明你在你的生活中使用一種男性的力量，而女性的一面正在被否定或壓制，需要你去尋求平衡。<br>她也可能指出生育或懷孕的麻煩，或者你與生活中孩子的關係不平衡。最後，卡片有時會表現出一種自私或自我滿足的態度。你或者你生活中的某個人是否滿足於在既定的處境中舒適地坐在王位上，而另一個人則努力工作來支持或背負你？記住，權力不平衡的狀況很少會持續很久。可能會有其他的人願意聽你的吩咐，但如果你不盡自己的責任來承擔同樣的責任，你的王位可能很快就會土崩瓦解。",
      star: "金星",
    },
    lineStriderExp:
      "關鍵詞<br>滿足感，創造力，激情，生育，富足，幸福，藝術，繁榮<br><br>皇后代表著創造力，生育能力，藝術，和諧，奢華，美麗和優雅。皇后本身是一個完全發展的女人，象徵養育和和平的她戴著一個星星的王冠，代表她與宇宙的聯繫。行者塔羅中給她畫了一隻猴子和一隻老虎，這些動物代表著智慧和頑皮，以及可能潛在的危險。她赤裸的乳房和開放的姿態提供了性，援助和母親的哺育。<br>在解牌中，女皇表示與女性有很深的關聯。她代表著思想和身體的新的力量，現在是培育新想法和新項目的時候了。在財務解牌中，皇后是繁榮的好兆頭，一般來說，它表示別人被你和你的想法所吸引，前景看好。如果是正在尋求商業問題方面的指導，女皇可能會告訴你要把注意力集中在溝通，人際關係和網絡建設上，而不是採取更具對抗性的方式來應對工作挑戰。在愛情解讀中，她可能暗示懷孕或是出生，或者與你生命中的孩子有更深的聯繫。她也有舒適的含義，可能包含家庭，婚姻，定居，和一個繁榮的家。如果看到她和&nbsp;戀人&nbsp;或&nbsp;聖杯十&nbsp;一起出現，要更認真地對待這個信息。<br>如果她出現在未來的位置上，你現在的道路將帶你走向富裕和舒適的生活。更廣泛地說，皇后鼓勵你與他人和大自然聯繫。如果由皇后主持，你會對其他人更有吸引力，他們可能會尋求你的建議和安慰。注意那些表達出想要保護感情或覬覦你注意的人。在行者塔羅中，老虎把自己包裹在皇后的周圍，既想要她的注意，又想要保護她的安全。<br><br>逆位關鍵詞<br>愛慕虛榮，怠惰，輕浮，情緒化，自我滿足<br><br>在她的逆位，女皇可以表明你正在給予太多你的個人女性力量，也許你正在允許別人的情感或物質需求從你那里索取的超出你的負荷。你幫助他人的能力取決於你守護自己的力量和資源。這張牌的逆位也可以表明你在你的生活中使用一種男性的力量，而女性的一面正在被否定或壓制，需要你去尋求平衡。<br>她也可能指出生育或懷孕的麻煩，或者你與生活中孩子的關係不平衡。最後，卡片有時會表現出一種自私或自我滿足的態度。你或者你生活中的某個人是否滿足於在既定的處境中舒適地坐在王位上，而另一個人則努力工作來支持或背負你？記住，權力不平衡的狀況很少會持續很久。可能會有其他的人願意聽你的吩咐，但如果你不盡自己的責任來承擔同樣的責任，你的王位可能很快就會土崩瓦解。<br><br>關聯<br>占星術：天秤座<br>數字：3",
  },
  {
    name: "Five of cups 聖杯五",
    img: fiveCups,
    route: "fiveofcups",
    order: 5,
  },
  {
    name: "Five of pentacles 錢幣五",
    img: fivePentacles,
    route: "fiveofpentacles",
    order: 5,
  },
  {
    name: "Five of swords 寶劍五",
    img: fiveSwords,
    route: "fiveofswords",
    order: 5,
  },
  {
    name: "Five of wands 權杖五",
    img: fiveWands,
    route: "fiveofwands",
    order: 5,
  },
  {
    name: "The Fool 愚者",
    img: fool,
    route: "thefool",
    order: 0,
    waiteExp: {
      forwardKeyword:
        "理想主義，新的冒險，天真，決定，自發性，冒險，貴人相助，對新經驗的開放",
      forwardExp:
        "愚者是一張潛力，新的開始和天真的卡片。一個成長的旅程或經歷的開始，他會變成誰，還是個謎。​<br>這張牌預示著冒險和新的機會在等待著。愚者是無憂無慮的，沒有恐懼和焦慮的負擔，即使他一隻腳踩在懸崖的邊緣，他似乎也不介意，即便他真的不知道前面是什麼。​<br>​<br>在解牌中，愚者是最能代表求知者自己的卡片，塔羅牌的故事裡也是愚者自身的旅程，有時愚者也可能代表另一個人。當愚者出現在關係解牌中的未來位置時，它可能預示著一個年輕，無憂無慮，有趣或不負責任的新戀人。魔術師和愚者在一起是偉大的，因為他們是一個時代的後裔，讓你生命中的力量幫助你完成大事，而不必失去你存在的輕盈。這個愚者與天真結合在一起。​<br>當愚者與旅行意象強烈的&nbsp;權杖八&nbsp;或&nbsp;權杖二&nbsp;一同出現&nbsp;，表明了一個明智的時間，該走到未知的地方去擁抱新的冒險。與此同時，要提防不負責任，過於瘋狂的計劃和魯莽。根據牌陣中的其他卡片，訊息可以是溫和的，比如告誡你放下焦慮，也可以是嚴厲的，比如警告你自己或他人的魯莽或精神不穩定。​",
      reverseKeyword:
        "愚蠢，魯莽，不守規矩，盲信，沉迷享樂，粗心大意，過於在意他人想法​",
      reverseExp:
        "在逆位來說，他警告你注意那些未完成或放棄的項目，不安全和懷疑，或者已經(或將要)做出愚蠢或不負責任的選擇。在極端的情況下，愚者可能會解讀為瘋子，精神疾病或癡呆。​<br>當你看到&nbsp;惡魔&nbsp;和&nbsp;愚者&nbsp;在一起解牌的時候，要非常小心那些看起來似乎很有趣、無憂無慮的生活很快就會變成債務、上癮和破壞的關係。​",
      star: "天王星",
    },
    lineStriderExp:
      "關鍵詞​<br>理想主義，新的冒險，天真，決定，自發性，冒險，貴人相助，對新經驗的開放。​<br><br>愚者是一張潛力，新的開始和天真的卡片。他擁有一張未完成的臉和身體，因為這張卡片說的是某人在一個成長的旅程或經歷的開始。他會變成誰，還是個謎。​<br>這張牌預示著冒險和新的機會在等待著。愚者是無憂無慮的，沒有恐懼和焦慮的負擔，即使他一隻腳踩在懸崖的邊緣，他似乎也不介意，即便他真的不知道前面是什麼。​<br>在大多數的牌面上，愚者都是和一個動物夥伴在一起的，通常是一隻狗，但這邊給了他一隻笑翠鳥。笑翠鳥也以其歡笑和頑皮而聞名，是愚者的完美選擇，他們象徵著天真無邪，快樂的天性，只是順著自己的本能行事。<br>&nbsp;​&nbsp;​<br>在解牌中，愚者是最能代表求知者自己的卡片，塔羅牌的故事裡也是愚者自身的旅程，有時愚者也可能代表另一個人。當愚者出現在關係解牌中的未來位置時，它可能預示著一個年輕，無憂無慮，有趣或不負責任的新戀人。魔術師和愚者在一起是偉大的，因為他們是一個時代的後裔，讓你生命中的力量幫助你完成大事，而不必失去你存在的輕盈。這個愚者與天真結合在一起。​<br>當愚者與旅行意象強烈的&nbsp;權杖八&nbsp;或&nbsp;權杖二&nbsp;一同出現&nbsp;，&nbsp;表明了一個明智的時間，該走到未知的地方去擁抱新的冒險。與此同時，要提防不負責任，過於瘋狂的計劃和魯莽。根據牌陣中的其他卡片，訊息可以是溫和的，比如告誡你放下焦慮，也可以是嚴厲的，比如警告你自己或他人的魯莽或精神不穩定。​<br>​<br>逆位關鍵詞​<br>愚蠢，魯莽，不守規矩，盲信，沉迷享樂，粗心大意，過於在意他人想法​<br>​<br>在逆位來說，他警告你注意那些未完成或放棄的項目，不安全和懷疑，或者已經(或將要)做出愚蠢或不負責任的選擇。在極端的情況下，愚者可能會解讀為瘋子，精神疾病或癡呆。​<br>當你看到&nbsp;惡魔&nbsp;和&nbsp;愚者&nbsp;在一起解牌的時候，要非常小心那些看起來似乎很有趣、無憂無慮的生活很快就會變成債務、上癮和破壞的關係。​<br>​<br>關聯<br>占星術:無​<br>數字：0，22，33",
  },
  {
    name: "Wheel of Fortune 命運之輪",
    img: fortuneWheel,
    route: "wheeloffortune",
    order: 10,
    waiteExp: {
      forwardKeyword: "命中註定，無所畏懼，自由，成功，情感聯繫，鼓勵，豐富",
      forwardExp:
        "這表明積極的變化即將來臨。 您的自信隨和將幫助您在不降低自尊的情況下度過生活的起伏。 你必須更專注於你的意圖，因為它會讓你實現你的真正目標。 生活已經為你制定了一個計劃，保持樂觀將帶來繁榮和幸福。 最重要的是，你的善行會帶給你預期的結果。 然而，不要自滿，因為宇宙中沒有任何東西是永恆的。",
      reverseKeyword: "失去權力，艱辛，失敗",
      reverseExp:
        "表明未來的一些挑戰。 這是你錯誤決定導致事態惡化的結果。 然而，目前的情況可能是一個很好的學習經驗，以防止你重複同樣的錯誤。 該卡還可能表明您對變化的持續造成極大精神壓力並導致家中不和。",
      star: "木星",
    },
  },
  {
    name: "Four of cups 聖杯四",
    img: fourCups,
    route: "fourofcups",
    order: 4,
  },
  {
    name: "Four of pentacles 錢幣四",
    img: fourPentacles,
    route: "fourofpentacles",
    order: 4,
  },
  {
    name: "Four of swords 寶劍四",
    img: fourSwords,
    route: "fourofswords",
    order: 4,
  },
  {
    name: "Four of wands 權杖四",
    img: fourWands,
    route: "fourofwands",
    order: 4,
  },
  {
    name: "Hanged man 吊人",
    img: hangedMan,
    route: "hangedman",
    order: 12,
    waiteExp: {
      forwardKeyword:
        "換個角度看，謹慎，智慧，犧牲，占卜，預言能力，直覺，隱秘",
      forwardExp:
        "現在是時候採取一些舊的信念、態度或友誼。學會自己承擔責任。然而這並不意味著你會責怪自己並阻止你繼續前進。",
      reverseKeyword: "無法改變，自私，自我中心，錯過機會",
      reverseExp:
        "它意味著，目前你會發現自己處於停滯狀態，對重要的事情非常猶豫不決。你在黑暗中摸索著找到一條出路並做出有成效的決定。倒吊人的男子也可能在您的工作場所指出一個有問題的情況，或建議您更多地關注您的健康。 ",
      star: "海王星",
    },
  },
  {
    name: "Hermit 隱士",
    img: hermit,
    route: "hermit",
    order: 9,
    waiteExp: {
      forwardKeyword: "自我發現，沉思，精神理解，超脫，直覺，保密",
      forwardExp:
        "你正在從所有世俗的事物中退出，並轉向內心，以實現神聖的真理。時機適合您找到生活中的最終目標並努力實現目標。<br>您有限的物質慾望可以幫助你關注重要方面，並提出可行的解決方案。你有很強的領導能力，可以引導他人到達正確的目的地。<br>不要過於習慣孤獨，因為到後來你發現很難找到表達情感的人。",
      reverseKeyword: "沮喪，失去社交技巧，焦慮",
      reverseExp:
        "它建議你不要過於隱遁，因為世界上有很多機會可以抓住。孤獨是必要的，但如果沒有任何人為干預，長時間保持退縮是不可行的。事實上，從長遠來看，花費太多時間進行反省可能會造成傷害。",
      star: "處女座",
    },
  },
  {
    name: "The Hierophant 教皇",
    img: hierophant,
    route: "thehierophant",
    order: 5,
    waiteExp: {
      forwardKeyword: "追隨宗教，尋求建議，精神指導，教育和團體整合",
      forwardExp:
        "它反映了你希望堅持保守而不是創新。<br>它也可能反映出你加入神聖團體或機構的傾向，以便符合他們有益的思維方式，從而進一步學習。該卡建議您從明智的導師那裡尋求智慧和知識，以獲得更高的意識。",
      reverseKeyword: "精神崩潰，否定家庭價值觀，不恰當的忠告和濫用職位 ",
      reverseExp:
        "它可能通過規則的生活來反映你的限制感。你努力擺脫這種僵化，導致你的靈活性消耗殆盡。找到機會挑戰對你有負擔的想法並分析你今後的成就。 ",
      star: "金牛座",
    },
  },
  {
    name: "The High Priestess 女祭司",
    img: highPriestess,
    route: "thehighpriestess",
    order: 2,
    waiteExp: {
      forwardKeyword:
        "直覺，寧靜，夢想，秘密，誠實，平衡，親和，靈性，內在探索",
      forwardExp:
        "女祭司是像徵通過夢境與潛意識聯繫的一張牌。代表智慧、知識、寧靜和理解，她是無意識領域的守護者，這張卡片出現在你應該依靠你的夢想和直覺來尋求指引的時候。<br>你需要傾聽並相信你內心的聲音。在你的生命中可能有一些失去平衡的領域，需要無意識領域的智慧，對於最近的困境，答案將來自你的直覺和內心的聲音。<br>如果一個男性的詢問者抽出這張牌，信息可能會特別清楚：如果你想要成功和進步，要特別注意你內在柔軟的一面或女性的能量。對於兩性雙方來說，宇宙女性的聲音掌握著你所尋求的答案。如果在牌陣中看到一個女祭司被聖杯卡片包圍，則更明確的指出問卜者完全處於潛意識和直覺的領域。<br>如果問卜者的問題是關於你生活中的一個問題，聖杯一&nbsp;與&nbsp;女祭司組合強烈地暗示問題是在感情領域，人們彼此之間的聯繫和他們的情感，而不是現實因素。女祭司&nbsp;與&nbsp;魔術師&nbsp;同時出現，牌陣可能表明在看不見的領域中存在著深刻的力量，你可以調動這些力量來達到你的目標。在單牌牌陣中她也表示即將發生的變化，如果你允許她指導你，你的直覺和創造力就會增強。這張牌同時也有藝術家，詩人和作家的意象。",
      reverseKeyword:
        "精神壓抑，焦慮，猶豫不定，緊張，神經質，封閉自我，不與人溝通，無法傾聽內在聲音，或知道但無法轉化為行動",
      reverseExp:
        "女祭司的逆位，表示一個與你的直覺和內在聲音，或與你的女性力量斷開的狀態，可能以任何形式呈現出來。忽視她將會使妳遭受挫敗的體驗，你需要的答案是潛意識的，內在柔軟的領域。這張牌可能在警告你不要依賴外部聲音或意見。女祭司建議你花時間獨處，重新與你自己的聲音連接。<br>如果牌陣上出現&nbsp;隱士&nbsp;或另一張要求問卜者尋求獨處的卡片，內在探索的含義將更為強烈。還可以指出問卜者可能隱藏某些議題或工作上的拖延。",
      star: "月亮",
    },
    lineStriderExp:
      "關鍵詞<br>直覺，寧靜，夢想，秘密，誠實，平衡，親和，靈性，內在探索<br><br>女祭司是像徵通過夢境與潛意識聯繫的一張牌。代表智慧、知識、寧靜和理解，她是無意識領域的守護者，這張卡片出現在你應該依靠你的夢想和直覺來尋求指引的時候。<br>你需要傾聽並相信你內心的聲音。在你的生命中可能有一些失去平衡的領域，需要無意識領域的智慧，對於最近的困境，答案將來自你的直覺和內心的聲音。<br>如果一個男性的詢問者抽出這張牌，信息可能會特別清楚：如果你想要成功和進步，要特別注意你內在柔軟的一面或女性的能量。對於兩性雙方來說，宇宙女性的聲音掌握著你所尋求的答案。如果在牌陣中看到一個女祭司被聖杯卡片包圍，則更明確的指出問卜者完全處於潛意識和直覺的領域。<br>如果問卜者的問題是關於你生活中的一個問題，聖杯一&nbsp;與&nbsp;女祭司組合強烈地暗示問題是在感情領域，人們彼此之間的聯繫和他們的情感，而不是現實因素。女祭司&nbsp;與&nbsp;魔術師&nbsp;同時出現，牌陣可能表明在看不見的領域中存在著深刻的力量，你可以調動這些力量來達到你的目標。在單牌牌陣中她也表示即將發生的變化，如果你允許她指導你，你的直覺和創造力就會增強。這張牌同時也有藝術家，詩人和作家的意象。<br><br>逆位關鍵詞<br>精神壓抑，焦慮，猶豫不定，緊張，神經質，封閉自我，不與人溝通，無法傾聽內在聲音，或知道但無法轉化為行動<br><br>女祭司的逆位，表示一個與你的直覺和內在聲音，或與你的女性力量斷開的狀態，可能以任何形式呈現出來。忽視她將會使妳遭受挫敗的體驗，你需要的答案是潛意識的，內在柔軟的領域。這張牌可能在警告你不要依賴外部聲音或意見。女祭司建議你花時間獨處，重新與你自己的聲音連接。<br>如果牌陣上出現&nbsp;隱士&nbsp;或另一張要求問卜者尋求獨處的卡片，內在探索的含義將更為強烈。還可以指出問卜者可能隱藏某些議題或工作上的拖延。<br><br>關聯<br>占星術：處女座，巨蟹座<br>數字：2",
  },
  {
    name: "Judgement 審判",
    img: judgement,
    route: "judgement",
    order: 20,
    waiteExp: {
      forwardKeyword: "正確判斷，重生，寬恕，內心呼喚",
      forwardExp:
        "它表示一段自我分析，集中和冥想的時期。根據這張卡片，你最近有一個頓悟，在那裡你意識到以不同的方式過上生活的必要性。你現在的目標是讓自己更加真實，這樣你就能成為別人的一線希望。  建議你根據自己的直覺和智慧做出決定，因為它們將在未來的日子裡帶來重大變化。",
      reverseKeyword: "缺乏自信，克己，猶豫不決，決策不力，自我毀滅",
      reverseExp:
        "意味著您過於謹慎的特質會阻礙您利用新的機會。你忙碌的生活方式讓你表面思考而不是深入。現在是時候休息一段時間，意識到過去所犯的錯誤，使你的學習之路更順暢，避免進一步的失敗。",
      star: "冥王星",
    },
  },
  {
    name: "Justice 正義",
    img: justice,
    route: "justice",
    order: 11,
    waiteExp: {
      forwardKeyword: "正義，公正，誠實，細緻，果斷，紀律",
      forwardExp:
        "表明您對自己的行為負責並做出相應判斷。 正如正義手中掌握的一樣，你生活中的事件也會以平衡的方式解決，給你努力的成果。雖然你相信公平競爭，但沒有必要總是說實話 特別是在需要一點外交的情況下。 此外，在對某人或某事作出判斷時，最好在你的腦海中有一個目標，因為你必須在某些時候負責。",
      reverseKeyword: "不誠實，不願意，不負責任",
      reverseExp:
        "表示您在個人或職業生涯中未得到公平對待。 嘗試批判性地分析情況，找出你不滿的原因。 不要與自己作戰，最好接受現實，等待動盪自行消退。 ",
      star: "天秤座",
    },
  },
  {
    name: "King cups 聖杯國王",
    img: kingCups,
    route: "kingcups",
    order: 14,
  },
  {
    name: "King pentacles 錢幣國王",
    img: kingPentacles,
    route: "kingpentacles",
    order: 14,
  },
  {
    name: "King swords 寶劍國王",
    img: kingSwords,
    route: "kingswords",
    order: 14,
  },
  {
    name: "King wands 權杖國王",
    img: kingWands,
    route: "kingwands",
    order: 14,
  },
  {
    name: "Knight cups 聖杯騎士",
    img: knightCups,
    route: "knightcups",
    order: 12,
  },
  {
    name: "Knight pentacles 錢幣騎士",
    img: knightPentacles,
    route: "knightpentacles",
    order: 12,
  },
  {
    name: "Knight swords 寶劍騎士",
    img: knightSwords,
    route: "knightswords",
    order: 12,
  },
  {
    name: "Knight wands 權杖騎士",
    img: knightWands,
    route: "knightwands",
    order: 12,
  },
  {
    name: "Lovers 戀人",
    img: lovers,
    route: "lovers",
    order: 6,
    waiteExp: {
      forwardKeyword: "選擇一段開始，墜入愛河，建立夥伴關係，結合，承諾和選擇",
      forwardExp:
        "它表明你在相互信任和吸引力的基礎上分享強大而親密的聯繫。該卡建議您在選擇方向之前深入分析您的感受，動機以及可用選項。",
      reverseKeyword: "不平衡，不忠，不和諧和分離 ",
      reverseExp:
        "它反映了您不願面對決策的後果。它也可能揭示你內心的衝突，因為你不明白你的生活目標在哪裡。你必須從錯誤中吸取教訓，並以積極的心態向前邁進。不要責怪別人並對你的錯誤負責。",
      star: "雙子座",
    },
  },
  {
    name: "Magician 魔術師",
    img: magician,
    route: "magician",
    order: 1,
    waiteExp: {
      forwardKeyword: "專注，目標達成，學習，交流，轉化。",
      forwardExp:
        "魔術師是一張與意識、行動和創造相關聯的強大卡片。他可能會出現在你有一個具體的想法或目標時。魔術師&nbsp;與&nbsp;羅馬神話&nbsp;中的&nbsp;Mercurius&nbsp;和數字&nbsp;1&nbsp;有關。他是一個行動力極強的人。<br>他聰明，能製造東西，能製造工具，能想出新的做事方法。他站在精神世界和人性之間，一手拿著一根朝天舉起的杖，另一隻手向大地做著祝福的手勢，頭頂上是永恆的象徵，眼前有富足的聖杯。當你需要把宇宙的力量引導到你的目標上時，這張牌就經常出現。當你有一個具體的願望，開始一個涉及創造力的項目，或需要做任何一種轉變的時候，魔術師是一個好的預兆。當你需要召喚所有元素尋求幫助和智慧時，這是一張很棒的卡。<br><br>在解牌中，魔術師可以指示你生命中的一個即將來臨的時期，當你的努力將產生結果，你將感到被賦予力量並能夠完成你的目標，這就是魔術師的潛力。當與&nbsp;愚者&nbsp;一同出現時，尤其是與現在位置的&nbsp;愚者&nbsp;和未來位置的&nbsp;魔術師&nbsp;配對時，一切似乎都順著你的路走，你可以期待體驗到那些生命中的黃金時刻。配上一張強大的&nbsp;錢幣牌，你可能會突然發現你在財務問題上有了更強的天賦。在一段&nbsp;關係&nbsp;的解牌中，要意識到你的個人力量，提防那些帶出你操縱或盛氣凌人一面的人。你能讓別人聽從你的意願並不意味著你就應該如此。記住要以慈悲和仁慈來運用你的力量。",
      reverseKeyword: "分心，學藝不精，言而不行，缺乏創造力，努力錯了方向",
      reverseExp:
        "逆位中，魔術師可以指示有什麼東西在阻擋你的創造性能量，或者你的力量正被指向一些徒勞的東西，或者對你的目標或成長產生反作用的東西。魔術師與水星有關，並攜帶著強大的技能、邏輯和智慧。如果與&nbsp;戰車&nbsp;或是其中一張強大的牌一同出現，而有其中一張逆位，你可能會發現一種增強的，近乎神奇的能量來幫助你實現你努力追求的目標，但要小心...這種野心和成功可能會付出巨大的代價。",
      star: "水星",
    },
    lineStriderExp:
      "關鍵詞<br>專注，目標達成，學習，交流，轉化。<br><br>魔術師是一張與意識、行動和創造相關聯的強大卡片。他可能會出現在你有一個具體的想法或目標時。魔術師&nbsp;與&nbsp;羅馬神話&nbsp;中的&nbsp;Mercurius&nbsp;和數字&nbsp;1&nbsp;有關。他是一個行動力極強的人。<br>猿猴能表現這張牌的性格，聰明，能製造東西，能製造工具，能想出新的做事方法。他站在精神世界和人性之間，一手拿著一根朝天舉起的杖，另一隻手向大地做著祝福的手勢，頭頂上是永恆的象徵，眼前有富足的聖杯。當你需要把宇宙的力量引導到你的目標上時，這張牌就經常出現。當你有一個具體的願望，開始一個涉及創造力的項目，或需要做任何一種轉變的時候，魔術師是一個好的預兆。當你需要召喚所有元素尋求幫助和智慧時，這是一張很棒的卡。<br><br>在解牌中，魔術師可以指示你生命中的一個即將來臨的時期，當你的努力將產生結果，你將感到被賦予力量並能夠完成你的目標，這就是魔術師的潛力。當與&nbsp;愚者&nbsp;一同出現時，尤其是與現在位置的&nbsp;愚者&nbsp;和未來位置的&nbsp;魔術師&nbsp;配對時，一切似乎都順著你的路走，你可以期待體驗到那些生命中的黃金時刻。配上一張強大的&nbsp;錢幣牌，你可能會突然發現你在財務問題上有了更強的天賦。在一段&nbsp;關係&nbsp;的解牌中，要意識到你的個人力量，提防那些帶出你操縱或盛氣凌人一面的人。你能讓別人聽從你的意願並不意味著你就應該如此。記住要以慈悲和仁慈來運用你的力量。<br><br>逆位關鍵詞<br>分心，學藝不精，言而不行，缺乏創造力，努力錯了方向<br><br>逆位中，魔術師可以指示有什麼東西在阻擋你的創造性能量，或者你的力量正被指向一些徒勞的東西，或者對你的目標或成長產生反作用的東西。魔術師與水星有關，並攜帶著強大的技能、邏輯和智慧。如果與&nbsp;戰車&nbsp;或是其中一張強大的牌一同出現，而有其中一張逆位，你可能會發現一種增強的，近乎神奇的能量來幫助你實現你努力追求的目標，但要小心...這種野心和成功可能會付出巨大的代價。<br><br>關聯<br>占星術：白羊座<br>數字：1",
  },
  {
    name: "Moon 月亮",
    img: moon,
    route: "moon",
    order: 18,
    waiteExp: {
      forwardKeyword: "幻覺，恐懼，焦慮，直覺，不確定，混亂",
      forwardExp:
        "這意味著你對目前的情況非常不安全和懷疑。 雖然周圍的一切似乎都很正常，但你很清楚一個重大問題正在醞釀之中。 此外，您在做夢時顯然得到的直觀信息似乎會導致更多的困惑，並且難以專注於生活中的重要事情。 建議僅僅根據事實與內在的自我聯繫並理解現實。",
      reverseKeyword: "紊亂，思想受限，心理痛苦",
      reverseExp:
        "它表明創造性，自我控制和自信的喪失。現在你的直覺非常強烈，你想要偏離常規，做一些冒險的事情。結果可能會導致你陷入謊言和不道德行為中。<br>月亮暗示你充滿自信地面對內心的恐懼和焦慮，而不是逃跑，否則你的生活會陷入低迷。",
      star: "雙魚座",
    },
  },
  {
    name: "Nine cups 聖杯九",
    img: nineCups,
    route: "ninecups",
    order: 9,
  },
  {
    name: "Nine pentacles 錢幣九",
    img: ninePentacles,
    route: "ninepentacles",
    order: 9,
  },
  {
    name: "Nine swords 寶劍九",
    img: nineSwords,
    route: "nineswords",
    order: 9,
  },
  {
    name: "Nine wands 權杖九",
    img: nineWands,
    route: "ninewands",
    order: 9,
  },
  {
    name: "Page of cups 聖杯侍者",
    img: pageCups,
    route: "pageofcups",
    order: 11,
  },
  {
    name: "Page of pentacles 錢幣侍者",
    img: pagePentacles,
    route: "pageofpentacles",
    order: 11,
  },
  {
    name: "Page of swords 寶劍侍者",
    img: pageSwords,
    route: "pageofswords",
    order: 11,
  },
  {
    name: "Page of wands 權杖侍者",
    img: pageWands,
    route: "pageofwands",
    order: 11,
  },
  {
    name: "Queen of cups 聖杯皇后",
    img: queenCups,
    route: "queenofcups",
    order: 13,
  },
  {
    name: "Queen of pentacles 錢幣皇后",
    img: queenPentacles,
    route: "queenofpentacles",
    order: 13,
  },
  {
    name: "Queen of swords 寶劍皇后",
    img: queenSwords,
    route: "queenofswords",
    order: 13,
  },
  {
    name: "Queen of wands 權杖皇后",
    img: queenWands,
    route: "queenofwands",
    order: 13,
  },
  {
    name: "Seven of cups 聖杯七",
    img: sevenCups,
    route: "sevenofcups",
    order: 7,
  },
  {
    name: "Seven of pentacles 錢幣七",
    img: sevenPentacles,
    route: "sevenofpentacles",
    order: 7,
  },
  {
    name: "Seven of swords 寶劍七",
    img: sevenSwords,
    route: "sevenofswords",
    order: 7,
  },
  {
    name: "Seven of wands 權杖七",
    img: sevenWands,
    route: "sevenofwands",
    order: 7,
  },
  {
    name: "Six of cups 聖杯六",
    img: sixCups,
    route: "sixofcups",
    order: 6,
  },
  {
    name: "Six of pentacles 錢幣六",
    img: sixPentacles,
    route: "sixofpentacles",
    order: 6,
  },
  {
    name: "Six of swords 寶劍六",
    img: sixSwords,
    route: "sixofswords",
    order: 6,
  },
  {
    name: "Six of wands 權杖六",
    img: sixWands,
    route: "sixofwands",
    order: 6,
  },
  {
    name: "The stars 星星",
    img: stars,
    route: "thestars",
    order: 17,
    waiteExp: {
      forwardKeyword: "勇氣，滿足，希望，信念，靈感，信心，夢想，虛幻",
      forwardExp:
        "它表明你正在經歷一個充滿活力，精神穩定，冷靜和對自己更深刻理解的積極階段。 您過去所經歷的艱難挑戰正在幫助您進行徹底的轉型並擁抱新的機遇。 根據卡片的建議，您需要對自己的個性進行重大改變，並從新的角度看待生活。",
      reverseKeyword: "低自尊，消極思想，沮喪",
      reverseExp:
        "它意味著你在生活中發生一些負面事件時感到失敗和扭曲。 儘管有積極的可能性，但你缺乏執行的熱情，並且在這個過程中陷入困境。 該卡片建議您找出失望的原因並努力解決任何負面問題。 ",
      star: "水瓶座",
    },
  },
  {
    name: "The strength 力量",
    img: strength,
    route: "thestrength",
    order: 8,
    waiteExp: {
      forwardKeyword:
        "耐心，自信，穩定，勇敢，自我控制，決心，溫柔，關懷，領導和愛",
      forwardExp:
        "力量可能意味著你相信自己。你可以用溫和的行為和成熟來控制一種不愉快的情況。 您卓越的耐力和毅力可以幫助您忍受生活中的障礙並成為贏家。您可以忽略不完美之處，並為其他人提供改進空間。 力量卡建議你實現自己的內在優勢，放下目前籠罩著你的負面情緒。",
      reverseKeyword: "自我懷疑，弱點，疏忽，混亂",
      reverseExp:
        "這可能意味著最近你在生活中遇到了挫折。而且，由於你失去了勇氣，你感到不適和不安全。現在是時候控制自己並在生活中實施紀律了。否則，你最終會後悔自己的行為。",
      star: "獅子座",
    },
  },
  {
    name: "The sun 太陽",
    img: sun,
    route: "thesun",
    order: 19,
    waiteExp: {
      forwardKeyword: "有趣，溫暖，成功，積極和活力",
      forwardExp:
        "你的積極能量將陪伴你所有的努力，並幫助你獲得完成某事的快樂。您也可以與他人一起散發出最高品質。但是，這並不意味著你不需要做艱苦的工作; 通過你的自信，熱情和辛勞，你將體驗到一種新的洞察力，最終需要在最充實的時期中度過。 太陽建議您過上簡單的生活，以充分享受自由和啟蒙的果實。",
      reverseKeyword: "暫時的抑鬱，缺乏成功",
      reverseExp:
        "表明你走向有益情況的道路可能充滿了障礙，以至於它的積極方面難以掌握。換句話說，可能會有挫折讓你懷疑自己的能力或抑制你的精神。儘管如此，該卡還是敦促您保持專注並付出更多努力，因為所有消極方面都是暫時的。   ",
      star: "太陽",
    },
  },
  {
    name: "The temperance 節制",
    img: temperance,
    route: "thetemperance",
    order: 14,
    waiteExp: {
      forwardKeyword: "平衡，和諧，適度，耐心，尋求神聖干預和意義",
      forwardExp:
        "它表明被賦予了清晰的視野，你可以避免極端，並試著保持溫和的生活。 您可能還會遇到舊的和新的想法之間的衝突，因此對於該怎麼做感到困惑。 該卡建議您耐心評估當前情況，然後根據您面臨的任何新情況進行調整。",
      reverseKeyword: "不和諧，缺乏耐心，被動，疾病發作和過度 ",
      reverseExp:
        "它可能表明你生活中存在緊張或衝突的階段。也許你很倉促，你拒絕踏上溫柔的道路。 你也可能覺得人們對你不合作。積極利用你周圍的能量來解決你的衝突，從而獲得和平。",
      star: "射手座",
    },
  },
  {
    name: "Ten of cups 聖杯十",
    img: tenCups,
    route: "tenofcups",
    order: 10,
  },
  {
    name: "Ten of pentacles 錢幣十",
    img: tenPentacles,
    route: "tenofpentacles",
    order: 10,
  },
  {
    name: "Ten of swords 寶劍十",
    img: tenSwords,
    route: "tenofswords",
    order: 10,
  },
  {
    name: "Ten of wands 權杖十",
    img: tenWands,
    route: "tenofwands",
    order: 10,
  },
  {
    name: "Three of cups 聖杯三",
    img: threeCups,
    route: "threeofcups",
    order: 3,
  },
  {
    name: "Three of pentacles 錢幣三",
    img: threePentacles,
    route: "threeofpentacles",
    order: 3,
  },
  {
    name: "Three of swords 寶劍三",
    img: threeSwords,
    route: "threeofswords",
    order: 3,
  },
  {
    name: "Three of wands 權杖三",
    img: threeWands,
    route: "threeofwands",
    order: 3,
  },
  {
    name: "The tower 高塔",
    img: tower,
    route: "thetower",
    order: 16,
    waiteExp: {
      forwardKeyword: "災難，動盪，突然改變，啟示",
      forwardExp:
        "它代表您在意識到您之前關於特定情況是錯誤時的震驚和不安全感。 習慣於生活的狹窄範圍，你傾向於將某些思想和信仰視為不變。當然，你看到塔羅牌時感到動搖，因為你無法理解你是如何錯誤的。 該卡建議您質疑您的看法，以便您可以分析問題所在。你可能會在這個過程中感到痛苦，但那是暫時的。 它還要求你拆除自我的結構，以及你作為自衛手段創造的驕傲。只有這樣，你才能在精神上成長。",
      reverseKeyword: "障礙，困境，不幸和疾病",
      reverseExp:
        "它指的是你將來面臨的一場動盪時期，以及它會給你帶來新的轉變。 它還表明，雖然你喜歡變化，但你卻厭惡嘗試接受它們時所發生的痛苦。 你必須優雅地面對困難時期才能讓你學會如何處理它們並繼續前進。它還可以幫助您培養預測生命中任何重大災難所需的直觀感受。",
      star: "火星",
    },
  },
  {
    name: "Two of cups 聖杯二",
    img: twoCups,
    route: "twoofcups",
    order: 2,
  },
  {
    name: "Two of pentacles 錢幣二",
    img: twoPentacles,
    route: "twoofpentacles",
    order: 2,
  },
  {
    name: "Two of swords 寶劍二",
    img: twoSwords,
    route: "twoofswords",
    order: 2,
  },
  {
    name: "Two of wands 權杖二",
    img: twoWands,
    route: "twoofwands",
    order: 2,
  },
  {
    name: "The world 世界",
    img: world,
    route: "theworld",
    order: 21,
    waiteExp: {
      forwardKeyword: "自由，領導，清晰，旅行，榮耀，簡單",
      forwardExp:
        "這意味著您已經完成了一個生命中的重要里程碑。儘管遇到逆境，挑戰和困難，你的努力終於得到了回報，因為你進入了一個承諾幸福，公眾認可和欽佩的新階段。你現在已經堅如磐石，隨時準備勇敢面對任何局面而不會崩潰。現在重要的是利用您的知識和經驗，通過教育或社會工作向世界回饋一些東西。隨著卡片加強旅行和全球意識，您可能會搬家。",
      reverseKeyword: "失去自由，停滯，失望，失敗",
      reverseExp:
        "它表明無論你多麼努力地工作，你的努力都沒有給出任何結果。可能是你在生活的太多方面投入了大量的精力，而不是重要的。<br>將您的努力引導到一個單一的出口，如完成項目或建造房屋，以確保取得積極成果。面臨的挑戰是以充滿信心和巨大力量迎接意外障礙，以便實現目標的機會增加。",
      star: "土星",
    },
  },
];
