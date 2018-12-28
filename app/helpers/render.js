const
    CAN_THEATRE_RENDER = 'canTheatreRender',
    CAN_SCENE_RENDER = 'canSceneRender',
    CAN_LYRIC_RENDER = 'canLyricRender',
    CAN_CAROUSEL_RENDER = 'canCarouselRender',

    THEATRE_SCENE_LYRIC_CAROUSEL_ORDER = [
        CAN_THEATRE_RENDER,
        CAN_SCENE_RENDER,
        CAN_LYRIC_RENDER,
        CAN_CAROUSEL_RENDER
    ],

    THEATRE_LYRIC_CAROUSEL_SCENE_ORDER = [
        CAN_THEATRE_RENDER,
        CAN_LYRIC_RENDER,
        CAN_CAROUSEL_RENDER,
        CAN_SCENE_RENDER
    ]

const getNextKeyCanRender = ({
    order = THEATRE_LYRIC_CAROUSEL_SCENE_ORDER,
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
    CAN_THEATRE_RENDER,
    CAN_SCENE_RENDER,
    CAN_LYRIC_RENDER,
    CAN_CAROUSEL_RENDER,
    THEATRE_SCENE_LYRIC_CAROUSEL_ORDER,
    THEATRE_LYRIC_CAROUSEL_SCENE_ORDER,

    getNextKeyCanRender
}
