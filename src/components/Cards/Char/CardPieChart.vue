<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1">
                    <h2 class="text-blueGray-700 text-xl font-semibold">
                        {{ title }}
                    </h2>
                    <h3 class="text-blueGray-700 text-xl font-semibold">
                        {{ subTitle }}
                    </h3>
                </div>
            </div>
        </div>
        <div class="p-4 flex-auto">
            <!-- Chart -->
            <div class="relative h-350-px">
                <canvas :id="'pie-chart_' + ID_GRAPH"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from "chart.js";
import axios from 'axios'
// const X_API_KEY = { "X-API-KEY": "7221" };
const DOMAIN = process.env.VUE_APP_API_PATH;

export default {
    props: {
        path: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        category: {
            type: Array,
            required: false,
            default: null
        },
        ID_GRAPH: {
            type: String,
            required: true
        }
    },
    watch: {
        "$store.state.filter_graph.year": function () {
            this.setGraph()
        },
        "$store.state.filter_graph.month": function () {
            this.setGraph()
        },
    },
    data() {
        return {
            datasets: [],
            labels: [],
            subTitle: null,
            months: ["01","02","03","04","05","06","07","08","09","10","11","12"],
        }
    },
    mounted() {
        this.setGraph()
    },
    methods: {
        setGraph() {

            let date = new Date
            let month = this.$store.state.filter_graph.month
            let year = this.$store.state.filter_graph.year

            if (year === null) {
                year = date.getFullYear()
            }

            if (month === null) {
                month = date.getMonth() + 1
            }
            month = this.months[month]
            this.subTitle = year + "/" + month

            this.$nextTick(function () {

                if (window.myPie !== undefined) {
                    this.datasets = []
                    this.labels = []
                    window.myPie.destroy()
                }

                var config = {
                    options: {
                        legend: {
                            display: false
                        },
                        onClick: (evt, el) => {
                            let position = el[0]._datasetIndex
                            let element = config.data.datasets[position].id
                            window.location.href = "/admin/entries/0/" + this.path + "-" + element
                        },
                    },
                    type: "pie",
                    data: {
                        labels: this.labels,
                        datasets: this.datasets,
                    },
                }

                let data = {
                    category: this.category,
                    time: "monthly",
                    year: year
                }

                let currentMonth = month
                if (this.category === null) {
                    data = {
                        timeStart: year + "/" + currentMonth + "/01",
                        timeEnd: year + "/" + currentMonth + "/31"
                    }
                }

                axios.post(DOMAIN + "/api/stats/graph/" + this.path, data).then((resp) => {
                    let response = resp.data

                    let dataset = {
                        label: "",
                        backgroundColor: [],
                        data: [],
                        hoverOffset: 4,
                        id: null
                    }

                    response.forEach(element => {
                        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

                        dataset.backgroundColor.push(randomColor)
                        config.data.labels.push(element.label)
                        dataset.label = element.label
                        dataset.data.push(element.total)
                        dataset.id = element.id
                    });

                    this.datasets.push(dataset)

                    var ctx = document.getElementById("pie-chart_" + this.ID_GRAPH).getContext("2d");
                    window.myPie = new Chart(ctx, config);

                }).catch((error) => {
                    console.error(error);
                })


            });
        },
    }
};
</script>
  