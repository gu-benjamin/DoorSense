interface IconDownProps {
    size: number;
    color: string;
  }
  export default function IconDropDown({ size, color }: IconDownProps) {
    return (

        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#05AFF2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}
