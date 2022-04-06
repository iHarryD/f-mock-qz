import "./css/pointTrackerStyle.css";

export default function PointTracker({ point }) {
  return (
    <li className="points-tracker --verticle-flex --centered-flex --bold-700">
      + {point}
    </li>
  );
}
