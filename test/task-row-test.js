import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TaskRow from '../app/components/tasks/task-row.jsx'

describe('TaskRow', () => {
    let taskRow

    beforeEach(() => {
        taskRow = shallow(<TaskRow />)
    })

    it('should exist', () => {
        expect(taskRow).to.exist
    })
})
