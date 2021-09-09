const Chart = ({ data }) => {
  return <div className="flex">Hello world! {data && <div>{data[0].label}</div>} </div>;
};

export default Chart;
