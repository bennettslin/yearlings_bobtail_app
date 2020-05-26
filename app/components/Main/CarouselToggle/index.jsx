// Toggle button to show and hide carousel section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import CarouselNavDispatcher from '../../../handlers/CarouselNav/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'

import { CAROUSEL_TOGGLE_KEY } from '../../../constants/access'
import { CAROUSEL_NAV_BUTTON_KEY } from '../../../constants/buttons'

import { populateRefs } from '../../../helpers/ref'
import { getCarouselNavIdentifier } from '../../../constants/options'
import { CAROUSEL, NAV } from '../../../constants/tips'

const mapStateToProps = ({
    toggleStore: {
        isCarouselShown,
        isNavShown
    }
}) => {
    return {
        isCarouselShown,
        isNavShown
    }
}

class CarouselToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired
    }

    handleButtonClick = () => {
        this.dispatchCarouselNav()
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        const {
            isCarouselShown,
            isNavShown
        } = this.props

        return (
            <div className={cx(
                'CarouselToggle'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: CAROUSEL_NAV_BUTTON_KEY,
                        buttonIdentifier: getCarouselNavIdentifier({
                            isCarouselShown,
                            isNavShown
                        }),
                        accessKey: CAROUSEL_TOGGLE_KEY,
                        handleButtonClick: this.handleButtonClick
                    }}
                />
                <TipsHand {...{ tipType: CAROUSEL }} />
                <TipsHand {...{ tipType: NAV }} />
                <CarouselNavDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(CarouselToggle)
