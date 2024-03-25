import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';


interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions
}

const ChartTwo: React.FC = () => {

  const [state, setState] = useState<ChartTwoState>({
    series: [],
    options: {}
  });


  const handleReset = () => {
    fetch("https://api.vaccinate-india.in/api/reports/chart?state_id=&district_id=&date=2024-03-23", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "api-key": "bWVzYXJlYWwxMjNlc3RhdGU=",
        "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
      },
      "referrer": "https://vaccinate-india.in/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "omit"
    }).then(res => res.json()).then(res => {
      // Initialize empty arrays for x and y values for each category
      const dates: any = [];
      const age12: any = [];
      const age15: any = [];
      const age18: any = [];
      const age45: any = [];
      const age60: any = [];
      const male: any = [];
      const female: any = [];
      const others: any = [];

      // Iterate over the data and extract dates and values for each category
      res?.last_month_reg_report?.forEach((dataPoint: any) => {
        dates.push(dataPoint.reg_date);
        age12.push(dataPoint.age12);
        age15.push(dataPoint.age15);
        age18.push(dataPoint.age18);
        age45.push(dataPoint.age45);
        age60.push(dataPoint.age60);
        male.push(dataPoint.male);
        female.push(dataPoint.female);
        others.push(dataPoint.others);
      });

      // Now you have your x and y values ready for ApexCharts
      let series = [{
        name: 'Age 12',
        data: age12.map(Number)
      }, {
        name: 'Age 15',
        data: age15.map(Number)
      }, {
        name: 'Age 18',
        data: age18.map(Number)
      }, {
        name: 'Age 45',
        data: age45.map(Number)
      }, {
        name: 'Age 60',
        data: age60.map(Number)
      }, {
        name: 'Male',
        data: male.map(Number)
      }, {
        name: 'Female',
        data: female.map(Number)
      }, {
        name: 'Others',
        data: others.map(Number)
      }];

      // Options object for ApexCharts
      let options = {
        chart: {
          type: 'bar',
          stacked: true,
          height: 400, // Adjust as needed
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          type: 'datetime',
          categories: dates
        },
        legend: {
          position: 'top'
        },
        fill: {
          opacity: 1
        }
      };
      setState({ series, options })
    });
  };
  useEffect(() => {
    handleReset()
  }, []
  )
  console.log(state)

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Registrations this week
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            {/*  <select
                name="#"
                id="#"
                className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
              >
                <option value="" className='dark:bg-boxdark'>This Week</option>
                <option value="" className='dark:bg-boxdark'>Last Week</option>
              </select> */}
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={state?.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
