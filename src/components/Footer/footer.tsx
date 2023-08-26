import IconLogoEquipe from 'components/Icons/icon-logo-equipe';

interface FooterProps {

}

export default function Footer(props: FooterProps) {
  return (
    
    <div className="bg-white">
      <div className="max-w-xl mx-auto text-white py-6">
        <div className="text-center">
          <div className="flex justify-center">
            <IconLogoEquipe size={100} color="" /> {/* Ajuste o tamanho e a cor aqui */}
          </div>
          <div className="flex justify-center my-10">
            <div className="flex items-center w-auto rounded-lg px-4 w-52 mx-2">
              {/* */}
              <div className="text-center ml-3">
                <p className='text-lg text-gray-500'>Sensores inteligentes, conectando um mundo acessível para todos.</p>
                <p className="md:text-base"> </p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; AcessoTech, 2023.</p>
          <div className="order-1 md:order-2">
            <span className="px-2">All rights reserved.</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
