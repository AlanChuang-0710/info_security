<template>
  <q-page class="q-pa-sm" style="background-color: #363636">
    <q-card dark class="my-card ">
      <p class="text-h6 q-ml-md">BPM_chinalife_Server</p>
      <div>
        <div class="q-px-md ">
          <q-btn-toggle
            v-model="model"
            @input="click"
            toggle-color="primary"
            :options="[
              { label: 'Overview', value: 'one' },
              { label: 'Component', value: 'two' },
            ]"
          />
        </div>
      </div>
      <q-card-section rounded no-shadow>
        <div class="row q-col-gutter-sm">
          <div class="col-xs-12 col-md-8">
            <div style="background-color: rgb(71, 41, 241); border-radius: 5px; height:100%;">
              <div ref="vulnerChart" style="height:330px;"></div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 ">
            <div class=" q-pa-sm" style="background-color: rgb(71, 41, 241); border-radius: 5px;">
              <p class="q-mb-none">
                <span class="text-h4">599&nbsp; </span>
                <span class="text-h6">Risck Score</span>
              </p>
              <ul class="flex justify-between q-col-gutter-sm q-pl-none q-mb-none" style="list-style: none; ">
                <li class="col-2 risk-score risk-score1">
                  <p class="q-ma-none" style="font-size: 14px;">23</p>
                  <p class="q-ma-none" style="font-size: 12px;">Critical</p>
                </li>
                <li class="col-2 risk-score risk-score2">
                  <p class="q-ma-none" style="font-size: 14px;">37</p>
                  <p class="q-ma-none" style="font-size: 12px;">High</p>
                </li>
                <li class="col-2 risk-score risk-score3">
                  <p class="q-ma-none" style="font-size: 14px;">58</p>
                  <p class="q-ma-none" style="font-size: 12px;">Medium</p>
                </li>
                <li class="col-2 risk-score risk-score4">
                  <p class="q-ma-none" style="font-size: 14px;">5</p>
                  <p class="q-ma-none" style="font-size: 12px;">Low</p>
                </li>
                <li class="col-3 risk-score risk-score5">
                  <p class="q-ma-none" style="font-size: 14px;">1</p>
                  <p class="q-ma-none" style="font-size: 12px;">Unassigned</p>
                </li>
              </ul>
            </div>
            <div class=" q-mt-md q-pa-sm" style="background-color: rgb(71, 41, 241); border-radius: 5px;">
              <div class="row">
                <div class="col-6 row">
                  <div class="col-6">
                    <div ref="vulnerGauge" style="height: 100px"></div>
                  </div>
                  <div class="col-6 flex column justify-center">
                    <p style="font-size: 14px;" class="q-mb-none">Component Vulnerable</p>
                    <p style="font-size: 12px;" class="q-mb-none">48 / 413 <span>total</span></p>
                  </div>
                </div>
                <div class="col-6">
                  <div ref="areaChart" style="height: 100px; "></div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 row">
                  <div class="col-6">
                    <div ref="vulnerGauge2" style="height: 100px"></div>
                  </div>
                  <div class="col-6 flex column justify-center">
                    <p style="font-size: 14px;" class="q-mb-none">Component Vulnerable</p>
                    <p style="font-size: 12px;" class="q-mb-none">48 / 413 <span>total</span></p>
                  </div>
                </div>
                <div class="col-6">
                  <div ref="areaChart2" style="height: 100px; "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div ref="treeWrapper">
          <div>
            <div ref="treeChart" style="height:450px;"></div>
          </div>
          <!--右鍵彈出欄-->
          <div id="rightMenu" class="menu" style="display:none;">
            <ul>
              <li class="nodeOption" onclick="editModelNode()">編輯節點</li>
              <li class="nodeOption" onclick="addModelNode()">增加子節點</li>
              <li class="nodeOption" onclick="deleteModelNode('1')">刪除當前節點</li>
              <li class="nodeOption" onclick="deleteModelNode('2')">刪除子節點</li>
            </ul>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-resize-observer @resize="onResize" />
  </q-page>
</template>
<script>
const gaugeData = [
  {
    value: 12,
    name: "Vulnerable",
    title: {
      show: false,
      offsetCenter: ["0%", "0%"],
    },
    detail: {
      show: true,
      valueAnimation: true,
      offsetCenter: ["0%", "0%"],
      borderColor: "none",
      fontSize: 18,
    },
  },
];
const treeData = {
  name: "根節點",
  describes: "此節點具有高度危險性",
  itemStyle: {
    color: "#dc143c",
    borderType: "solid",
    borderWidth: 20,
  },

  tooltip: {
    textStyle: {
      color: "#dc143c",
    },
  },
  label: {
    position: "left",
    verticalAlign: "middle",
    align: "right",
    fontSize: 15,
  },
  children: [
    {
      name: "Second",
      describes: "此節點具有高度危險性",
      itemStyle: { color: "#dc143c", borderType: "solid", borderWidth: 20 },
      tooltip: {
        textStyle: {
          color: "#dc143c",
        },
      },
      children: [
        {
          name: "Third",
          describes: "此節點疑似感染",
          itemStyle: { color: "#ffa500" },
          tooltip: {
            textStyle: {
              color: "#ffa500",
            },
          },
          children: [
            {
              name: "Forth",
              value: 3938,
              describes: "此節點疑似感染",
              itemStyle: { color: "#ffa500" },
              tooltip: {
                textStyle: {
                  color: "#ffa500",
                },
              },
              children: [
                {
                  name: "Fifth",
                  itemStyle: { color: "#ffa500" },
                  value: 2000,
                  describes: "此節點疑似感染",
                  tooltip: {
                    textStyle: {
                      color: "#ffa500",
                    },
                  },
                },
                {
                  name: "Fifth",
                  itemStyle: { color: "#ffa500" },
                  value: 1500,
                  describes: "此節點疑似感染",
                  tooltip: {
                    textStyle: {
                      color: "#ffa500",
                    },
                  },
                },
                {
                  name: "Fifth",
                  itemStyle: { color: "#ffa500" },
                  value: 1000,
                  describes: "此節點疑似感染",
                  tooltip: {
                    textStyle: {
                      color: "#ffa500",
                    },
                  },
                },
                {
                  name: "Fifth",
                  itemStyle: { color: "#ffa500" },
                  value: 1000,
                  describes: "此節點疑似感染",
                  tooltip: {
                    textStyle: {
                      color: "#ffa500",
                    },
                  },
                },
              ],
            },
            { name: "Community", value: 3812 },
            {
              name: "Hierarch",
              value: 6714,
              itemStyle: { color: "#ffa500" },
              describes: "此節點疑似感染",
              tooltip: {
                textStyle: {
                  color: "#ffa500",
                },
              },
            },
            { name: "MergeEdge", value: 743 },
          ],
        },
        {
          name: "graph",
          children: [
            { name: "BetweennessCentrality", value: 3534 },
            { name: "LinkDistance", value: 5731 },
            { name: "MaxFlowMinCut", value: 7840 },
            { name: "ShortestPaths", value: 5914 },
            { name: "SpanningTree", value: 3416 },
          ],
        },
        {
          name: "optimization",
          children: [{ name: "AspectRatioBanker", value: 7074 }],
        },
      ],
    },
    {
      name: "animate",
      children: [
        { name: "Easing", value: 17010 },
        { name: "FunctionSequence", value: 5842 },
        {
          name: "interpolate",
          children: [
            { name: "ArrayInterpolator", value: 1983 },
            { name: "ColorInterpolator", value: 2047 },
            { name: "DateInterpolator", value: 1375 },
            { name: "Interpolator", value: 8746 },
            { name: "MatrixInterpolator", value: 2202 },
            { name: "NumberInterpolator", value: 1382 },
            { name: "ObjectInterpolator", value: 1629 },
            { name: "PointInterpolator", value: 1675 },
            { name: "RectangleInterpolator", value: 2042 },
          ],
        },
        { name: "ISchedulable", value: 1041 },
        { name: "Parallel", value: 5176 },
        { name: "Pause", value: 449 },
        { name: "Scheduler", value: 5593 },
        { name: "Sequence", value: 5534 },
        { name: "Transition", value: 9201 },
        { name: "Transitioner", value: 19975 },
        { name: "TransitionEvent", value: 1116 },
        { name: "Tween", value: 6006 },
      ],
    },
    {
      name: "data",
      children: [
        {
          name: "converters",
          children: [
            { name: "Converters", value: 721 },
            { name: "DelimitedTextConverter", value: 4294 },
          ],
        },
        { name: "DataField", value: 1759 },
        { name: "DataSchema", value: 2165 },
        { name: "DataSet", value: 586 },
        { name: "DataSource", value: 3331 },
        { name: "DataTable", value: 772 },
        { name: "DataUtil", value: 3322 },
      ],
    },
    {
      name: "display",
      children: [
        { name: "DirtySprite", value: 8833 },
        { name: "LineSprite", value: 1732 },
        { name: "RectSprite", value: 3623 },
        { name: "TextSprite", value: 10066 },
      ],
    },
    {
      name: "flex",
      children: [{ name: "FlareVis", value: 4116 }],
    },
    {
      name: "query",
      children: [
        { name: "AggregateExpression", value: 1616 },
        { name: "And", value: 1027 },
        { name: "Arithmetic", value: 3891 },
        { name: "Average", value: 891 },
        { name: "BinaryExpression", value: 2893 },
        { name: "Comparison", value: 5103 },
        { name: "CompositeExpression", value: 3677 },
        { name: "Count", value: 781 },
        { name: "DateUtil", value: 4141 },
        { name: "Distinct", value: 933 },
        { name: "Expression", value: 5130 },
        { name: "ExpressionIterator", value: 3617 },
        { name: "Fn", value: 3240 },
        { name: "If", value: 2732 },
        { name: "IsA", value: 2039 },
        { name: "Literal", value: 1214 },
        { name: "Match", value: 3748 },
        { name: "Maximum", value: 843 },
        {
          name: "methods",
          children: [
            { name: "add", value: 593 },
            { name: "and", value: 330 },
            { name: "average", value: 287 },
            { name: "count", value: 277 },
            { name: "distinct", value: 292 },
            { name: "div", value: 595 },
            { name: "eq", value: 594 },
            { name: "fn", value: 460 },
            { name: "gt", value: 603 },
            { name: "gte", value: 625 },
            { name: "iff", value: 748 },
            { name: "isa", value: 461 },
            { name: "lt", value: 597 },
            { name: "lte", value: 619 },
            { name: "max", value: 283 },
            { name: "min", value: 283 },
            { name: "mod", value: 591 },
            { name: "mul", value: 603 },
            { name: "neq", value: 599 },
            { name: "not", value: 386 },
            { name: "or", value: 323 },
            { name: "orderby", value: 307 },
            { name: "range", value: 772 },
            { name: "select", value: 296 },
            { name: "stddev", value: 363 },
            { name: "sub", value: 600 },
            { name: "sum", value: 280 },
            { name: "update", value: 307 },
            { name: "variance", value: 335 },
            { name: "where", value: 299 },
            { name: "xor", value: 354 },
            { name: "-", value: 264 },
          ],
        },
        { name: "Minimum", value: 843 },
        { name: "Not", value: 1554 },
        { name: "Or", value: 970 },
        { name: "Query", value: 13896 },
        { name: "Range", value: 1594 },
        { name: "StringUtil", value: 4130 },
        { name: "Sum", value: 791 },
        { name: "Variable", value: 1124 },
        { name: "Variance", value: 1876 },
        { name: "Xor", value: 1101 },
      ],
    },
    {
      name: "scale",
      children: [
        { name: "IScaleMap", value: 2105 },
        { name: "LinearScale", value: 1316 },
        { name: "LogScale", value: 3151 },
        { name: "OrdinalScale", value: 3770 },
        { name: "QuantileScale", value: 2435 },
        { name: "QuantitativeScale", value: 4839 },
        { name: "RootScale", value: 1756 },
        { name: "Scale", value: 4268 },
        { name: "ScaleType", value: 1821 },
        { name: "TimeScale", value: 5833 },
      ],
    },
    {
      name: "util",
      children: [
        { name: "Arrays", value: 8258 },
        { name: "Colors", value: 10001 },
        { name: "Dates", value: 8217 },
        { name: "Displays", value: 12555 },
        { name: "Filter", value: 2324 },
        { name: "Geometry", value: 10993 },
        {
          name: "heap",
          children: [
            { name: "FibonacciHeap", value: 9354 },
            { name: "HeapNode", value: 1233 },
          ],
        },
        { name: "IEvaluable", value: 335 },
        { name: "IPredicate", value: 383 },
        { name: "IValueProxy", value: 874 },
        {
          name: "math",
          children: [
            { name: "DenseMatrix", value: 3165 },
            { name: "IMatrix", value: 2815 },
            { name: "SparseMatrix", value: 3366 },
          ],
        },
        { name: "Maths", value: 17705 },
        { name: "Orientation", value: 1486 },
        {
          name: "palette",
          children: [
            { name: "ColorPalette", value: 6367 },
            { name: "Palette", value: 1229 },
            { name: "ShapePalette", value: 2059 },
            { name: "SizePalette", value: 2291 },
          ],
        },
        { name: "Property", value: 5559 },
        { name: "Shapes", value: 19118 },
        { name: "Sort", value: 6887 },
        { name: "Stats", value: 6557 },
        { name: "Strings", value: 22026 },
      ],
    },
    {
      name: "vis",
      children: [
        {
          name: "axis",
          children: [
            { name: "Axes", value: 1302 },
            { name: "Axis", value: 24593 },
            { name: "AxisGridLine", value: 652 },
            { name: "AxisLabel", value: 636 },
            { name: "CartesianAxes", value: 6703 },
          ],
        },
        {
          name: "controls",
          children: [
            { name: "AnchorControl", value: 2138 },
            { name: "ClickControl", value: 3824 },
            { name: "Control", value: 1353 },
            { name: "ControlList", value: 4665 },
            { name: "DragControl", value: 2649 },
            { name: "ExpandControl", value: 2832 },
            { name: "HoverControl", value: 4896 },
            { name: "IControl", value: 763 },
            { name: "PanZoomControl", value: 5222 },
            { name: "SelectionControl", value: 7862 },
            { name: "TooltipControl", value: 8435 },
          ],
        },
        {
          name: "data",
          children: [
            { name: "Data", value: 20544 },
            { name: "DataList", value: 19788 },
            { name: "DataSprite", value: 10349 },
            { name: "EdgeSprite", value: 3301 },
            { name: "NodeSprite", value: 19382 },
            {
              name: "render",
              children: [
                { name: "ArrowType", value: 698 },
                { name: "EdgeRenderer", value: 5569 },
                { name: "IRenderer", value: 353 },
                { name: "ShapeRenderer", value: 2247 },
              ],
            },
            { name: "ScaleBinding", value: 11275 },
            { name: "Tree", value: 7147 },
            { name: "TreeBuilder", value: 9930 },
          ],
        },
        {
          name: "events",
          children: [
            { name: "DataEvent", value: 2313 },
            { name: "SelectionEvent", value: 1880 },
            { name: "TooltipEvent", value: 1701 },
            { name: "VisualizationEvent", value: 1117 },
          ],
        },
        {
          name: "legend",
          children: [
            { name: "Legend", value: 20859 },
            { name: "LegendItem", value: 4614 },
            { name: "LegendRange", value: 10530 },
          ],
        },
        {
          name: "operator",
          children: [
            {
              name: "distortion",
              children: [
                { name: "BifocalDistortion", value: 4461 },
                { name: "Distortion", value: 6314 },
                { name: "FisheyeDistortion", value: 3444 },
              ],
            },
            {
              name: "encoder",
              children: [
                { name: "ColorEncoder", value: 3179 },
                { name: "Encoder", value: 4060 },
                { name: "PropertyEncoder", value: 4138 },
                { name: "ShapeEncoder", value: 1690 },
                { name: "SizeEncoder", value: 1830 },
              ],
            },
            {
              name: "filter",
              children: [
                { name: "FisheyeTreeFilter", value: 5219 },
                { name: "GraphDistanceFilter", value: 3165 },
                { name: "VisibilityFilter", value: 3509 },
              ],
            },
            { name: "IOperator", value: 1286 },
            {
              name: "label",
              children: [
                { name: "Labeler", value: 9956 },
                { name: "RadialLabeler", value: 3899 },
                { name: "StackedAreaLabeler", value: 3202 },
              ],
            },
            {
              name: "layout",
              children: [
                { name: "AxisLayout", value: 6725 },
                { name: "BundledEdgeRouter", value: 3727 },
                { name: "CircleLayout", value: 9317 },
                { name: "CirclePackingLayout", value: 12003 },
                { name: "DendrogramLayout", value: 4853 },
                { name: "ForceDirectedLayout", value: 8411 },
                { name: "IcicleTreeLayout", value: 4864 },
                { name: "IndentedTreeLayout", value: 3174 },
                { name: "Layout", value: 7881 },
                { name: "NodeLinkTreeLayout", value: 12870 },
                { name: "PieLayout", value: 2728 },
                { name: "RadialTreeLayout", value: 12348 },
                { name: "RandomLayout", value: 870 },
                { name: "StackedAreaLayout", value: 9121 },
                { name: "TreeMapLayout", value: 9191 },
              ],
            },
            { name: "Operator", value: 2490 },
            { name: "OperatorList", value: 5248 },
            { name: "OperatorSequence", value: 4190 },
            { name: "OperatorSwitch", value: 2581 },
            { name: "SortOperator", value: 2023 },
          ],
        },
        { name: "Visualization", value: 16540 },
      ],
    },
  ],
};

export default {
  data() {
    return {
      model: "one",
      _vulnerChart: null,
      vulnerOption: {
        backgroundColor: "",
        title: {
          text: "Project Vulnerabilities",
          top: "10px",
          left: "10px",
          textStyle: {
            fontSize: "15px",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Critical", "High", "Medium", "Low", "Unassigned"],
          left: "right",
          top: "25px",
          icon: "circle",
          itemHeight: 7,
          textStyle: {
            fontSize: 12,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          top: "20%",
          containLabel: true,
        },
        graphic: [
          {
            type: "text",
            right: 10,
            top: 15,
            style: {
              text: "Last Measurement: 13 Apr 2023 at 14:06:50",
              fontSize: 13,
              color: "white",
            },
          },
        ],
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Critical",
            type: "line",
            data: [30, 32, 30, 29, 30, 28, 31],
            // smooth: true,
          },
          {
            name: "High",
            type: "line",
            data: [23, 22, 24, 23, 24, 25, 22],
            // smooth: true,
          },
          {
            name: "Medium",
            type: "line",
            data: [20, 21, 20, 22, 21, 22, 20],
            // smooth: true,
          },
          {
            name: "Low",
            type: "line",
            data: [32, 33, 32, 31, 31, 32, 32],
            // smooth: true,
          },
          {
            name: "Unassigned",
            type: "line",
            data: [9, 10, 11, 11, 10, 11, 9],
            // smooth: true,
          },
        ],
      },
      _vulnerGauge: null,
      vulnerGauge: {
        backgroundColor: "",
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: "#464646",
              },
            },
            // 控制輪軸粗度
            axisLine: {
              lineStyle: {
                width: 8,
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 50,
            },
            data: gaugeData,
            title: {
              fontSize: 18,
            },
            detail: {
              width: 50,
              height: 14,
              fontSize: 14,
              color: "inherit",
              borderColor: "inherit",
              borderRadius: 20,
              borderWidth: 1,
              formatter: "{value}%",
            },
          },
        ],
      },
      _areaChart: null,
      areaOption: {
        backgroundColor: "rgba(90, 48, 245, 0.8)",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          show: false,
          min: 540,
          max: 700,
        },
        series: [
          {
            data: [600, 652, 640, 630, 640, 630, 640],
            type: "line",
            areaStyle: {},
          },
        ],
        grid: {
          top: 0,
          bottom: 20,
          left: 0,
          right: 0,
        },
      },
      _vulnerGauge2: null,
      vulnerGauge2: {
        backgroundColor: "",
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: "#464646",
              },
            },
            // 控制輪軸粗度
            axisLine: {
              lineStyle: {
                width: 8,
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 50,
            },
            data: gaugeData,
            title: {
              fontSize: 18,
            },
            detail: {
              width: 50,
              height: 14,
              fontSize: 14,
              color: "inherit",
              borderColor: "inherit",
              borderRadius: 20,
              borderWidth: 1,
              formatter: "{value}%",
            },
          },
        ],
      },
      _areaChart2: null,
      areaOption2: {
        backgroundColor: "rgba(90, 48, 245, 0.8)",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          show: false,
          min: 540,
          max: 700,
        },
        series: [
          {
            data: [600, 652, 640, 630, 640, 630, 640],
            type: "line",
            areaStyle: {},
          },
        ],
        grid: {
          top: 0,
          bottom: 20,
          left: 0,
          right: 0,
        },
      },
      _treeChart: null,
      treeOption: {
        backgroundColor: "rgb(71, 41, 241)",
        title: {
          text: "Tree Structure",
          top: "10px",
          left: "10px",
          textStyle: {
            fontSize: "15px",
          },
        },
        tooltip: {
          show: true,
          trigger: "item",
          triggerOn: "mousemove",
          position: "bottom",
          textStyle: {
            color: "#228EFB",
            fontSize: 17,
            fontWeight: "normal",
          },
          extraCssText: "width:300px;white-space:pre-wrap;",
          confine: true,
          formatter: function(params, ticket, callback) {
            let tip =
              params.data.describes == "" || params.data.describes == null ? params.data.name : params.data.describes;
            return tip;
          },
        },
        series: [
          {
            type: "tree",
            data: [treeData],
            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",
            // 控制node形狀、顏色、大小或改成其他圖形
            symbol: "circle",
            symbolSize: 13,
            label: {
              position: "right",
              verticalAlign: "bottom",
              align: "left",
              fontSize: 15,
            },
            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
                fontSize: 15,
              },
            },
            emphasis: {
              focus: "descendant",
            },
            // edgeShape: "polyline",
            roam: true, //鼠標縮放，拖拽整顆樹
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
        legend: {},
      },
    };
  },
  methods: {
    // 初始化
    chartInit() {
      let vulnerchart = this.$refs.vulnerChart;
      this._vulnerChart = this.$echarts.init(vulnerchart, "dark");
      this._vulnerChart.setOption(this.vulnerOption);

      let vulnerGauge = this.$refs.vulnerGauge;
      this._vulnerGauge = this.$echarts.init(vulnerGauge, "dark");
      this._vulnerGauge.setOption(this.vulnerGauge);

      let areaChart = this.$refs.areaChart;
      this._areaChart = this.$echarts.init(areaChart, "dark");
      this._areaChart.setOption(this.areaOption);

      let vulnerGauge2 = this.$refs.vulnerGauge2;
      this._vulnerGauge2 = this.$echarts.init(vulnerGauge2, "dark");
      this._vulnerGauge2.setOption(this.vulnerGauge2);

      let areaChart2 = this.$refs.areaChart2;
      this._areaChart2 = this.$echarts.init(areaChart2, "dark");
      this._areaChart2.setOption(this.areaOption2);

      let treeChart = this.$refs.treeChart;
      this._treeChart = this.$echarts.init(treeChart, "dark");
      treeData.collapsed = false;
      treeData.children.forEach(function(datum, index) {
        datum.collapsed = true;
      });
      this._treeChart.setOption(this.treeOption);
      this._treeChart.showLoading();
      this._treeChart.hideLoading();
      this._treeChart.on("click", this.treeNodeClick);
      this.treeMenu();
    },
    // 切換按鈕
    click(value) {
      // if (value == "one") {
      //   this.$router.push("/")
      // };
      // if (value == "one") {
      //   this.$router.push("/")
      // }
    },
    // 重新調整頁面
    onResize() {
      if (this._vulnerChart) {
        this._vulnerChart.resize();
      }
      if (this._areaChart) {
        this._areaChart.resize();
      }
      if (this._areaChart2) {
        this._areaChart2.resize();
      }
      if (this._vulnerGauge) {
        this._vulnerGauge.resize();
      }
      if (this._vulnerGauge2) {
        this._vulnerGauge2.resize();
      }
      if (this._treeChart) {
        this._treeChart.resize();
      }
    },

    //#region
    // dancing(chart) {
    // setInterval(() => {
    //   gaugeData[0].value = +(Math.random() * 100).toFixed(2);
    //   this._vulnerGauge.setOption({
    //     series: [
    //       {
    //         data: gaugeData,
    //         pointer: {
    //           show: false,
    //         },
    //       },
    //     ],
    //   });
    // }, 2000);
    // },
    //#endregion

    // tree點擊縮放子節點
    treeNodeClick(param) {
      if (param.data.children && param.data.collapsed) {
        if (Math.round(Math.random() * 100)) {
          param.data.children.push({
            name: "此為動態新增節點",
            describes: "此節點疑似感染",
            itemStyle: { color: "#ffa500" },
            tooltip: {
              textStyle: {
                color: "#ffa500",
              },
            },
          });
        }
      }
      // 獲得實例對象的option中的series中的data配置
      param.data.collapsed = param.data.collapsed == false ? true : false;
      let newData = this._treeChart.getOption().series[0].data;
      // 覆蓋原始數據的data
      this.treeOption.series[0].data = newData;
      this._treeChart.hideLoading();
      this._treeChart.setOption(this.treeOption);
    },

    // tree點擊顯示/關閉右鍵選項
    treeMenu() {
      let treeWrapper = this.$refs.treeWrapper;
      treeWrapper.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        return false;
      });

      let gloab_param = null;
      let rightMenu = document.getElementById("rightMenu");
      this._treeChart.on("contextmenu", function(params) {
        gloab_param = params;
        rightMenu.style.display = "block";
        rightMenu.style.left = params.event.offsetX + 15 + "px";
        rightMenu.style.top = params.event.offsetY - 80 + "px";
      });

      treeWrapper.addEventListener("click", function() {
        rightMenu.style.display = "none";
        rightMenu.style.left = "-9999px";
        rightMenu.style.top = "-9999px";
      });
    },

    // tree編輯節點 (待改)
    editModelNode(param) {
      //editData為編輯的當前節點數據Obj
      let newData = this._treeChart.getOption().series[0].data;
      // 覆蓋原始數據的data
      this.treeOption.series[0].data = newData;
      this._treeChart.hideLoading();
      this._treeChart.setOption(this.treeOption);
    },

    // tree刪除當前/子節點 (待改)
    deleteModelNode(deleteType) {
      if (window.confirm("刪除當前節點後，當前節點下所有子節點也會被刪除，確定要刪除當前節點嗎？")) {
        //此處請求後台刪除節點數據
        var flag = true; //模擬請求成功，重新渲染整個樹
        if (flag) {
          var data = resData.result[0];
          data.collapsed = false;
          data.children.forEach(function(datum, index) {
            datum.collapsed = true;
          });
          option = {
            tooltip: {
              show: true,
              trigger: "item",
              triggerOn: "mousemove",
              position: "bottom",
              textStyle: {
                color: "#228EFB",
                fontSize: 17,
              },
              extraCssText: "width:300px;white-space:pre-wrap;",
              formatter: function(params, ticket, callback) {
                var tsxx =
                  params.data.describes == "" || params.data.describes == null
                    ? params.data.name
                    : params.data.describes;
                return tsxx;
              },
            },
            series: [
              {
                type: "tree",
                data: [data],
                top: "middle",
                left: "center",
                //bottom: '1%',
                //right: '15%',
                symbolSize: 15,
                itemStyle: {
                  color: "#228EFB",
                },
                lineStyle: {
                  color: "#DDD",
                },
                label: {
                  color: "#FFF",
                  position: "left",
                  verticalAlign: "middle",
                  align: "right",
                  fontSize: 18,
                },
                leaves: {
                  label: {
                    position: "right",
                    verticalAlign: "middle",
                    align: "left",
                  },
                },
                emphasis: {
                  focus: "descendant",
                },
                edgeForkPosition: "72%",
                roam: true, //鼠標縮放，拖拽整顆樹
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
              },
            ],
          };
          myChart.clear();
          $(".tree-container").click();
          myChart.setOption(option);
        } else {
          //數據已經清空了，頁面reload
          window.location.reload();
        }
      }
    },
  },
  mounted() {
    this.chartInit();
  },
};
</script>
<style lang="scss">
.risk-score {
  position: relative;
  padding-left: 20px;
}

@mixin risk-score {
  content: " ";
  position: absolute;
  display: inline-block;
  width: 3px;
  height: 30px;
  left: 10px;
  top: 12px;
  border-radius: 5px;
}

.risk-score1::before {
  @include risk-score;
  border: 2px solid red;
}
.risk-score2::before {
  @include risk-score;
  border: 2px solid orange;
}
.risk-score3::before {
  @include risk-score;
  border: 2px solid yellow;
}
.risk-score4::before {
  @include risk-score;
  border: 2px solid rgb(168, 247, 123);
}
.risk-score5::before {
  @include risk-score;
  border: 2px solid rgb(250, 250, 250);
}

.menu {
  position: absolute;
  background: #ffff;
  left: -99999px;
  top: -999999px;
  z-index: 1;
  border-radius: 5px;
}

.menu ul {
  list-style: none;
  padding-left: 10px;
  margin: 5px 0;
}

.nodeOption {
  padding: 5px 10px;
  color: #228efb;
  border-bottom: 1px dashed #228efb;
  font-size: 17px;
  cursor: pointer;
  border-radius: 5px;
}

.nodeOption:hover {
  background-color: rgba(250, 250, 70, 0.5);
}

.menu ul li:last-child {
  border-bottom: none;
}
</style>
