import React from "react";

const FullDateTime = ({ created_at }) => {
  const localDate = new Date(created_at);

  const formatted = localDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return <p className="date-text">{formatted}</p>;
};

export default FullDateTime;
