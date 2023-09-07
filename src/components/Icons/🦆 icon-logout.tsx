interface IconLogoutProps {
    size?: number,
    color: string,

}
export default function IconLogout({size, color} : IconLogoutProps){
    return(
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={color} d="M9.11346 0V3.03782H21.2647V18.2269H9.11346V21.2647H24.3026V0H9.11346ZM6.07564 6.07564L0 10.6324L6.07564 15.1891V12.1513H18.2269V9.11346H6.07564V6.07564Z" fill="black"/>
        </svg>
    )
}
