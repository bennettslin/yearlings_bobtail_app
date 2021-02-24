import { sendToGa } from '../../analytics'
import {
    ANALYTICS__FAILURE,
    ANALYTICS__PENDING,
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

    const gaStatus = sendToGa({
        category,
        action,
        label,
        value,
    })

    if (!IS_PRODUCTION) {
        let categoryStyle

        switch (gaStatus) {
            case 'failure':
                categoryStyle = ANALYTICS__FAILURE
                break
            case 'pending':
                categoryStyle = ANALYTICS__PENDING
                break
            case 'success':
                categoryStyle = ANALYTICS__SUCCESS
                break
        }

        /**
         * Log analytics parameters to make data analysis easier. Only show
         * with verbose logging.
         */
        console.debug(`%c${`category: ${category}\naction: ${action}${typeof label !== 'undefined' ? `\nlabel: ${label}` : ''}${Number.isFinite(value) ? `\nvalue: ${value}` : ''}`}`, getStyleForCategory({ category: categoryStyle }))
    }
}
