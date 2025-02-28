import { FaStar } from "react-icons/fa";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const reviews = [
    {
      user: "User 1",
      rating: 5,
      text: "I recently bought the Galaxy S21, and I'm thrilled with my purchase! The display is stunning, the camera quality is top-notch, and the performance is smooth and fast. It's everything I wanted in a smartphone, and I couldn't be happier with my decision.",
      date: "August 22, 2024 10:00 AM",
    },
    {
      user: "User 2",
      rating: 1,
      text: "I had high expectations for the Galaxy S21, but I'm disappointed. The battery life doesn't last as long as I'd hoped, and I've had some issues with the screen responsiveness. For the price, I expected better overall performance. Not as happy as I thought I’d be.",
      date: "August 26, 2024 1:00 PM",
    },
  ];

  return (
    <div className={`${styles.reviewsContainer}`}>
      <h2 className={`${styles.reviewTitle}`}>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className={`${styles.reviewBox}`}>
          <div className={`${styles.userInfo}`}>
            <strong>{review.user}</strong>
            <span className={`${styles.rating}`}>
              {review.rating} <FaStar className={`${styles.starIcon}`} />
            </span>
          </div>
          <p className={`${styles.reviewText}`}>{review.text}</p>
          <p className={`${styles.submittedDate}`}>
            <strong>Submitted on</strong> {review.date}
          </p>
        </div>
      ))}
    </div>
  );
}
