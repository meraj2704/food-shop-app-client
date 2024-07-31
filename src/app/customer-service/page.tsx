import CoveredComponent from '@/components/kitchen/CoveredComponent';
import FooterComponent from '@/components/kitchen/FooterComponent';
import MeasureComponent from '@/components/kitchen/MeasureComponent';
import RemarksComponent from '@/components/kitchen/RemarksComponent';
import ServiceSchedule from '@/components/kitchen/ServiceSchedule';
import React from 'react';

const page = () => {
    return (
        <div className='py-10'>
            <MeasureComponent/>
            <CoveredComponent/>
            <RemarksComponent/>
            <ServiceSchedule/>
            <FooterComponent/>
        </div>
    );
};

export default page;