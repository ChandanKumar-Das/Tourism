

export function Card1 ({data, dynamicwidth}){
    //console.log(props)
    return(
        <>
        {data.map((items,index)=>(
                <li key={index} className="relative overflow-hidden flex items-center cursor-pointer group">
                    <img src={items.image} 
                    width={dynamicwidth}
                    className=" transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    alt="img"/>
                    <div className="absolute inset-0 bg-black bg-opacity-10 transition-all duration-500"></div>
     
      {/* absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100 */}

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4">
 
  <div className="transition-transform duration-500 group-hover:-translate-y-5">
    <h1 className="uppercase text-white font-bold text-2xl">{items.titel1}</h1>
    <h3 className="uppercase text-white text-lg pt-2 font-semibold">{items.titel2}</h3>
  </div>
</div>

                </li>
            ))}
        </>
    )
}