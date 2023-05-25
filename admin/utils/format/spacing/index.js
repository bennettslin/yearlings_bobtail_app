import { isString } from '../../../../src/helpers/general'
import {
    LYRIC,
    LYRIC_CENTRE,
    LYRIC_LEFT,
    LYRIC_RIGHT,
    ANCHOR,
} from '../../../../src/constants/lyrics'
import { hasSpecialCharacterAtIndex } from '../../../../src/helpers/format'

const ARRAY_KEYS = {
    footnote: true,
    description: true,
    list: true,
    overview: true,
    paragraph: true,
    title: true,
    [LYRIC]: true,
    [LYRIC_LEFT]: true,
    [LYRIC_CENTRE]: true,
    [LYRIC_RIGHT]: true,
    [ANCHOR]: true,
}

const _appendWithSpaceIfNeeded = text => {
    // Do not append a space for these exceptions.
    if (
        // It's an opening quote for a first word.
        text === `"` ||

        // It's an opening quote for a middle word.
        text.endsWith(' "') ||

        // In promo.
        text.endsWith('("') ||
        text.endsWith('(') ||

        text.endsWith(`…`)
    ) {
        return text
    }

    return `${text} `
}

const _prependWithSpaceIfNeeded = text => {
    // Do not prepend a space for these exceptions.
    if (
        text.startsWith(`'s`) ||
        text.startsWith(`" `) ||
        text.startsWith(`":`) ||
        text.startsWith(`")`) ||
        text.startsWith(`)`) ||
        text.startsWith(`'`) ||
        hasSpecialCharacterAtIndex(text, 0)
    ) {
        return text
    }

    return ` ${text}`
}

const _addSpaceToArrayOrEntity = ({
    newArray,
    nextEntity,

}) => {
    const previousEntity = newArray[newArray.length - 1]

    if (isString(previousEntity)) {
        // Add space to the previous entity.
        newArray[newArray.length - 1] = _appendWithSpaceIfNeeded(previousEntity)
    } else if (isString(nextEntity)) {
        // Add space to the next entity.
        nextEntity = _prependWithSpaceIfNeeded(nextEntity)
    } else {
        // Add lone space to the array.
        newArray.push(' ')
    }

    // Return the next entity, regardless of whether it was modified.
    return nextEntity
}

const _recurseForSpacedFormat = (textEntity, fromKey) => {
    if (isString(textEntity)) {
        return textEntity

    // Array is an object.
    } else if (Array.isArray(textEntity)) {
        if (ARRAY_KEYS[fromKey]) {
            const newArray = []

            textEntity.forEach((entity, index) => {
                if (index) {
                    entity = _addSpaceToArrayOrEntity({
                        newArray,
                        nextEntity: entity,
                    })
                }
                newArray.push(_recurseForSpacedFormat(entity, fromKey))
            })

            return newArray

        } else {
            return textEntity.map(text => (
                _recurseForSpacedFormat(text)
            ))
        }

    // Null is also an object.
    } else if (textEntity && typeof textEntity === 'object') {
        const newArray = {}

        for (const key in textEntity) {
            newArray[key] = _recurseForSpacedFormat(textEntity[key], key)
        }

        return newArray

    } else {
        return textEntity
    }
}

export const getSpacedObjectForKeys = ({
    object,
    keys,

}) => (
    keys.reduce((entity, key) => {
        // This mutates the object.
        const entry = _recurseForSpacedFormat(entity[key], key)
        if (entry) {
            entity[key] = entry
        }
        return entity
    }, object)
)

export const getSpacedObjectsForKeys = ({
    objects,
    keys,

}) => (
    objects.map(object => (
        getSpacedObjectForKeys({
            object,
            keys,
        })
    ))
)
