// Button in dots section to select and deselect dot.
import React, { PureComponent, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSelectDispatcher from '../../../../dispatchers/DotSelectDispatcher'
import Button from '../../../Button'
import Dot from '../../../Dot'
import Anchor from '../../../Anchor/newIndex'

import { populateRefs } from 'helpers/ref'

import { ENTER } from 'constants/access'
import { DOT_DESCRIPTIONS } from 'constants/dots'

const mapStateToProps = ({
    toggleStore: { isDotsSlideShown }
}) => ({
    isDotsSlideShown
})

/*************
 * CONTAINER *
 *************/

class DotsSlideSelect extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,

        // From parent.
        dotIndex: PropTypes.number.isRequired,
        hasInteractivatedDotText: PropTypes.number.isRequired,
        setHasInteractivatedDotText: PropTypes.func.isRequired
    }

    state = {
        isInteractivated: false
    }

    /**
     * Not necessary to check shouldComponentUpdate, since the changed props
     * upon which to update are a subset of those in dots section.
     */

    componentDidUpdate(prevProps) {

        // Prevent infinite loop.
        if (this.state.isInteractivated) {

            // Also deinteractivate if dots section has been hidden.
            if (!this.props.isDotsSlideShown ||
                (!this.props.hasInteractivatedDotText && prevProps.hasInteractivatedDotText)) {

                this.setState({
                    isInteractivated: false
                })
            }
        }
    }

    handleDotSelectClick = () => {
        this.dispatchSelectDot(this.props.dotIndex)
    }

    _handleTextContainerClick = () => {
        const isInteractivated = !this.state.isInteractivated

        this.setState({
            isInteractivated
        })

        this.props.setHasInteractivatedDotText(isInteractivated)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {

        const {
            /* eslint-disable no-unused-vars */
            dotIndex,
            isDotsSlideShown,
            hasInteractivatedDotText,
            setHasInteractivatedDotText,
            dispatch,
            /* eslint-enable no-unused-vars */

            ...other
        } = this.props

        return (
            <___>
                <DotsSlideSelectView {...other}
                    {...{
                        isInteractivated: this.state.isInteractivated,
                        handleDotSelectClick: this.handleDotSelectClick,
                        handleTextContainerClick: this._handleTextContainerClick
                    }}
                />
                <DotSelectDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const dotsSlideSelectViewPropTypes = {
    // From parent.
        dotKey: PropTypes.string.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isInteractivated: PropTypes.bool.isRequired,
        handleDotSelectClick: PropTypes.func.isRequired,
        handleTextContainerClick: PropTypes.func.isRequired
    },

    DotsSlideSelectView = ({

        // From props.
        dotKey,
        isAccessed,
        isSelected,

        // From controller.
        isInteractivated,
        handleDotSelectClick,
        handleTextContainerClick

    }) => {

        return (
            <div className="DotsSlideSelect">
                <Button
                    buttonName="slideSelect"
                    className={cx({
                    /**
                     * This class is passed purely to let the Button know to
                     * update the Dot when it is selected, without having to
                     * inspect its children prop.
                     */
                        'isSelected': isSelected
                    })}
                    isCustomSize
                    {...{
                        accessKey: ENTER,
                        showAccessIconIfAccessOn: isAccessed,
                        handleButtonClick: handleDotSelectClick
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

                        'absoluteFullContainer',
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
                        handleAnchorClick: handleTextContainerClick
                    }}
                />
            </div>
        )
    }

DotsSlideSelectView.propTypes = dotsSlideSelectViewPropTypes

export default connect(mapStateToProps)(DotsSlideSelect)
