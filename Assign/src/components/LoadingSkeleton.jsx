import React from "react";

const LoadingSkeleton = () => (
  <div className="animate-pulse flex flex-col gap-2 p-4 border rounded shadow">
    <div className="h-48 bg-gray-200 rounded w-full" />
    <div className="h-6 bg-gray-200 rounded w-2/3" />
    <div className="h-4 bg-gray-200 rounded w-1/2" />
    <div className="h-4 bg-gray-200 rounded w-1/3" />
    <div className="h-8 bg-gray-200 rounded w-full mt-2" />
  </div>
);

export default LoadingSkeleton; 