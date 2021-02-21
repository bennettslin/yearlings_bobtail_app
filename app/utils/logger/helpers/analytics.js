import { sendToGa } from '../../analytics'
import {
    ANALYTICS__FAILURE,
    ANALYTICS__SUCCESS,
    getStyleForCategory,
} from './styles'

export const sendToGaFromLog = ({
    category,
    action,
    label,
    value,
}) => {
    // Only send to analytics if log has an action.
    if (!action) {
        return
    }

    const didGaSucceed = sendToGa({
        category,
        action,
        label,
        value,
    })

    if (IS_STAGING) {
        /**
         * Log analytics parameters to make data analysis easier. Only show
         * with verbose logging.
         */
        console.debug(`%c${`category: ${category}\naction: ${action}${label ? `\nlabel: ${label}` : ''}${value ? `\nvalue: ${value}` : ''}`}`, getStyleForCategory({ category: didGaSucceed ? ANALYTICS__SUCCESS : ANALYTICS__FAILURE }))
    }
}
