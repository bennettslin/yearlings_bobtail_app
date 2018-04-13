const
    CAROUSEL_SCROLL = 'carouselScroll',
    LYRIC_SCROLL = 'lyricScroll'

module.exports = {
    // ANNOTATION_SCROLL: 'annotation',
    // CAROUSEL_SCROLL_PARENT: 'Carousel__scrollParent',
    // CAROUSEL_ANNOTATION_SCROLL: 'CarouselAnnotation__scrollChild',
    // LYRICS_SCROLL: 'lyrics-scroll',
    // VERSE_SCROLL: 'verse',

    CAROUSEL_SCROLL,
    LYRIC_SCROLL,

    SCROLL_CLASSES: {

        [CAROUSEL_SCROLL]: {
            parentClass: 'Carousel__scrollParent',
            childClass: 'Carousel__scrollChild'
        },

        [LYRIC_SCROLL]: {
            parentClass: 'Lyric__scrollParent',
            childClass: 'Lyric__scrollChild'
        }
    }
}
