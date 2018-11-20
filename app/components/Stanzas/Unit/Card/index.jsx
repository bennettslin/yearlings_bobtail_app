// Component to show individual box of verses.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getParentOfVerseClassNamesForIndices } from '../../helper'

import VerseHoc from '../../../Verse/Hoc';
import Verse from '../../../Verse';

/*************
 * CONTAINER *
 *************/

class UnitCard extends Component {

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
        isSubCard: PropTypes.bool.isRequired,

        handleLyricVerseSelect: PropTypes.func.isRequired
    }

    // No shouldComponentUpdate necessary.

    handleStanzaTabClick = (e) => {
        const {
                handleLyricVerseSelect,
                stanzaArray
            } = this.props,

            { verseIndex } = stanzaArray[0]

        handleLyricVerseSelect(
            e,
            verseIndex,
            true
        )
    }

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
                <UnitCardView {...other}
                    {...{
                        stanzaArray,
                        isSubCard,
                        stanzaTypeIndex: shownStanzaIndex,
                        stanzaType: stanzaTypeLabel,
                        handleStanzaTabClick: this.handleStanzaTabClick
                    }}
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
    stanzaType: PropTypes.string.isRequired,

    handleStanzaTabClick: PropTypes.func.isRequired
},

UnitCardView = ({
    isSubCard,
    stanzaArray,
    stanzaTypeIndex,
    stanzaType,
    handleStanzaTabClick,

...other }) => {

    const isTabbed = Boolean(stanzaTypeIndex),

        tabText = `${
            stanzaType
        }${
            stanzaTypeIndex > 0 ? ` ${stanzaTypeIndex}` : ''
        }`

    return (
        <div className={cx(

            // "Parent of verse index."
            getParentOfVerseClassNamesForIndices({
                entities: stanzaArray
            }),

            'UnitCard',
            isSubCard && 'UnitCard__subCard',
            isTabbed && 'UnitCard__tabbed'
        )}>

            {/* This is the tab's box shadow. */}
            {isTabbed && (
                <div
                    className={cx(
                        'UnitCard__tab',
                        'UnitCard__tabShadow',
                        'boxShadow__unitCard'
                    )}
                >
                    {tabText}
                </div>
            )}

            <div className={cx(
                'UnitCard__sheet',
                'boxShadow__unitCard',
                'bgColour__unit__pattern',
                `bgColour__stanzaType__${stanzaType}`
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
                            <VerseHoc {...other}
                                key={stanzaVerseIndex}
                                inUnit
                                {...{
                                    verseIndex,
                                    verseObject,
                                    VerseComponent: Verse
                                }}
                            />
                        )
                    }
                )}
            </div>

            {/* This tab covers the sheet's box shadow. */}
            {isTabbed && (
                <div
                    className={cx(
                        'UnitCard__tab',
                        'UnitCard__tabTop',
                        'bgColour__unit__pattern',
                        `bgColour__stanzaType__${stanzaType}`
                    )}
                    onClick={handleStanzaTabClick}
                >
                    {tabText}
                </div>
            )}
        </div>
    )
}

UnitCardView.propTypes = propTypes

export default UnitCard
