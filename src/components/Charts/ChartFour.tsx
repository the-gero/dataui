import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import { Chart as RChart } from 'react-chartjs-2';
import { Chart } from 'chart.js';
interface ChartFourState {
  series: any;
  options: ApexOptions
}


const colors = [
  ['#FF6384', '#36A2EB'],
  ['#FFCE56', '#4BC0C0'],
  ['#9966FF', '#FF8A80'],
  ['#81C784', '#FFD54F'],
  ['#7986CB', '#FFAB40']
]
const ChartFour: React.FC = () => {

  const [state, setState] = useState<ChartFourState>({
    series: {
      labels: ['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay'],
      datasets: []
    },
    options: {}
  });


  const handleReset = async () => {
    const reportResp = await fetch("https://api.vaccinate-india.in/api/reports/report?state_id=&district_id=&date=2024-03-24", {
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
    });
    const metaResp = await fetch("https://api.vaccinate-india.in/api/metadata/meta", {
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
    })

    const [meta, report]: [META, Reports] = await Promise.all([metaResp.json(), reportResp.json()])
    setState({
      series: {
        labels: ['Total Population', 'Total Vaccinated', 'Total 0 to 18', 'Total 0 to 18 Vaccinated', 'Total 18 to 44', 'Total 18 to 44 Vaccinated', 'Total 45 to 60', 'Total 45 to 60 Vaccinated', "Total Above 60", "Total Above 60 vaccinated"],
        datasets: [
          {
            data: [meta.total_population, report.vaccinations_by_age.total]
          },
          {
            data: [meta.population_0_18, report.vaccinations_by_age.vac_12_14 + report.vaccinations_by_age.vac_15_17]
          },
          {
            data: [meta.population_18_44, report.vaccinations_by_age.vac_18_45]
          },
          {
            data: [meta.population_45_60, report.vaccinations_by_age.vac_45_60]
          },
          {
            data: [meta.population_60_above, report.vaccinations_by_age.above_60]
          }
        ].map((e, index) => ({ ...e, backgroundColor: colors[index].concat(colors.flat(1)) }))
      }
    })
  };
  useEffect(() => {
    handleReset()
  }, []
  )
  console.log(state)
  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Population Vaccination by Age Group
          </h5>
        </div>




      </div>
      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <RChart type='doughnut' data={state?.series} options={{
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  generateLabels: function (chart) {
                    // Get the default label list
                    const original = Chart.overrides.doughnut.plugins.legend.labels.generateLabels;
                    const labelsOriginal = original.call(this, chart);

                    // Build an array of colors used in the datasets of the chart

                    let datasetColors = colors.flat();

                    // Modify the color and hide state of each label
                    labelsOriginal.forEach(label => {
                      // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
                      label.datasetIndex = (label.index - label.index % 2) / 2;

                      // The hidden state must match the dataset's hidden state
                      label.hidden = !chart.isDatasetVisible(label.datasetIndex);

                      // Change the color to match the dataset
                      label.fillStyle = datasetColors[label.index];
                    });

                    return labelsOriginal;
                  },
                  onClick: function (mouseEvent, legendItem, legend) {
                    // toggle the visibility of the dataset from what it currently is
                    legend.chart.getDatasetMeta(
                      legendItem.datasetIndex
                    ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
                    legend.chart.update();
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                      console.log(context.chart.data.labels[labelIndex] + ': ' + context.formattedValue)
                      return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
                    }
                  }
                }

              },
            }
          }
          } />
        </div>
      </div>
    </div>
  );
};

export default ChartFour;


export interface META {
  total_population: number
  eligible_population: number
  population_0_18: number
  population_18_44: number
  population_45_60: number
  population_60_above: number
  population_male: number
  population_female: number
  total_distribution: number
  total_consumption: number
  total_consumption_dose1: number
  total_consumption_dose2: number
  total_consumption_booster1: number
  total_consumption_lastday: number
  total_consumption_dose1_lastday: number
  total_consumption_dose2_lastday: number
  total_consumption_booster1_lastday: number
  vaccines_remaining: number
  total_vaccinated_until_yesterday: number
  partially_vaccinated_until_yesterday: number
  fully_vaccinated_until_yesterday: number
  total_registered_until_yesterday: number
  consumption_updated_on: string
  distribution_updated_on: string
  others: Others
}

export interface Others {
  liveMaxSpeed: string
  liveVaccinationEnabled: boolean
  liveHighlightFrom: string
  notice: string
  hasNotice: boolean
}

export interface Reports {
  vaccination_sessions: VaccinationSessions
  vaccination_sites: VaccinationSites
  registration: Registration
  vaccination: Vaccination
  todays_vaccinations: any[]
  vaccinations_by_location: VaccinationsByLocation[]
  vaccinations_by_age: VaccinationsByAge
  todays_registrations: TodaysRegistration[]
  todays_vaccinations_by_age: any[]
  last_updated: string
}

export interface VaccinationSessions {
  total: number
  govt: number
  pvt: number
  today: any
}

export interface VaccinationSites {
  total: number
  govt: number
  pvt: number
  today: any
}

export interface Registration {
  total: number
  cit_12_14: number
  cit_15_17: number
  cit_18_45: number
  cit_45_above: number
  yesterday: number
  male_reg: number
  female_reg: number
  others_reg: number
  today: number
}

export interface Vaccination {
  total: number
  male: number
  female: number
  others: number
  covishield: number
  incovacc: number
  covaxin: number
  sputnik: number
  zycov: number
  corbevax: number
  covovax: number
  gemcovacc: number
  gemcovacc_om: number
  today: number
  tot_dose_1: number
  tot_dose_2: number
  tot_pd: number
  total_doses: number
  today_dose_one: number
  today_dose_two: number
  today_dose_pd: number
  today_male: number
  today_female: number
  today_others: number
  today_aefi: number
  aefi: number
  yesterday_vac: number
  yesterday_dose_one: number
  yesterday_dose_two: number
  yesterday_dose_pd: number
}

export interface VaccinationsByLocation {
  state_id: string
  id: string
  title: string
  state_name: string
  total: number
  partial_vaccinated: number
  totally_vaccinated: number
  precaution_dose: number
  today: number
}

export interface VaccinationsByAge {
  total: number
  vac_12_14: number
  vac_15_17: number
  vac_18_45: number
  vac_45_60: number
  above_60: number
}

export interface TodaysRegistration {
  ts: string
  timestamps: string
  label: string
  total: string
  age12: string
  age15: string
  age18: string
  age45: string
  age60: string
  male: string
  female: string
  others: string
}
