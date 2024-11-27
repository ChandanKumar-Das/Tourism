import { MoreData } from "../constants/constant"
export function MoreFeatures(){
    return(
        <>
        <div className="max-w-[1250px] mx-auto  pb-4 mt-36">
        {/* <div className="max-w-[85%] mx-auto pt-[50px]"> */}
        <div className="grid grid-cols-3 gap-4">
{MoreData.map((item, index) => (
  <div
    key={index}
    className={` ${
      [1, 3, 4].includes(index) ? "col-span-2" : ""
    }`}
  >
    {/* Display Image */}
    {item.image && (
      <img
        src={item.image}
        alt={item.titel || "Image"}
        className="w-[100%] h-[100%] object-cover "
      />
    )}

    {/* Display Content */}
    {item.titel && (
      <div>
        <h2 className="text-xl font-bold mb-2">{item.titel}</h2>
        <p className="text-gray-700 mb-4">{item.content}</p>
        <button className="text-blue-500 hover:underline">
          {item.readMore}
        </button>
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

