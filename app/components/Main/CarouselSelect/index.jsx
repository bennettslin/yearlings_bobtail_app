import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationDispatcher from '../../../handlers/Annotation/Dispatcher'
import Button from '../../Button'
import {
    ARROW_LEFT,
    ARROW_RIGHT
} from '../../../constants/access'
import {
    CAROUSEL_PREVIOUS_BUTTON_KEY,
    CAROUSEL_NEXT_BUTTON_KEY
} from '../../../constants/buttons'
import { mapCanCarouselMount } from '../../../redux/mount/selectors'
import './style'

const mapStateToProps = state => {
    const canCarouselMount = mapCanCarouselMount(state)

    return {
        canCarouselMount
    }
}

class CarouselSelect extends PureComponent {
    static propTypes = {
        canCarouselMount: PropTypes.bool.isRequired
    }

    _handleAnnotationPrevious = () => {
        this.dispatchAnnotationDirection(-1)
    }

    _handleAnnotationNext = () => {
        this.dispatchAnnotationDirection(1)
    }

    getDispatchAnnotation = dispatch => {
        if (dispatch) {
            this.dispatchAnnotationDirection = dispatch.dispatchAnnotationDirection
        }
    }

    render() {
        const { canCarouselMount } = this.props

        return canCarouselMount && (
            <div className="CarouselSelect">
                <Button
                    isLargeSize
                    {...{
                        buttonName: CAROUSEL_PREVIOUS_BUTTON_KEY,
                        accessKey: ARROW_LEFT,
                        handleButtonClick: this._handleAnnotationPrevious
                    }}
                />
                <Button
                    isLargeSize
                    {...{
                        buttonName: CAROUSEL_NEXT_BUTTON_KEY,
                        accessKey: ARROW_RIGHT,
                        handleButtonClick: this._handleAnnotationNext
                    }}
                />
                <AnnotationDispatcher {...{ ref: this.getDispatchAnnotation }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(CarouselSelect)
