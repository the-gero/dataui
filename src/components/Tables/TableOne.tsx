import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';
import GenericTable from '../../common/Table';
import { useEffect, useState } from 'react';

const brandData: BRAND[] = [
  {
    logo: BrandOne,
    name: 'Google',
    visitors: 3.5,
    revenues: '5,768',
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: BrandTwo,
    name: 'Twitter',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'Github',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'Vimeo',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'Facebook',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.vaccinate-india.in/api/metadata/states", {
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
    }).then((res) => {
      return res.json()
    }
    ).then(res => setData(res))
  }, []
  )
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        State Wise Data
      </h4>

      <GenericTable
        columns={[
          {
            header: 'State Name',
            accessorKey: 'state_name',
          },
          {
            header: 'Population',
            accessorKey: 'population',
          },
          {
            header: 'Eligible Population',
            accessorKey: 'eligible_population',
          },
          {
            header: 'Total Vaccines Administered',
            accessorKey: 'vaccines_total_administered_mohfw',
          },
          {
            header: 'Dose 1 Administered',
            accessorKey: 'vaccines_dose1_administered_mohfw',
          },
          {
            header: 'Dose 2 Administered',
            accessorKey: 'vaccines_dose2_administered_mohfw',
          },
          {
            header: 'Booster 1 Administered',
            accessorKey: 'vaccines_booster1_administered_mohfw',
          },
          {
            header: 'Last Updated',
            accessorKey: 'last_updated',
            cell: (row) => new Date(row?.getValue()).toDateString()
            
          },
        ]}
        data={data}
      />
    </div>
  );
};

export default TableOne;
