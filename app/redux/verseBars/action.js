// Actions for determining verse bars.
import { VERSE_BARS_STORE } from '../../constants/store'

export const updateVerseBarsStatus = verseBarsStatus => ({
    type: VERSE_BARS_STORE,
    payload: { verseBarsStatus },
})
