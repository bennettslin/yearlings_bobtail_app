exports.details = {
    title: 'Test Album',
    speechBubbles: {
        narrative: 'narrative',
        personal: 'personal'
    },
    legendSymbols: [
        {
            icon: 'icon 1',
            description: 'description 1'
        },
        {
            icon: 'icon 2',
            description: 'description 2'
        },
        {
            icon: 'icon 3',
            description: 'description 3'
        }
    ],
    pageStartingIndices: [0, 1],
    songs: [
        {
            title: 'First song',
            speechBubbles: {
                narrative: 'narrative 1',
                personal: 'personal 1'
            },
            annotations: {
                single_anchor_in_line: {
                    description: 'Annotation for single anchor in line.'
                },
                italics_nested_in_anchor: {
                    description: 'Annotation for italics nested in anchor.'
                },
                anchor_nested_in_italics: {
                    description: 'Annotation for anchor nested in italics.'
                },
                multiple_anchors_one: {
                    description: 'Annotation for multiple anchors, one.'
                },
                multiple_anchors_two: {
                    description: 'Annotation for multiple anchors, two.'
                },
                multiple_anchors_and_italics_one: {
                    description: 'Annotation for multiple anchors and italics, one.'
                },
                multiple_anchors_and_italics_two: {
                    description: 'Annotation for multiple anchors and italics, two.'
                },
                multiple_lines_single_anchor: {
                    description: 'Annotation for multiple lines, single anchor.'
                }
            },
            lyrics: {
                right: [
                    [
                        // FIXME: Delete these test objects.
                        {
                            devComment: 'This is a straightforward string.',
                            time: 0,
                            verse: 'This is a straightforward string.',
                            annotation1: ''
                        },
                        {
                            devComment: 'Single italics in line.',
                            time: 0,
                            verse: [
                                'Single',
                                {
                                    italic: 'italics'
                                },
                                'in line.'
                            ],
                            annotation1: ''
                        },
                        {
                            devComment: 'Single anchor in line.',
                            time: 0,
                            verse: [
                                'Single',
                                {
                                    anchor: 'anchor',
                                    annotationKey: 'single_anchor_in_line'
                                },
                                'in line.'
                            ],
                            annotation1: ''
                        },
                        {
                            devComment: 'These are italics nested in an anchor.',
                            time: 0,
                            verse: [
                                'These ',
                                {
                                    anchor: [
                                        'are ',
                                        {
                                            italic: 'italics '
                                        },
                                        'nested in '
                                    ],
                                    annotationKey: 'italics_nested_in_anchor'
                                },
                                'an anchor.'
                            ],
                            annotation1: ''
                        },
                        {
                            devComment: 'This is an anchor nested in italics.',
                            time: 0,
                            verse: [
                                'This ',
                                {
                                    italic: [
                                        'is ',
                                        {
                                            anchor: 'an anchor ',
                                            annotationKey: 'anchor_nested_in_italics'
                                        },
                                        'nested in '
                                    ]
                                },
                                'italics.'
                            ],
                            annotation1: ''
                        },
                        {
                            devComment: 'These are multiple anchors in a single line.',
                            time: 0,
                            verse: [
                                'These are ',
                                {
                                    anchor: 'multiple anchors ',
                                    annotationKey: 'multiple_anchors_one'
                                },
                                'in a ',
                                {
                                    anchor: 'single ',
                                    annotationKey: 'multiple_anchors_two'
                                },
                                'line.'
                            ],
                            annotation1: ''
                        },
                        {
                            devComment: 'These are multiple italics in a single line',
                            time: 0,
                            verse: [
                                'These are ',
                                {
                                    italic: 'multiple italics '
                                },
                                'in a ',
                                {
                                    italic: 'single '
                                },
                                'line.'
                            ],
                            annotation1: ''
                        },
                        {
                            devComment: 'These are multiple anchors and italics in a single line.',
                            time: 0,
                            verse: [
                                'These ',
                                {
                                    italic: 'are '
                                },
                                'multiple ',
                                {
                                    anchor: 'anchor ',
                                    annotationKey: 'multiple_anchors_and_italics_one'
                                },
                                'and ',
                                {
                                    italic: 'italics in '
                                },
                                {
                                    anchor: 'a single line.',
                                    annotationKey: 'multiple_anchors_and_italics_two'
                                }
                            ],
                            annotation1: ''
                        },
                        {
                            devComment: 'These are multiple lines sharing a single anchor tag...',
                            time: 0,
                            verse: [
                                'These are multiple lines sharing',
                                {
                                    anchor: 'a single anchor tag...',
                                    annotationKey: 'multiple_lines_single_anchor'
                                },
                            ],
                            annotation1: ''
                        },
                        {
                            devComment: 'And this is the second line.',
                            time: 0,
                            verse: [
                                {
                                    anchor: 'And this is ',
                                    annotationKey: 'multiple_lines_single_anchor'
                                },
                                'the second line.'
                            ],
                            annotation1: ''
                        }
                    ]
                ]
            }
        }
    ]
};