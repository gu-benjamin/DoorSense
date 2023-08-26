interface IconCertoProps {
    size: number;
    color: string;
  }
  export default function IconCerto({ size, color }: IconCertoProps) {
    return (
        <svg width={`${size}px`} height={`${size}px`}fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={color} d="M7.5 0.5C3.3675 0.5 0 3.8675 0 8C0 12.1325 3.3675 15.5 7.5 15.5C11.6325 15.5 15 12.1325 15 8C15 3.8675 11.6325 0.5 7.5 0.5ZM11.085 6.275L6.8325 10.5275C6.7275 10.6325 6.585 10.6925 6.435 10.6925C6.285 10.6925 6.1425 10.6325 6.0375 10.5275L3.915 8.405C3.6975 8.1875 3.6975 7.8275 3.915 7.61C4.1325 7.3925 4.4925 7.3925 4.71 7.61L6.435 9.335L10.29 5.48C10.5075 5.2625 10.8675 5.2625 11.085 5.48C11.3025 5.6975 11.3025 6.05 11.085 6.275Z" fill="#00D709"/>
        </svg>
    )
  }