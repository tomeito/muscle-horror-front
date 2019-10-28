<script>
  import { Radar } from 'vue-chartjs'
  import store from '@/store'

  let life = store.state.result.life;
  let analysis = store.state.result.analysis;

  export default {
    extends: Radar,
    name: "radar",
    data() {
      return {
        dataCollection: {
          labels: ["筋肉量", "素早さ", "相性", "探査能力", "ライフ"],
          datasets: [
            {
              label: "あなたのチーム",
              data: [analysis.muscle, analysis.speed, analysis.affinity, analysis.exploratory, life],
              backgroundColor: "rgba(255, 0, 92, 0.3)",
              borderColor: "rgba(255, 0, 92, 1)",
            }
          ],
        },
        options: {
          scale: {
            ticks: {
                max: 5,
                min: 0,
                stepSize: 1
            }
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      }
    },
    mounted () {
      this.renderChart(this.dataCollection, this.options)
    }
  }
</script>

<style scoped>

</style>