import { Flag } from "./Animations/Flag";

export  function Reviews() {
    const reviewsSummary = [
      {
        id: 1,
        title: "TripAdvisor Celebrates African Scenic Safaris",
        description:
          "With over 725 reviews and counting, 95% are Excellent and 5% are Very Good",
        rating: "5/5",
        totalReviews: "725 Reviews",
        color: "bg-[#00aa6c]",
        logo: "https://africanscenicsafaris.com/images/tripadvisor.webp",
      },
      {
        id: 2,
        title: "Google Reviews Applaud Our Service",
        description:
          "With over 97 reviews, African Scenic Safaris maintains an impressive 5-star rating, reflecting exceptional service and customer satisfaction.",
        rating: "5/5",
        totalReviews: "97 Reviews",
        color: "bg-[#a50a08]",
        logo: "https://africanscenicsafaris.com/images/goo-removebg-preview.webp",
      },
    ];
  
    const customerReviews = [
      {
        id: 1,
        name: "Wei Lin K",
        date: "Sep 2024",
        title: "A dream come true for us!",
        content:
          "We spent an incredible 10 days and 9 nights exploring the stunning landscapes of Tarangire, Central and Northern Serengeti, and the Ngorongoro Conservation Area - it was truly a dream come true for us, and a trip we will never, ever forget!",
        source: "Tripadvisor",
        img:'https://africanscenicsafaris.com/images/default-avatar-2020-10.webp',
         logo:'https://africanscenicsafaris.com/images/TripAdvisor-Logo-removebg-preview.webp'
      },
      {
        id: 2,
        name: "Tracy L",
        date: "Sep 2024",
        title: "A birthday Tanzanian Safari",
        content:
          "African Scenic Safaris was recommended to us by someone who has gone with them twice over the past several years. We recently returned from a 9-day safari and five days in Zanzibar. From start to finish, our experience with them was great.",
        source: "Tripadvisor",
        img:'https://africanscenicsafaris.com/images/default-avatar-2020-10.webp',
         logo:'https://africanscenicsafaris.com/images/TripAdvisor-Logo-removebg-preview.webp'
      },
      {
        id: 3,
        name: "Adeline P",
        date: "Sep 2024",
        title: "Best Vacation Ever",
        content:
          "My friend and I had an absolutely AMAZING experience with African Scenic! From the fantastic coordination provided by our agent Nembris to the amazing guides on our 7-day Machame trek on Kili Godwin and Gadiel.",
        source: "Tripadvisor",
        img:'https://africanscenicsafaris.com/images/default-avatar-2020-10.webp',
        logo:'https://africanscenicsafaris.com/images/TripAdvisor-Logo-removebg-preview.webp'
      },
    ];
  
    return (
      <div className="max-w-[1250px] mx-auto ">
        {/* Review Summary Section */}
   
                    <div className="flex pb-8 flex-wrap gap-4 justify-center items-center px-4 pt-4">
                                  <Flag/>
                                  <h3 className="uppercase text-[#15a1b4] font-medium text-lg md:text-1lg lg:text-2xl font-haboro-soft">
                                    {'Review Us On Trip Advisor'}
                                  </h3>
                                </div>
            
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviewsSummary.map((review) => (
            <div
              key={review.id}
              className={`flex flex-col justify-between ${review.color} text-white p-14 `}
            >
              <h3 className="text-[150%] font-bold">{review.title}</h3>
              <p className="mt-4 text-md">{review.description}</p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <img src={review.logo} alt="logo" className="w-10 h-10" />
                  <div>
                    <p className="text-lg font-bold">{review.rating}</p>
                    <p className="text-md">{review.totalReviews}</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <button className=" bg-[#fff] bg-opacity-30 rounded-full py-2 px-3 hover:bg-opacity-50 transition">
                  <span className="text-xl">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Customer Reviews Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-100 p-6  shadow-lg mb-14 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 ">
                    <img src={review.img} className="rounded-full" alt="logo"></img>
                  </div>
                  <div>
                  <div className="text-green-500 text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p className="text-gray-600 text-md">
                    <span className="text-black font-bold">{review.name}</span> / {review.date}
                  </p>
                </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{review.title}</h4>
                <p className="text-lg text-gray-700">{review.content}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <a
                  href="#"
                  className="text-gray-600 text-sm font-semibold hover:underline"
                >
                  Read Review
                </a>
                </div>
               
               <div className=" w-[70px] sm:w-[100px]">
                <img src={review.logo} alt="logo"/>
               </div>
              </div>
            </div>
          ))}

          
        </div>
        <div className="w-full flex justify-center items-center">
                    <div 
                       className="uppercase items-center transition duration-500 ease-in-out inline-flex mt-8 font-semibold cursor-pointer font-[Haboro-Soft] 
                  text-[17px] px-6 py-3 rounded-full  bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                       <img width={'30px'} src="https://africanscenicsafaris.com/images/tripadvisor-fo.webp" alt="pp"/>
                          <div className="pl-3">{'FIND MORE REVIEWS'}</div>  
                      </div>
                  </div>  
      </div>
    );
  }
  