import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


export const Canvas = () => {
  const dataObject = useSelector((state: RootState) => state.intState.value.resultOb);
  const data = {
    labels: dataObject.map((res) => String(res.x)),
    datasets: [
      {
        label: 'Dataset',
        data: dataObject.map((res) => res.y),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <section>
    <Line options={options} data={data} />
  </section>
}

export const SisCanvas = () => {
  const dataObject = useSelector((state: RootState) => state.intState.value.resultOb);
  const data = {
    labels: dataObject.map((res) => String(res.t)),
    datasets: [
      {
        label: 'Defure 1',
        data: dataObject.map((res) => res.x),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Defure 2',
        data: dataObject.map((res) => res.y),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Defure 3',
        data: dataObject.map((res) => res.z),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <section>
    <Line options={options} data={data} />
  </section>
}