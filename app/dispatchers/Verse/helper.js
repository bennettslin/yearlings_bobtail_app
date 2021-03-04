export const logVerseSelect = ({
    selectedSongIndex,
    verseIndex,
    fromPlayerListen,
    fromPlayerEndRepeat,

}) => {
    let action = 'verse'
    if (fromPlayerListen) {
        action = verseIndex === 0 ?
            'playerRepeat' :
            'playerListen'

    } else if (fromPlayerEndRepeat) {
        action = 'playerEndRepeat'
    }

    logSelect({
        action,
        song: selectedSongIndex,
        verse: verseIndex,
    })
}
