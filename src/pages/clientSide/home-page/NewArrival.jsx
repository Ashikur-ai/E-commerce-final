
const NewArrival = () => {

  const star = {
    position: "relative",//+
    overflow: "hidden",//+
    cursor: "pointer",//+
    display: "block",//+
    float: "left",//+
    color: "#FFD700",
    fontSize: "20px;"//+
  }

  return (
    <div className="w-4/5 mx-auto my-20">
      <h2 className="text-center text-5xl font-bold">NEW ARRIVALS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 lg:px-0">
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1726239760/image_7-removebg-preview_yzhicn.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5"> T-SHIRT WITH TAPE DETAILS</h2>


          <div className="flex items-center gap-4">
            <div>
              <span className="text-2xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-2xl" data-index="2" data-forhalf="★" style={star}>★</span>
              <span className="text-2xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-2xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-2xl" data-index="0" data-forhalf="★" style={star}>★</span>
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-center text-xl pt-2">4.5/5</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold">$120</h2>
        </div>
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1726241579/image_8-removebg-preview_becyzs.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5">SKINNY FIT JEANS</h2>


          <div className="flex items-center">
            <div>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="2" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-center text-2xl pt-2 font-bold">3.5/5</span>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <h2 className="text-3xl font-bold">$240</h2>
            <h2 className="text-3xl font-bold line-through text-gray-400">$260</h2>
            <span className="text-red-600 px-3 py-2.5 rounded-[60px] bg-[#FFEAEA]">-20%</span>

          </div>

        </div>
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1726241753/image_9-removebg-preview_wziy6b.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5"> CHECKERED SHIRT</h2>


          <div className="flex items-center">
            <div>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="2" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-center text-2xl pt-2 font-bold">4.5/5</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold">$180</h2>
        </div>
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1726241934/image_10-removebg-preview_cmy567.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5"> SLEEVE STRIPED T-SHIRT</h2>


          <div className="flex items-center">
            <div>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="2" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
              <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-center text-2xl pt-2 font-bold">4.5/5</span>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <h2 className="text-3xl font-bold">$130</h2>
            <h2 className="text-3xl font-bold line-through text-gray-400">$160</h2>
            <span className="text-red-600 px-3 py-2.5 rounded-[60px] bg-[#FFEAEA]">-30%</span>

          </div>
        </div>

      </div>
      {/* btn */}
      <div className="text-center py-3">
        <button className="px-6 py-3 rounded-[60px] border border-gray-400">View All</button>

      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default NewArrival;
