import Image from "../assets/illustration-empty.svg";

export default function Home() {
  return (
    <>
      <div className="w-screen h-dvh flex justify-center items-center bg-[color:#e3f4fc] text-black">
        <div className="flex w-[55%] h-[60%] bg-white rounded-2xl">
          <div className="w-1/2 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#133040]">Montgage Calculator</h2>
              <p className="opacity-60 border-b-2 border-gray-400 ">Clear All</p>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <span className="opacity-60 text-">Mortagage Amount</span>
              <div className="flex rounded-lg border-2 border-gray-300 overflow-hidden">
                <div className="w-[50px] h-12 text-[#133040] font-bold text-[1.3rem] flex justify-center items-center bg-[color:#e3f4fc]">£</div>
                <input type="text" className="flex-1 h-12 bg-white" />
              </div>
            </div>
            <div className="flex gap-2 mb-6">
              <div className="flex flex-col gap-2">
                <span className="opacity-60 font-medium">Mortgage Term</span>
                <div className="flex w-[90%] rounded-lg border-2 border-gray-300 overflow-hidden">
                  <input type="text" className="w-[70%] h-12 bg-white" />
                  <div className="w-[70px] h-12 text-[#133040] font-bold text-1xl flex justify-center items-center bg-[color:#e3f4fc]">years</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="opacity-60 font-medium">Interest Rate</span>
                <div className="flex w-[90%] rounded-lg border-2 border-gray-300 overflow-hidden">
                  <input type="text" className="w-[70%] h-12 bg-white" />
                  <div className="w-[70px] h-12 text-[#133040] font-bold text-1xl flex justify-center items-center bg-[color:#e3f4fc]">%</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="opacity-60 font-medium">Mortgage Type</span>
              <label className="flex items-center border border-gray-300 w-full rounded-md px-4 py-3 cursor-pointer w-fit">
                <input
                  type="radio"
                  name="option"
                  className="peer hidden"
                />
                <div className="w-4 h-4 rounded-full border-2 border-gray-400 mr-3 flex items-center justify-center peer-checked:border-blue-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full peer-checked:block hidden" />
                </div>
                <span className="font-semibold text-gray-800">Repayment</span>
              </label>
              <label className="flex items-center border border-gray-300 w-full rounded-md px-4 py-3 cursor-pointer w-fit">
                <input
                  type="radio"
                  name="option"
                  className="peer hidden"
                />
                <div className="w-4 h-4 rounded-full border-2 border-gray-400 mr-3 flex items-center justify-center peer-checked:border-blue-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full peer-checked:block hidden" />
                </div>
                <span className="font-semibold text-gray-800">Interest Only</span>
              </label>
            </div>
            <button>Calculate Repayments</button>
          </div>
          <div className="flex-1 bg-[color:#133040] rounded-2xl rounded-tl-none rounded-bl-[10%]">
            <img className="" src={Image} alt="" />
            <h2>Results shown here</h2>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
          </div>
        </div>
      </div>
    </>
  );
}
