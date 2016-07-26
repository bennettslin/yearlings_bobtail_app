import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import NotesSection from '../app/components/notes/notes-section.jsx'

describe('NotesSection', () => {
    let notesSection

    beforeEach(() => {
        notesSection = shallow(<NotesSection />)
    })

    it('should exist', () => {
        expect(notesSection).to.exist
    })
})
