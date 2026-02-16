import TestImage from "@/../assets/backiee-195094-landscape.jpg";
import Image from "next/image";
export const FirstSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[40vh] items-center overflow-hidden p-2 px-[10vw]">
      <div className="relative w-full h-75 md:h-full min-h-100">
        <Image
          src={TestImage}
          alt="University of Khartoum Students"
          fill
          className="object-cover" // Ensures image fills the area without distortion
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-16  font-poppins">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">
          Who Are We
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are a group of students from{" "}
          <span className="font-semibold text-gray-900">
            University of Khartoum
          </span>
          , from different faculties, skill sets, and hobbies. However, we are
          all united by our passion for Google technologies and the world of
          tech. We are excited to learn and grow together, and we are committed
          to making a positive impact on the tech community in Sudan.
        </p>
      </div>
    </section>
  );
};

export const SecondSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[40vh] items-center bg-yellow-500 overflow-hidden p-2 px-[10vw]">
      <div className="flex flex-col justify-center p-8 md:p-16  font-poppins">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
          Our Mission
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-900">Our Mission is</span>
          to spread the knowledge of Google technologies and knowledge in
          general to the tech community in Sudan and the Arabic world. We
          believe that everyone should have access to the latest technologies
          and knowledge, regardless of their background or location. We are
          committed to providing high-quality educational resources and
          opportunities to everyone who is interested in learning more about
          Google technologies and the world of tech.
        </p>
      </div>
      <div className="relative w-full h-75 md:h-full min-h-100">
        <Image
          src={TestImage}
          alt="University of Khartoum Students"
          fill
          className="object-cover" // Ensures image fills the area without distortion
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
};

export const ThirdSection = () => {
  return (
    <section className="grid grid-cols-1  min-h-[40vh] items-center  overflow-hidden p-2 px-[10vw]">
      <div className="relative w-full h-75 md:h-full min-h-100">
        <Image
          src={TestImage}
          alt="University of Khartoum Students"
          fill
          className="object-cover" // Ensures image fills the area without distortion
          sizes="(max-width: 500px) 100vw, 25vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-16  font-poppins">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
          Story
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          GDG University of Khartoum chapter is one of the first chapters
          established in Sudan. And since it was founded in August 2021, it held
          more than 200 online events, and more than 7 courses of great regional
          impact and reach throughout the MENA region. With more than 2200
          members as of August 2023, we aim to become a global hub for students
          that provides leading tech knowledge and practices.
        </p>
      </div>
    </section>
  );
};
