import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Badge} from './Badge'

export default {
  title: 'UI/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Квестовый',
}
