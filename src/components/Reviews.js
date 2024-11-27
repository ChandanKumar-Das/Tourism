export  function Reviews() {
    const reviewsSummary = [
      {
        id: 1,
        title: "TripAdvisor Celebrates African Scenic Safaris",
        description:
          "With over 725 reviews and counting, 95% are Excellent and 5% are Very Good",
        rating: "5/5",
        totalReviews: "725 Reviews",
        color: "bg-green-600",
        logo: "https://africanscenicsafaris.com/images/tripadvisor-icon.svg",
      },
      {
        id: 2,
        title: "Google Reviews Applaud Our Service",
        description:
          "With over 97 reviews, African Scenic Safaris maintains an impressive 5-star rating, reflecting exceptional service and customer satisfaction.",
        rating: "5/5",
        totalReviews: "97 Reviews",
        color: "bg-red-600",
        logo: "https://africanscenicsafaris.com/images/google-icon.svg",
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
      },
      {
        id: 2,
        name: "Tracy L",
        date: "Sep 2024",
        title: "A birthday Tanzanian Safari",
        content:
          "African Scenic Safaris was recommended to us by someone who has gone with them twice over the past several years. We recently returned from a 9-day safari and five days in Zanzibar. From start to finish, our experience with them was great.",
        source: "Tripadvisor",
      },
      {
        id: 3,
        name: "Adeline P",
        date: "Sep 2024",
        title: "Best Vacation Ever",
        content:
          "My friend and I had an absolutely AMAZING experience with African Scenic! From the fantastic coordination provided by our agent Nembris to the amazing guides on our 7-day Machame trek on Kili Godwin and Gadiel.",
        source: "Tripadvisor",
      },
    ];
  
    return (
      <div className="max-w-[1250px] mx-auto ">
        {/* Review Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviewsSummary.map((review) => (
            <div
              key={review.id}
              className={`flex flex-col justify-between ${review.color} text-white p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-lg font-bold">{review.title}</h3>
              <p className="mt-4 text-sm">{review.description}</p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <img src={review.logo} alt="logo" className="w-10 h-10" />
                  <div>
                    <p className="text-lg font-bold">{review.rating}</p>
                    <p className="text-sm">{review.totalReviews}</p>
                  </div>
                </div>
                <button className="text-white bg-white bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition">
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
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-green-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p className="text-gray-600 text-sm">
                    {review.name} / {review.date}
                  </p>
                </div>
                <h4 className="text-lg font-bold mb-2">{review.title}</h4>
                <p className="text-sm text-gray-700">{review.content}</p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-green-600 text-sm font-semibold hover:underline"
                >
                  Read Review
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  