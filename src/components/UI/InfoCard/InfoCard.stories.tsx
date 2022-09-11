import {ComponentMeta, ComponentStory} from '@storybook/react'
import {InfoCard} from './InfoCard'

const mock = {
  title: 'Аптечка Grizzly',
  imgSrc: 'https://assets.tarkov.dev/590c657e86f77412b013051d-icon.jpg',
  category: 'Аптечка',
  updatedTime: '1 час назад',
  badges: ['квестовый', 'бартерный'],
}

export default {
  title: 'UI/Cards/InfoCard',
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>

const Template: ComponentStory<typeof InfoCard> = args => <InfoCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: mock.title,
  imgSrc: mock.imgSrc,
  category: mock.category,
  updatedTime: mock.updatedTime,
  badges: mock.badges,
}

export const WithoutBadges = Template.bind({})
WithoutBadges.args = {
  ...Default.args,
  badges: undefined,
}
WithoutBadges.parameters = {controls: {exclude: ['badges']}}

export const WithOneMetaTag = Template.bind({})
WithOneMetaTag.args = {
  ...Default.args,
  updatedTime: undefined,
}
WithOneMetaTag.parameters = {controls: {exclude: ['updatedTime']}}

export const WithoutMetaTags = Template.bind({})
WithoutMetaTags.args = {
  ...Default.args,
  category: undefined,
  updatedTime: undefined,
}
WithoutMetaTags.parameters = {controls: {exclude: ['category', 'updatedTime']}}

export const ImageAndTitle = Template.bind({})
ImageAndTitle.args = {
  ...Default.args,
  category: undefined,
  updatedTime: undefined,
  badges: undefined,
}
ImageAndTitle.parameters = {controls: {include: ['title', 'imgSrc']}}
