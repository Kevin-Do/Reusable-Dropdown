interface ArrowProps {
  open: boolean;
  color?: string;
}
export const Arrow: React.FC<ArrowProps> = ({ open, color = "black" }) => {
  return open ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width="24"
      height="24"
    >
      <path d="M7.41 14.41L12 9.83l4.59 4.58L18 13l-6-6-6 6z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width="24"
      height="24"
    >
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
};
