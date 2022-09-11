import {SearchIcon} from '@heroicons/react/outline'
import {action} from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Input} from './Input'

const onChange = action('change')

export default {
  title: 'UI/Forms/Input',
  component: Input,
  parameters: {
    controls: {exclude: ['icon']},
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'id',
  label: 'label',
  value: 'value',
  loading: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  id: 'disabled',
  disabled: true,
}
Disabled.parameters = {controls: {exclude: ['disabled', 'icon', 'loading']}}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Default.args,
  id: 'with-icon',
  icon: <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />,
}

export const WithLoadingIndicator = (args: typeof Input) => (
  <div className="flex flex-col gap-4">
    <Input {...Default.args} loading={true} />
    <Input {...WithIcon.args} loading={true} />
  </div>
)
WithLoadingIndicator.parameters = {controls: {include: []}}
