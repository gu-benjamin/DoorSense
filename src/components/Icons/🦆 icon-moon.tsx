interface IconMoonProps {
    size?: number,
    color: string,

}
export default function IconMoon({size, color} : IconMoonProps){
    return(
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={color} d="M8.49652 0C3.56104 1.65557 0 6.30992 0 11.8077C0 18.7111 5.59146 24.3026 12.4949 24.3026C17.9926 24.3026 22.647 20.7415 24.3026 15.806C23.0531 16.2121 21.7099 16.4932 20.3042 16.4932C13.4008 16.4932 7.8093 10.9018 7.8093 3.99836C7.8093 2.59269 8.0592 1.24949 8.49652 0Z" fill="black"/>
        </svg>
    )
}
