// Component to show individual box of verses.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Verse from '../../Verse/Verse';

/*************
 * CONTAINER *
 *************/

class StanzaCard extends Component {

    static defaultProps = {
        inMain: false,
        subsequent: false,
        isSubCard: false
    }

    static propTypes = {
        // From parent.
        stanzaTypeIndex: PropTypes.number,
        stanzaType: PropTypes.string,
        subCardType: PropTypes.string,
        sideCardType: PropTypes.string,
        sideSubCardType: PropTypes.string,
        subsequent: PropTypes.bool.isRequired,

        stanzaArray: PropTypes.array,
        inMain: PropTypes.bool.isRequired,
        isSubCard: PropTypes.bool.isRequired
    }

    // No shouldComponentUpdate necessary.

    render() {

        const {
            // From props.
            stanzaTypeIndex,
            stanzaType,
            subCardType,
            sideCardType,
            sideSubCardType,
            subsequent,

            // From controller.
            stanzaArray,
            isSubCard,
            inMain,

        ...other } = this.props

        if (stanzaArray) {

            const shownStanzaIndex =
                inMain
                && !subsequent
                && !isSubCard
                && !isSubCard
                && stanzaTypeIndex

            let stanzaTypeLabel

            if (inMain) {
                stanzaTypeLabel =
                    isSubCard ?
                        subCardType :
                        stanzaType

            } else {
                stanzaTypeLabel =
                    isSubCard ?
                        sideSubCardType :
                        sideCardType
            }

            return (
                <StanzaCardView {...other}
                    stanzaArray={stanzaArray}
                    isSubCard={isSubCard}
                    stanzaTypeIndex={shownStanzaIndex}
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

const propTypes = {
    // From parent.
    isSubCard: PropTypes.bool.isRequired,
    stanzaTypeIndex: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired
},

StanzaCardView = ({

    isSubCard,
    stanzaArray,
    stanzaTypeIndex,
    stanzaType,

...other }) => {

    const isTabbed = Boolean(stanzaTypeIndex),

        tabText = `${stanzaType}${
            stanzaTypeIndex > 0 ? ` ${stanzaTypeIndex}` : ''
        }`

    return (
        <div className={cx(
            'StanzaCard',
            isSubCard && 'LyricStanzaCard__subCard',
            isTabbed && 'LyricStanzaCard__tabbed'
        )}>

            {/* This is the tab's box shadow. */}
            {isTabbed && (
                <div className={cx(
                    'LyricStanzaCard__tab',
                    'LyricStanzaCard__tabShadow',
                    'boxShadow__lyricStanzaCard'
                )}>
                    {tabText}
                </div>
            )}

            <div className={cx(
                'LyricStanzaCard__sheet',
                'boxShadow__lyricStanzaCard',
                'bgColour__lyricStanza__pattern',
                `bgColour__stanza__${stanzaType}`
            )}>
                {stanzaArray.map((verseObject, stanzaVerseIndex) => {
                    const {
                            isSideUnitMap,
                            isUnitMap,
                            verseIndex
                        } = verseObject

                    /**
                     * Only Uncanny Valley has a side unit map.
                     */
                    return !isSideUnitMap && !isUnitMap && (
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
                    'LyricStanzaCard__tabTop',
                    'bgColour__lyricStanza__pattern',
                    `bgColour__stanza__${stanzaType}`
                )}>
                    {tabText}
                </div>
            )}
        </div>
    )
}

StanzaCardView.propTypes = propTypes

export default StanzaCard
