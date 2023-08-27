import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import IconUser from '../Icons/icon-user'
import { ButtonIcon } from './../Buttons/Button-icon/button-icon';
import { InputLogin } from './../Inputs/Input-login/input-login';
import IconClosePassword from 'components/Icons/icon-password-close';

export default function Modal() {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                {/* Top section / close modal */}
                <div className={`bg-gray-50 flex flex-row-reverse p-[2px] mr-1`}>
                  <ButtonIcon icon={<XCircleIcon width={25} height={25} className={`hover:fill-primary`}/>}/>                            
                </div>

                {/* Main section */}
                <div className="bg-secondary px-4 pb-5 pt-5 sm:p-6 sm:pb-5 flex flex-col items-center gap-3">

                    {/* Modal Icon */}
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <IconUser size={30} color='#000' />                
                    </div>

                      {/* Modal Title */}
                      <Dialog.Title as="h1" className="text-xl font-semibold leading-6 text-gray-900">
                        Primeiro Acesso
                      </Dialog.Title>

                      {/* Modal content */}
                     <div className="flex flex-col gap-4 my-1">
                        {/* <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                        </p> */}
                        {/* <InputLogin icon={<IconUser size={30} color='#000' />} label={`Testeeee`} placeholder='digita ae' actionIcon={<ButtonIcon className={`absolute right-3 bottom-2`} icon={<IconClosePassword size={25} color={`#000`}/>}/>}/> */}
                        
                     </div>
                    
                </div>

                {/* Buttons section */}
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  
                  <button
                    type="button"
                    className={`botao-teste`}
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
