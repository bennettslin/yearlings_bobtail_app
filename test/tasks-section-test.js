import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TasksSection from '../app/components/tasks/tasks-section.jsx'

describe('TasksSection', () => {
    let tasksSection

    beforeEach(() => {
        tasksSection = shallow(<TasksSection />)
    })

    it('should exist', () => {
        expect(tasksSection).to.exist
    })
})
