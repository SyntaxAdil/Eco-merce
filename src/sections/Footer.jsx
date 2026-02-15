import { Facebook, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

        
      <h2 className="text-2xl font-bold uppercase">
            {" "}
            Eco <span className="text-blue-700">Merce</span>
          </h2>

        
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/share/1FYmebUFJK/"
            className="hover:text-white transition duration-300"
            target="_blank"
          >
            <Facebook size={22} />
          </a>

          <a
            href="https://github.com/SyntaxAdil"
            target="_blank"
            className="hover:text-white transition duration-300"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/devloper-abdur-rahman/"
            className="hover:text-white transition duration-300"
            target="_blank"
          >
            <Linkedin size={22} />
          </a>
        </div>

        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-sm tracking-wide">
            © {new Date().getFullYear()} Abdur Rahman Adil. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
