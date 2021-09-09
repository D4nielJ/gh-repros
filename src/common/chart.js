/* eslint-disable react/prop-types */
import { Pie } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const labels = data.map((lang) => lang.label);
  const values = data.map((lang) => lang.value);
  const colors = data.map((lang) => lang.color);

  const chartData = {
    labels,
    datasets: [
      {
        labels,
        data: values,
        backgroundColor: colors,
        hoverOffset: 1,
      },
    ],
  };

  const options = {
    cutout: '50%',
    responsive: true,
    borderWidth: 1,
    tooltips: {
      cornerRadius: 3,
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
      },
    },
  };

  return (
    <div>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default Chart;
