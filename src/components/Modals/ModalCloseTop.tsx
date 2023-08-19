import { ButtonIcon } from './../Buttons/Button-icon/button-icon';
import { XCircleIcon } from '@heroicons/react/24/outline';


export default function ModalCloseTop(){
    return(
    <div className={`bg-gray-50 flex flex-row-reverse p-[2px] mr-1`}>
        <ButtonIcon icon={<XCircleIcon width={25} height={25} className={`hover:fill-primary`}/>}/>                            
    </div>
    )
}