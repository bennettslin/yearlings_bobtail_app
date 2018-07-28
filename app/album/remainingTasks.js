module.exports = [
    {
        taskName: `Accessing annotation does not seem to determine verse bars when going from top of lyric all the way to the bottom, or vice versa.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Fix slider stanza heights in modal. Current fix is not quite right. `,
        workedHours: 0,
        neededHours: 1
    },

    // Bug.
    {
        taskName: `Debounce nav keys.`,
        workedHours: 0,
        neededHours: 1
    },

    // Buttons and dots.
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
    {
        taskName: `Title toggle should not have a variable width.`,
        workedHours: 0,
        neededHours: 3
    },

    // Weekend task.
    {
        taskName: `Cubes rendering through CSS logic!`,
        workedHours: 0,
        neededHours: 20
    },

    {
        taskName: `Revisit Willy, Odin, and Constellations overlap cards.`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Can skip to stanza by clicking stanza tab?`,
        workedHours: 0,
        neededHours: 2
    },

    {
        taskName: `Slider locks up, preventing touch moving, for some reason. Might have to do with Root Component being active? Nope...`,
        workedHours: 0,
        neededHours: 1
    },

    /**
     * Begin Hack Week work.
     */
    {
        taskName: `Bug where selecting interactivated verse does not change verse when song is playing.`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Have setIntervals on audio display timer rather than setting from state.`,
        workedHours: 0,
        neededHours: 2
    },

    {
        taskName: `Use Web Worker for parsing album. Mostly a proof of concept.`,
        workedHours: 0,
        neededHours: 2
    },

    {
        taskName: `Desktop menu animating to overlay is a little janky? CSS Grids?`,
        workedHours: 0,
        neededHours: 1
    },

    {
        taskName: `Improve method to get verse index for slider ratio. Begin by assuming closeness to slider verse index.`,
        workedHours: 0,
        neededHours: 1
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
        taskName: `Verse bar cursor needs to reset properly. Looks like just setting a unique key no longer does the trick. Verse bar also doesn't need to update if slider is moving and it's not shown.`,
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
        taskName: `Position lyric column access icons all on right.`,
        workedHours: 0,
        neededHours: 1
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

    {
        taskName: `Make presences svgs.`,
        workedHours: 0,
        neededHours: 3
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

    {
        taskName: `Be smart about using logger. This includes setting it up to only log in development, not production. Pass in feature flag?`,
        workedHours: 0,
        neededHours: 2
    }
]
