<template>
  <div>
    <div class="bar_chart">
      <h3>Semaine 1</h3>
      <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height" />
    </div>
    <div class="bar_chart">
      <h3>Semaine 2</h3>
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData2"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height" />
    </div>
  </div>
</template>

<script>
  import axios from "../services/axios-service"
  import { Bar } from 'vue-chartjs/legacy'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  const GOAL_PER_DAY = 1667;
  const DAY_PER_WEEK = 7;

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {
    name: 'ProjectList',
    components: { Bar },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 250
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        wordsPerDay: {},
        chartData: {},
        chartData2: {},
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            // x: {
            //   stacked: true,
            // },
            y: {
              ticks: {
                stepSize: 400,
              }
            }
          }
        }
      }
    },
    async mounted() {
      const sessions = (await axios.get("sessions/month")).data
      // [session1, session2, ...]
      this.wordsPerDay = sessions.reduce((acc, elem) => {
        acc[elem.date.slice(8, 10)] = (acc[elem.date.slice(8, 10)] || 0) + elem.totalSessionWord;
        return acc;
      }, {})
      // wordsPerDay = { '01': 1815, '02': 1985, ...}
      this.chartData = this.setChartData(['01', '02', '03', '04', '05', '06', '07']);
      this.chartData2 = this.setChartData(['08', '09', '10', '11', '12', '13', '14']);
    },
    methods: {
      setChartData(days) {
        return {
          labels: days,
          datasets: [ 
            {
              label: 'Objectif/jour',
              backgroundColor: 'rgb(88, 44, 88)',
              data: Array(DAY_PER_WEEK).fill(GOAL_PER_DAY)
            },
            {
              label: 'Mots écrits/jour',
              backgroundColor: (ctx) => {
                const v = ctx.parsed.y;
                return v > GOAL_PER_DAY ? 'rgb(105, 180, 236)' : 'rgb(150, 6, 6)'
              },
              data: days.map((day) => this.wordsPerDay[day]), // [1815, 1985, 1887, 1811, 1825]
            } 
          ]
        }
      }
    }
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bar_chart {
  width: 50%;
  margin: auto;
  border: var(--primary) solid 2px;
  box-shadow: 3px 5px rgba(180, 150, 170, 0.3);
  margin-bottom: 10px;
}

.button_card {
  float: right;
}
</style>