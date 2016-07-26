import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TasksBlock from '../app/components/tasks/tasks-block.jsx'

describe('TasksBlock', () => {
    let tasksBlock

    beforeEach(() => {
        tasksBlock = shallow(<TasksBlock />)
    })

    it('should exist', () => {
        expect(tasksBlock).to.exist
    })
})
