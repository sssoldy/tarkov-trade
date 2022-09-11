import {ComponentMeta, ComponentStory} from '@storybook/react'
import {PriceCard} from './PriceCard'

const mock = {
  price: '13 000 ₽',
  traderName: 'Прапор',
  traderLvl: 'I',
}

export default {
  title: 'UI/Cards/PriceCard',
  component: PriceCard,
  decorators: [
    Story => (
      <div className="flex justify-start">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PriceCard>

const Template: ComponentStory<typeof PriceCard> = args => (
  <PriceCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  price: mock.price,
  traderName: mock.traderName,
  traderLvl: mock.traderLvl,
}

export const WithoutLvl = Default.bind({})
WithoutLvl.args = {
  ...Default.args,
  traderLvl: undefined,
}
WithoutLvl.parameters = {controls: {exclude: ['traderLvl']}}
