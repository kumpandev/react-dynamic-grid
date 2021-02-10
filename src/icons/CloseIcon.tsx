interface Props {
  onClick?(): void;
  color: string;
}

export const CloseIcon = ({ onClick, color }: Props) => (
  <svg
    cursor="pointer"
    onClick={onClick}
    width="20"
    height="20"
    version="1.1"
    viewBox="0 0 32 32"
    aria-hidden="false"
    fill={color}
  >
    <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
  </svg>
);
