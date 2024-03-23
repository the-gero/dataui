import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions
}

const ChartOne: React.FC = () => {

  const [state, setState] = useState<ChartOneState>({
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
      const dates: any = [];
      const dose1: any = [];
      const dose2: any = [];
      const dosePd: any = [];
      console.log(res)
      // Iterate over the data and extract dates and doses administered
      res?.last_month_report?.forEach((dataPoint: any) => {
        dates.push(dataPoint.vaccine_date);
        dose1.push(dataPoint.dose_1);
        dose2.push(dataPoint.dose_2);
        dosePd.push(dataPoint.dose_pd);
      });

      // Now you have your x and y values ready for ApexCharts
      let series = [{
        name: 'Dose 1',
        data: dose1
      }, {
        name: 'Dose 2',
        data: dose2
      }, {
        name: 'Dose PD',
        data: dosePd
      }];

      // Options object for ApexCharts
      let options = {
        chart: {
          type: 'area',
          stacked: true,
          height: 400, // Adjust as needed
          toolbar: {
            show: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2] // Adjust line widths as needed
        },
        plotOptions: {
          area: {
            lineSmooth: true
          }
        },
        xaxis: {
          type: 'datetime',
          categories: dates
        },
        yaxis: {
          title: {
            text: 'Number of Doses'
          }
        },
        tooltip: {
          x: {
            format: 'yyyy-MM-dd'
          }
        },
        series: series,
        legend: {
          position: 'top'
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
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      {/* <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Total Revenue</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Sales</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Day
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Week
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Month
            </button>
          </div>
        </div>
      </div> */}
      <div>
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Last month report
        </h4>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          {state?.series?.length > 0 && <ReactApexChart
            series={state?.series}
            options={state?.options}
            type='area'
            height={350}
          />}
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
