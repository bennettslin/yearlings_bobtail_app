export const getCanNavigateByKey = ({
    isSelectedLogue,
    isAboutShown,
    isPromoShown,
    isScoreShown,
    isWikiShown,
}) => {
    if (isPromoShown) {
        return true
    }

    return (
        !isSelectedLogue &&
        !isAboutShown &&
        !isScoreShown &&
        !isWikiShown
    )
}
