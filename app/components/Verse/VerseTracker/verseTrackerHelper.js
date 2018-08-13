export const getSelectedChildSelector = ({
    verseIndex,
    inUnit,
    inVerseBar,
    inSlider
}) => {

    let locationString

    if (inUnit) {
        locationString = 'unit'

    } else if (inVerseBar) {
        locationString = 'verseBar'

    } else if (inSlider) {
        locationString = 'slider'
    }

    return `VerseTracker__selected__${
        verseIndex
    }__${
        locationString
    }`
}
