"use client";
type ErrorProps = {
  error: Error;
};
const Error: React.FC<ErrorProps> = ({ error }) => {
  return <div className="container mx-auto">{error.message}</div>;
};
export default Error;
