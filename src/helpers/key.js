export const getCanNavigateByKey = ({
    isAboutShown,
    isPromoShown,
    isScoreShown,
    isWikiShown,
}) => {
    if (isPromoShown) {
        return true
    }

    return (
        !isAboutShown &&
        !isScoreShown &&
        !isWikiShown
    )
}
