import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="page">
      <div className="card result-card">
        <div className="status-icon status-icon--success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <h1>Payment Successful</h1>
        <p>Your payment has been processed successfully.</p>

        <Link to="/" className="btn btn--primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}