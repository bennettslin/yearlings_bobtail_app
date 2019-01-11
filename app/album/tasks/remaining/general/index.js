export default [
    {
        taskName: `Add title to lyric column in desktop. Also choose font.`,
        workedHours: 0,
        neededHours: 3
    },

    // Scrolling stuff.
    {
        taskName: `Scroll does not work perfectly when selecting shiv wormhole with ear column.`,
        workedHours: 0,
        neededHours: 2
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
     * Mobile bugs.
     */
    {
        taskName: `Window size shouldn't readjust if iOS viewport just changed height?`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `PDF in mobile doesn't scroll. Just don't have it in mobile?`,
        workedHours: 0,
        neededHours: 5
    },
    {
        taskName: `Be strategic about forcing expanded lyric or no lyric in mobile portrait versus landscape, to improve performance.`,
        workedHours: 0,
        neededHours: 5
    },
    {
        taskName: `Figure out final menu layout.`,
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
    {
        taskName: `Align annotation title access letters.`,
        workedHours: 0,
        neededHours: 1
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
     * Low priority tasks to reduce DOM nodes. Max is currently Constellations,
     * with 5523 upon load. (document.querySelectorAll('*').length)
     */
    {
        taskName: `Just have a single span of text in anchors, rather than both plain text and link.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Remove VerseColor by just applying its classes to parent.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Mount VerseTracker upon transition.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Don't have annotation and unit tabs in mobile.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Make slider tabs a pseudo element, and apply drop shadow instead of box shadow.`,
        workedHours: 0,
        neededHours: 2
    },

    /**
     * Final UI.
     */
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
        taskName: `Finalise text styling of different annotation cards.`,
        workedHours: 0,
        neededHours: 5
    },
    {
        taskName: `Finalise thinking on shadows for dots, dot anchors, dot fields, anchors. Glow effects?`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Figure out VerseTracker gradient.`,
        workedHours: 0,
        neededHours: 2
    },

    /**
     * Do once the presence svgs are mostly done.
     */
    {
        taskName: `Finalise loading page. Use image of Mara.`,
        workedHours: 0,
        neededHours: 5
    },
    {
        taskName: `Include saturation in logic to determine final face hsla.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Followup on transition work. Can it be improved?`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Cube and presence transition order`,
        workedHours: 0,
        neededHours: 8
    },
    {
        taskName: `Redo how presences are structured. Store info in a config?`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Try out Vivus animations.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Wire on puppets and others.`,
        workedHours: 0,
        neededHours: 4
    },
    {
        taskName: `Shadows for presences.`,
        workedHours: 0,
        neededHours: 5
    },
    {
        taskName: `Three-dimensionality of cutouts.`,
        workedHours: 0,
        neededHours: 3
    },

    /**
     * Final before release.
     */
    {
        taskName: `Get rid of getDefinedOnlyPayload, once I've confirmed that nothing ever passes undefined value.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Keep admin stuff in dev, not in production.`,
        workedHours: 0,
        neededHours: 3
    }

    /**
     * Unit tests and manual testing after release.
     */
]
