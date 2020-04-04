// Component to show individual box of verses.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getParentOfVerseClassNamesForIndices } from '../../helper'

import VerseHoc from '../../../Verse/Hoc'
import Verse from '../../../Verse'
import TipsHand from '../../../Tips/Hand'

import {
    RESPONSE,
    RHYME
} from '../../../../constants/lyrics'
import {
    ANNOTATION,
    ACTIVATED_VERSE,
    STANZA_TAB,
    WORMHOLES,
    WIKI
} from '../../../../constants/tips'

/*************
 * CONTAINER *
 *************/

class UnitCard extends PureComponent {

    static propTypes = {
        // From parent.
        stanzaTypeIndex: PropTypes.number,
        stanzaType: PropTypes.string.isRequired,

        versesArray: PropTypes.array.isRequired,
        handleVerseSelect: PropTypes.func
    }

    handleStanzaTabClick = (e) => {
        logEvent({ e, componentName: 'UnitCard' })

        const {
                handleVerseSelect,
                versesArray
            } = this.props,

            { verseIndex } = versesArray[0]

        handleVerseSelect({
            selectedVerseIndex: verseIndex,
            scrollLog: 'Stanza tab selected verse.'
        })
    }

    render() {

        const {
            // From props.
            stanzaTypeIndex,
            stanzaType,

            // From controller.
            versesArray,

            ...other
        } = this.props

        if (versesArray) {
            return (
                <UnitCardView {...other}
                    {...{
                        versesArray,
                        stanzaTypeIndex,
                        stanzaType,
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
        stanzaTypeIndex: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number
        ]),
        versesArray: PropTypes.array.isRequired,
        stanzaType: PropTypes.string.isRequired,

        showAnnotationTip: PropTypes.bool.isRequired,
        showActivatedTip: PropTypes.bool.isRequired,
        showStanzaTabTip: PropTypes.bool.isRequired,
        showWormholesTip: PropTypes.bool.isRequired,
        showWikiTip: PropTypes.bool.isRequired,

        handleStanzaTabClick: PropTypes.func.isRequired
    },

    UnitCardView = ({
        versesArray,
        stanzaTypeIndex,
        stanzaType,
        showAnnotationTip,
        showActivatedTip,
        showStanzaTabTip,
        showWormholesTip,
        showWikiTip,
        handleStanzaTabClick,

        ...other
    }) => {

        const isTabbed = Boolean(stanzaTypeIndex),

            tabText = `${
                stanzaType
            }${
                stanzaTypeIndex > 0 ? ` ${stanzaTypeIndex}` : ''
            }`,

            isSubCard = stanzaType === RESPONSE || stanzaType === RHYME

        return (
            <div className={cx(

                // "Parent of verse index."
                getParentOfVerseClassNamesForIndices({
                    entities: versesArray
                }),

                'UnitCard',
                isSubCard && 'UnitCard__subCard',
                isTabbed && 'UnitCard__tabbed'
            )}>
                <div className={cx(
                    'UnitCard__sheet',
                    'boxShadow__stanza',
                    'bgColour__unit__pattern',
                    `bgColour__stanzaType__${stanzaType}`
                )}>
                    {versesArray.map((verseObject, stanzaVerseIndex) => {
                        const { verseIndex } = verseObject

                        return (
                            <VerseHoc {...other}
                                inUnit
                                {...{
                                    key: stanzaVerseIndex,
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
                            'boxShadow__stanzaTab',
                            'textShadow__light',
                            'bgColour__unit__pattern',
                            'bgColour__unit__pattern__reverse',
                            `bgColour__stanzaType__${stanzaType}`
                        )}
                        {...{ onClick: handleStanzaTabClick }}
                    >
                        <div
                            {...{
                                className: cx(
                                    'UnitCard__tabText',
                                    'Neuton'
                                )
                            }}
                        >
                            {tabText}
                        </div>
                    </div>
                )}
                {showAnnotationTip && (
                    <TipsHand {...{ tipType: ANNOTATION }} />
                )}
                {showActivatedTip && (
                    <TipsHand {...{ tipType: ACTIVATED_VERSE }} />
                )}
                {showStanzaTabTip && (
                    <TipsHand {...{ tipType: STANZA_TAB }} />
                )}
                {showWormholesTip && (
                    <TipsHand {...{ tipType: WORMHOLES }} />
                )}
                {showWikiTip && (
                    <TipsHand {...{ tipType: WIKI }} />
                )}
            </div>
        )
    }

UnitCardView.propTypes = propTypes

export default UnitCard
