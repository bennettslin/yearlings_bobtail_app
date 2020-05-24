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
        formTypeIndex: PropTypes.number,
        formType: PropTypes.string.isRequired,

        versesArray: PropTypes.array.isRequired,
        handleVerseSelect: PropTypes.func
    }

    handleStanzaTabClick = e => {
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
            formTypeIndex,
            formType,

            // From controller.
            versesArray,

            ...other
        } = this.props

        if (versesArray) {
            return (
                <UnitCardView {...other}
                    {...{
                        versesArray,
                        formTypeIndex,
                        formType,
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
        formTypeIndex: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number
        ]),
        versesArray: PropTypes.array.isRequired,
        formType: PropTypes.string.isRequired,

        showAnnotationTip: PropTypes.bool,
        showActivatedTip: PropTypes.bool,
        showStanzaTabTip: PropTypes.bool,
        showWormholesTip: PropTypes.bool,
        showWikiTip: PropTypes.bool,

        handleStanzaTabClick: PropTypes.func.isRequired
    },

    UnitCardView = ({
        versesArray,
        formTypeIndex,
        formType,
        showAnnotationTip,
        showActivatedTip,
        showStanzaTabTip,
        showWormholesTip,
        showWikiTip,
        handleStanzaTabClick,

        ...other
    }) => {

        const isTabbed = Boolean(formTypeIndex),

            tabText = `${
                formType
            }${
                formTypeIndex > 0 ? ` ${formTypeIndex}` : ''
            }`,

            isSubCard = formType === RESPONSE || formType === RHYME

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
                    `bgColour__formType__${formType}`
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
                            'textShadow__dark',
                            'bgColour__unit__pattern',
                            'bgColour__unit__pattern__reverse',
                            `bgColour__formType__${formType}`
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
                    <TipsHand reverse {...{ tipType: STANZA_TAB }} />
                )}
                {showWormholesTip && (
                    <TipsHand {...{ tipType: WORMHOLES }} />
                )}
                {showWikiTip && (
                    <TipsHand reverse {...{ tipType: WIKI }} />
                )}
            </div>
        )
    }

UnitCardView.propTypes = propTypes

export default UnitCard
