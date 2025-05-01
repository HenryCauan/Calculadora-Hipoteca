import Image from "../assets/illustration-empty.svg";

export default function Home() {
  return (
    <>
      <div className="w-screen h-dvh flex justify-center items-center bg-[color:#e3f4fc] text-black">
        <div className="flex w-[55%] h-[60%] bg-white rounded-2xl">
          <div className="w-1/2 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Montgage Calculator</h2>
              <p>Clear All</p>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <span>Mortagage Amount</span>
              <div className="flex rounded-lg border-2 border-gray-300 overflow-hidden">
                <div className="w-[50px] h-12 text-[#133040] font-bold text-[1.3rem] flex justify-center items-center bg-[color:#e3f4fc]">£</div>
                <input type="text" className="flex-1 h-12 bg-white" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span>Mortgage Term</span>
                <div className="flex w-[90%] rounded-lg border-2 border-gray-300 overflow-hidden">
                  <input type="text" className="w-[70%] h-12 bg-white" />
                  <div className="w-[70px] h-12 text-[#133040] font-bold text-1xl flex justify-center items-center bg-[color:#e3f4fc]">years</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span>Interest Rate</span>
                <div className="flex w-[90%] rounded-lg border-2 border-gray-300 overflow-hidden">
                  <input type="text" className="w-[70%] h-12 bg-white" />
                  <div className="w-[70px] h-12 text-[#133040] font-bold text-1xl flex justify-center items-center bg-[color:#e3f4fc]">%</div>
                </div>
              </div>
            </div>
            <div>
              <span>Mortgage Type</span>
              <input type="number" />
              <input type="number" />
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
