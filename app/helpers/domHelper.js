// Helpers for DOM stuff.
import keys from 'lodash.keys'
import pickBy from 'lodash.pickby'
import scrollIntoView from 'scroll-into-view'

import { getLyricTopAlign, getCarouselLeftAlign } from '../helpers/responsiveHelper'


import { CAROUSEL_SCROLL,
         SCROLL_CLASSES } from '../constants/dom'

export const getPrefixPrependedClassNames = (classNames, prefix) => {

    if (!classNames) {
        return false;
    }

    const classNamesArray =
        typeof classNames === 'object' ?
            keys(pickBy(classNames)) : classNames.split(' ')

    return classNamesArray.map(name => (
        `${prefix}__${name}`
    ))
}

export const getClientX = (e) => {
    const { nativeEvent } = e,
        { touches,
          clientX } = nativeEvent

    // If mouse, clientX is in native event. If touch, it's in first touch.
    return touches ? touches[0].clientX : clientX
}

const _getIsValidScrollingTargetCallback = (scrollParentClass) => {

    // Don't scroll any immovable parent containers.
    return (parent) => {
        const { className } = parent,
            isValidTarget =
                parent !== window
                && (
                    className
                    && new RegExp(
                            "(\\s|^)" + scrollParentClass + "(\\s|$)"
                        ).test(className)
                )

        return isValidTarget
    }
}

const _scrollElementCallback = (status) => {
    console.warn('scroll status:', status);
}

export const scrollElementIntoView = ({

    scrollClass,
    index,
    time = 350,
    callback = _scrollElementCallback,

    deviceIndex,
    windowWidth,
    isLyricExpanded

}) => {
    const { childClass,
            parentClass } = SCROLL_CLASSES[scrollClass],

        selector = isNaN(index) ? childClass : `${childClass}__${index}`,

        element = document.getElementsByClassName(selector)[0],

        isCarousel = scrollClass === CAROUSEL_SCROLL

    if (element) {
        // console.warn(`Scrolling ${selector} into view.`);

        const align = isCarousel ?
            getCarouselLeftAlign(deviceIndex, windowWidth) :
            getLyricTopAlign(deviceIndex, isLyricExpanded),

            validTarget = _getIsValidScrollingTargetCallback(
                parentClass
            )

        scrollIntoView(element, {
            time,
            align,
            validTarget
        }, callback)
    }
}

