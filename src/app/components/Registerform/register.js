import FormUi from "../Services/formUi";



const RegisterForm = () => {


    return (

        <div className="w-full   max-w-lg mt-16 mb-32 mx-auto p-9 bg-white shadow-lg rounded-md">
         
           <h2 className="text-[32px] font-medium font-poppins">Get Started</h2>
                <p className="text-gray-400 font-poppins font-light mb-8 tracking-wide">Unlock Success with Your CSCS Card Today!</p>
                <FormUi />
        
          

          
        </div>

    );
};

export default RegisterForm;