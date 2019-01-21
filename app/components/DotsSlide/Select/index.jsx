// Button in dots section to select and deselect dot.
import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSelectDispatcher from '../../../dispatchers/DotSelectDispatcher'
import Button from '../../Button'
import Dot from '../../Dot'
import Anchor from '../../Anchor'

import { populateRefs } from 'helpers/ref'

import { ENTER } from 'constants/access'
import { DOT_DESCRIPTIONS } from 'constants/dots'

class DotsSlideSelect extends PureComponent {

    static propTypes = {
        // From parent.
        dotIndex: PropTypes.number.isRequired,
        dotKey: PropTypes.string.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isInteractivated: PropTypes.bool.isRequired
    }

    _toggleSelectedDot = () => {
        this.dispatchSelectDot(this.props.dotIndex)
    }

    _toggleInteractivatedDot = () => {
        this.dispatchInteractivatedDot(this.props.dotIndex)
        return true
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            dotKey,
            isAccessed,
            isSelected,
            isInteractivated
        } = this.props

        return (
            <___>
                <div
                    {...{
                        className: cx(
                            'DotsSlideSelect'
                        )
                    }}
                >
                    <Button
                        isCustomSize
                        {...{
                            className: cx({
                                /**
                                 * These classes are passed purely to let the
                                 * Button know to update its children. Not
                                 * ideal, but it will do for now.
                                 */
                                'isSelected': isSelected,
                                'isInteractivated': isInteractivated
                            }),
                            buttonName: 'slideSelect',
                            accessKey: ENTER,
                            isAccessed: isAccessed,
                            handleButtonClick: this._toggleSelectedDot
                        }}
                    >
                        <Dot
                            {...{
                                dotKey,
                                isAccessed,
                                isDeselected: !isSelected
                            }}
                        />

                        <div className={cx(
                            'SlideSelectDescription',

                            isAccessed &&
                                'SlideSelectDescription__accessed',

                            isInteractivated &&
                                'SlideSelectDescription__interactivated',

                            'abF',
                            'flexCentreContainer'
                        )}>
                            {DOT_DESCRIPTIONS[dotKey]}
                        </div>
                    </Button>

                    <Anchor
                        {...{
                            isAccessed,
                            isSelected: isInteractivated,
                            text: dotKey,
                            handleAnchorClick: this._toggleInteractivatedDot
                        }}
                    />
                </div>
                <DotSelectDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

export default DotsSlideSelect
