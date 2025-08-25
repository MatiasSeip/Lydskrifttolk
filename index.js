function omsett(tekst){
    const fjernListe = ["/", "(", ")", "[", "]", "{", "}", "<", ">"]; //teikn vi vil fjerne om dei omringar teksten
    const chars = Array.from(tekst);
    let start = 0; //Finn første ikkje-mellomrom teikn
    while (start < chars.length && chars[start] === " ") start++;
    let end = chars.length - 1; //Finn siste ikkje-mellomrom teikn
    while (end >= 0 && chars[end] === " ") end--;
    if (start <= end && fjernListe.includes(chars[start]) && fjernListe.includes(chars[end])) { //Fjern om både første og siste teikn er i fjernlista
        chars.splice(end, 1);   //fjern siste
        chars.splice(start, 1); //fjern første
    }
    tekst = chars.join("");
    const map = {
        //NAOB-teikn
        "ç": "kj",
        "ʃ": "sj",
        "ʒ": "sj",
        "ə": "e",
        "ŋg": "ng",
        "ŋ": "ng",
        "þ": "th",
//        "x": "ch", //x for (ba)ch skal vi visst bruke
        //andre IPA-teikn enn dei NAOB brukar
        "m̥": "hm",
        "ɱ̊": "hm",
        "ɱ": "m",
        "n̥": "hn",
        "ɳ̊": "hrn",
        "ɳ": "rn",
        "ɲ̊": "hnj",
        "ɲ": "nj",
        "ŋ̊": "hnj",
        "ɴ̥": "hn",
        "ɴ": "n",
        "p̪": "pf",
        "ȹ": "pf",
        "ȸ": "b",
        "t̼": "p",
        "ʲ": "j",
        "ʷ": "o",
        "ʈ": "rt",
        "ɖ": "rd",
        "c": "tj",
        "ɟ": "dj",
        "q": "k",
        "ɢ": "g",
        "ʡ": " ",
        "ʔ": " ",
        "ʂ": "sj",
        "ʐ": "zj",
        "ɕ": "kj",
        "ʑ": "zj",
        "ɸ": "f",
        "β": "v",
        "θ": "th",
        "ð": "th",
        "ʝ": "j",
        "ɣ": "x",
        "ɣ̞": "g",
        "χ": "x",
        "ʀ̝̊": "x",
        "ʁ": "r",
        "ħ": "h",
        "ʕ": "r",
        "ɦ": "h",
        "ʋ": "v",
        "ɹ": "r",
        "ɻ": "r",
        "˞": "r",
        "ɰ": "g",
        "ʔ̞": " ",
        "ⱱ̟": "vb",
        "b̆": "vb",
        "ⱱ": "v",
        "ɾ̥": "hr",
        "ɾ": "r",
        "ɽ̊": "hlr",
        "ɽ": "lr",
        "ɖ̆": "lr",
        "ɢ̆": "r",
        "ʀ̆": "r",
        "ɢ̞̆": "r",
        "ʡ̆": " ",
        "ʡ̮": " ",
        "ʡ̯": " ",
        "ʙ̥": "pv",
        "ᴘ": "pv",
        "ʙ": "bv",
        "r̥": "hr",
        "ʀ̥": "hr",
        "ʀ": "r",
        "ʜ": "h",
        "ʢ": "r",
        "ɬ": "l",
        "ɮ": "j",
        "ꞎ": "kj",
        "ʎ̥": "l",
        "ʎ̝": "j",
        "ɥ": "j",
        "ʟ̥": "l",
        "ʟ̝": "r",
        "l̥": "hl",
        "ɭ̊": "hrl",
        "ɭ": "rl",
        "ʎ̥": "hlj",
        "ʎ": "lj",
        "ʟ̥": "hl",
        "ʟ": "l",
        "ʟ̠": "l",
        "ɺ̥": "hr",
        "ɺ": "l",
        "ɺ̠": "l",
        "ʎ̆": "lj",
        "ʎ̮": "lj",
        "ʎ̯": "lj",
        "ʟ̆": "l",
        "w": "o",
        "ÿ": "u",
        "ʏ̈": "u",
        "ɨ": "y", //slags mellomting mellom y og ø
        "ɨ̞": "ø",
        "ʉ": "u",
        "ɯ": "ø", //slags mellomting mellom o og ø
        "ɯᵝ": "o",
        "ɯ̞ᵝ": "o",
        "ɪ": "i",
        "ɪ̯": "j",
        "Y": "y", //slags mellomting mellom y og u
        "ʊ": "u", //slags mellomting mellom o og u
        "ɘ": "ø", //slags mellomting mellom ø og e
        "ɵ": "u", //slags mellomting mellom u og ø
        "ɤ": "ø",
        "e̞": "e",
        "ɛ̝": "e",
        "ø̞": "ø",
        "œ̝": "ø",
        "ɤ̞": "ø",
        "ʌ̝": "ø",
        "o̞": "å",
        "ɔ̝": "å",
        "ɛ": "e", //heller litt mot æ
        "œ": "ø",
        "ɜ": "ø", //heller litt mot e
        "ɞ": "å",
        "ʌ": "ø", //slags mellomting mellom ø og a
        "ɔ": "å",
        "ɐ": "a", //slags mellomting mellom a og ø
        "ɶ": "a", //enkelte språkforskarar meiner visst at denne lyden ikkje finst
        "ä": "a",
        "ɑ̈": "a",
        "ɑ̟": "a",
        "ɐ̞": "a",
        "ɑ": "a", //standard a
        "ɒ": "å" //slags mellomting mellom å og a
    };
    //legg til i liste dersom sjekkboksen ikkje er klikka
    const norskeVokalar = document.getElementById("norskeVokalar"); //få sjekkboksen
    if (!norskeVokalar.checked) {
        map["u"] = "o";
        map["o"] = "å";
        map["a"] = "æ"; //stavangersk a
    }
    //omset bokstavar
    tekst = tekst
        .normalize("NFD")
        .replace(/(\p{L}\p{M}*)/gu, match => {
            const nfc = match.normalize("NFC");
            return map[nfc] ?? match;
        })
        .normalize("NFC");
    //anna formatering
    tekst = tekst.replace(/\(.*?\)/g, ""); //fjern parentesar
    tekst = tekst.replace(/[aeiouyæøå]\:/gi, (match) => match.slice(0, -1)); //fjern kolon bak lang vokal
    tekst = tekst.replace(/([aeiouyæøå])(.)\:/gi, (match, p1, p2) => p1 + p2 + p2); //dobbelkonsonant
    tekst = tekst.replace(/([aeiouyæøå])\1+/gi, "$1");
    tekst = tekst.replace(/([aeiouyæøå]{1,2})[´`]/gi, (match, p1) => "<i>" + p1 + "</i>"); //kursivtrykk. Funkar for diftongar òg
    tekst = tekst.replace(/[-\[\]\:⫽|ːˈʼ'ˌ]/g, ""); //fjern teikn vi ikkje vil ha
    return tekst;
}

function fjernDiakratiske(tekst, behald = []) {
    return Array.from(
        tekst.normalize("NFD").matchAll(/\p{L}\p{M}*|[^\p{L}]/gu), // bokstav + teikn eller ikkje-bokstav
        m => {
            const cluster = m[0];
            // behald om ikkje-bokstav
            if (!/\p{L}/u.test(cluster[0])) return cluster;
            // behald om kvitelista
            const composed = cluster.normalize("NFC");
            if (behald.includes(composed)) return composed;
            // om ikkje, fjern diakratiske teikn
            return cluster.replace(/[\p{M}\u02B0-\u02FF\u2070-\u209F]/gu, "");
        }
    ).join("");
}

const tillate = ["å", "ç", "ʃ", "ʒ", "ə", "ŋg", "ŋ", "þ", "m̥", "ɱ̊", "ɱ", "n̥", "ɳ̊", "ɳ", "ɲ̊", "ɲ", "ŋ̊", "ɴ̥", "ɴ", "p̪", "ȹ", "ȸ", "t̼", "ʲ", "ʷ", "ʈ", "ɖ", "c", "ɟ", "q", "ɢ", "ʡ", "ʔ", "ʂ", "ʐ", "ɕ", "ʑ", "ɸ", "β", "θ", "ð", "ʝ", "ɣ", "ɣ̞", "χ", "ʀ̝̊", "ʁ", "ħ", "ʕ", "ɦ", "ʋ", "ɹ", "ɻ", "˞", "ɰ", "ʔ̞", "ⱱ̟", "b̆", "ⱱ", "ɾ̥", "ɾ", "ɽ̊", "ɽ", "ɖ̆", "ɢ̆", "ʀ̆", "ɢ̞̆", "ʡ̆", "ʡ̮", "ʡ̯", "ʙ̥", "ᴘ", "ʙ", "r̥", "ʀ̥", "ʀ", "ʜ", "ʢ", "ɬ", "ɮ", "ꞎ", "ʎ̥", "ʎ̝", "ɥ", "ʟ̥", "ʟ̝", "l̥", "ɭ̊", "ɭ", "ʎ̥", "ʎ", "ʟ̥", "ʟ", "ʟ̠", "ɺ̥", "ɺ", "ɺ̠", "ʎ̆", "ʎ̮", "ʎ̯", "ʟ̆", "w", "ÿ", "ʏ̈", "ɨ", "ɨ̞", "ʉ", "ɯ", "ɯᵝ", "ɯ̞ᵝ", "u", "ɪ", "ɪ̯", "Y", "ʊ", "ɘ", "ɵ", "ɤ", "o", "e̞", "ɛ̝", "ø̞", "œ̝", "ɤ̞", "ʌ̝", "o̞", "ɔ̝", "ɛ", "œ", "ɜ", "ɞ", "ʌ", "ɔ", "ɐ", "a", "ɶ", "ä", "ɑ̈", "ɑ̟", "ɐ̞", "ɑ", "ɒ"]

const IPAinput = document.getElementById("IPAinput");
const norskeVokalar = document.getElementById("norskeVokalar");
const IPAomsetting = document.getElementById("IPAomsetting");

function oppdater(){
    inputTekst =IPAinput.value;
    endraTekst = inputTekst.toLowerCase(); //gjer bokstavane små
    endraTekst = fjernDiakratiske(endraTekst, tillate); //fjern diakratiske teikn som ikkje blir omsett
    endraTekst = omsett(endraTekst); //omsett til norske teikn
    IPAomsetting.innerHTML = endraTekst;
}

IPAinput.addEventListener("input", oppdater); // oppdater med skriving

norskeVokalar.addEventListener("change", oppdater); // oppdater med sjekkboks