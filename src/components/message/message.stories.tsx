import React, { useState } from 'react'
import { createMessage, MessageType, message } from './index'
import Button from '../button'
import { withKnobs, number, select, color, text } from '@storybook/addon-knobs'
import { Icon } from '../icon'
export default {
  title: '组件/Message',
  component: createMessage,
  decorators: [withKnobs]
}

const Options: MessageType[] = [
  'info',
  'success',
  'error',
  'warning',
  'loading',
  'default'
]

export const knobsMessage = () => {
  const se = select<MessageType>('iconType', Options, 'default')
  const op = {
    delay: number('delay', 2000),
    animationDuring: number('animationDuring', 300),
    background: color('background', '#fff'),
    color: color('color', '#333')
  }
  const tx = text('content', 'hello message')
  const onClick = () => message[se](tx, op)

  return (
    <div>
      <Button onClick={onClick}>click</Button>
    </div>
  )
}

export const callbackTest = () => (
  <div>
    <Button
      onClick={() =>
        message.loading('加载中', {
          callback: () => message.success('加载完成')
        })
      }
    >
      callback
    </Button>
  </div>
)

export const withIcon = () => (
  <div>
    <Button
      onClick={() =>
        message.default(
          <span>
            <Icon icon="admin"></Icon>111
          </span>
        )
      }
    >
      callback
    </Button>
  </div>
)
