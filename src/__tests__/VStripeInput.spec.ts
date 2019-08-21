// Mocks
import Stripe from '../../test/mocks/stripe'

// Utils
import { mount, MountOptions, Wrapper } from '@vue/test-utils'
import { inspect } from 'util'

// Component to be tested
import { VStripeInput } from '../'

const apiKey = 'pk_test_TYooMQauvdEDq54NiTphI7jx'
const vuetifyMocks = {
  $vuetify : {
    theme: {
      dark: false,
      currentTheme: {
        error: '#ff0000',
      },
    },
  },
}

xdescribe('VStripeInput', () => {
  type Instance = InstanceType<typeof VStripeInput>
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>

  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      // @ts-ignore
      global.Stripe = Stripe
      return mount(VStripeInput, {
        mocks: {
          ...vuetifyMocks,
        },
        ...options,
      })
    }
  })

  xit('should have an API key', () => {
    const wrapper = mountFunction({
      propsData: { apiKey },
    })
    console.log('exists: ', inspect(wrapper, false, null, true))
    expect(wrapper.attributes().apiKey).toBe(apiKey)
  })
})
