<template>
    <div class="flex flex-wrap">

        <div class="w-full xl:w-6/12 px-4">
            <select @change="setFilter()"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="input.year" id="year">
                <option v-for="(year, k) in years" :key="k" :value="year">{{ year }}</option>
            </select>
        </div>

        <div class="w-full xl:w-6/12 px-4">
            <select @change="setFilter()"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="input.month" id="month">
                <option v-for="(month, k) in months" :key="k" :value="k">{{ month }}</option>
            </select>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            input: {
                year: null,
                month: null
            },
            years: [],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "All"]
        }
    },
    mounted() {
        let date = new Date()
        for (let i = 0; i <= 4; i++) {
            this.years.push(date.getFullYear() - i);
        }
        this.input.year = date.getFullYear()
        this.input.month = date.getMonth()
    },
    methods: {
        setYear: function (y) {
            this.$store.state.filter_graph.year = y
        },
        setMonth: function (m) {
            this.$store.state.filter_graph.month = m
        },
        setFilter() {
            this.setYear(this.input.year)
            this.setMonth(this.input.month)
        }
    }
};
</script>
