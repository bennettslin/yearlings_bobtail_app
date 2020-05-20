export default [
    {
        taskName: `animate swapping of left and right lyric stanzas.`,
        workedHours: 0,
        neededHours: 5
    },
    {
        taskName: `Recalculate whether selected verse is shown when changing height.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `When switching lyric column, carousel should scroll to appropriate annotation.`,
        workedHours: 0,
        neededHours: 3
    },

    {
        taskName: `Have system to show pixels of varying sizes.`,
        workedHours: 0,
        neededHours: 5
    },

    {
        taskName: `Make Cubes sequence a little more smooth.`,
        workedHours: 0,
        neededHours: 3
    },

    {
        taskName: `Know when not to show up or down access icons in lyric column, based on whether it's scrolled to the very top or bottom?`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Improve method to get verse index for slider ratio. Begin by assuming closeness to slider verse index.`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Slider verse even filter shows when verse bar is shown. Use this opportunity to make it a JavaScript logic in CSS?`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Debounce nav keys.`,
        workedHours: 0,
        neededHours: 1
    },

    // Low priority bugs.
    {
        taskName: `Scrolling over verse bar is broken in Safari. Browser issue: https://bugs.webkit.org/show_bug.cgi?id=149526`,
        workedHours: 0,
        neededHours: 1
    },

    // Probably won't do.
    {
        taskName: `get verseObject from verseIndex or other index.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Hover over verse to show lyric button.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Deal with ugliness when forced scrollbar is set.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Selecting last carousel annotation in Odin, and then toggling lyric column, makes carousel needlessly scroll.`,
        workedHours: 0,
        neededHours: 2
    },

    /**
     * Clothing patterns
     */
    {
        taskName: `Christopher shirt (stegosaurus)`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Tristan patches`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Jacob shirt (unicorn?)`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Tomer shirt (Escher)`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Shane shirt (Lookout)`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Stephanie shirt (80s)`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Catherine shirt (college)`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Miriam bikini top (American flag)`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Chinese clothes patterns`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `Indian clothes patterns`,
        workedHours: 0,
        neededHours: 1
    },
    {
        taskName: `4 * tentacle`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Accessed annotation and activated verse should stay in sync when navigating and switching between the two. I think I'm fine with not doing this. Either will always just start from selected verse.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Halo for cubes.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Refactor bit number methods.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Dot unit animation? Do based on visibility or opacity instead of display none? Looks like styling won't be so easy, so punting this.`,
        workedHours: 0,
        neededHours: 1
    },

    /**
     * Performance.
     */

    /**
     * Low priority tasks to reduce DOM nodes. Max is currently Constellations,
     * with 5113 upon load. (document.querySelectorAll('*').length)
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

    /** Admin bugs. Doubt I'll ever care to do them. */
    {
        taskName: `Duplicate keys can't persist in admin previewer.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Query strings don't override storage in admin previewer.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Trim bottom doesn't work in previewer, makes backdrops smaller instead.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Scrolling upon mount sometimes doesn't happen because svg renders late.`,
        workedHours: 0,
        neededHours: 2
    }
]
