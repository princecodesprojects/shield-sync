import React from "react";

interface Props {
  plan: string;
  price: string;
  storage: string;
  support: string;
  provider: string;
  button: string;
  popular:string
}

const PricingCard = ({
  plan,
  price,
  storage,
  support,
  provider,
  button,
  popular
}: Props) => {
  return (
    <div className="main border relative w-[80%] h-60 mx-auto flex flex-col justify-center items-center rounded-lg md:w-[90%] hover:bg-[#8686AC] group">
      {popular==="true" && <div className="text-white bg-[#0F0E47] absolute top-0 right-0 rounded-sm text-sm p-2">Popular</div>}
      <div className="content w-[90%] h-[90%] md:h-[50vh]">
        <h1 className="text-[#0F0E47] group-hover:text-white text-sm py-2 transition-colors">{plan}</h1>
        <h1 className="text-[#0F0E47] group-hover:text-white text-2xl py-1 transition-colors">
          {price}
          <span className="text-lg">/mo</span>
        </h1>
        <h1 className="text-[#0F0E47] group-hover:text-white flex flex-row gap-2 py-1 transition-colors">
          <span>
            <img src="/images/tick.png" className="w-4 pt-2" alt="t" />
          </span>
          {storage}
        </h1>
        <h1 className="text-[#0F0E47] group-hover:text-white flex flex-row gap-2 py-1 transition-colors">
          <span>
            <img src="/images/tick.png" className="w-4 pt-2" alt="t" />
          </span>
          {support}
        </h1>
        <h1 className="text-[#0F0E47] group-hover:text-white flex flex-row gap-2 py-1 transition-colors">
          <span>
            <img src="/images/tick.png" className="w-4 pt-2" alt="t" />
          </span>
          {provider}
        </h1>
        <button className="w-full bg-[#0F0E47] text-white rounded-lg py-1 mt-3">
          {button}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
