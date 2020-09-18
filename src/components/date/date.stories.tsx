import React from 'react'
import { DatePicker } from './index'
import { withKnobs, color, select } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { icons } from '../shared/icons'

export default {
  title: '组件/date',
  component: DatePicker,
  decorators: [withKnobs]
}

export const knobsIcon = () => <DatePicker></DatePicker>
