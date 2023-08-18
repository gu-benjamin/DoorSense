interface IconTrashProps {
    size?: number,
    color: string,

}
export default function IconHome({size, color} : IconTrashProps){
    return(
        <svg width={`${size}px`} height={`${size}px`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5 6.64219C19.43 6.23886 15.3356 6.03108 11.2533 6.03108C8.83333 6.03108 6.41333 6.1533 3.99333 6.39775L1.5 6.64219" stroke="#FF0F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.22229 5.40777L8.49118 3.80666C8.68673 2.64555 8.8334 1.77777 10.899 1.77777H14.1012C16.1667 1.77777 16.3256 2.69444 16.509 3.81888L16.7778 5.40777" stroke="#FF0F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.8722 10.5045L20.0778 22.8122C19.9433 24.7311 19.8333 26.2222 16.4233 26.2222H8.5767C5.1667 26.2222 5.0567 24.7311 4.92225 22.8122L4.12781 10.5045" stroke="#FF0F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.4589 19.5H14.5289" stroke="#FF0F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.44446 14.6111H15.5556" stroke="#FF0F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}
