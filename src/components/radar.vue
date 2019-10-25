<template>
  
</template>

<script>
  import { Radar } from 'vue-chartjs'

  export default {
    extends: Radar,
    name: "radar",
    data() {
      return {
        label: ["筋肉量", "素早さ", "相性", "探査能力", "ライフ"],
        datasets: [
          {
            data: [0, 0, 0, 0, 0],
            backgroundColor: "rgba(255, 0, 92, 0.3)",
            borderColor: "rgba(255, 0, 92, 1)",
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>