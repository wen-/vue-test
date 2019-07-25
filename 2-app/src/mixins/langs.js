export default {
    computed: {
        langs: function () {
            return this.$store.state.language[this.$store.state.currentLanguage];
        }
    },
}
