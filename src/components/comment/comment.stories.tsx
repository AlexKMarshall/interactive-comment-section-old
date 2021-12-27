import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Comment } from './comment'

export default {
  component: Comment,
  title: 'Comment',
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const Default = Template.bind({})
Default.args = {
  comment: {
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
  },
}
