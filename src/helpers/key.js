export const getCanNavigateByKey = ({
    isSelectedLogue,
    isAboutShown,
    isNavExpanded,
    isPromoShown,
    isScoreShown,
    isWikiShown,
}) => {
    if (isPromoShown) {
        return true
    }

    return (
        (
            // Not navigable in logue unless nav is expanded.
            !isSelectedLogue || isNavExpanded
        ) &&
        !isAboutShown &&
        !isScoreShown &&
        !isWikiShown
    )
}
