export const IS_LOGUE_OVERVIEW_SELECTOR = (
    { lyricStore: { isLogueOverviewShown } }
) => isLogueOverviewShown

export const SELECTED_OVERVIEW_OPTION_SELECTOR = (
    { lyricStore: { selectedOverviewOption } }
) => selectedOverviewOption

export const SELECTED_TIPS_OPTION_SELECTOR = (
    { lyricStore: { selectedTipsOption } }
) => selectedTipsOption

export const IS_FORCED_SHOWN_OVERVIEW_SELECTOR = (
    { lyricStore: { isForcedShownOverview } }
) => isForcedShownOverview

export const IS_SONG_SHOWN_OVERVIEW_SELECTOR = (
    { lyricStore: { isSongShownOverview } }
) => isSongShownOverview

export const IS_SONG_SHOWN_TIPS_SELECTOR = (
    { lyricStore: { isSongShownTips } }
) => isSongShownTips
