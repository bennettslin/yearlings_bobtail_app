// Component to show individual box of verses.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Verse from '../Verse/Verse';

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

    // No shouldComponentUpdate necessary.

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

            {
                inMain
            } = other

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

    const isTabbed = Boolean(stanzaIndex),

        tabText = `${stanzaType}${
            stanzaIndex !== -1 ? ` ${stanzaIndex}` : ''
        }`

    return (
        <div className={cx(
            'LyricStanzaCard',
            isSubstanza && 'LyricStanzaCard__substanza',
            isTabbed && 'LyricStanzaCard__tabbed'
        )}>

            {/* This is the tab's box shadow. */}
            {isTabbed && (
                <div className={cx(
                    'LyricStanzaCard__tab',
                    'LyricStanzaCard__tabShadow',
                    `bgColour__stanza__${stanzaType}`,
                    'boxShadow__lyricStanzaCard'
                )}>
                    {tabText}
                </div>
            )}

            <div className={cx(
                'LyricStanzaCard__sheet',
                'boxShadow__lyricStanzaCard',
                `bgColour__stanza__${stanzaType}`
            )}>
                {stanzaArray.map((verseObject, stanzaVerseIndex) => {
                    const {
                            stanzaMap,
                            unitMap,
                            verseIndex
                        } = verseObject

                    return !stanzaMap && !unitMap && (
                            <Verse {...other}
                                key={stanzaVerseIndex}
                                {...{
                                    verseObject
                                }}
                                {...!isNaN(verseIndex) && {
                                    verseIndex
                                }}
                            />
                        )
                    }
                )}
            </div>

            {/* This tab covers the sheet's box shadow. */}
            {isTabbed && (
                <div className={cx(
                    'LyricStanzaCard__tab',
                    `bgColour__stanza__${stanzaType}`
                )}>
                    {tabText}
                </div>
            )}
        </div>
    )
}

LyricStanzaCardView.propTypes = lyricStanzaCardViewPropTypes

export default LyricStanzaCard
