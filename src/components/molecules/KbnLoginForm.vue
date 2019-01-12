<template>
  <form>
    <div class="form-item">
      <label for="email">E-Mail</label>
      <input
        id="email"
        v-model = "email"
        type="text"
        autocomplete="off"
        placeholder="email"
        @focus = "resetError"
      >
    </div>
    <div class="form-item">
      <label for="psw">Password</label>
      <input
        id="psw"
        v-model = "psw"
        type="password"
        placeholder="password"
        autocomplete="off"
        @focus = "resetError"
      >
    </div>
    <div class="form-action">
      <app-kbn-button
        :disabled = "disableLoginAction"
        @click = "handleClick">
        Login
      </app-kbn-button>
      <p
        v-if = "progress"
        class="login-progress">
        Login......
      </p>
      <p
        v-if = "login-error"
        class="login-progress">
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'
//  const REG_EMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const required = val => !val.trim()

export default {
  name: 'KbnLoginForm',
  components: { 'app-kbn-button': KbnButton },
  props: {
    onLogin: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      email: '',
      psw: '',
      progress: false,
      error: ''
    }
  },
  computed: {
    validation () {
      return {
        email: {
          required: required(this.email)
        },
        password: {
          required: required(this.psw)
        }
      }
    },
    valid () {
      const validation = this.validation
      const fields = Object.keys(validation)
      let valid = true
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        valid = Object.keys(validation[field]).every(key => validation[field][key])
        if (!valid) { break }
      }
      return valid
    },
    disableLoginAction () {
      return !this.valid || this.progress
    }
  },
  methods: {
    resetError () {
      this.error = ''
    },
    handleClick () {
      if (this.disableLoginAction) {
        this.progress = true
        this.error = ''
        this.$nextTick(() => {
          this.onLogin({ email: this.email, psw: this.psw })
            .catch(e => {
              this.error = e.message
            })
            .then(() => {
              this.progress = false
            })
        })
      }
    }
  }
}
</script>

<style scoped>
/* Skip */
</style>
