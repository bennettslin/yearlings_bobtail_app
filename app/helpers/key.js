export const getCanNavigateByKey = ({
    isSelectedLogue,
    isAboutShown,
    isPitchShown,
    isScoreShown,
    isWikiShown,
}) => {
    if (isPitchShown) {
        return true
    }

    return (
        !isSelectedLogue &&
        !isAboutShown &&
        !isScoreShown &&
        !isWikiShown
    )
}
