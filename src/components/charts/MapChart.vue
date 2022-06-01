<script>
import "echarts-gl";
import World from  "@/utils/world.js"

const CHUNK_COUNT = 230;
var ROOT_PATH =
  "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";

export default {
  name: "",
  data() {
    return {
      map_options: {
        backgroundColor: "#000",
        title: {
          text: "10000000 GPS Points",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          map: "world",
          roam: true,
          label: {
            emphasis: {
              show: false,
            },
          },
          silent: true,
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#111",
            },
            emphasis: {
              areaColor: "#2a333d",
            },
          },
        },
        series: [
          {
            name: "弱",
            type: "scatterGL",
            progressive: 1e6,
            coordinateSystem: "geo",
            symbolSize: 1,
            zoomScale: 0.002,
            blendMode: "lighter",
            large: true,
            itemStyle: {
              color: "rgb(20, 15, 2)",
            },
            postEffect: {
              enable: true,
            },
            silent: true,
            dimensions: ["lng", "lat"],
            data: new Float32Array(),
          },
        ],
      },
      map_chart: null,
    };
  },
  methods: {
    fetchData(idx) {
      if (idx >= CHUNK_COUNT) {
        return;
      }
      const dataURL = ROOT_PATH + "/data/asset/data/gps/gps_" + idx + ".bin";
      const xhr = new XMLHttpRequest();
      xhr.open("GET", dataURL, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function (e) {
        var rawData = new Int32Array(this.response);
        var data = new Float32Array(rawData.length);
        var addedDataCount = rawData.length / 2;
        for (var i = 0; i < rawData.length; i += 2) {
          data[i] = rawData[i + 1] / 1e7;
          data[i + 1] = rawData[i] / 1e7;
        }
        this.map_chart.appendData({
          seriesIndex: 0,
          data: data,
        });
        this.fetchData(idx + 1);
      };
      xhr.send();
    },
    init() {
      let mapchart = document.getElementById("mapchart");
      this.$echarts.dispose(mapchart);
      this.map_chart = this.$echarts.init(mapchart, {
        backgroundColor: "#363636",
      });
      this.map_chart.setOption(this.map_options);
    },
    onResize() {
      if (this.map_chart) {
        this.map_chart.resize();
      }
    },
  },
  mounted() {
    console.log(World);
    // this.init()
    // this.fetchData(0);
  },
};
</script>
<template>
  <div>
    <div>
      <div ref="mapchart" id="mapchart" style="height: 300px"></div>
    </div>
    <q-resize-observer @resize="onResize" />
  </div>
</template>
<style lang="scss" scoped>
</style>