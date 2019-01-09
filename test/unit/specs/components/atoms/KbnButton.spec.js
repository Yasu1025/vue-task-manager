import { mount } from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue'

describe('KbnButton', () => {
  describe('プロパティ', () => {
    describe('type', () => {
      describe('デフォルト', () => {
        it('Should develop with kbn-button class', () => {
          const button = mount(KbnButton)
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      })
    })
  })
})

describe('button', () => {
  it('tag should be button which has kbn-button', () => {
    const button = mount(KbnButton, {
      propsData: {type: 'button'}
    })
    expect(button.is('button')).to.equal(true)
    expect(button.classes()).to.include('kbn-button')
  })
})

describe('text', () => {
  it('tag should be button which includes kbn-button-text', () => {
    const button = mount(KbnButton, {
      propsData: {type: 'text'}
    })
    expect(button.is('button')).to.equal(true)
    expect(button.classes()).to.include('kbn-button-text')
  })
})

describe('disabled', () => {
  it('No disabled attr', () => {
    const button = mount(KbnButton)
    expect(button.attributes().disabled).to.be.an('undefined')
  })
})

describe('true', () => {
  it('disabled attr true', () => {
    const button = mount(KbnButton, {
      propsData: {disabled: true}
    })
    expect(button.attributes().disabled).to.equal('disabled')
  })
})

describe('false', () => {
  it('disabled attr false', () => {
    const button = mount(KbnButton, {
      propsData: {disabled: false}
    })
    expect(button.attributes().disabled).to.equal('undefined')
  })
})

describe('event', () => {
  describe('click', () => {
    it('click event', () => {
      const button = mount(KbnButton)
      button.trigger('click')
      expect(button.emitted().click.length).to.equal(1)
    })
  })
})

describe('slot', () => {
  describe('InsertSlotContents', () => {
    it('Slot yes', () => {
      const button = mount(KbnButton, {
        slots: {default: '<p>hello</p>'}
      })
      expect(button.text()).to.equal('hello')
    })
  })
})

describe('noSlot', () => {
  describe('NoSlotContents', () => {
    it('Slot no', () => {
      const button = mount(KbnButton)
      expect(button.text()).to.equal('')
    })
  })
})
