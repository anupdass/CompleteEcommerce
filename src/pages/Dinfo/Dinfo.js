import React from 'react';
import Info from './InfoHeading';

const Dinfo = () => {
    const fakeInfo = [
        {
            id: 1,
            heading: 'Emergency Number',
            number: [
                { id: 1, name: 'police', number: 1245788777 },
                { id: 2, name: 'Fire-service', number: 1245788777 },
                { id: 3, name: 'Medical', number: 1245788777 },
                { id: 4, name: 'Ambulance', number: 1245788777 },
            ]
        },
        {
            id: 2,
            heading: 'Bus Service',
            number: [
                { id: 1, name: 'Binimoy', number: 1245788777 },
                { id: 2, name: 'Brtc', number: 1245788777 },
                { id: 3, name: 'Pabna', number: 1245788777 },
                { id: 4, name: 'Rongpur', number: 1245788777 },
            ]
        },
        {
            id: 2,
            heading: 'School Number',
            number: [
                { id: 1, name: 'Binimoy', number: 1245788777 },
                { id: 2, name: 'Brtc', number: 1245788777 },
                { id: 3, name: 'Pabna', number: 1245788777 },
                { id: 4, name: 'Rongpur', number: 1245788777 },
            ]
        },
    ]
    return (
        <div className='container mx-auto p-3 mt-4'>
            {
                fakeInfo.map(info => <Info
                    key={info.id}
                    heading={info.heading}
                    info={info.number}
                ></Info>)
            }
        </div>
    );
};

export default Dinfo;