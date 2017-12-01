// Basic helpers that only know DOM elements and JavaScript objects.

export const roundPercentage = (rawPercentage) => {
    return Math.round(rawPercentage * 100) / 100
}

export const hasParentWithTagName = (child, parentTagName = '') => {
    let node = child
    while (node !== null) {
        if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
            return true
        }
        node = node.parentNode
    }
    return false
}

export const getComponentShouldUpdate = ({

    props,
    nextProps,
    updatingPropsArray

}) => {
    let counter = 0

    // Loop only until a mismatch is found.
    while (counter < updatingPropsArray.length) {
        const updatingKeyEntity = updatingPropsArray[counter]

        if (typeof updatingKeyEntity === 'string') {
            const updatingValueEntity = props[updatingKeyEntity],
                nextPropsValue = nextProps[updatingKeyEntity]

            // If object, compare first level of values.
            if (typeof updatingValueEntity === 'object') {
                return !getSetsAreSame(updatingValueEntity, nextPropsValue)

            } else {
                // Mismatch, so update!
                if (updatingValueEntity !== nextPropsValue) {
                    return true
                }
            }

        /**
         * If object, then compare mismatch only if a prop is true.
         */
        } else {
            const { staticProp,

                    // Default condition is true.
                    conditionalShouldBe = true,

                    subUpdatingKey } = updatingKeyEntity,

                // We care that a static prop happens to be a certain value.
                staticConditionalMet = staticProp &&
                    !!nextProps[staticProp] === conditionalShouldBe

            if (staticConditionalMet) {

                // Mismatch, so update!
                if (props[subUpdatingKey] !== nextProps[subUpdatingKey]) {
                    return true
                }
            }
        }

        counter++
    }

    // If loop ends with no mismatch, don't update.
    return false
}

export const getSetsAreSame = (smallerSet, largerSet) => {
    // Assume that larger set is superset of smaller set.

    // If either set is null, just return whether they are both null.
    if (smallerSet === null || largerSet === null) {
        return smallerSet === largerSet
    }

    return Object.keys(smallerSet).reduce((allSame, key) => {
        const valueIsSame = smallerSet[key] === largerSet[key] ||

            // Functions are exempt, as they constantly change through binding.
            typeof smallerSet[key] === 'function'

        // Keep for debugging purposes, for now.
        // if (!valueIsSame) {
        //     console.error('prop not same:', key, smallerSet[key], largerSet[key]);
        // }

        return allSame ? valueIsSame : allSame
    }, true)
}

export const getArrayOfLength = ({ length, indexBase = 0 }) => {
    return Array.from(
        { length },
        (nothing, i) => i + indexBase
    )
}
