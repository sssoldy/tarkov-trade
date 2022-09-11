import {DocumentSearchIcon} from '@heroicons/react/outline'
import {action} from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Button} from '../UI/Button'
import {StatusMessage} from './StatusMessage'

const onClick = action('click')

export default {
  title: 'StatusMessage',
  component: StatusMessage,
  decorators: [Story => <div className="max-w-3xl mx-auto">{Story()}</div>],
  parameters: {
    controls: {exclude: ['icon', 'button']},
  },
} as ComponentMeta<typeof StatusMessage>

const Template: ComponentStory<typeof StatusMessage> = args => (
  <StatusMessage {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque, reprehenderit illo, suscipit, hic itaque similique corrupti obcaecati autem quaerat dignissimos esse? Dolore amet deserunt laboriosam quaerat architecto fugiat repudiandae.',
  icon: (
    <DocumentSearchIcon className="sm:my-[10px] sm:shrink-0 text-indigo-600 w-14 h-14" />
  ),
  button: <Button onClick={onClick}>Button</Button>,
}

export const WithoutButton = Template.bind({})
WithoutButton.args = {
  ...Default.args,
  button: undefined,
}
