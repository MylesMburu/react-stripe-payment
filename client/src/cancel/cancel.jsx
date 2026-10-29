import { Link } from "react-router-dom";

export default function Cancel() {
  return (
    <div className="page">
      <div className="card result-card">
        <div className="status-icon status-icon--cancel">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1>Payment Cancelled</h1>
        <p>No charges were made.</p>

        <Link to="/" className="btn btn--secondary">
          Try Again
        </Link>
      </div>
    </div>
  );
}