interface IconMaisProps {
    size: number,
    color?: string,

}
export default function IconUser({size, color='bg-white'}: IconMaisProps){
    return(
        <svg  width={`${size}px`} height={`${size}px`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={color} d="M11.3333 8.46354H0.666667C0.302222 8.46354 0 8.07986 0 7.61718C0 7.15451 0.302222 6.77083 0.666667 6.77083H11.3333C11.6978 6.77083 12 7.15451 12 7.61718C12 8.07986 11.6978 8.46354 11.3333 8.46354Z" fill="white"/>
            <path stroke={color} d="M6.06669 15.2344C5.70225 15.2344 5.40002 14.8507 5.40002 14.388V0.846354C5.40002 0.383681 5.70225 0 6.06669 0C6.43114 0 6.73336 0.383681 6.73336 0.846354V14.388C6.73336 14.8507 6.43114 15.2344 6.06669 15.2344Z" fill="white"/>
        </svg>
    )
}
