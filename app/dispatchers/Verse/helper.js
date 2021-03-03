export const logVerseSelect = ({
    selectedSongIndex,
    verseIndex,
    fromPlayerListen,
    fromPlayerRepeat,

}) => {
    let action = 'verse'
    if (fromPlayerListen) {
        action = 'playerListen'
    } else if (fromPlayerRepeat) {
        action = 'playerRepeat'
    }

    logSelect({
        action,
        song: selectedSongIndex,
        verse: verseIndex,
    })
}
