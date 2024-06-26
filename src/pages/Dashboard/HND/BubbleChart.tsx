import React from 'react';
import Chart from 'react-apexcharts';

const BubbleChart = () => {
    const data = [
        {
          "ROWID": 1,
          "Country": "India",
          "State lgd code": 1,
          "State": "Jammu And Kashmir",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 34.1,
          "Heart Disease": 11.5,
          "Stroke": 2.9,
          "Diabetes Mellitus": 12.3,
          "Neurological/Psychiatric Conditions": 3.3,
          "Cancer": 3.1,
          "Number of older adults": 1567.941019,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 2,
          "Country": "India",
          "State lgd code": 2,
          "State": "Himachal Pradesh",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 21.3,
          "Heart Disease": 10.2,
          "Stroke": 4.4,
          "Diabetes Mellitus": 14,
          "Neurological/Psychiatric Conditions": 7.6,
          "Cancer": 5.6,
          "Number of older adults": 1380,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 3,
          "Country": "India",
          "State lgd code": 3,
          "State": "Punjab",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 25.8,
          "Heart Disease": 10.6,
          "Stroke": 5.6,
          "Diabetes Mellitus": 17.9,
          "Neurological/Psychiatric Conditions": 2.9,
          "Cancer": 6.9,
          "Number of older adults": 2105,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 4,
          "Country": "India",
          "State lgd code": 4,
          "State": "Chandigarh",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 39.2,
          "Heart Disease": 13.5,
          "Stroke": 4.2,
          "Diabetes Mellitus": 30.3,
          "Neurological/Psychiatric Conditions": 7.8,
          "Cancer": 7.5,
          "Number of older adults": 1003,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 5,
          "Country": "India",
          "State lgd code": 5,
          "State": "Uttarakhand",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 15.2,
          "Heart Disease": 7.4,
          "Stroke": 2.2,
          "Diabetes Mellitus": 10.5,
          "Neurological/Psychiatric Conditions": 3.9,
          "Cancer": 5.4,
          "Number of older adults": 1354,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 6,
          "Country": "India",
          "State lgd code": 6,
          "State": "Haryana",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 25.6,
          "Heart Disease": 7.1,
          "Stroke": 1.4,
          "Diabetes Mellitus": 13.8,
          "Neurological/Psychiatric Conditions": 2.8,
          "Cancer": 3.8,
          "Number of older adults": 1893,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 7,
          "Country": "India",
          "State lgd code": 7,
          "State": "Delhi",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 19.3,
          "Heart Disease": 9.2,
          "Stroke": 1.7,
          "Diabetes Mellitus": 18.3,
          "Neurological/Psychiatric Conditions": 3.2,
          "Cancer": 2,
          "Number of older adults": 1315,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 8,
          "Country": "India",
          "State lgd code": 8,
          "State": "Rajasthan",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 16.3,
          "Heart Disease": 4.9,
          "Stroke": 2.4,
          "Diabetes Mellitus": 9.8,
          "Neurological/Psychiatric Conditions": 3.9,
          "Cancer": 3.8,
          "Number of older adults": 2233,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 9,
          "Country": "India",
          "State lgd code": 9,
          "State": "Uttar Pradesh",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Central",
          "Age Group": "Greater than 45",
          "Hypertension": 11.8,
          "Heart Disease": 5,
          "Stroke": 4.6,
          "Diabetes Mellitus": 9.1,
          "Neurological/Psychiatric Conditions": 5,
          "Cancer": 4.1,
          "Number of older adults": 4520,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 10,
          "Country": "India",
          "State lgd code": 10,
          "State": "Bihar",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "East",
          "Age Group": "Greater than 45",
          "Hypertension": 23.9,
          "Heart Disease": 8.3,
          "Stroke": 2.9,
          "Diabetes Mellitus": 13.6,
          "Neurological/Psychiatric Conditions": 10.1,
          "Cancer": 4,
          "Number of older adults": 3512,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 11,
          "Country": "India",
          "State lgd code": 12,
          "State": "Arunachal Pradesh",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Northeast",
          "Age Group": "Greater than 45",
          "Hypertension": 21.9,
          "Heart Disease": 3.7,
          "Stroke": 1.9,
          "Diabetes Mellitus": 9.3,
          "Neurological/Psychiatric Conditions": 1,
          "Cancer": 0.9,
          "Number of older adults": 1212,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 12,
          "Country": "India",
          "State lgd code": 13,
          "State": "Nagaland",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Northeast",
          "Age Group": "Greater than 45",
          "Hypertension": 7.9,
          "Heart Disease": 1,
          "Stroke": 2.5,
          "Diabetes Mellitus": 2.6,
          "Neurological/Psychiatric Conditions": 0.5,
          "Cancer": 1.7,
          "Number of older adults": 1304,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 13,
          "Country": "India",
          "State lgd code": 14,
          "State": "Manipur",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Northeast",
          "Age Group": "Greater than 45",
          "Hypertension": 27.2,
          "Heart Disease": 8.1,
          "Stroke": 10.5,
          "Diabetes Mellitus": 14.7,
          "Neurological/Psychiatric Conditions": 4.8,
          "Cancer": 8.4,
          "Number of older adults": 1362,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 14,
          "Country": "India",
          "State lgd code": 15,
          "State": "Mizoram",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Northeast",
          "Age Group": "Greater than 45",
          "Hypertension": 27.1,
          "Heart Disease": 7.8,
          "Stroke": 4.2,
          "Diabetes Mellitus": 14.3,
          "Neurological/Psychiatric Conditions": 4.5,
          "Cancer": 19.6,
          "Number of older adults": 1241,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 15,
          "Country": "India",
          "State lgd code": 16,
          "State": "Tripura",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Northeast",
          "Age Group": "Greater than 45",
          "Hypertension": 19.9,
          "Heart Disease": 5.2,
          "Stroke": 8.9,
          "Diabetes Mellitus": 10.3,
          "Neurological/Psychiatric Conditions": 2.7,
          "Cancer": 5,
          "Number of older adults": 1177,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 16,
          "Country": "India",
          "State lgd code": 17,
          "State": "Meghalaya",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Northeast",
          "Age Group": "Greater than 45",
          "Hypertension": 25.1,
          "Heart Disease": 2.4,
          "Stroke": 4.3,
          "Diabetes Mellitus": 10.5,
          "Neurological/Psychiatric Conditions": 1,
          "Cancer": 2.1,
          "Number of older adults": 967,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 17,
          "Country": "India",
          "State lgd code": 18,
          "State": "Assam",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Northeast",
          "Age Group": "Greater than 45",
          "Hypertension": 41.7,
          "Heart Disease": 5.8,
          "Stroke": 4.7,
          "Diabetes Mellitus": 12.6,
          "Neurological/Psychiatric Conditions": 5,
          "Cancer": 6,
          "Number of older adults": 2333,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 18,
          "Country": "India",
          "State lgd code": 19,
          "State": "West Bengal",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "East",
          "Age Group": "Greater than 45",
          "Hypertension": 33.2,
          "Heart Disease": 17.2,
          "Stroke": 17.4,
          "Diabetes Mellitus": 19,
          "Neurological/Psychiatric Conditions": 7.7,
          "Cancer": 7.1,
          "Number of older adults": 3897,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 19,
          "Country": "India",
          "State lgd code": 20,
          "State": "Jharkhand",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "East",
          "Age Group": "Greater than 45",
          "Hypertension": 11.5,
          "Heart Disease": 2.5,
          "Stroke": 0.8,
          "Diabetes Mellitus": 7.5,
          "Neurological/Psychiatric Conditions": 4.5,
          "Cancer": 2.2,
          "Number of older adults": 2450,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 20,
          "Country": "India",
          "State lgd code": 21,
          "State": "Odisha",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "East",
          "Age Group": "Greater than 45",
          "Hypertension": 16.2,
          "Heart Disease": 3.1,
          "Stroke": 2.6,
          "Diabetes Mellitus": 9.5,
          "Neurological/Psychiatric Conditions": 4.1,
          "Cancer": 3.5,
          "Number of older adults": 2898,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 21,
          "Country": "India",
          "State lgd code": 22,
          "State": "Chhattisgarh",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Central",
          "Age Group": "Greater than 45",
          "Hypertension": 10,
          "Heart Disease": 2.1,
          "Stroke": 4.5,
          "Diabetes Mellitus": 6.5,
          "Neurological/Psychiatric Conditions": 2.8,
          "Cancer": 2.4,
          "Number of older adults": 2052,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 22,
          "Country": "India",
          "State lgd code": 23,
          "State": "Madhya Pradesh",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "Central",
          "Age Group": "Greater than 45",
          "Hypertension": 13,
          "Heart Disease": 5.9,
          "Stroke": 3.7,
          "Diabetes Mellitus": 9.3,
          "Neurological/Psychiatric Conditions": 5.8,
          "Cancer": 3.5,
          "Number of older adults": 2907,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 23,
          "Country": "India",
          "State lgd code": 24,
          "State": "Gujarat",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "West",
          "Age Group": "Greater than 45",
          "Hypertension": 8.6,
          "Heart Disease": 10.1,
          "Stroke": 5.8,
          "Diabetes Mellitus": 14.4,
          "Neurological/Psychiatric Conditions": 5.7,
          "Cancer": 7.6,
          "Number of older adults": 2308,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 24,
          "Country": "India",
          "State lgd code": 27,
          "State": "Maharashtra",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "West",
          "Age Group": "Greater than 45",
          "Hypertension": 24.9,
          "Heart Disease": 10,
          "Stroke": 8.3,
          "Diabetes Mellitus": 16.3,
          "Neurological/Psychiatric Conditions": 4.1,
          "Cancer": 5.4,
          "Number of older adults": 3952,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 25,
          "Country": "India",
          "State lgd code": 28,
          "State": "Andhra Pradesh",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "South",
          "Age Group": "Greater than 45",
          "Hypertension": 23,
          "Heart Disease": 4.5,
          "Stroke": 3.4,
          "Diabetes Mellitus": 16.6,
          "Neurological/Psychiatric Conditions": 3.2,
          "Cancer": 2.4,
          "Number of older adults": 2656,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 26,
          "Country": "India",
          "State lgd code": 29,
          "State": "Karnataka",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "South",
          "Age Group": "Greater than 45",
          "Hypertension": 31.4,
          "Heart Disease": 11.9,
          "Stroke": 9.2,
          "Diabetes Mellitus": 25.1,
          "Neurological/Psychiatric Conditions": 7.6,
          "Cancer": 8.8,
          "Number of older adults": 2375,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 27,
          "Country": "India",
          "State lgd code": 30,
          "State": "Goa",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "West",
          "Age Group": "Greater than 45",
          "Hypertension": 37.5,
          "Heart Disease": 14,
          "Stroke": 8,
          "Diabetes Mellitus": 27.8,
          "Neurological/Psychiatric Conditions": 7.1,
          "Cancer": 3.8,
          "Number of older adults": 1418,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 28,
          "Country": "India",
          "State lgd code": 31,
          "State": "Lakshadweep",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "South",
          "Age Group": "Greater than 45",
          "Hypertension": 42.7,
          "Heart Disease": 7.3,
          "Stroke": 4.6,
          "Diabetes Mellitus": 34.2,
          "Neurological/Psychiatric Conditions": 2,
          "Cancer": 3.4,
          "Number of older adults": 1130,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 29,
          "Country": "India",
          "State lgd code": 32,
          "State": "Kerala",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "South",
          "Age Group": "Greater than 45",
          "Hypertension": 54.5,
          "Heart Disease": 20.5,
          "Stroke": 7.8,
          "Diabetes Mellitus": 51.9,
          "Neurological/Psychiatric Conditions": 7.9,
          "Cancer": 15,
          "Number of older adults": 2460,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 30,
          "Country": "India",
          "State lgd code": 33,
          "State": "Tamil Nadu",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "South",
          "Age Group": "Greater than 45",
          "Hypertension": 23.3,
          "Heart Disease": 4.4,
          "Stroke": 3.7,
          "Diabetes Mellitus": 22.4,
          "Neurological/Psychiatric Conditions": 4.4,
          "Cancer": 3.3,
          "Number of older adults": 3520,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 31,
          "Country": "India",
          "State lgd code": 34,
          "State": "Puducherry",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "South",
          "Age Group": "Greater than 45",
          "Hypertension": 30.3,
          "Heart Disease": 8.4,
          "Stroke": 1.8,
          "Diabetes Mellitus": 26.9,
          "Neurological/Psychiatric Conditions": 3.2,
          "Cancer": 3.1,
          "Number of older adults": 1422,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 32,
          "Country": "India",
          "State lgd code": 35,
          "State": "Andaman And Nicobar Islands",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "South",
          "Age Group": "Greater than 45",
          "Hypertension": 22.2,
          "Heart Disease": 3.3,
          "Stroke": 2.5,
          "Diabetes Mellitus": 15.2,
          "Neurological/Psychiatric Conditions": 3,
          "Cancer": 2.4,
          "Number of older adults": 1240,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 33,
          "Country": "India",
          "State lgd code": 36,
          "State": "Telangana",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "South",
          "Age Group": "Greater than 45",
          "Hypertension": 22.3,
          "Heart Disease": 3.3,
          "Stroke": 2.2,
          "Diabetes Mellitus": 13.1,
          "Neurological/Psychiatric Conditions": 3.2,
          "Cancer": 3.3,
          "Number of older adults": 2449,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 34,
          "Country": "India",
          "State lgd code": 37,
          "State": "Ladakh",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "North",
          "Age Group": "Greater than 45",
          "Hypertension": 34.1,
          "Heart Disease": 11.5,
          "Stroke": 2.9,
          "Diabetes Mellitus": 12.3,
          "Neurological/Psychiatric Conditions": 3.3,
          "Cancer": 3.1,
          "Number of older adults": 35.05898088,
          "Additional Info": "*: Including spouse irrespective of age"
        },
        {
          "ROWID": 35,
          "Country": "India",
          "State lgd code": 38,
          "State": "The Dadra And Nagar Haveli And Daman And Diu",
          "YearCode": 2022,
          "Year": "Financial Year (Apr - Mar), 2017",
          "Region": "West",
          "Age Group": "Greater than 45",
          "Hypertension": 9.409032023,
          "Heart Disease": 8.30269458,
          "Stroke": 3.468463053,
          "Diabetes Mellitus": 15.39643227,
          "Neurological/Psychiatric Conditions": 3.680189656,
          "Cancer": 6.6,
          "Number of older adults": 2054,
          "Additional Info": "*: Including spouse irrespective of age"
        }
      ]
    // Extracting health conditions
    const healthConditions = [
        "Hypertension",
        "Heart Disease",
        "Stroke",
        "Diabetes Mellitus",
        "Neurological/Psychiatric Conditions",
        "Cancer"
    ];

    // Prepare data for bubble chart
    const bubbleChartData = data.map(item => ({
        x: item.State,
        y: item["Number of older adults"],
        z: healthConditions.map(condition => item[condition])
    }));

    // Chart options
    const options = {
        chart: {
            type: 'bubble',
            height: 400,
            toolbar: {
                show: true
            }
        },
        title: {
            text: 'Health Conditions Among Older Adults in Different States'
        },
        xaxis: {
            type: 'category',
            title: {
                text: 'State'
            }
        },
        yaxis: {
            title: {
                text: 'Number of Older Adults'
            }
        },
        tooltip: {
            enabled: true,
            shared: false,
            intersect: true,
            followCursor: true,
            x: {
                formatter: function (val) {
                    return val;
                }
            },
            y: {
                formatter: function (val) {
                    return val;
                }
            }
        },
        dataLabels: {
            enabled: false
        }
    };

    // Chart series
    const series = healthConditions.map(condition => ({
        name: condition,
        data: bubbleChartData.map(item => ({
            x: item.x,
            y: item.y,
            z: item.z[healthConditions.indexOf(condition)]
        }))
    }));

    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
            <Chart options={options} series={series} type="bubble" height={400} />
        </div>
    );
};

export default BubbleChart;
