import texts from '../texts';
import '../styles/ReportTable.css';


const ReportTable = ({ data }) => {
    return (
        <div className='report-table'>
            <div className='report-table__header'>{texts.gridHeader1}</div>
            <div className='report-table__header'>{texts.gridHeader2}</div>
            <div className='report-table__item'>{data.totalUsers}</div>
            <div className='report-table__item'>{data.percentageScrolled}%</div>
        </div>
    );
};

export default ReportTable;