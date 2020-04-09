<template>
    <div>
        {{isLoggedIn}}
    </div>
</template>

<style lang="stylus">
    @import '~reset-css'

    body
        box-sizing border-box
        background-color #F8F9FA
        color rgba(0, 0, 0, .8)
        font-family 'Source Sans Pro', sans-serif
        font-size 14px
        font-weight 400
</style>

<script>
import { mapGetters, mapState } from 'vuex'

async function mounted() {
    this.$store.dispatch('account/fetch')
}

export default {
    computed: mapState({
        account: (state) => state.account,

        ...mapGetters('account', {
            isLoggedIn: 'isLoggedIn',
        }),
    }),

    mounted,
}
</script>
