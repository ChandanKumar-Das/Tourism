import { MoreData } from "../constants/constant"
export function MoreFeatures(){
    return(
        <>
        <div className="max-w-[1250px] mx-auto  pb-4 mt-10">
        {/* <div className="max-w-[85%] mx-auto pt-[50px]"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
{MoreData.map((item, index) => (
  <div
    key={index}
    className={` ${
      [1, 3, 4].includes(index) ? "col-span-2" : ""
    }`}
  >
    {/* Display Image */}
    {item.image && (
  <div className="relative w-full h-full group overflow-hidden">
    <img
      src={item.image}
      alt={item.titel || "Image"}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>
)}

    {/* Display Content */}
    {item.titel && (
      <div className={`${[2].includes(index) ? " bg-[#00535e] text-white transition-all duration-500 ease-in-out hover:text-black hover:bg-gray-100 ":[1,4].includes(index) ?'bg-gray-100':''}  bg- w-full h-full flex-clos `}>
        <div className="px-10 pt-10">
        <h2 className="text-3xl font-bold mb-4">{item.titel}</h2>
        <p className=" font-normal text-[19px] font-[Haboro-Soft]  mb-10">{item.content}</p>
        <button className="text-[#6eb43f] font-semibold w-full bottom-0 text-right hover:underline">
          {item.readMore}
        </button>
        </div>
      </div>
    )}
  </div>
))}
</div>
        </div>
      {/* </div> */}

        </>
    )
}

