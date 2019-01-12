<template>
  <div
    class="login-view"
    style="background-color: orangered;">
    <h1>My App:)</h1>
    <app-kbn-form :onLogin = "handleClick" />
  </div>
</template>

<script>
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'
export default {
  name: 'KbnLoginView',
  components: { 'app-kbn-form': KbnLoginForm },
  methods: {
    handleClick (authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({path: '/'})
        })
    }
  }
}
</script>
