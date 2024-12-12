import Image from "next/image"


const Cardslistcscs = () => {
  return (
<section>
    <div className="max-w-screen-2xl mx-auto py-12">
        <h2 className="font-rubik font-semibold text-[44px] text-center">Let's dive into the world of various types of CPCS Cards.</h2>
        <p className="font-poppins text-lg text-center">
        Our achievement in the journey depicted in numbers
        </p>
        <div className="flex flex-row flex-wrap">
      {Array(12).fill().map((_, index) => (
        <div key={index} className="relative h-52 w-3/12 mt-10">
          <Image
            src={`/images/image/card${index + 1}.png`} 
            alt={`CSCS CARDS`}
            fill 
            className="object-contain"
          />
        </div>
      ))}
    </div>

    </div>
</section>
  )
}

export default Cardslistcscs