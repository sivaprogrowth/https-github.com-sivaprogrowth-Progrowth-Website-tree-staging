import React from "react";

export const FeaturesSection = (): JSX.Element => {
  const features = [
    "How to improve pipeline and brand awareness but don't have bandwidth to do it",
    "How to grow without spending too much marketing budget",
    "If you are looking for a senior marketing expertise",
    "Your past strategies have mixed results and you want to know more",
    "You are not ready for a full-time CMO",
  ];

  return (
    <section className="flex-col items-start gap-2.5 pt-20 pb-[60px] px-20 flex-[0_0_auto] bg-[#131313] flex relative self-stretch w-full mt-[-5px]">
      <div className="self-stretch w-full flex items-center justify-between relative flex-[0_0_auto]">
        <img
          className="relative w-[640.23px] h-[419.56px]"
          alt="Marketing team enhancement illustration"
          src="https://c.animaapp.com/jVCmr5mO/img/image.svg"
        />

        <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
          <header className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
            <h2 className="relative w-[572px] mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-[40px] tracking-[-0.16px] leading-[normal]">
              Enhance Your Marketing Team, Get In Touch Today
            </h2>
          </header>

          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#ffffff80] text-lg tracking-[-0.16px] leading-[27.0px] whitespace-nowrap">
              Please book a meeting to discuss on
            </p>

            <ul
              className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]"
              role="list"
            >
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <img
                    className="relative w-[18px] h-[18px] aspect-[1] mt-1 flex-shrink-0"
                    alt=""
                    src="https://c.animaapp.com/jVCmr5mO/img/star-4.svg"
                    role="presentation"
                  />
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-white text-base tracking-[-0.16px] leading-[27.0px]">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
