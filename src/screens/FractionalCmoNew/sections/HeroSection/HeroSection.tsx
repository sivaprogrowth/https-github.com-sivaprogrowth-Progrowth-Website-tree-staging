import React from "react";

export const HeroSection = (): JSX.Element => {
  const processSteps = [
    {
      id: 1,
      icon: "https://c.animaapp.com/jVCmr5mO/img/founder.svg",
      iconAlt: "Founder",
      stepNumber: "Step 1",
      title: "Objectives and Marketing Strategy",
      description:
        "We work with the CEO and other senior leaders to identify 2-3 top objectives that needs to be achieved in the short term through marketing",
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/jVCmr5mO/img/deployed-code@2x.png",
      iconAlt: "Deployed code",
      stepNumber: "Step 2",
      title: "Delivering Value",
      description:
        "Our Fractional CMO works as an internal employee and will start managing your marketing team to align with business goals.We work with you to grow to the next stage and help you hire a fulltime CMO.",
    },
    {
      id: 3,
      icon: "https://c.animaapp.com/jVCmr5mO/img/avg-pace@2x.png",
      iconAlt: "Avg pace",
      stepNumber: "Step 3",
      title: "Measure & Scale",
      description:
        "Define metrics to track the performance like Marketing Qualified Leads (MQLs), Customer Lifetime Value (CLTV), Average Revenue per User (ARPU), Customer Acquisition Cost (CAC)",
    },
  ];

  return (
    <section className="flex items-center justify-around gap-2 p-20 relative self-stretch w-full flex-[0_0_auto] mt-[-5px] bg-[#232825]">
      <div className="flex flex-col w-[1280px] items-center justify-center gap-[60px] relative">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[660px] items-start gap-4 relative">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-start gap-[18px] px-0 py-6 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className={`relative w-6 h-6 ${step.id > 1 ? "aspect-[1]" : ""}`}
                    alt={step.iconAlt}
                    src={step.icon}
                  />

                  <div className="flex flex-col w-[479px] items-start gap-[18px] relative">
                    <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#c5f34b] text-sm tracking-[0] leading-[normal]">
                        {step.stepNumber}
                      </div>

                      <h3 className="relative w-fit [font-family:'Manrope',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                        {step.title}
                      </h3>
                    </div>

                    <p className="relative w-[479px] [font-family:'Manrope',Helvetica] font-normal text-[#f0f1f2] text-lg tracking-[0] leading-[normal]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <img
                    className="relative self-stretch w-full h-px object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/jVCmr5mO/img/line-88.svg"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col w-[576px] items-start justify-center gap-10 relative self-stretch">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-transparent text-[50px] tracking-[-0.89px] leading-[normal]">
                <span className="text-white tracking-[-0.44px]">
                  Our bulletproof process to win on{" "}
                </span>

                <span className="text-[#c5f34b] tracking-[-0.44px]">
                  Marketing Goals
                </span>
              </h1>

              <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-white text-lg tracking-[-0.30px] leading-[normal]">
                We work with you as an extension of your company to bring along
                our expertise and knowledge backed by proven marketing
                playbooks.
              </p>
            </div>

            <button
              className="all-[unset] box-border inline-flex h-[60px] items-center gap-[30px] pl-[26px] pr-3 pt-[9px] pb-[11px] relative bg-[#c5f34b] rounded-[50px] overflow-hidden hover:bg-[#b3e042] focus:bg-[#b3e042] transition-colors duration-200"
              type="button"
              aria-label="Request A Quote"
            >
              <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] z-[1]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#232825] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                      Request A Quote
                    </span>
                  </div>
                </div>
              </div>

              <img
                className="relative w-10 mb-[-1.00px] z-0"
                alt="Arrow"
                src="https://c.animaapp.com/jVCmr5mO/img/arrow-2.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
