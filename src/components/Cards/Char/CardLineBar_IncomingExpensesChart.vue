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
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas :id="'line_graph_doubleline_' + ID_GRAPH"></canvas>
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
    filter: {
      type: Boolean,
      required: true,
      default: false
    },
    ID_GRAPH: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
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
        if (window.myLineChart !== undefined) {
          this.datasets = []
          this.labels = []
          window.myLineChart.destroy()
        }
        var config = {
          type: this.type,
          data: {
            labels: this.labels,
            datasets: this.datasets,
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
              text: "Sales Charts",
              fontColor: "white",
            },
            legend: {
              labels: {
                fontColor: "white",
              },
              align: "end",
              position: "bottom",
            },
            tooltips: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: false,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Month",
                    fontColor: "white",
                  },
                  gridLines: {
                    display: false,
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
                    display: false,
                    labelString: "Value",
                    fontColor: "white",
                  },
                  gridLines: {
                    borderDash: [3],
                    borderDashOffset: [3],
                    drawBorder: false,
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

        let dataSubmit = {
          category: [],
          time: "monthly",
          year: year
        }

        let path = [
          "entries", "expenses"
        ]

        path.forEach((e) => {
          axios.post(DOMAIN + "/api/stats/graph/" + e, dataSubmit).then((resp) => {
            let response = resp.data
            let randomColor = "#ffffff";

            if (e == "entries") {
              randomColor = "#3bb143"
            }

            if (e == "expenses") {
              randomColor = "#fb3b1e"
            }


            if (this.filter === true) {
              let theseMonth = month - 1
              response = [
                response[theseMonth]
              ]
            }

            let dataset = {
              label: "",
              backgroundColor: randomColor,
              borderColor: randomColor,
              data: [],
              fill: false,
              barThickness: 50,
            }

            response.forEach(element => {
              dataset.data.push(element.total)
              dataset.label = e
            });
            dataset.data.push(0)
            this.datasets.push(dataset)

            if (e == "expenses") {
              response.forEach(element => {
                this.labels.push(element.label)
              });
              var ctx = document.getElementById("line_graph_doubleline_" + this.ID_GRAPH).getContext("2d");
              window.myLineChart = new Chart(ctx, config);
            }

          }).catch((error) => {
            console.error(error);
          })
        })
      })
    }
  }
};
</script>
