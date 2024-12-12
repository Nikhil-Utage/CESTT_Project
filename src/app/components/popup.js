'use client'

import React, { useState } from 'react';
import FormUi from './Services/formUi';

const PopupModal = ({buttontext}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick} className="font-rubik font-bold text-sm py-4 px-8 bg-[#437FC7] text-white rounded-full">
        Get Started
      </button>

      {isOpen && (
        <>
          <input type="checkbox" id="my-modal" className="modal-toggle" checked={isOpen} readOnly />
          <div className="modal">
            <div className="modal-box relative">
             

              {/* Overlay */}
              <div className="inset-0 flex justify-center items-center  backdrop-blur-2xl z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-screen-xl relative overflow-auto max-h-[90vh]">
                  <h2 className=" mb-3 font-poppins font-medium text-[32px]">Get Started</h2>
                  <p className="font-poppins font-light text-base text-gray-500 mb-16">
                    Unlock Success with Your CSCS Card Today!
                  </p>
                  <FormUi />
                  <button
                    className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                  >
                    ×
                  </button>
                </div>
              </div>

            

            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PopupModal;
