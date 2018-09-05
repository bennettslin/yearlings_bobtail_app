module.exports = [

    {
        taskName: `Furniture transition, just opacity.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Account for combined presences.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Make negative ceiling tiles not show.`,
        workedHours: 0,
        neededHours: 2
    },

    /**
     * Final scene stuff.
     */
    {
        taskName: `Allow cutouts and fixtures to persist across scenes. Probably needs React CSS transition group.`,
        workedHours: 0,
        neededHours: 8
    },

    {
        taskName: `Presence transition order.`,
        workedHours: 0,
        neededHours: 8
    },
    {
        task: 'Hsla keys for all scenes, and values for all keys.',
        workedHours: 0,
        neededHours: 16
    },

    /**
     * Player stuff.
     */
    {
        taskName: `Audit of player refactor work.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `When song finishes playing, proceed to next more smoothly. Especially for medley songs.`,
        workedHours: 0,
        neededHours: 5
    },

    /**
     * Important bugs to fix.
     */
    {
        taskName: `Accessing annotation does not seem to determine verse bars when going from top of lyric all the way to the bottom, or vice versa. This might involve generally rethinking how to do determine verse bars after a scroll.`,
        workedHours: 0,
        neededHours: 3
    },

    /**
     * Mobile bugs. (Might be able to quickly get through now that deployment
     * is worked out.)
     */
    {
        taskName: `Audit of mobile bugs.`,
        workedHours: 0,
        neededHours: 8
    },
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

    /**
     * Access icons UI.
     */

    // Buttons and dots UI.
    {
        taskName: `Strategy for styling buttons that can be disabled and shown, scores and audio nav. (Any others are disabled only to prevent interaction, and are not seen then.) And for buttons that can be indexSelected, nav books and songs.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Strategy for changing UI of dots when accessed.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Strategy for showing hover and active buttons versus dots.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Rather than having Enter or Escape access icon, just make access selectable things more obvious. Remove Enter from Anchors, Wormholes, DotsSlideSelects, NavButtons, VerseNavs. Escape from Popup.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Make nav books svgs.`,
        workedHours: 0,
        neededHours: 1
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
     * Content.
     */
    {
        taskName: `Finish instrumentals`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Finalise wormholes`,
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
        taskName: `Finalise UI of carousel annotations. Make the navigation panels a similar style, whatever that means? Annotation tabs have box shadows?`,
        workedHours: 9,
        neededHours: 10
    },

    {
        taskName: `Establish stanza, dot, and selected, interactivated, accessed, disabled, and before, after, and on cursor colours.`,
        workedHours: 1,
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
    }
]
