// Component to show individual box of verses.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import LyricVerse from './LyricVerse'

import { getComponentShouldUpdate } from '../../helpers/generalHelper'

/*************
 * CONTAINER *
 *************/

class LyricStanzaCard extends Component {

    static defaultProps = {
        inMain: false,
        subsequent: false,
        isSubstanza: false
    }

    static propTypes = {
        // From parent.
        stanzaIndex: PropTypes.number,
        stanzaType: PropTypes.string,
        substanzaType: PropTypes.string,
        sideStanzaType: PropTypes.string,
        sideSubstanzaType: PropTypes.string,
        subsequent: PropTypes.bool.isRequired,

        stanzaArray: PropTypes.array,
        inMain: PropTypes.bool.isRequired,
        isSubstanza: PropTypes.bool.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'stanzaIndex',
                    'stanzaType',
                    'substanzaType',
                    'sideStanzaType',
                    'sideSubstanzaType',
                    'subsequent',
                    'stanzaArray',
                    'inMain',
                    'isSubstanza',
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const {
                // From props.
                stanzaIndex,
                stanzaType,
                substanzaType,
                sideStanzaType,
                sideSubstanzaType,
                subsequent,

                // From controller.
                stanzaArray,
                isSubstanza,

            ...other } = this.props,

            { inMain } = other

        if (stanzaArray) {

            const shownStanzaIndex =
                inMain
                && !subsequent
                && !isSubstanza
                && !isSubstanza
                && stanzaIndex

            let stanzaTypeLabel

            if (inMain) {
                stanzaTypeLabel = isSubstanza ? substanzaType : stanzaType

            } else {
                stanzaTypeLabel = isSubstanza ? sideSubstanzaType : sideStanzaType
            }

            return (
                <LyricStanzaCardView {...other}
                    stanzaArray={stanzaArray}
                    isSubstanza={isSubstanza}
                    stanzaIndex={shownStanzaIndex}
                    stanzaType={stanzaTypeLabel}
                />
            )
        } else {
            return null
        }
    }
}

/****************
 * PRESENTATION *
 ****************/

const lyricStanzaCardViewPropTypes = {
    // From parent.
    isSubstanza: PropTypes.bool.isRequired,
    stanzaIndex: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired
},

LyricStanzaCardView = ({

    isSubstanza,
    stanzaArray,
    stanzaIndex,
    stanzaType,

...other }) => {

    return (
        <div className={cx(
            'LyricStanzaCard',
            isSubstanza && 'offset__stanza__overlap',
            isSubstanza && 'offset__stanza__right'
        )}>

            {stanzaIndex &&
                <div className={cx(
                    'LyricStanzaCard__tab',
                    `bgColour__stanza__${stanzaType}`
                )}>
                    {`${stanzaType}${
                        stanzaIndex !== -1 ? ` ${stanzaIndex}` : ''
                    }`}
                </div>
            }

            <div className={cx(
                'LyricStanzaCard__sheet',
                `bgColour__stanza__${stanzaType}`
            )}>
                {stanzaArray.map((verseObject, stanzaVerseIndex) => {
                    const { stanzaMap,
                            unitMap } = verseObject

                    console.error('render')

                    return !stanzaMap && !unitMap && (
                            <LyricVerse {...other}
                                key={stanzaVerseIndex}
                                verseObject={verseObject}
                            />
                        )
                    }
                )}
            </div>
        </div>
    )
}

LyricStanzaCardView.propTypes = lyricStanzaCardViewPropTypes

export default LyricStanzaCard
