"use client"


const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button 
      className="bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      onClick={scrollToTop} 
      aria-label="Back to Top"
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
