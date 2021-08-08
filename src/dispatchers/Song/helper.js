export const logSongSelect = ({
    songIndex,
    verseIndex,
    annotationIndex,
    fromPlayerContinue,
    fromPlayerEnd,

}) => {
    let action = 'song'
    if (fromPlayerContinue) {
        action = 'playerContinue'

    } else if (fromPlayerEnd) {
        action = 'playerEnd'
    }

    logSelect({
        action,
        song: songIndex,
        verse: verseIndex,
        annotation: annotationIndex,
    })
}
