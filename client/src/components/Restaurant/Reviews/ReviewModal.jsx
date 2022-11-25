import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Rating from "react-rating-stars-component";
import { useParams } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { postReview } from "../../../redux/reducers/review/review.action";

export default function ReviewModal({ isOpen, setIsOpen, ...props }) {
  const dispatch = useDispatch();
  const [reviewData, setReviewData] = useState({
    subject: "",
    reviewText: "",
    isRestaurantReview: false,
    isFoodReview: false,
    rating: 0,
  });

  const { id } = useParams();

  const handleChange = (e) => {
    setReviewData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRating = (rating) => {
    setReviewData((prev) => ({ ...prev, rating }));
  };

  const toggleDining = () => {
    setReviewData((prev) => ({
      ...prev,
      isRestaurantReview: !prev.isRestaurantReview,
      isFoodReview: false,
    }));
  };

  const toggleDelivery = () => {
    setReviewData((prev) => ({
      ...prev,
      isRestaurantReview: false,
      isFoodReview: !prev.isFoodReview,
    }));
  };

  function closeModal() {
    setIsOpen(false);
  }

  const submit = () => {
    dispatch(postReview({ ...reviewData, restaurant: id }));
    setReviewData({
      subject: "",
      reviewText: "",
      isRestaurantReview: false,
      isFoodReview: false,
      reting: 0,
    });
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          style={{ backgroundColor: "rgb(0 0 0 / 53%)" }}
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Review
                </Dialog.Title>

                <div className="mt-2 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="review"
                        id="dining"
                        checked={reviewData.isRestaurantReview}
                        onChange={toggleDining}
                      />
                      <label htmlFor="dining">Dining</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="review"
                        id="delivery"
                        checked={reviewData.isFoodReview}
                        onChange={toggleDelivery}
                      />
                      <label htmlFor="delivery">Deliver</label>
                    </div>
                  </div>
                  <Rating
                    count={5}
                    size={24}
                    value={reviewData.rating}
                    onChange={handleRating}
                  />

                  <form className="flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="amazing food"
                        value={reviewData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="reviewText">Review Text</label>
                      <textarea
                        id="reviewText"
                        rows="5"
                        placeholder="Type your review ..."
                        value={reviewData.reviewText}
                        onChange={handleChange}
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                      />
                    </div>
                  </form>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={submit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
