import {action} from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Button} from './Button'

const onClick = action('click')

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: onClick,
}

export const Primary = Template.bind({})
Primary.args = {
  ...Default.args,
}
Primary.parameters = {controls: {exclude: ['variant']}}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Default.args,
  variant: 'secondary',
}
Secondary.parameters = {controls: {exclude: ['variant']}}

export const Sizes = (args: typeof Button) => (
  <div className="grid grid-cols-2 gap-4 justify-items-start">
    <Button {...Primary.args} size="small" />
    <Button {...Secondary.args} size="small" />

    <Button {...Primary.args} size="medium" />
    <Button {...Secondary.args} size="medium" />

    <Button {...Primary.args} size="huge" />
    <Button {...Secondary.args} size="huge" />
  </div>
)
Sizes.parameters = {controls: {include: []}}

export const Disabled = ({...args}: typeof Button) => (
  <div className="flex flex-col items-start gap-4">
    <Button {...Primary.args} {...args} />
    <Button {...Secondary.args} {...args} />
  </div>
)
Disabled.args = {
  disabled: true,
  size: 'medium',
}
Disabled.parameters = {controls: {exclude: ['variant', 'disabled']}}
