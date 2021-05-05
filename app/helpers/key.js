export const getCanNavigateByKey = ({
    isSelectedLogue,
    isAboutShown,
    isMarketingShown,
    isScoreShown,
    isWikiShown,
}) => {
    if (isMarketingShown) {
        return true
    }

    return (
        !isSelectedLogue &&
        !isAboutShown &&
        !isScoreShown &&
        !isWikiShown
    )
}
