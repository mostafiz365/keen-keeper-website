import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/FriendContext';

const Stats = () => {
    const {calling, sms, video} = useContext(FriendContext);
    const data = [
  { name: 'Call', value: calling.length, fill: '#0088FE' },
  { name: 'Text', value: sms.length, fill: '#FFBB28' },
  { name: 'Video', value: video.length, fill: '#FF8042' },
    ];



    return (
        <div className='py-20 bg-[#F8FAFC]'>
            <div className='max-w-10/12 mx-auto space-y-6'>

            <h2 className='text-5xl font-bold text-[#1F2937]'>Friendship Analytics</h2>
            <div className='p-8 bg-white rounded-lg space-y-6 shadow-sm'>
                <p className='text-xl font-medium text-[#244D3F]'>By Interaction Type</p>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', margin: 'auto', padding: '20px 0', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
        />
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
        </div>
            </div>
        </div>
    );
};

export default Stats;