module.exports = [

    // Access stuff.
    {
        taskName: `Selecting new song from scratch should access first annotation.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Selecting song from wormhole should set access to wiki wormhole.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Accessed annotation and interactivated verse should stay in sync when navigating and switching between the two.`,
        workedHours: 0,
        neededHours: 3
    },

    // Render stuff.
    {
        taskName: `Put Live's rendered logic in store. Then fix the bug where event handler tries to scroll carousel and lyric before its elements are set.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Fix bug where playing from logue causes weird jumpiness. Same with switching between songs in general sometimes.`,
        workedHours: 0,
        neededHours: 3
    },

    // Scrolling stuff.
    {
        taskName: `Have event manager and scroll manager handle all scrolling through listeners.`,
        workedHours: 0,
        neededHours: 10
    },
    {
        taskName: `Scroll does not work perfectly when selecting shiv wormhole with ear column.`,
        workedHours: 0,
        neededHours: 2
    },

    // Quick bug fixes?
    {
        taskName: `Put carousel, unitDot, and textLyricAnchor conditional in transient store.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Remove possibility to have non-wiki urls.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Do not show thumb for selected nav song, but still allow it to be selectable.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Rethink whether to hide carousel upon interactivating verse. Dots are not hidden, after all.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Fix bug where nav thumb is hoverable when overview and others are shown.`,
        workedHours: 0,
        neededHours: 3
    },

    // More refactoring...
    {
        taskName: `Disallow selecting nav when there no dots. (Do after consolidating dispatchers and listeners?)`,
        workedHours: 0,
        neededHours: 2
    },

    {
        taskName: `Separate class name parent containers.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Get AWS credentials on personal laptop.`,
        workedHours: 0,
        neededHours: 3
    },

    // Major refactors.
    {
        taskName: `Refactor song and audio managers so that everything other than player stuff is handled through listeners.`,
        workedHours: 0,
        neededHours: 10
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
        taskName: `Halo for cubes.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Three-dimensionality of cutouts`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Weirdness of presences or presence texts not rendering. Maybe just a development in Chrome issue? Doesn't seem to happen in production, or other browsers...`,
        workedHours: 0,
        neededHours: 2
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

    /**
     * Do once the presence svgs are mostly done.
     */
    {
        taskName: `Finalise loading page. Use image of Mara.`,
        workedHours: 0,
        neededHours: 5
    },
    {
        taskName: `Fix bug where go-kart presences have duplicate keys. Do this in conjunction with persisting presences across scenes.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Allow cutouts and fixtures to persist across scenes. Either needs React CSS transition group, or just have same keys?`,
        workedHours: 0,
        neededHours: 8
    },
    {
        taskName: `Presence transition order.`,
        workedHours: 0,
        neededHours: 8
    },
    {
        taskName: `Cubes don't render in Firefox or Safari, because they don't accept d as a CSS attribute.`,
        workedHours: 0,
        neededHours: 8
    },
    {
        taskName: `Allow presences to specify zIndex. Position presences in slanted cubes.`,
        workedHours: 0,
        neededHours: 5
    },

    // Testing down the line.
    {
        taskName: `Manual testing`,
        workedHours: 0,
        neededHours: 20
    },
    {
        taskName: `Add unit tests`,
        workedHours: 0,
        neededHours: 8
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
