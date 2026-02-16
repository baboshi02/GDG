import Image from "next/image";
import GDGLogo from "@/../assets/GDGLogo.png"; // Adjust path

const Footer = () => {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center bg-gray-50">
      <div className="w-sm md:w-xl transition-opacity hover:opacity-80">
        <Image src={GDGLogo} alt="GDG Logo" layout="responsive" priority />
      </div>

      <p className="mt-4 text-sm text-gray-500 font-poppins">
        © {new Date().getFullYear()} GDG University of Khartoum
      </p>
    </footer>
  );
};

export default Footer;
