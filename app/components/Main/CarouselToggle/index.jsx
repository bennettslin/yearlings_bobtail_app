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
import { mapCanCarouselMount } from '../../../redux/mount/selectors'
import {
    mapIsCarouselShown,
    mapIsNavShown
} from '../../../redux/toggle/selectors'
import './style'

const mapStateToProps = state => {
    const
        canCarouselMount = mapCanCarouselMount(state),
        isCarouselShown = mapIsCarouselShown(state),
        isNavShown = mapIsNavShown(state)

    return {
        canCarouselMount,
        isCarouselShown,
        isNavShown
    }
}

class CarouselToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselMount: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired
    }

    handleButtonClick = () => {
        this.dispatchCarouselNav()
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    getDispatchCarouselNav = dispatch => {
        this.dispatchCarouselNav = dispatch
    }

    render() {
        const {
            canCarouselMount,
            isCarouselShown,
            isNavShown
        } = this.props

        return canCarouselMount && (
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
                <CarouselNavDispatcher {...{ ref: this.getDispatchCarouselNav }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(CarouselToggle)
