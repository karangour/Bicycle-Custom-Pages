import React, { FC, useEffect, useState, useCallback, useRef } from "react";
import Highcharts, { Chart, Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Drilldown from "highcharts/modules/drilldown";
import { css, cx } from "@emotion/css"; 

Drilldown(Highcharts);

interface PieSeries {
  name: string;
  colorByPoint?: boolean;
  data: Array<{ name: string; y: number }>;
}

interface PieChartProps {
  series: PieSeries[];
  title?: string;
}


const getContainerClassName = (height: number, isGauge: boolean) =>
  cx(
    "chart-container",
    css`
      .highcharts-title {
        margin-top: ${height * 0.15 * (isGauge ? -1 : 1)}px !important;
        color: #333333; /* Custom title color */
        font-family: "Roboto", sans-serif;
      }
      .highcharts-data-label {
        color: #666666; /* Custom label color */
        font-size: 12px; /* Custom font size */
        font-family: "Roboto", sans-serif;
      }
      .highcharts-legend-item {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
      }
    `
  );

export const PieChart: FC<PieChartProps> = ({ series, title }) => {
  const [chartOptions, setChartOptions] = useState<Options>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const getChartDimensions = useCallback(() => {
    const canvasElem: HTMLElement = chartContainerRef.current;
    if (canvasElem) {
      const dimensions = canvasElem?.getBoundingClientRect();
      if (dimensions) {
        const { height, width } = dimensions;
        return { width, height };
      }
    }
    return { width: -1, height: -1 };
  }, [chartContainerRef]);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const { width, height } = getChartDimensions();

    
    const options: Options = {
      chart: {
        type: "pie",
        backgroundColor: "transparent", 
      },
      title: {
        text: title || "My Pie Chart",
        style: {
          color: "#333333", 
          fontFamily: "'Roboto', sans-serif", 
          fontSize: "18px", 
          marginTop: `${height * 0.15}px`, 
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            style: {
              color: "#666666", 
              fontFamily: "'Roboto', sans-serif", 
              fontSize: "12px",
            },
          },
        },
      },
      legend: {
        itemStyle: {
          fontFamily: "'Roboto', sans-serif",
          fontSize: "14px",
        },
      },
      series: series,
      colors: ["#FF5733", "#33FF57", "#3357FF"], 
    };

    setChartOptions(options);
  }, [series, title, getChartDimensions]);

  return (
    <div className={getContainerClassName(400, false)} ref={chartContainerRef}>
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
};

// Example of DATA STRUCTURE
const MyPieChart = () => {
  const seriesData = [
    {
      name: "Fruits",
      colorByPoint: true,
      data: [
        { name: "Apples", y: 10 },
        { name: "Bananas", y: 20 },
        { name: "Cherries", y: 30 },
      ],
    },
  ];

  return (
    <div>
      <h2>NAME: {seriesData[0].name}</h2>
      <h2>
        DATA: {seriesData[0].data.map((current) => {
          return `${current.name}: ${current.y}`;
        }).join(", ")}
      </h2>
      <PieChart series={seriesData} title="Fruit Consumption" />
    </div>
  )
}

export default MyPieChart;
