const alphabet = new Map([
    ['a', '🐻'],
    ['b', '🐝'],
    ['c', '🐐'],
    ['ç', '☂️'],
    ['d', '🌞'],
    ['dh', '🎁'],
    ['e', '🐘'],
    ['ë', '🧁'],
    ['f', '👗'],
    ['g', '☝️'],
    ['gj', '🐓'],
    ['h', '🌜'],
    ['i', '🦔'],
    ['j', '👔'],
    ['k', '🐎'],
    ['l', '🌼'],
    ['ll', '💡'],
    ['m', '🍎'],
    ['n', '👰'],
    ['nj', '🥇'],
    ['o', '⏰'],
    ['p', '🦆'],
    ['q', '🐶'],
    ['r', '🚀'],
    ['rr', '🍇'],
    ['s', '👓'],
    ['sh', '🪜'],
    ['t', '⚽'],
    ['th', '💰'],
    ['u', '💍'],
    ['v', '👂'],
    ['x', '✨'],
    ['xh', '🕌'],
    ['y', '🌈'],
    ['z', '❤️'],
    ['zh', '🐸']
])

export default function prepareAlphabet() {
    let cells = ''
    for (let [letter, emoji] of alphabet) {
        cells += `<div><span>${emoji}</span><span>${letter}</span></div>`
    }
    return cells
}

export function prepareSentence(text) {
    text = toAlbanin(text)
    let cells = ''
    for (let letter of text) {
        const emoji = alphabet.get(letter)

        if(emoji !== undefined) {
            cells += `<div class="letter"><span>${emoji}</span><span class="box"></span></div>`
        } else {
            cells += `<div class="space"></div>`
        }
    }
    return cells
}

function toAlbanin(text) {
    text = text.toLowerCase()
    let letters = []
    let letter = ''

    for(let i = 0; i < text.length; i++) {
        if(text[i-1] == 'd' && text[i] == 'h') letter = 'dh'
        else if(text[i-1] == 's' && text[i] == 'h') letter = 'sh'
        else if(text[i-1] == 't' && text[i] == 'h') letter = 'th'
        else if(text[i-1] == 'x' && text[i] == 'h') letter = 'xh'
        else if(text[i-1] == 'z' && text[i] == 'h') letter = 'zh'
        else if(text[i-1] == 'g' && text[i] == 'j') letter = 'gj'
        else if(text[i-1] == 'n' && text[i] == 'j') letter = 'nj'
        else if(text[i-1] == 'l' && text[i] == 'l') letter = 'll'
        else if(text[i-1] == 'r' && text[i] == 'r') letter = 'rr'
        else letter = text[i]

        if(letter.length == 2) {
            letters.pop()
            letters.push(letter)
        } else {
            letters.push(letter)
        }
    }

    return letters
}