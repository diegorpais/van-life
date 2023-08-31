import { useEffect, useState } from 'react';
import './style.css';
import { FaStar } from "react-icons/fa6";
import ReviewsModel, { CustomerRating, OverallRating } from '../../../core/models/reviews.model';
import { getReviewsData } from '../../../core/services/vans.service';

export default function Reviews() {
  const [customerReviews, setCustomerReviews] = useState<ReviewsModel>({} as ReviewsModel);
  const [biggestStar, setBiggestStar] = useState<OverallRating>({} as OverallRating);
  const [amountOfReviews, setAmountOfReviews] = useState<number>(0);
  const [customerRating, setCustomerRating] = useState<Array<CustomerRating>>([]);

  useEffect(() => {
    getReviewsData()
      .then(res => {

        const customerReviewsOverallRating = res.overallRating.map(overallRating => {
          overallRating.percentage = getPercentage(overallRating.amount, res.total)
          return overallRating;
        });

        res.overallRating = customerReviewsOverallRating;

        setCustomerReviews(res);
        getMostVotedRating(res.overallRating);

        setAmountOfReviews(res.customerRating.length);
        setCustomerRating(res.customerRating);

      });
  }, []);


  function getMostVotedRating(data: Array<OverallRating>) {
    setBiggestStar(
      data.reduce((prev, current) => (
        prev.amount > current.amount ? prev : current
      ))
    );
  }

  function getPercentage(amountOfReviews: number, total: string) {
    const totalReviews = Number(total);
    const convertToPercentage = Math.trunc((amountOfReviews / totalReviews) * 100);
    const percentageToString = `${convertToPercentage.toString()}%`
    return percentageToString;
  }

  const chartReviewElements = (
    customerReviews
    && customerReviews.overallRating
    && customerReviews.overallRating.length > 0
  ) && customerReviews.overallRating.map(review => (
    <div className="chart-review-line" key={review.stars}>
      <div className='number-stars'>{review.stars} {review.stars === '1' ? ('star') : ('stars')}</div>
      <div className='progress-bar'>
        <div
          className="fill-progress-bar"
          style={{ width: `${review.percentage}` }}>
        </div>
      </div>
      <div className='percentage'>{review.percentage}</div>
    </div>
  ));

  const customerRatingElements = customerRating.map(item => (
    <div className="review" key={item.id}>
      <div className="stars">
        {getStarsElements(item.rating)}
      </div>

      <p className="review-date">
        {item.name} <span> {item.date}</span>
      </p>

      <p className='review-text'>
        {item.text}
      </p>

    </div>
  ));

  function getStarsElements(amountOfStars: number) {
    const stars = [];

    for (let index = 0; index < amountOfStars; index++) {
      stars.push(<FaStar size={15} color={'#FF8C38'} />);
    }

    return stars;
  }


  return (
    <section className='container container-min-height-host reviews-page'>

      <header>
        <h1>Your reviews</h1>
        <p>last <span>30 days</span></p>
      </header>

      <div className="rating-chart">

        <div className="overall-rating">
          <h1>{biggestStar?.stars}.0</h1>
          <FaStar size={20} color={'#FF8C38'} />
          <p>overall rating</p>
        </div>

        <div className="chart-review">
          {chartReviewElements}
        </div>

      </div>

      <div className="client-reviews">
        <h3>Reviews ({amountOfReviews})</h3>

        {customerRatingElements}

      </div>
    </section>
  )
}