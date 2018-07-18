module.exports = [

    /**
     * Begin Hack Week work.
     */

    {
        taskName: `Have intervals on displays and animated bars rather than setting from state. Make sure cursor weirdness is taken care of. Use Web Workers?`,
        workedHours: 0,
        neededHours: 8
    },

    {
        taskName: `Desktop menu animating to overlay is a little janky? CSS Grids?`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Set up buttons to use svgs, including loading icons.`,
        workedHours: 0,
        neededHours: 8
    },

    {
        taskName: `Stanza styling. Remaining work includes making sure that stanza verse width calculations are correct! Dismiss interactivated verse on cursor. Don't update when selecting, so that icon stays the same as it fades out. (Maybe wait on svg change for this one.)`,
        workedHours: 6,
        neededHours: 8
    },

    {
        taskName: `Box shadow and higher z-index on cursor stanza and cursor verse in stanza with multiple verses, for both lyric and slider verses. Need system to know whether stanza has a single verse. Also need to redo slider verse widths. Border radius.`,
        workedHours: 3,
        neededHours: 8
    },

    /**
     * Mobile bugs. (Might be able to quickly get through once deployment
     * strategy is worked out.)
     */
    {
        taskName: `Bug where audio banner in actual mobile phone has weird position. (Is this still a bug?)`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `iOS scrolling isn't smooth.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `PDF in mobile doesn't scroll. Copy screening-js approach, then adjust button positions.`,
        workedHours: 0,
        neededHours: 5
    },

    {
        taskName: `Bug where nav on with lyric expanded in mobile does not navigate annotations properly. Not sure to what degree heightless plays a role.`,
        workedHours: 0,
        neededHours: 3
    },

    {
        taskName: `Allow to determine verse bars in between keys.`,
        workedHours: 0,
        neededHours: 2
    },

    {
        taskName: `Bug where selecting interactivated verse does not change verse when song is playing. Also consider just not interactivating selected verse.`,
        workedHours: 0,
        neededHours: 2
    },

    /**
     * End Hack Week work.
     */

    /**
     * Access icons.
     */
    {
        taskName: `Access icon blocks in popup annotation look weird.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Work on method to access new annotation index only if current invalid.`,
        workedHours: 3,
        neededHours: 4
    },
    {
        taskName: `Enter access icon in annotation anchors can be positioned weird.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Position lyric column access icons all on right.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Flash access icon when key is pressed.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Know when not to show up or down access icons in lyric column, based on whether it's scrolled to the very top or bottom?`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Be smart about how verse bar, verse audio buttons, and verse cursor update.`,
        workedHours: 0,
        neededHours: 2
    },

    {
        taskName: `Make presence widths and heights based on x and z lengths.`,
        workedHours: 0,
        neededHours: 3
    },

    {
        taskName: `Allow cutouts to persist across scenes. Make keys based on names?`,
        workedHours: 0,
        neededHours: 2
    },

    /**
     * Remaining scene work.
     */

    {
        taskName: `Rethink tasks for panels, doors, and windows.`,
        workedHours: 0,
        neededHours: 3
    },

    /**
     * Player stuff.
     */
    {
        taskName: `When song finishes playing, proceed to next more smoothly. Especially for medley songs.`,
        workedHours: 0,
        neededHours: 5
    },

    /**
     * Content.
     */
    {
        taskName: `Finish instrumentals`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Finalise portals`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Title section content.`,
        workedHours: 1,
        neededHours: 3
    },
    {
        taskName: `Tips content`,
        workedHours: 0,
        neededHours: 5
    },

    /**
     * Final UI.
     */
    {
        taskName: `Finalise UI of carousel annotations. Make the navigation pictures a similar style.`,
        workedHours: 0,
        neededHours: 8
    },

    {
        taskName: `Establish stanza, dot, and selected, interactivated, accessed, disabled, and before, after, and on cursor colours.`,
        workedHours: 0,
        neededHours: 5
    },

    {
        taskName: `Finalise slider and cursor UI.`,
        workedHours: 0,
        neededHours: 8
    },

    {
        taskName: `Finalise menu UI.`,
        workedHours: 0,
        neededHours: 5
    },

    {
        taskName: `Finalise text styling of different dot annotations.`,
        workedHours: 0,
        neededHours: 5
    },

    {
        taskName: `Finalise loading page. Use image of Mara.`,
        workedHours: 0,
        neededHours: 5
    },

    /**
     * Absolute final.
     */
    {
        taskName: `Keep admin stuff in dev, not in production.`,
        workedHours: 0,
        neededHours: 3
    },
]
