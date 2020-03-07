new Vue({
    el: "#app",
    data: {
        // rate: "Working App",
        rates: {},
        base: '',
        date: '',
    },
    created() {
        axios.get("https://api.exchangeratesapi.io/latest")
            .then((response) => {
                console.log(response.data.rates);
                this.rates = response.data.rates
                this.base = response.data.base
                this.date = response.data.date
            })

    },
    computed: {
        loadRates() {
            axios.get("https://api.exchangeratesapi.io/latest", (response) => {
                // return this.rates = response.data.rates
            })

        }


    }
})