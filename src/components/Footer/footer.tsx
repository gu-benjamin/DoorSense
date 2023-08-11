import Image from 'next/image';

interface FooterProps {

}

export default function Footer(props: FooterProps) {
  return (
    <footer
      className={`flex justify-between px-4 sm:px-6 lg:px-8 py-4 items-center dark:bg-nav-dark bg-white`}
    >
        <h1>Footer</h1>
    </footer>
  );
}
