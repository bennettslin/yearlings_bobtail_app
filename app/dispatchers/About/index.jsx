// Child that knows rules to toggle title. Not needed if just turning off.

import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateToggleStore } from '../../redux/toggle/action'
import { IS_ABOUT_SHOWN_SELECTOR } from '../../redux/toggle/selectors'

const AboutDispatcher = ({
    getRefs
}) => {
    const
        isAboutShown = useSelector(IS_ABOUT_SHOWN_SELECTOR),
        dispatch = useDispatch()

    useEffect(() => {
        getRefs({
            dispatchAbout(
                // Just toggle unless parent specifies value.
                newIsAboutShown = !isAboutShown
            ) {
                // Turning on or off is always successful.
                dispatch(updateToggleStore({ isAboutShown: newIsAboutShown }))
                return true
            }
        })
    }, [isAboutShown])

    return null
}

AboutDispatcher.propTypes = {
    getRefs: PropTypes.func.isRequired
}

export default AboutDispatcher
