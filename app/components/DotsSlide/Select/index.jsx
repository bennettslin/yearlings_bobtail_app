// Button in dots section to select and deselect dot.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSelectDispatcher from '../../../dispatchers/DotSelectDispatcher'
import Button from '../../Button'
import Dot from '../../Dot'
import Anchor from '../../Anchor'

import { populateRefs } from 'helpers/ref'

import { ENTER } from 'constants/access'
import { DOTS_SLIDE_SELECT_BUTTON_KEY } from 'constants/buttons'
import { DOT_DESCRIPTIONS } from 'constants/dots'

class DotsSlideSelect extends PureComponent {

    static propTypes = {
        // From parent.
        dotIndex: PropTypes.number.isRequired,
        dotKey: PropTypes.string.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isActivated: PropTypes.bool.isRequired
    }

    _toggleSelectedDot = () => {
        this.dispatchSelectDot(this.props.dotIndex)
    }

    _toggleActivatedDot = () => {
        this.dispatchActivatedDot(this.props.dotIndex)
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
            isActivated
        } = this.props

        return (
            <>
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
                                'isActivated': isActivated
                            }),
                            buttonName: DOTS_SLIDE_SELECT_BUTTON_KEY,
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

                            isActivated &&
                                'SlideSelectDescription__activated',

                            'abF',
                            'flexCentreContainer'
                        )}>
                            {DOT_DESCRIPTIONS[dotKey]}
                        </div>
                    </Button>

                    <Anchor
                        {...{
                            isAccessed,
                            isSelected: isActivated,
                            text: dotKey,
                            handleAnchorClick: this._toggleActivatedDot
                        }}
                    />
                </div>
                <DotSelectDispatcher {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

export default DotsSlideSelect
