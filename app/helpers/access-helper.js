import { SONGS_SECTION,
         PLAYER_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION } from 'helpers/constants'

export default {

    handleKeyIfUniversal({
        keyName,
        handleSectionAccess,
        selectOverview,
        selectPlayerOption,
        togglePlay
    }) {
        // These keys will always fire, even if access is off.
        switch (keyName) {
            // Directly access sections.
            case 'a':
            case 'A':
                handleSectionAccess(PLAYER_SECTION, true)
                break
            case 'd':
            case 'D':
                handleSectionAccess(DOTS_SECTION, true)
                break
            case 'l':
            case 'L':
                handleSectionAccess(LYRICS_SECTION, true)
                break
            case 's':
            case 'S':
                handleSectionAccess(SONGS_SECTION, true)
                break
            // Toggle selected overview index.
            case 'b':
            case 'B':
                selectOverview()
                break
            // Toggle player option index.
            case 'o':
            case 'O':
                selectPlayerOption()
                break
            // Toggle isPlaying.
            case 'p':
            case 'P':
                togglePlay()
                break
            default:
                return false
                break
        }

        return true
    }

}
