import React from 'react';
import CountUp from 'react-countup';
import { MdProductionQuantityLimits } from 'react-icons/md';

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-20 mt-20 w-11/12 mx-auto text-white">
                
                <div className="bg-black p-5 flex items-center justify-between rounded-xl">
                    <div className="">
                        <MdProductionQuantityLimits className='text-3xl' />
                        <h1 className="text-3xl font-bold">All Products</h1>
                    </div>
                    <p className='text-2xl font-semibold'><CountUp end={100} /></p>
                </div>

                <div className="bg-black p-5 flex items-center justify-between rounded-xl">
                    <div className="">
                        <MdProductionQuantityLimits className='text-3xl' />
                        <h1 className="text-3xl font-bold">All Products</h1>
                    </div>
                    <p className='text-2xl font-semibold'>100</p>
                </div>


                <div className="bg-black p-5 flex items-center justify-between rounded-xl">
                    <div className="">
                        <MdProductionQuantityLimits className='text-3xl' />
                        <h1 className="text-3xl font-bold">All Products</h1>
                    </div>
                    <p className='text-2xl font-semibold'>100</p>
                </div>

                <div className="bg-black p-5 flex items-center justify-between rounded-xl">
                    <div className="">
                        <MdProductionQuantityLimits className='text-3xl' />
                        <h1 className="text-3xl font-bold">All Products</h1>
                    </div>
                    <p className='text-2xl font-semibold'><CountUp end={100}/></p>
                </div>

                <div className="bg-black p-5 flex items-center justify-between rounded-xl">
                    <div className="">
                        <MdProductionQuantityLimits className='text-3xl' />
                        <h1 className="text-3xl font-bold">All Products</h1>
                    </div>
                    <p className='text-2xl font-semibold'>100</p>
                </div>
                <div className="bg-black p-5 flex items-center justify-between rounded-xl">
                    <div className="">
                        <MdProductionQuantityLimits className='text-3xl' />
                        <h1 className="text-3xl font-bold">All Products</h1>
                    </div>
                    <p className='text-2xl font-semibold'>100</p>
                </div>

                

            </div>
        </div>
    );
};

export default Dashboard;