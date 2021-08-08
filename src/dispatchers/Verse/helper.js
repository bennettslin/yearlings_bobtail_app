export const logVerseSelect = ({
    songIndex,
    verseIndex,
    fromPlayerListen,
    fromPlayerEnd,

}) => {
    let action = 'verse'
    if (fromPlayerListen) {
        action = verseIndex === 0 ?
            'playerRepeat' :
            'playerListen'

    } else if (fromPlayerEnd) {
        action = 'playerEnd'
    }

    logSelect({
        action,
        song: songIndex,
        verse: verseIndex,
    })
}
