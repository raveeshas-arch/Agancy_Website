import React, { useState ,useEffect } from 'react'

const Dot = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home"); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  // Navigation links 
  const navLinks = [
    { name: "home", label: "Home", href: "#home" },
    { name: "about", label: "About us", href: "#about" },
    { name: "services", label: "Services", href: "#services" },
    { name: "blog", label: "Blog", href: "#blog" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className='bg-white font-poppins'>
        <nav className="fixed w-full top-0 flex items-center justify-between px-6 py-4 bg-white z-1000  ">
          <div className='flex justify-between w-full max-w-[1536px] mx-auto'>
            {/* Logo */}
            <div className="w-[82px] h-[44px] z-50">
              <h1 className="font-bold text-[29px] text-[#1090CB]">LOGO</h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="md:flex items-center space-x-[61px] text-[16px] font-normal hidden">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  onClick={() => setActive(link.name)}
                  className="flex flex-col items-center cursor-pointer"
                >

                

                   {/* Dot indicator */}
                  <span
                    className={`h-[8px] w-[8px] rounded-full ml-[-50px] transition-all ${
                      active === link.name ? "bg-[#08D3BB]" : "bg-transparent"
                    }`}
                  ></span>
                  <a 
                    href={link.href} 
                    className={`hover:text-[#1090CB] ${active === link.name ? "text-[#1090CB]" : ""}`}
                  >
                    {link.label}
                  </a>

                 
                </div>
              ))}


              <button className="bg-[#1090CB] w-[125px] h-[41px] rounded-[6px] cursor-pointer hover:bg-sky-400">
                <a href='#contact' className='text-white text-[13px]'>Contact Us</a>
              </button>
            </div>
          </div>

     
          {/* Mobile menu icon */}
          <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
            {isOpen ? (
              <svg className="w-8 h-8 text-[#1090CB]" fill="none" stroke="#1090CB" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-[#1090CB]" fill="none" stroke="#1090CB" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </div>

{/* Backdrop overlay */}
{/* {isOpen && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
    onClick={toggleMenu} // click outside to close
  ></div>
)} */}

          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-[10px] left-0 w-full h-space-y-6 py-90 bg-white z-40 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-center space-y-4  ">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  onClick={() => {
          setActive(link.name);
          setIsOpen(false);}}
                  className="flex flex-col items-center cursor-pointer"
                >
                  
                  <a 
                    href={link.href} 
                    className={`hover:text-[#1090CB] ${active === link.name ? "text-[#1090CB]" : ""}`}
                  >
                    {link.label}
                  </a>
                

                </div>
              ))}
              <button className="bg-[#1090CB] w-[125px] h-[41px] rounded-[6px] cursor-pointer hover:bg-sky-400">
                <a href='#contact' className='text-white text-[13px]'>Contact Us</a>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* line */}
      <div className='fixed border-[#C4C4C4] h-0 w-full border-[1px] mt-0'></div>
    </div>
  )
}

export default Dot