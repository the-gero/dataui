import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import DiabetesDeathsChart from './DiabetesDeathsChart';
import HeartAttackDeathsChart from './HeartAttackDeathsChart';
import BubbleChart from './BubbleChart';
import LineChart from './LineChart';

const HnD: React.FC = () => {
    return (
        <DefaultLayout>
            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <DiabetesDeathsChart />
                <HeartAttackDeathsChart />
                <BubbleChart />
                <LineChart />
            </div>
        </DefaultLayout>
    );
};

export default HnD;
