interface IconLostProps {
    size: number
    color: string
}

export default function IconLost({size, color}: IconLostProps){
    return(
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="37.5" cy="37.5" r="37.5" fill="#05AFF2" fill-opacity="0.15"/>
            <path d="M29.6667 33L38 38.8333L46.3333 33" stroke="#05AFF2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.3333 46.3333V29.6666C21.3333 28.7826 21.6845 27.9347 22.3097 27.3096C22.9348 26.6845 23.7826 26.3333 24.6667 26.3333H51.3333C52.2174 26.3333 53.0652 26.6845 53.6904 27.3096C54.3155 27.9347 54.6667 28.7826 54.6667 29.6666V46.3333C54.6667 47.2174 54.3155 48.0652 53.6904 48.6903C53.0652 49.3155 52.2174 49.6666 51.3333 49.6666H24.6667C23.7826 49.6666 22.9348 49.3155 22.3097 48.6903C21.6845 48.0652 21.3333 47.2174 21.3333 46.3333Z" stroke="#05AFF2" stroke-width="1.5"/>
        </svg>
    )
}