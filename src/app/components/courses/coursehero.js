import Image from "next/image"


const Coursehero = () => {
  return (
<section className="bg-[#E4F7FD] pt-20 pb-44 md:rounded-tr-[16rem] md:rounded-bl-[16rem]">
  <div className="max-w-screen-2xl mx-auto">
  <h1 className="text-center font-rubik font-medium text-[44px] mb-5 md:mb-20">CSCS Courses</h1>
<div className="grid grid-cols-12 px-2 md:px-10 gap-5">
  <p className="font-rubik font-normal text-sm md:text-xl col-span-12 md:col-span-6 text-center">
  Construction courses play an essential role in the construction industry and relate to the Construction Skills Certification Scheme, which is widely recognised in the UK and has various qualifications that demonstrate that a person working on a construction site has gained knowledge in health, safety and the environment to keep themselves safe and risk-free and has a thorough understanding of the assigned task. The CSCS courses cover tool management, working at height, fire-related work, glasswork, surveying, civil engineering, architecture, project management, construction pathology, inspection techniques and regulatory compliance. Each course is available according to profession and qualification. CSCS courses provide in-depth industry knowledge, enabling individuals to develop practical skills relevant to working in construction, enhancing career prospects and opening up promotion opportunities. These construction courses can boost careers and increase opportunities for higher positions.

  </p>
 <div className="md:col-span-6 col-span-12 flex justify-center items-center">
 <Image src="/images/Pop up 2.png" width={490} height={270} className="object-cover" />
 </div>

</div>
  </div>

</section>    

  )
}

export default Coursehero