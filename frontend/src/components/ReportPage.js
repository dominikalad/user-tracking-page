import React, { useEffect, useState } from 'react';

import apiService from '../apiService';

import Button from './Button';
import Header from './Header';
import ReportTable from './ReportTable';
import texts from '../texts';
import '../styles/ReportPage.css';


const ReportPage = () => {
    const [reportData, setReportData] = useState({ totalUsers: 0, percentageScrolled: 0 });

    useEffect(() => {
        apiService.fetchReportData()
            .then(data => setReportData(data))
            .catch(error => console.error('Error fetching report data:', error));
    }, []);

    return (
        <>
            <Button page='/' text={texts.reportBtn} />
            <Header text={texts.report} />
            <section className='report-page__content'>
                <ReportTable data={reportData} />
            </section>
        </>
    );
};

export default ReportPage;