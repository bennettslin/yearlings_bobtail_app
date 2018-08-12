module.exports = [

    {
        taskName: `Clicking outside of logue overview prevents accessing song through j or k.`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Verse tracker is buggy when selecting new song. Likely because it isn't updating properly.`,
        workedHours: 0,
        neededHours: 2
    },

    {
        taskName: `Verse bar cursor needs to reset properly. Looks like just setting a unique key no longer does the trick. Verse bar also doesn't need to update if slider is moving and it's not shown.`,
        workedHours: 0,
        neededHours: 2
    },

    {
        taskName: `Advancing to next song when playing doesn't stay playing`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `System to animate presences and cubes between scenes.`,
        workedHours: 0,
        neededHours: 10
    },

    /**
     * Important bugs to fix.
     */
    {
        taskName: `Slider locks up, preventing touch moving, for some reason. Might have to do with Root Component being active? Nope...`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Accessing annotation does not seem to determine verse bars when going from top of lyric all the way to the bottom, or vice versa. This might involve generally rethinking how to do determine verse bars after a scroll.`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Look into using SmartComponent.`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Handle weirdness of title overlay in logue.`,
        workedHours: 0,
        neededHours: 1
    },

    /**
     * Mobile bugs. (Might be able to quickly get through now that deployment
     * is worked out.)
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
     * Access icons UI.
     */
    {
        taskName: `Work on method to access new annotation index only if current invalid.`,
        workedHours: 3,
        neededHours: 4
    },

    // Buttons and dots UI.
    {
        taskName: `Strategy for styling buttons that can be disabled and shown, scores and audio nav. (Any others are disabled only to prevent interaction, and are not seen then.) And for buttons that can be indexSelected, nav books and songs. Accessing dot.`,
        workedHours: 0,
        neededHours: 2
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
