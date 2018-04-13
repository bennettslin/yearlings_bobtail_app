const
    CAROUSEL_SCROLL = 'carouselScroll',
    LYRIC_ANNOTATION_SCROLL = 'lyricAnnotationScroll',
    VERSE_SCROLL = 'verseScroll'

module.exports = {
    // ANNOTATION_SCROLL: 'annotation',
    // CAROUSEL_SCROLL_PARENT: 'Carousel__scrollParent',
    // CAROUSEL_ANNOTATION_SCROLL: 'CarouselAnnotation__scrollChild',
    // LYRICS_SCROLL: 'lyrics-scroll',
    // VERSE_SCROLL: 'verse',

    CAROUSEL_SCROLL,
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL,

    SCROLL_CLASSES: {

        [CAROUSEL_SCROLL]: {
            parentClass: 'Carousel__scrollParent',
            childClass: 'Carousel__scrollChild'
        },

        [LYRIC_ANNOTATION_SCROLL]: {
            parentClass: 'LyricAnnotation__scrollParent',
            childClass: 'LyricAnnotation__scrollChild'
        },

        [VERSE_SCROLL]: {
            parentClass: 'Verse__scrollParent',
            childClass: 'Verse__scrollChild'
        }
    }
}
