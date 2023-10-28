export default function DateMessage({ dateCount }) {
  const date = new Date();
  date.setDate(date.getDate() + dateCount);

  return (
    <div>
      {dateCount === 0 ? `Today` : `${dateCount} days from today`} is {` `}
      {date.toDateString()}
    </div>
  );
}
