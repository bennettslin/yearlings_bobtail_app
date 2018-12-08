const
    THEATRE = 'canTheatreRender',
    SCENE = 'canSceneRender',
    LYRIC = 'canLyricRender',
    CAROUSEL = 'canCarouselRender',

    THEATRE_SCENE_LYRIC_CAROUSEL_ORDER = [
        THEATRE,
        SCENE,
        LYRIC,
        CAROUSEL
    ],

    THEATRE_LYRIC_CAROUSEL_SCENE_ORDER = [
        THEATRE,
        LYRIC,
        CAROUSEL,
        SCENE
    ]

const getNextKeyToRender = ({
    order = THEATRE_SCENE_LYRIC_CAROUSEL_ORDER,
    currentKey

}) => {
    const
        currentIndex = order.indexOf(currentKey),
        nextIndex =
            currentIndex === order.length - 1 ?
                -1 :
                currentIndex + 1

    if (nextIndex > -1) {
        return order[nextIndex]

    } else {
        return ''
    }
}

export {
    THEATRE,
    SCENE,
    LYRIC,
    CAROUSEL,
    THEATRE_SCENE_LYRIC_CAROUSEL_ORDER,
    THEATRE_LYRIC_CAROUSEL_SCENE_ORDER,

    getNextKeyToRender
}
