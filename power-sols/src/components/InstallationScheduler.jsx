import React, { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

const InstallationScheduler = ({ selectedDate, setSelectedDate }) => {


  return (
    <div className="shadow-lg rounded-md p-4 bg-white">
      <div className="space-y-4 my-8">
        <h2 className="text-lg font-bold">Select Your Installation Date</h2>
        <div className="flex flex-col space-y-2">
          <button
            className={`p-2 rounded-md text-white transition ${selectedDate === 'now' ? 'bg-orange-600' : 'bg-orange-400 hover:bg-orange-500'
              }`}
            onClick={() => setSelectedDate('now')}
          >
            I want to select my installation date now
          </button>
          <button
            className={`p-2 rounded-md text-white transition ${selectedDate === 'later' ? 'bg-orange-600' : 'bg-orange-400 hover:bg-orange-500'
              }`}
            onClick={() => setSelectedDate('later')}
          >
            I'll finalise my installation date later
          </button>
        </div>
        {selectedDate && (
          <p className="text-sm text-gray-500">
            You have selected: <strong>{selectedDate === 'now' ? 'Now' : 'Later'}</strong>
          </p>
        )}
        {selectedDate === 'now' && (
          <div className="mt-6">
            <InlineWidget
              url="https://calendly.com/absoluteenergy/30min"
              styles={{ height: '600px', width: '100%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallationScheduler;
