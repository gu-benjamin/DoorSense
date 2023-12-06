

import IconHome from "components/Icons/icon-home";

export default function TopSection(){
    return(
        <div className=" pt-12 text-left flex items-center">
          <IconHome size={75} color="" />
          <div className="p-5">
            <p className="text-3xl sm:text-5xl font-semibold dark:text-white">
              Salas
            </p>
            <p className="text-md sm:text-lg dark:text-white">
              Lista das salas criadas
            </p>
          </div>
        </div>

    )
}