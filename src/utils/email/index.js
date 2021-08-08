import { EMAIL_ID } from '../../constants/website'
import { getDocument } from '../../utils/browser'

export const isEmailFocused = () => {
    return getDocument().activeElement.id === EMAIL_ID
}
