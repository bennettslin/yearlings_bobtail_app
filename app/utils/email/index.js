import { EMAIL_ID } from '../../constants/website'

export const isEmailFocused = () => {
    return document.activeElement.id === EMAIL_ID
}
