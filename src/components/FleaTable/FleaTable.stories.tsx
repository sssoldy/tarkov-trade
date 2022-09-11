import {ComponentMeta, ComponentStory} from '@storybook/react'
import {MockedProvider} from '@apollo/client/testing'
import {FleaTable} from './FleaTable'
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {GraphQLError} from 'graphql'
import {cache} from '../../apolloClient'
import {FleaTableDocument} from 'src/generated-types'

export default {
  title: 'FleaTable',
  component: FleaTable,
} as ComponentMeta<typeof FleaTable>

const mocks = [
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Аптечка',
        offset: 0,
        limit: 10,
      },
    },
    result: {
      data: {
        items: [
          {
            id: '544fb45d4bdc2dee738b4568',
            name: 'Аптечка Salewa First Aid Kit',
            normalizedName: 'salewa-first-aid-kit',
            lastLowPrice: 22000,
            avg24hPrice: 27832,
            updated: '2022-08-29T13:48:49.000Z',
            iconLink:
              'https://assets.tarkov.dev/544fb45d4bdc2dee738b4568-icon.jpg',
            category: {
              name: 'Аптечка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5a68663e86f774501078f78a',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '5967733e86f774602332fc84',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '33',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [
              {
                id: '5d8a1a7d7a3dfe597c2e459e',
                __typename: 'Craft',
              },
            ],
            craftsUsing: [],
            sellFor: [
              {
                price: 9431,
                currency: 'RUB',
                priceRUB: 9431,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 11883,
                currency: 'RUB',
                priceRUB: 11883,
                vendor: {
                  name: 'Терапевт',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 7545,
                currency: 'RUB',
                priceRUB: 7545,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 11317,
                currency: 'RUB',
                priceRUB: 11317,
                vendor: {
                  name: 'Егерь',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 22000,
                currency: 'RUB',
                priceRUB: 22000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 37061,
                currency: 'RUB',
                priceRUB: 37061,
                vendor: {
                  name: 'Терапевт',
                  minTraderLevel: 2,
                  taskUnlock: {
                    name: 'Почтальон Печкин - Часть 2',
                    __typename: 'Task',
                  },
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 27832,
                currency: 'RUB',
                priceRUB: 27832,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5755356824597772cb798962',
            name: 'Аптечка АИ-2',
            normalizedName: 'ai-2-medkit',
            lastLowPrice: 3888,
            avg24hPrice: 4244,
            updated: '2022-08-29T07:21:31.000Z',
            iconLink:
              'https://assets.tarkov.dev/5755356824597772cb798962-icon.jpg',
            category: {
              name: 'Аптечка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [
              {
                id: '5d5c1f5ed582a543983ee82e',
                __typename: 'Craft',
              },
            ],
            craftsUsing: [
              {
                id: '5e13301cc7049d4d9738e1a7',
                __typename: 'Craft',
              },
              {
                id: '6002eec9cc73cd34ac64188a',
                __typename: 'Craft',
              },
            ],
            sellFor: [
              {
                price: 2600,
                currency: 'RUB',
                priceRUB: 2600,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 3276,
                currency: 'RUB',
                priceRUB: 3276,
                vendor: {
                  name: 'Терапевт',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 2080,
                currency: 'RUB',
                priceRUB: 2080,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 3120,
                currency: 'RUB',
                priceRUB: 3120,
                vendor: {
                  name: 'Егерь',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 3888,
                currency: 'RUB',
                priceRUB: 3888,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 6638,
                currency: 'RUB',
                priceRUB: 6638,
                vendor: {
                  name: 'Терапевт',
                  minTraderLevel: 1,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 4244,
                currency: 'RUB',
                priceRUB: 4244,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '590c657e86f77412b013051d',
            name: 'Аптечка Grizzly',
            normalizedName: 'grizzly-medical-kit',
            lastLowPrice: 32000,
            avg24hPrice: 39753,
            updated: '2022-08-29T13:48:58.000Z',
            iconLink:
              'https://assets.tarkov.dev/590c657e86f77412b013051d-icon.jpg',
            category: {
              name: 'Аптечка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '596a218586f77420d232807c',
                __typename: 'Task',
              },
              {
                id: '5a68667486f7742607157d28',
                __typename: 'Task',
              },
              {
                id: '5d25e46e86f77409453bce7c',
                __typename: 'Task',
              },
              {
                id: '5edac34d0bb72a50635c2bfa',
                __typename: 'Task',
              },
              {
                id: '60896e28e4a85c72ef3fa301',
                __typename: 'Task',
              },
            ],
            usedInTasks: [],
            bartersFor: [
              {
                id: '48',
                __typename: 'Barter',
              },
              {
                id: '235',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [
              {
                id: '5d78d8a03fe9fc21602e16be',
                __typename: 'Craft',
              },
            ],
            craftsUsing: [],
            sellFor: [
              {
                price: 17521,
                currency: 'RUB',
                priceRUB: 17521,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 22076,
                currency: 'RUB',
                priceRUB: 22076,
                vendor: {
                  name: 'Терапевт',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 14016,
                currency: 'RUB',
                priceRUB: 14016,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 21025,
                currency: 'RUB',
                priceRUB: 21025,
                vendor: {
                  name: 'Егерь',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 32000,
                currency: 'RUB',
                priceRUB: 32000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 79739,
                currency: 'RUB',
                priceRUB: 79739,
                vendor: {
                  name: 'Терапевт',
                  minTraderLevel: 4,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 39753,
                currency: 'RUB',
                priceRUB: 39753,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '590c661e86f7741e566b646a',
            name: 'Автомобильная аптечка',
            normalizedName: 'car-first-aid-kit',
            lastLowPrice: 11500,
            avg24hPrice: 12524,
            updated: '2022-08-29T07:55:29.000Z',
            iconLink:
              'https://assets.tarkov.dev/590c661e86f7741e566b646a-icon.jpg',
            category: {
              name: 'Аптечка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5967733e86f774602332fc84',
                __typename: 'Task',
              },
              {
                id: '59689ee586f7740d1570bbd5',
                __typename: 'Task',
              },
            ],
            usedInTasks: [],
            bartersFor: [
              {
                id: '34',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [
              {
                id: '5d8a1a7d7a3dfe597c2e459e',
                __typename: 'Craft',
              },
              {
                id: '619eb0eb56579138ec08fed8',
                __typename: 'Craft',
              },
            ],
            sellFor: [
              {
                price: 4620,
                currency: 'RUB',
                priceRUB: 4620,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 5821,
                currency: 'RUB',
                priceRUB: 5821,
                vendor: {
                  name: 'Терапевт',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 3696,
                currency: 'RUB',
                priceRUB: 3696,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 5544,
                currency: 'RUB',
                priceRUB: 5544,
                vendor: {
                  name: 'Егерь',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 11500,
                currency: 'RUB',
                priceRUB: 11500,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 11795,
                currency: 'RUB',
                priceRUB: 11795,
                vendor: {
                  name: 'Терапевт',
                  minTraderLevel: 1,
                  taskUnlock: {
                    name: 'Санэпиднадзор - Часть 1',
                    __typename: 'Task',
                  },
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 12524,
                currency: 'RUB',
                priceRUB: 12524,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '590c678286f77426c9660122',
            name: 'Индивидуальная тактическая аптечка IFAK',
            normalizedName: 'ifak-individual-first-aid-kit',
            lastLowPrice: 16000,
            avg24hPrice: 19844,
            updated: '2022-08-29T07:31:54.000Z',
            iconLink:
              'https://assets.tarkov.dev/590c678286f77426c9660122-icon.jpg',
            category: {
              name: 'Аптечка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5a68661a86f774500f48afb0',
                __typename: 'Task',
              },
              {
                id: '5c0d1c4cd0928202a02a6f5c',
                __typename: 'Task',
              },
            ],
            usedInTasks: [],
            bartersFor: [
              {
                id: '49',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [
              {
                id: '5d5c21aed582a50066024610',
                __typename: 'Craft',
              },
            ],
            craftsUsing: [
              {
                id: '615c3d27966c85458e4c49cf',
                __typename: 'Craft',
              },
            ],
            sellFor: [
              {
                price: 11882,
                currency: 'RUB',
                priceRUB: 11882,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 14971,
                currency: 'RUB',
                priceRUB: 14971,
                vendor: {
                  name: 'Терапевт',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 9505,
                currency: 'RUB',
                priceRUB: 9505,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 14258,
                currency: 'RUB',
                priceRUB: 14258,
                vendor: {
                  name: 'Егерь',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 16000,
                currency: 'RUB',
                priceRUB: 16000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 43524,
                currency: 'RUB',
                priceRUB: 43524,
                vendor: {
                  name: 'Терапевт',
                  minTraderLevel: 3,
                  taskUnlock: {
                    name: 'Врачебная тайна - Часть 1',
                    __typename: 'Task',
                  },
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 19844,
                currency: 'RUB',
                priceRUB: 19844,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '60098ad7c2240c0fe85c570a',
            name: 'Индивидуальная тактическая аптечка AFAK',
            normalizedName: 'afak-tactical-individual-first-aid-kit',
            lastLowPrice: 22000,
            avg24hPrice: 38915,
            updated: '2022-08-29T13:20:50.000Z',
            iconLink:
              'https://assets.tarkov.dev/60098ad7c2240c0fe85c570a-icon.jpg',
            category: {
              name: 'Аптечка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5969f9e986f7741dde183a50',
                __typename: 'Task',
              },
              {
                id: '60e71c48c1bfa3050473b8e5',
                __typename: 'Task',
              },
            ],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [
              {
                id: '615c3d27966c85458e4c49cf',
                __typename: 'Craft',
              },
            ],
            craftsUsing: [],
            sellFor: [
              {
                price: 20800,
                currency: 'RUB',
                priceRUB: 20800,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 26208,
                currency: 'RUB',
                priceRUB: 26208,
                vendor: {
                  name: 'Терапевт',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 16640,
                currency: 'RUB',
                priceRUB: 16640,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 24960,
                currency: 'RUB',
                priceRUB: 24960,
                vendor: {
                  name: 'Егерь',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 22000,
                currency: 'RUB',
                priceRUB: 22000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 554,
                currency: 'USD',
                priceRUB: 60940,
                vendor: {
                  name: 'Миротворец',
                  minTraderLevel: 4,
                  taskUnlock: {
                    name: 'Мокрое дело - Часть 5',
                    __typename: 'Task',
                  },
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 38915,
                currency: 'RUB',
                priceRUB: 38915,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
        ],
      },
    },
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Аптечка',
        offset: 6,
        limit: 10,
      },
    },
    result: {data: {items: []}},
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Автомат',
        offset: 0,
        limit: 10,
      },
    },
    result: {
      data: {
        items: [
          {
            id: '5644bd2b4bdc2d3b4c8b4572',
            name: 'Автомат Калашникова АК-74Н 5.45x39',
            normalizedName: 'kalashnikov-ak-74n-545x39-assault-rifle',
            lastLowPrice: 43000,
            avg24hPrice: 44084,
            updated: '2022-08-31T06:59:35.000Z',
            iconLink:
              'https://assets.tarkov.dev/5644bd2b4bdc2d3b4c8b4572-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '59ca29fb86f77445ab465c87',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '322',
                __typename: 'Barter',
              },
              {
                id: '328',
                __typename: 'Barter',
              },
              {
                id: '330',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [
              {
                id: '600a98d076fc4b1877509ead',
                __typename: 'Craft',
              },
            ],
            craftsUsing: [],
            sellFor: [
              {
                price: 11573,
                currency: 'RUB',
                priceRUB: 11573,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 9258,
                currency: 'RUB',
                priceRUB: 9258,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 104,
                currency: 'USD',
                priceRUB: 10416,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 12962,
                currency: 'RUB',
                priceRUB: 12962,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 43000,
                currency: 'RUB',
                priceRUB: 43000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 35859,
                currency: 'RUB',
                priceRUB: 35859,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 2,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 44084,
                currency: 'RUB',
                priceRUB: 44084,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '57616ca52459773c69055192',
            name: 'Приклад автоматного стиля для СОК-12',
            normalizedName: 'sok-12-ak-style-stock',
            lastLowPrice: 3995,
            avg24hPrice: 3995,
            updated: '2022-08-30T15:12:48.000Z',
            iconLink:
              'https://assets.tarkov.dev/57616ca52459773c69055192-icon.jpg',
            category: {
              name: 'Приклад',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '59674eb386f774539f14813a',
                __typename: 'Task',
              },
            ],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 664,
                currency: 'RUB',
                priceRUB: 664,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 7,
                currency: 'USD',
                priceRUB: 747,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 930,
                currency: 'RUB',
                priceRUB: 930,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 3995,
                currency: 'RUB',
                priceRUB: 3995,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 1745,
                currency: 'RUB',
                priceRUB: 1745,
                vendor: {
                  name: 'Егерь',
                  minTraderLevel: 1,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 3995,
                currency: 'RUB',
                priceRUB: 3995,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '57c44b372459772d2b39b8ce',
            name: 'Автомат Специальный "Вал" 9x39',
            normalizedName: 'as-val-9x39-special-assault-rifle',
            lastLowPrice: 138888,
            avg24hPrice: 167514,
            updated: '2022-08-31T08:19:32.000Z',
            iconLink:
              'https://assets.tarkov.dev/57c44b372459772d2b39b8ce-icon.jpg',
            category: {
              name: 'Штурм. карабин',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5eda19f0edce541157209cee',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '5ae3280386f7742a41359364',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 29073,
                currency: 'RUB',
                priceRUB: 29073,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 23258,
                currency: 'RUB',
                priceRUB: 23258,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 262,
                currency: 'USD',
                priceRUB: 26166,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 32562,
                currency: 'RUB',
                priceRUB: 32562,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 138888,
                currency: 'RUB',
                priceRUB: 138888,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 144499,
                currency: 'RUB',
                priceRUB: 144499,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 4,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 167514,
                currency: 'RUB',
                priceRUB: 167514,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '57dc2fa62459775949412633',
            name: 'Автомат Калашникова АКС-74У 5.45x39',
            normalizedName: 'kalashnikov-aks-74u-545x39-assault-rifle',
            lastLowPrice: 31000,
            avg24hPrice: 32222,
            updated: '2022-08-31T07:41:20.000Z',
            iconLink:
              'https://assets.tarkov.dev/57dc2fa62459775949412633-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5ac2426c86f774138762edfe',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '59c512ad86f7741f0d09de9b',
                __typename: 'Task',
              },
              {
                id: '5ac2426c86f774138762edfe',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 6821,
                currency: 'RUB',
                priceRUB: 6821,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 5457,
                currency: 'RUB',
                priceRUB: 5457,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 61,
                currency: 'USD',
                priceRUB: 6139,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 7640,
                currency: 'RUB',
                priceRUB: 7640,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 31000,
                currency: 'RUB',
                priceRUB: 31000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 24605,
                currency: 'RUB',
                priceRUB: 24605,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 1,
                  taskUnlock: {
                    name: 'Проба пера',
                    __typename: 'Task',
                  },
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 32222,
                currency: 'RUB',
                priceRUB: 32222,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '583990e32459771419544dd2',
            name: 'Автомат Калашникова АКС-74УН 5.45x39',
            normalizedName: 'kalashnikov-aks-74un-545x39-assault-rifle',
            lastLowPrice: 26990,
            avg24hPrice: 27703,
            updated: '2022-08-31T08:27:45.000Z',
            iconLink:
              'https://assets.tarkov.dev/583990e32459771419544dd2-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '59674cd986f7744ab26e32f2',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '59c512ad86f7741f0d09de9b',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '281',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 9672,
                currency: 'RUB',
                priceRUB: 9672,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 7738,
                currency: 'RUB',
                priceRUB: 7738,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 87,
                currency: 'USD',
                priceRUB: 8705,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 10833,
                currency: 'RUB',
                priceRUB: 10833,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 26990,
                currency: 'RUB',
                priceRUB: 26990,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 35475,
                currency: 'RUB',
                priceRUB: 35475,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 2,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 27703,
                currency: 'RUB',
                priceRUB: 27703,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5839a40f24597726f856b511',
            name: 'Автомат Калашникова АКС-74УБ 5.45x39',
            normalizedName: 'kalashnikov-aks-74ub-545x39-assault-rifle',
            lastLowPrice: 25555,
            avg24hPrice: 32794,
            updated: '2022-08-31T04:48:00.000Z',
            iconLink:
              'https://assets.tarkov.dev/5839a40f24597726f856b511-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5ede567cfa6dc072ce15d6e3',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '59c512ad86f7741f0d09de9b',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '289',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 10873,
                currency: 'RUB',
                priceRUB: 10873,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 8698,
                currency: 'RUB',
                priceRUB: 8698,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 98,
                currency: 'USD',
                priceRUB: 9785,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 12177,
                currency: 'RUB',
                priceRUB: 12177,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 25555,
                currency: 'RUB',
                priceRUB: 25555,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 70827,
                currency: 'RUB',
                priceRUB: 70827,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 32794,
                currency: 'RUB',
                priceRUB: 32794,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '59430b9b86f77403c27945fd',
            name: 'Автомат Калашникова АК-74Н 5.45x39 Magpul',
            normalizedName: 'kalashnikov-ak-74n-545x39-assault-rifle-magpul',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink:
              'https://assets.tarkov.dev/59430b9b86f77403c27945fd-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [
              {
                id: '328',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 58967,
                currency: 'RUB',
                priceRUB: 58967,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 47173,
                currency: 'RUB',
                priceRUB: 47173,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 531,
                currency: 'USD',
                priceRUB: 53070,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 66043,
                currency: 'RUB',
                priceRUB: 66043,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '59d6088586f774275f37482f',
            name: 'Автомат Калашникова АКМ 7.62x39',
            normalizedName: 'kalashnikov-akm-762x39-assault-rifle',
            lastLowPrice: 42222,
            avg24hPrice: 70831,
            updated: '2022-08-31T08:27:55.000Z',
            iconLink:
              'https://assets.tarkov.dev/59d6088586f774275f37482f-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '59c50a9e86f7745fef66f4ff',
                __typename: 'Task',
              },
              {
                id: '5ae3270f86f77445ba41d4dd',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '321',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [
              {
                id: '600a9955ba91d953182d69f0',
                __typename: 'Craft',
              },
            ],
            craftsUsing: [],
            sellFor: [
              {
                price: 14756,
                currency: 'RUB',
                priceRUB: 14756,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 11805,
                currency: 'RUB',
                priceRUB: 11805,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 133,
                currency: 'USD',
                priceRUB: 13280,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 16527,
                currency: 'RUB',
                priceRUB: 16527,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 42222,
                currency: 'RUB',
                priceRUB: 42222,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 43069,
                currency: 'RUB',
                priceRUB: 43069,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 2,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 70831,
                currency: 'RUB',
                priceRUB: 70831,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '59ff346386f77477562ff5e2',
            name: 'Автомат Калашникова АКМС 7.62x39',
            normalizedName: 'kalashnikov-akms-762x39-assault-rifle',
            lastLowPrice: 25000,
            avg24hPrice: 29211,
            updated: '2022-08-31T08:12:00.000Z',
            iconLink:
              'https://assets.tarkov.dev/59ff346386f77477562ff5e2-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '59c50a9e86f7745fef66f4ff',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 13935,
                currency: 'RUB',
                priceRUB: 13935,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 11148,
                currency: 'RUB',
                priceRUB: 11148,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 125,
                currency: 'USD',
                priceRUB: 12541,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 15607,
                currency: 'RUB',
                priceRUB: 15607,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 25000,
                currency: 'RUB',
                priceRUB: 25000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 41873,
                currency: 'RUB',
                priceRUB: 41873,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 2,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 29211,
                currency: 'RUB',
                priceRUB: 29211,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5a0ec13bfcdbcb00165aa685',
            name: 'Автомат Калашникова АКМН 7.62x39',
            normalizedName: 'kalashnikov-akmn-762x39-assault-rifle',
            lastLowPrice: 47000,
            avg24hPrice: 50659,
            updated: '2022-08-31T07:57:57.000Z',
            iconLink:
              'https://assets.tarkov.dev/5a0ec13bfcdbcb00165aa685-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '59c50a9e86f7745fef66f4ff',
                __typename: 'Task',
              },
              {
                id: '5b477b6f86f7747290681823',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 17001,
                currency: 'RUB',
                priceRUB: 17001,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 13601,
                currency: 'RUB',
                priceRUB: 13601,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 153,
                currency: 'USD',
                priceRUB: 15301,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 19041,
                currency: 'RUB',
                priceRUB: 19041,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 47000,
                currency: 'RUB',
                priceRUB: 47000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 48193,
                currency: 'RUB',
                priceRUB: 48193,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 50659,
                currency: 'RUB',
                priceRUB: 50659,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
        ],
      },
    },
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Автомат',
        offset: 10,
        limit: 10,
      },
    },
    result: {
      data: {
        items: [
          {
            id: '5a17f98cfcdbcb0980087290',
            name: 'Автоматический Пистолет Стечкина АПС 9x18ПМ',
            normalizedName: 'stechkin-aps-9x18pm-machine-pistol',
            lastLowPrice: 9999,
            avg24hPrice: 12922,
            updated: '2022-08-31T07:10:32.000Z',
            iconLink:
              'https://assets.tarkov.dev/5a17f98cfcdbcb0980087290-icon.jpg',
            category: {
              name: 'Пистолет',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '596b455186f77457cb50eccb',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '284',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 5800,
                currency: 'RUB',
                priceRUB: 5800,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 4640,
                currency: 'RUB',
                priceRUB: 4640,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 52,
                currency: 'USD',
                priceRUB: 5220,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 6496,
                currency: 'RUB',
                priceRUB: 6496,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 9999,
                currency: 'RUB',
                priceRUB: 9999,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 15864,
                currency: 'RUB',
                priceRUB: 15864,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 2,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 12922,
                currency: 'RUB',
                priceRUB: 12922,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5a327f9086f77475187e50a9',
            name: 'Автомат Калашникова АКМ 7.62x39 2k17 NY',
            normalizedName: 'kalashnikov-akm-762x39-assault-rifle-2k17-ny',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink: 'https://assets.tarkov.dev/unknown-item-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 97099,
                currency: 'RUB',
                priceRUB: 97099,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 77679,
                currency: 'RUB',
                priceRUB: 77679,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 874,
                currency: 'USD',
                priceRUB: 87389,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 108750,
                currency: 'RUB',
                priceRUB: 108750,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5a43a85186f7746c914b947a',
            name: 'Автомат Калашникова АКС-74УН 5.45x39 Зенит',
            normalizedName: 'kalashnikov-aks-74un-545x39-assault-rifle-zenit',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink: 'https://assets.tarkov.dev/unknown-item-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 58944,
                currency: 'RUB',
                priceRUB: 58944,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 47155,
                currency: 'RUB',
                priceRUB: 47155,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 530,
                currency: 'USD',
                priceRUB: 53049,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 66017,
                currency: 'RUB',
                priceRUB: 66017,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5a8ae21486f774377b73cf5d',
            name: 'Автомат Калашникова АКМ 7.62x39 T-OPS',
            normalizedName: 'kalashnikov-akm-762x39-assault-rifle-t-ops',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:22.000Z',
            iconLink:
              'https://assets.tarkov.dev/5a8ae21486f774377b73cf5d-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 272733,
                currency: 'RUB',
                priceRUB: 272733,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 218186,
                currency: 'RUB',
                priceRUB: 218186,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 2455,
                currency: 'USD',
                priceRUB: 245459,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 305460,
                currency: 'RUB',
                priceRUB: 305460,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5ab8e9fcd8ce870019439434',
            name: 'Автомат Калашникова АКС-74Н 5.45x39',
            normalizedName: 'kalashnikov-aks-74n-545x39-assault-rifle',
            lastLowPrice: 26999,
            avg24hPrice: 29905,
            updated: '2022-08-31T08:25:48.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ab8e9fcd8ce870019439434-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '5ae3277186f7745973054106',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 12745,
                currency: 'RUB',
                priceRUB: 12745,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 10196,
                currency: 'RUB',
                priceRUB: 10196,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 115,
                currency: 'USD',
                priceRUB: 11470,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 14274,
                currency: 'RUB',
                priceRUB: 14274,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 26999,
                currency: 'RUB',
                priceRUB: 26999,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 38072,
                currency: 'RUB',
                priceRUB: 38072,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 2,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 29905,
                currency: 'RUB',
                priceRUB: 29905,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5abcbc27d8ce8700182eceeb',
            name: 'Автомат Калашникова АКМСН 7.62x39',
            normalizedName: 'kalashnikov-akmsn-762x39-assault-rifle',
            lastLowPrice: 21999,
            avg24hPrice: 27795,
            updated: '2022-08-31T06:58:40.000Z',
            iconLink:
              'https://assets.tarkov.dev/5abcbc27d8ce8700182eceeb-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5d25aed386f77442734d25d2',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '59c50a9e86f7745fef66f4ff',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 14486,
                currency: 'RUB',
                priceRUB: 14486,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 11588,
                currency: 'RUB',
                priceRUB: 11588,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 130,
                currency: 'USD',
                priceRUB: 13037,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 16224,
                currency: 'RUB',
                priceRUB: 16224,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 21999,
                currency: 'RUB',
                priceRUB: 21999,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 43063,
                currency: 'RUB',
                priceRUB: 43063,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 27795,
                currency: 'RUB',
                priceRUB: 27795,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5abccb7dd8ce87001773e277',
            name: 'Автоматический Пистолет Бесшумный АПБ 9x18ПМ',
            normalizedName: 'apb-9x18pm-silenced-machine-pistol',
            lastLowPrice: 20000,
            avg24hPrice: 22875,
            updated: '2022-08-31T07:24:21.000Z',
            iconLink:
              'https://assets.tarkov.dev/5abccb7dd8ce87001773e277-icon.jpg',
            category: {
              name: 'Пистолет',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '596b455186f77457cb50eccb',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 5815,
                currency: 'RUB',
                priceRUB: 5815,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 4652,
                currency: 'RUB',
                priceRUB: 4652,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 52,
                currency: 'USD',
                priceRUB: 5233,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 6512,
                currency: 'RUB',
                priceRUB: 6512,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 20000,
                currency: 'RUB',
                priceRUB: 20000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 30305,
                currency: 'RUB',
                priceRUB: 30305,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 22875,
                currency: 'RUB',
                priceRUB: 22875,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5ac4cd105acfc40016339859',
            name: 'Автомат Калашникова АК-74М 5.45x39',
            normalizedName: 'kalashnikov-ak-74m-545x39-assault-rifle',
            lastLowPrice: 38000,
            avg24hPrice: 42783,
            updated: '2022-08-31T04:48:47.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ac4cd105acfc40016339859-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '337',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [
              {
                id: '5d78dbfb65aebb016d20b6f3',
                __typename: 'Craft',
              },
            ],
            craftsUsing: [],
            sellFor: [
              {
                price: 13090,
                currency: 'RUB',
                priceRUB: 13090,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 10472,
                currency: 'RUB',
                priceRUB: 10472,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 118,
                currency: 'USD',
                priceRUB: 11781,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 14661,
                currency: 'RUB',
                priceRUB: 14661,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 38000,
                currency: 'RUB',
                priceRUB: 38000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 39037,
                currency: 'RUB',
                priceRUB: 39037,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 42783,
                currency: 'RUB',
                priceRUB: 42783,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5ac66cb05acfc40198510a10',
            name: 'Автомат Калашникова АК-101 5.56x45',
            normalizedName: 'kalashnikov-ak-101-556x45-assault-rifle',
            lastLowPrice: 43000,
            avg24hPrice: 46305,
            updated: '2022-08-31T04:48:40.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ac66cb05acfc40198510a10-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 17831,
                currency: 'RUB',
                priceRUB: 17831,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 14265,
                currency: 'RUB',
                priceRUB: 14265,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 160,
                currency: 'USD',
                priceRUB: 16048,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 19971,
                currency: 'RUB',
                priceRUB: 19971,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 43000,
                currency: 'RUB',
                priceRUB: 43000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 42938,
                currency: 'RUB',
                priceRUB: 42938,
                vendor: {
                  name: 'Механик',
                  minTraderLevel: 2,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 46305,
                currency: 'RUB',
                priceRUB: 46305,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5ac66d015acfc400180ae6e4',
            name: 'Автомат Калашникова АК-102 5.56x45',
            normalizedName: 'kalashnikov-ak-102-556x45-assault-rifle',
            lastLowPrice: 57999,
            avg24hPrice: 59505,
            updated: '2022-08-31T04:46:43.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ac66d015acfc400180ae6e4-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '5b47749f86f7746c5d6a5fd4',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 25824,
                currency: 'RUB',
                priceRUB: 25824,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 20659,
                currency: 'RUB',
                priceRUB: 20659,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 232,
                currency: 'USD',
                priceRUB: 23241,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 28922,
                currency: 'RUB',
                priceRUB: 28922,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 57999,
                currency: 'RUB',
                priceRUB: 57999,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 58119,
                currency: 'RUB',
                priceRUB: 58119,
                vendor: {
                  name: 'Механик',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 59505,
                currency: 'RUB',
                priceRUB: 59505,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
        ],
      },
    },
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Автомат',
        offset: 20,
        limit: 10,
      },
    },
    result: {
      data: {
        items: [
          {
            id: '5ac66d2e5acfc43b321d4b53',
            name: 'Автомат Калашникова АК-103 7.62x39',
            normalizedName: 'kalashnikov-ak-103-762x39-assault-rifle',
            lastLowPrice: 32222,
            avg24hPrice: 36275,
            updated: '2022-08-31T07:46:42.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ac66d2e5acfc43b321d4b53-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '60896bca6ee58f38c417d4f2',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 17155,
                currency: 'RUB',
                priceRUB: 17155,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 13724,
                currency: 'RUB',
                priceRUB: 13724,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 154,
                currency: 'USD',
                priceRUB: 15439,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 19214,
                currency: 'RUB',
                priceRUB: 19214,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 32222,
                currency: 'RUB',
                priceRUB: 32222,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 47826,
                currency: 'RUB',
                priceRUB: 47826,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 36275,
                currency: 'RUB',
                priceRUB: 36275,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5ac66d725acfc43b321d4b60',
            name: 'Автомат Калашникова АК-104 7.62x39',
            normalizedName: 'kalashnikov-ak-104-762x39-assault-rifle',
            lastLowPrice: 24000,
            avg24hPrice: 29485,
            updated: '2022-08-31T06:58:07.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ac66d725acfc43b321d4b60-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '59c50c8886f7745fed3193bf',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '272',
                __typename: 'Barter',
              },
              {
                id: '338',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 19956,
                currency: 'RUB',
                priceRUB: 19956,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 15964,
                currency: 'RUB',
                priceRUB: 15964,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 180,
                currency: 'USD',
                priceRUB: 17960,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 22350,
                currency: 'RUB',
                priceRUB: 22350,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 24000,
                currency: 'RUB',
                priceRUB: 24000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 53888,
                currency: 'RUB',
                priceRUB: 53888,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 29485,
                currency: 'RUB',
                priceRUB: 29485,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5ac66d9b5acfc4001633997a',
            name: 'Автомат Калашникова АК-105 5.45x39',
            normalizedName: 'kalashnikov-ak-105-545x39-assault-rifle',
            lastLowPrice: 23000,
            avg24hPrice: 39479,
            updated: '2022-08-31T07:28:00.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ac66d9b5acfc4001633997a-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5ede55112c95834b583f052a',
                __typename: 'Task',
              },
            ],
            usedInTasks: [
              {
                id: '5ae327c886f7745c7b3f2f3f',
                __typename: 'Task',
              },
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 15431,
                currency: 'RUB',
                priceRUB: 15431,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 12344,
                currency: 'RUB',
                priceRUB: 12344,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 139,
                currency: 'USD',
                priceRUB: 13887,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 17282,
                currency: 'RUB',
                priceRUB: 17282,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 23000,
                currency: 'RUB',
                priceRUB: 23000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 44093,
                currency: 'RUB',
                priceRUB: 44093,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 39479,
                currency: 'RUB',
                priceRUB: 39479,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5ba3a078d4351e00334c96ca',
            name: 'Автомат Калашникова АКМ 7.62x39 (АКМБ)',
            normalizedName: 'kalashnikov-akm-762x39-assault-rifle-akmb',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ba3a078d4351e00334c96ca-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 43534,
                currency: 'RUB',
                priceRUB: 43534,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 34827,
                currency: 'RUB',
                priceRUB: 34827,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 392,
                currency: 'USD',
                priceRUB: 39181,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 48758,
                currency: 'RUB',
                priceRUB: 48758,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5ba3a14cd4351e003202017f',
            name: 'Автомат Калашникова АКМС 7.62x39 (АКМСБ 6П4М)',
            normalizedName: 'kalashnikov-akms-762x39-assault-rifle-akmsb-6p4m',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink: 'https://assets.tarkov.dev/unknown-item-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 42986,
                currency: 'RUB',
                priceRUB: 42986,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 34388,
                currency: 'RUB',
                priceRUB: 34388,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 387,
                currency: 'USD',
                priceRUB: 38687,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 48144,
                currency: 'RUB',
                priceRUB: 48144,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5ba3a3dfd4351e0032020190',
            name: 'Автомат Калашникова АКМ 7.62x39 (АКМП)',
            normalizedName: 'kalashnikov-akm-762x39-assault-rifle-akmp',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink:
              'https://assets.tarkov.dev/5ba3a3dfd4351e0032020190-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 20226,
                currency: 'RUB',
                priceRUB: 20226,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 16180,
                currency: 'RUB',
                priceRUB: 16180,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 182,
                currency: 'USD',
                priceRUB: 18203,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 22653,
                currency: 'RUB',
                priceRUB: 22653,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5ba3a449d4351e0034778243',
            name: 'Автомат Калашникова АКМС 7.62x39 (АКМСП)',
            normalizedName: 'kalashnikov-akms-762x39-assault-rifle-akmsp',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink: 'https://assets.tarkov.dev/unknown-item-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 19677,
                currency: 'RUB',
                priceRUB: 19677,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 15742,
                currency: 'RUB',
                priceRUB: 15742,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 177,
                currency: 'USD',
                priceRUB: 17709,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 22038,
                currency: 'RUB',
                priceRUB: 22038,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5ba3a4d1d4351e4502010622',
            name: 'Автомат Калашникова АКМН 7.62x39 (АКМН2 6П1Н2)',
            normalizedName: 'kalashnikov-akmn-762x39-assault-rifle-akmn2-6p1n2',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink: 'https://assets.tarkov.dev/unknown-item-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 28997,
                currency: 'RUB',
                priceRUB: 28997,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 23198,
                currency: 'RUB',
                priceRUB: 23198,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 261,
                currency: 'USD',
                priceRUB: 26097,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 32477,
                currency: 'RUB',
                priceRUB: 32477,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5ba3a53dd4351e3bac12056e',
            name: 'Автомат Калашникова АКМСН 7.62x39 (АКМСН2 6П4Н2)',
            normalizedName:
              'kalashnikov-akmsn-762x39-assault-rifle-akmsn2-6p4n2',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink: 'https://assets.tarkov.dev/unknown-item-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 26754,
                currency: 'RUB',
                priceRUB: 26754,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 21403,
                currency: 'RUB',
                priceRUB: 21403,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 241,
                currency: 'USD',
                priceRUB: 24078,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 29964,
                currency: 'RUB',
                priceRUB: 29964,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5bbf1c1c88a45017144d28c5',
            name: 'Автомат Калашникова АК-74М 5.45x39 Зенит',
            normalizedName: 'kalashnikov-ak-74m-545x39-assault-rifle-zenitco',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink:
              'https://assets.tarkov.dev/5bbf1c1c88a45017144d28c5-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [
              {
                id: '337',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 44999,
                currency: 'RUB',
                priceRUB: 44999,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 35999,
                currency: 'RUB',
                priceRUB: 35999,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 405,
                currency: 'USD',
                priceRUB: 40499,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 50398,
                currency: 'RUB',
                priceRUB: 50398,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
        ],
      },
    },
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Автомат',
        offset: 30,
        limit: 10,
      },
    },
    result: {
      data: {
        items: [
          {
            id: '5bf3e03b0db834001d2c4a9c',
            name: 'Автомат Калашникова АК-74 5.45x39',
            normalizedName: 'kalashnikov-ak-74-545x39-assault-rifle',
            lastLowPrice: 39420,
            avg24hPrice: 34360,
            updated: '2022-08-31T03:53:13.000Z',
            iconLink:
              'https://assets.tarkov.dev/5bf3e03b0db834001d2c4a9c-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [
              {
                id: '323',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [
              {
                id: '330',
                __typename: 'Barter',
              },
            ],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 10875,
                currency: 'RUB',
                priceRUB: 10875,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 8700,
                currency: 'RUB',
                priceRUB: 8700,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 98,
                currency: 'USD',
                priceRUB: 9787,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 12180,
                currency: 'RUB',
                priceRUB: 12180,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 39420,
                currency: 'RUB',
                priceRUB: 39420,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 34309,
                currency: 'RUB',
                priceRUB: 34309,
                vendor: {
                  name: 'Прапор',
                  minTraderLevel: 2,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 34360,
                currency: 'RUB',
                priceRUB: 34360,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5bf3e0490db83400196199af',
            name: 'Автомат Калашникова АКС-74 5.45x39',
            normalizedName: 'kalashnikov-aks-74-545x39-assault-rifle',
            lastLowPrice: 20999,
            avg24hPrice: 22630,
            updated: '2022-08-31T07:42:41.000Z',
            iconLink:
              'https://assets.tarkov.dev/5bf3e0490db83400196199af-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [
              {
                id: '61e6e60223374d168a4576a6',
                __typename: 'Task',
              },
            ],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 11830,
                currency: 'RUB',
                priceRUB: 11830,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 9464,
                currency: 'RUB',
                priceRUB: 9464,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 106,
                currency: 'USD',
                priceRUB: 10647,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 13249,
                currency: 'RUB',
                priceRUB: 13249,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 20999,
                currency: 'RUB',
                priceRUB: 20999,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 22630,
                currency: 'RUB',
                priceRUB: 22630,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5cadfbf7ae92152ac412eeef',
            name: 'Автомат АШ-12 12.7x55',
            normalizedName: 'ash-12-127x55-assault-rifle',
            lastLowPrice: 95000,
            avg24hPrice: 74734,
            updated: '2022-08-31T06:56:23.000Z',
            iconLink:
              'https://assets.tarkov.dev/5cadfbf7ae92152ac412eeef-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '5ac3460c86f7742880308185',
                __typename: 'Task',
              },
              {
                id: '60e71b9bbd90872cb85440f3',
                __typename: 'Task',
              },
            ],
            usedInTasks: [],
            bartersFor: [
              {
                id: '266',
                __typename: 'Barter',
              },
              {
                id: '293',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 46900,
                currency: 'RUB',
                priceRUB: 46900,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 37520,
                currency: 'RUB',
                priceRUB: 37520,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 422,
                currency: 'USD',
                priceRUB: 42210,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 52528,
                currency: 'RUB',
                priceRUB: 52528,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 95000,
                currency: 'RUB',
                priceRUB: 95000,
                vendor: {
                  name: 'Барахолка',
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 74734,
                currency: 'RUB',
                priceRUB: 74734,
                vendor: {
                  name: 'Барахолка',
                  enabled: true,
                  __typename: 'FleaMarket',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
          {
            id: '5dd7f8c524e5d7504a4e3077',
            name: 'Автомат Калашникова АК-74 5.45x39 Слива',
            normalizedName: 'kalashnikov-ak-74-545x39-assault-rifle-plum',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:22.000Z',
            iconLink:
              'https://assets.tarkov.dev/5dd7f8c524e5d7504a4e3077-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [
              {
                id: '323',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 16106,
                currency: 'RUB',
                priceRUB: 16106,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 12884,
                currency: 'RUB',
                priceRUB: 12884,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 145,
                currency: 'USD',
                priceRUB: 14495,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 18038,
                currency: 'RUB',
                priceRUB: 18038,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '5dd800bde492226366631317',
            name: 'Автомат Калашникова АК-104 7.62x39 T-SAW',
            normalizedName: 'kalashnikov-ak-104-762x39-assault-rifle-t-saw',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink:
              'https://assets.tarkov.dev/5dd800bde492226366631317-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [
              {
                id: '338',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 155137,
                currency: 'RUB',
                priceRUB: 155137,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 124110,
                currency: 'RUB',
                priceRUB: 124110,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 1396,
                currency: 'USD',
                priceRUB: 139623,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 173754,
                currency: 'RUB',
                priceRUB: 173754,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '618aae5a4dc2d41d5c30264b',
            name: 'Автомат Калашникова АКС-74УН 5.45x39 Recon',
            normalizedName: 'kalashnikov-aks-74un-545x39-assault-rifle-recon',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:18.000Z',
            iconLink:
              'https://assets.tarkov.dev/618aae5a4dc2d41d5c30264b-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 34949,
                currency: 'RUB',
                priceRUB: 34949,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 27959,
                currency: 'RUB',
                priceRUB: 27959,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 315,
                currency: 'USD',
                priceRUB: 31454,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 39143,
                currency: 'RUB',
                priceRUB: 39143,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '618aaeb931ddad66c15eb7e9',
            name: 'Автомат Специальный "Вал" 9x39 Kobra',
            normalizedName: 'as-val-9x39-special-assault-rifle-kobra',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:19.000Z',
            iconLink:
              'https://assets.tarkov.dev/618aaeb931ddad66c15eb7e9-icon.jpg',
            category: {
              name: 'Штурм. карабин',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 57545,
                currency: 'RUB',
                priceRUB: 57545,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 46036,
                currency: 'RUB',
                priceRUB: 46036,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 518,
                currency: 'USD',
                priceRUB: 51790,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 64450,
                currency: 'RUB',
                priceRUB: 64450,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '618ab04934aa2e47480fba2b',
            name: 'Автомат Калашникова АК-104 7.62x39 RPKT mod.1',
            normalizedName: 'kalashnikov-ak-104-762x39-assault-rifle-rpkt-mod1',
            lastLowPrice: null,
            avg24hPrice: 0,
            updated: '2022-07-01T04:23:21.000Z',
            iconLink:
              'https://assets.tarkov.dev/618ab04934aa2e47480fba2b-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [],
            usedInTasks: [],
            bartersFor: [
              {
                id: '272',
                __typename: 'Barter',
              },
            ],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 85540,
                currency: 'RUB',
                priceRUB: 85540,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 68432,
                currency: 'RUB',
                priceRUB: 68432,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 770,
                currency: 'USD',
                priceRUB: 76986,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 95804,
                currency: 'RUB',
                priceRUB: 95804,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [],
            __typename: 'Item',
          },
          {
            id: '628a60ae6b1d481ff772e9c8',
            name: 'Автомат Rifle Dynamics RD-704 7.62x39',
            normalizedName: 'rifle-dynamics-rd-704-762x39-assault-rifle',
            lastLowPrice: 0,
            avg24hPrice: 0,
            updated: '2022-08-31T06:35:58.000Z',
            iconLink:
              'https://assets.tarkov.dev/628a60ae6b1d481ff772e9c8-icon.jpg',
            category: {
              name: 'Штурм. винтовка',
              __typename: 'ItemCategory',
            },
            receivedFromTasks: [
              {
                id: '626bd75d5bef5d7d590bd415',
                __typename: 'Task',
              },
            ],
            usedInTasks: [],
            bartersFor: [],
            bartersUsing: [],
            craftsFor: [],
            craftsUsing: [],
            sellFor: [
              {
                price: 22500,
                currency: 'RUB',
                priceRUB: 22500,
                vendor: {
                  name: 'Прапор',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 18000,
                currency: 'RUB',
                priceRUB: 18000,
                vendor: {
                  name: 'Скупщик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 203,
                currency: 'USD',
                priceRUB: 20250,
                vendor: {
                  name: 'Миротворец',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
              {
                price: 25200,
                currency: 'RUB',
                priceRUB: 25200,
                vendor: {
                  name: 'Механик',
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            buyFor: [
              {
                price: 114619,
                currency: 'RUB',
                priceRUB: 114619,
                vendor: {
                  name: 'Механик',
                  minTraderLevel: 3,
                  taskUnlock: null,
                  __typename: 'TraderOffer',
                },
                __typename: 'ItemPrice',
              },
            ],
            __typename: 'Item',
          },
        ],
      },
    },
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Автомат',
        offset: 39,
        limit: 10,
      },
    },
    result: {
      data: {
        items: [],
      },
    },
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Nothing found',
        offset: 0,
        limit: 10,
      },
    },
    result: {data: {items: []}},
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'Network error query',
        offset: 0,
        limit: 10,
      },
    },
    error: new Error('An network error occurred'),
  },
  {
    request: {
      query: FleaTableDocument,
      variables: {
        name: 'GraphQL error',
        offset: 0,
        limit: 10,
      },
    },
    result: {
      errors: [new GraphQLError('An GraphQL error occurred')],
    },
  },
]

const searchQuery = async (query: string) => {
  const searchBox = screen.getByPlaceholderText('Поиск')
  await userEvent.type(searchBox, query)
}

const Template: ComponentStory<typeof FleaTable> = () => (
  <MockedProvider mocks={mocks} cache={cache}>
    <FleaTable />
  </MockedProvider>
)

export const Default = Template.bind({})

export const EmptyState = Template.bind({})
EmptyState.play = async () => {
  await searchQuery('Nothing found')
}

export const SuccessState = Template.bind({})
SuccessState.play = async () => {
  await searchQuery('Аптечка')
}

export const InfinityScroll = Template.bind({})
InfinityScroll.play = async () => {
  await searchQuery('Автомат')
}

export const NetworkErrorState = Template.bind({})
NetworkErrorState.play = async () => {
  await searchQuery('Network error query')
}

export const GraphQLErrorState = Template.bind({})
GraphQLErrorState.play = async () => {
  await searchQuery('GraphQL error')
}
