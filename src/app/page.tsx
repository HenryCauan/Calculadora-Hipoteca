import Image from "../assets/illustration-empty.svg";

export default function Home() {
  return (
    <>
    <div className="w-screen h-dvh flex justify-center items-center bg-[color:#e3f4fc] text-black">
      <div className="flex w-[55%] h-[60%] bg-white rounded-2xl">
        <div className="w-1/2 p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Montgage Calculator</h2>
            <p>Clear All</p>
          </div>
          <div>
            <span>Mortagage Amount</span>
            <input type="number" />
          </div>
          <div>
            <div>
              <span>Mortgage Term</span>
              <input type="number" />
            </div>
            <div>
              <span>interest Rate</span>
              <input type="number" />
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
          <img src={Image} alt="" />
          <h2>Results shown here</h2>
          <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
      </div>
    </div>
    </>
  );
}
