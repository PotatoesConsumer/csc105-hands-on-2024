import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Profile = () => {
  <title>Profile</title>
  return (
    <>
      <nav className="bg-white p-8">
        <div className="flex justify-start md:justify-between md:items-center">

          <div className="text-2xl font-bold">Superlek</div>
          
          <div className="flex md:space-x-6">
            <a href="#" className="bg-green-300 text-black font-semibold px-4 py-2 rounded-full">Home</a>
            <a href="#" className="text-black px-1 py-2 font-semibold">About Me</a>
            <a href="#" className="text-black px-1 py-2 font-semibold">Gallery</a>
          </div>

          <a href="#" className="bg-green-900 text-white font-semibold px-4 py-2 rounded-full justify-end">
            Contact
          </a>
        </div>
      </nav>

      <section className="container mx-auto flex flex-col md:flex-row items-center mt-16 px-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-lg font-semibold">Hello, It's me</h2>
          <h1 className="text-4xl font-bold">Superlek</h1>
          <p className="mt-2 text-gray-600">I am Flyweight Kickboxing World Champion at One Championship</p>
          <div className="flex flex-row space-x-3 justify-center md:justify-start">
            <IoLogoInstagram className="w-[10%] h-[10%] md:w-[7%]"/>
            <IoLogoFacebook className="w-[10%] h-[10%] md:w-[7%]"/>
            <MdOutlineEmail className="w-[10%] h-[10%] md:w-[7%]"/>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
          </div>

          <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full">My Portfolio</button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img src="public/Superlek-DoubleChamp.png" alt="Superlek"/>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row items-center mt-32 px-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="public/Superlek-HalfBody.png" alt="Superlek"/>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-700 mt-4">
          I am a Thai professional Muay Thai fighter and kickboxer.
          Nicknamed 'The Kicking Machine', I am regarded as one of the greatest Muay Thai fighters of my generation.
          <div className="flex flex-row space-x-3 justify-center md:justify-start">
            <IoLogoInstagram className="w-[10%] h-[10%] md:w-[7%]"/>
            <IoLogoFacebook className="w-[10%] h-[10%] md:w-[7%]"/>
            <MdOutlineEmail className="w-[10%] h-[10%] md:w-[7%]"/>
          </div>

          </p>
          <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full">Read More</button>
        </div>
      </section>

      <section className="container mx-auto mt-32 px-6">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <img src="public/Superlek-1.jpg" alt="Gallery 1" className="rounded-lg h-[100%] w-[100%]"/>
          <img src="public/Superlek-2.jpg" alt="Gallery 2" className="rounded-lg h-[100%] w-[100%]"/>
          <img src="public/Superlek-3.jpg" alt="Gallery 3" className="rounded-lg h-[100%] w-[100%]"/>
          <img src="public/Superlek-4.webp" alt="Gallery 4" className="rounded-lg h-[100%] w-[100%]"/>
          <img src="public/Superlek-5.jpg" alt="Gallery 5" className="rounded-lg h-[100%] w-[100%]"/>
          <img src="public/Superlek-6.jpg" alt="Gallery 6" className="rounded-lg h-[100%] w-[100%]"/>
        </div>
      </section>
    </>
  );
};

export default Profile;
