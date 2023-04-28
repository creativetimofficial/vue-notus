<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h2 class="text-white text-xl font-semibold">
            {{ title }}
          </h2>
          <h3 class="text-white text-xl font-semibold">
            {{subTitle}}
          </h3>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <canvas :id="'bar-chart_' + ID_GRAPH"></canvas>
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

      if(year === null) {
        year = date.getFullYear()
      }

      if(month === null) {
        month = date.getMonth()
      }

      month = this.months[month]

      this.subTitle = year + "/" + month

      this.$nextTick(function () {
        if (window.myBar !== undefined) {
          this.datasets = []
          window.myBar.destroy()
        }

        let config = {
          type: "bar",
          data: {
            labels: this.labels,
            datasets: this.datasets,
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            hover: {
              mode: "nearest",
              intersect: false,
            },
            legend: {
              display: false,
            },
            onClick: (evt, el) => {
              let position = el[0]._datasetIndex
              let element = config.data.datasets[position].id
              window.location.href = "/admin/entries/0/" + this.path + "-" + element
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: false,
                  scaleLabel: {
                    display: true,
                    labelString: "Month",
                  },
                  gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(0, 0, 0, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Amount",
                  },
                  gridLines: {
                    borderDash: [2],
                    drawBorder: false,
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(0, 0, 0, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
            },
          },
        };

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
          response.forEach(element => {

            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

            let dataset = {
              label: element.label,
              backgroundColor: randomColor,
              data: [element.total],
              fill: true,
              barThickness: 20,
              id: element.id
            }

            this.datasets.push(dataset)

          });

          let ctx = document.getElementById("bar-chart_" + this.ID_GRAPH).getContext("2d");
          window.myBar = new Chart(ctx, config);

        }).catch((error) => {
          console.error(error);
        })
      })
    }
  }
};
</script>
