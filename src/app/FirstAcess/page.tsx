import dynamic from 'next/dynamic';
const FirstAcessUI = dynamic(() => import('components/FirstAcess'), { ssr: false });

export default async function FirstAcess(){
    return <FirstAcessUI/>
}