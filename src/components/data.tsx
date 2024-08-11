// @ts-ignore
import { ChartOptions } from 'chart.js';

export const data = {
  labels: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ],
  datasets: [
    {
      label: "Dataset 1",
  data : [
  128.34,
  785.67,
  234.56,
  467.89,
  1000.12,
  543.21,
  678.90,
  345.67,
  1345.67,
  891.23,
  1234.56,
  456.78,
  890.12,
  1123.45,
  654.32,
  1389.01,
  567.89,
  912.34,
  789.01,
  1234.56,
  678.90,
  1098.76,
  543.21,
  635.32
],

      fill: true,
      tension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Time of spending on phone",
    },
  },
};
