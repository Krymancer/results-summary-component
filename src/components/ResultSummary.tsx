'use client';

import Button from "./Button";
import SummaryItem from "./SummaryItem";

function LeftSide() {
  return (
    <div className="w-[23rem] rounded-b-[2rem] md:rounded-[2rem] bg-gradient-to-b from-[#75f] via-[#6943FF] to-[#2F2CE9] from-0% via-[0.01%] to-100% flex flex-col items-center justify-between pt-6 gap-6 p-11">
      <div className="text-pale-blue text=[1.125rem] md:text-[1.5rem] font-bold flex items-center">Your Result</div>
      <div className="w-[12.5rem] h-[12.5rem] bg-gradient-to-b from-[#4D21C9] via-[rgba(37, 33, 201, 0.00)] to-[rgba(37, 33, 201, 0.00)] from-0% via-100% to-100% text-white flex items-center justify-center flex-col rounded-full" >
        <div className="text-[3.5rem] md:text-[4.5rem] text-center">76</div>
        <div className="text-pale-blue">of 100</div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-[1.5rem] md:text-[2rem] font-bold text-white">Great</h1>
        <p className="text-pale-blue md:text-lg text-center">Your performance exceed 65% of the people conducting the test here!</p>
      </div>
    </div>
  )
}

function RightSide() {
  return (
    <div className="w-[23rem] bg-white rounded-r-[2rem] shadow-results p-11 flex flex-col gap-11">
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-2xl text-dark-gray-blue">Summary</h1>
        <div className="flex flex-col gap-4">
          <SummaryItem value={80} type="reaction" />
          <SummaryItem value={92} type="memory" />
          <SummaryItem value={61} type="verbal" />
          <SummaryItem value={73} type="visual" />
        </div>
      </div>
      <Button label="Continue" onClick={() => { }} />
    </div>
  )
}

function ResultSummary() {
  return (
    <div className="flex flex-col md:flex-row bg-white md:rounded-[2rem]">
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default ResultSummary;