module.exports = {
    WINDOW_STORAGE: window.localStorage,

    // Access.
    ACCESSED_ANNOTATION_INDEX: 'accessedAnnotationIndex',
    ACCESSED_ANNOTATION_ANCHOR_INDEX: 'accessedAnnotationAnchorIndex',
    ACCESSED_DOT_INDEX: 'accessedDotIndex',
    ACCESSED_NAV_SONG_INDEX: 'accessedNavSongIndex',

    // Audio.
    IS_PLAYING: 'isPlaying',
    UPDATED_TIME_PLAYED: 'updatedTimePlayed',

    // Device.
    DEVICE_INDEX: 'deviceIndex',
    WINDOW_HEIGHT: 'windowHeight',
    WINDOW_WIDTH: 'windowWidth',
    STAGE_COORDINATES: 'stageLayout',
    STAGE_COORDINATES_DEFAULT: {
        top: 0,
        left: 0,
        width: 100,
        height: 100
    },

    // Player.
    CAN_PLAY_THROUGHS: 'canPlayThroughs',
    IS_SCORE_LOADED: 'scoreLoaded',

    // Render.
    IS_WINDOW_RESIZE_RENDERABLE: 'isWindowResizeRenderable',
    IS_SONG_CHANGE_RENDERABLE: 'isSongChangeRenderable',
    RENDER_READY_SONG_INDEX: 'renderableSongIndex',
    RENDER_READY_ANNOTATION_INDEX: 'renderableAnnotationIndex',
    RENDER_READY_VERSE_INDEX: 'renderableVerseIndex',
    CAN_THEATRE_RENDER: 'canTheatreRender',
    CAN_MAIN_RENDER: 'canMainRender',
    CAN_SLIDER_RENDER: 'canSliderRender',
    CAN_LYRIC_RENDER: 'canLyricRender',
    CAN_CAROUSEL_RENDER: 'canCarouselRender',
    CAN_SCENE_RENDER: 'canSceneRender',
    RENDERABLE_KEY_Y_INDEX: 'renderableCubesYIndex',
    CAN_PRESENCES_RENDER: 'canPresencesRender',
    CAN_PIXELS_RENDER: 'canPixelsRender',

    // Responsive.
    IS_HEIGHTLESS_LYRIC_COLUMN: 'isHeightlessLyricColumn',
    IS_HIDDEN_NAV: 'isHiddenCarouselNav',
    IS_MOBILE_WIKI: 'isMobileWiki',
    IS_SCORES_TIPS_IN_MAIN: 'isScoresTipsInMain',
    IS_TWO_ROW_MENU: 'isTwoRowMenu',
    SHOW_ONE_OF_TWO_LYRIC_COLUMNS: 'showOneOfTwoLyricColumns',
    SHOW_SHRUNK_NAV_ICON: 'showShrunkNavIcon',
    SHOW_SINGLE_BOOK_COLUMN: 'showSingleBookColumn',

    // Session.
    APP_MOUNTED: 'appMounted',
    // For selecting a wiki anchor from an unselected carousel annotation.
    CAROUSEL_ANNOTATION_INDEX: 'carouselAnnotationIndex',
    INTERACTIVATED_VERSE_INDEX: 'interactivatedVerseIndex',
    CURRENT_SCENE_INDEX: 'currentSceneIndex',
    IS_LYRIC_EXPANDED: 'isLyricExpanded',
    IS_VERSE_BAR_ABOVE: 'isVerseBarAbove',
    IS_VERSE_BAR_BELOW: 'isVerseBarBelow',
    IS_MANUAL_SCROLL: 'isManualScroll',
    SHOWN_BOOK_COLUMN_INDEX: 'shownBookColumnIndex',

    // Slider.
    IS_SLIDER_MOVING: 'isSliderMoving',
    IS_SLIDER_TOUCHED: 'isSliderTouched',
    SLIDER_LEFT: 'sliderLeft',
    SLIDER_RATIO: 'sliderRatio',
    SLIDER_WIDTH: 'sliderWidth',
    SLIDER_VERSE_INDEX: 'sliderVerseIndex',

    // Storage.
    SELECTED_ACCESS_INDEX: 'selectedAccessIndex',
    SELECTED_ADMIN_INDEX: 'selectedAdminIndex',
    SELECTED_ANNOTATION_INDEX: 'selectedAnnotationIndex',
    SELECTED_AUDIO_OPTION_INDEX: 'selectedAudioOptionIndex',
    SELECTED_CAROUSEL_NAV_INDEX: 'selectedCarouselNavIndex',
    SELECTED_DOT_KEYS: 'selectedDotKeys',
    SELECTED_DOTS_INDEX: 'selectedDotsIndex',
    SELECTED_LYRIC_COLUMN_INDEX: 'selectedLyricColumnIndex',
    SELECTED_OVERVIEW_INDEX: 'selectedOverviewIndex',
    SELECTED_SCORE_INDEX: 'selectedScoreIndex',
    SELECTED_SONG_INDEX: 'selectedSongIndex',
    SELECTED_TIME_PLAYED: 'selectedTimePlayed',
    SELECTED_TIPS_INDEX: 'selectedTipsIndex',
    SELECTED_TITLE_INDEX: 'selectedTitleIndex',
    SELECTED_VERSE_INDEX: 'selectedVerseIndex',
    SELECTED_WIKI_INDEX: 'selectedWikiIndex'
}
