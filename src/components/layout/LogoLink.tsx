import Link from 'next/link';

const LogoLink = () => {
  return (
    <Link href="/" className="px-2 mr-2 text-xl" aria-label="Next Buddy Home">
      <h2 className="flex text-xl text-nowrap border rounded-md overflow-hidden">
        <span className="ps-2 pe-1 bg-c-primary py-2">Next</span>
        <span className="bg-c-secondary pe-2 ps-1 py-2 !text-[#004696] font-extrabold">Buddy</span></h2>
    </Link>
  );
};

export default LogoLink;