type Props = {
  className?: string;
};

const Plus = ({ className }: Props) => {
  return (
    <svg
      className={className}
      fill="white"
      width="20"
      height="20"
      version="1.1"
      viewBox="0 0 32 32"
      aria-hidden="false"
    >
      <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path>
    </svg>
  );
};

export default Plus;
