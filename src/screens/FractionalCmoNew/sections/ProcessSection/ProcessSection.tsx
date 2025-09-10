import React from "react";

export const ProcessSection = (): JSX.Element => {
  const benefitsData = [
    {
      title: "Faster Time to Market",
      description:
        "We have reported an average of 48% faster time-to-market for new services and products, translating into quicker returns on investment",
      icon: "https://c.animaapp.com/jVCmr5mO/img/icon.svg",
    },
    {
      title: "Better Productivity",
      description:
        "Our CMOs have increased average productivity significantly just by allowing companies to allocate their internal marketing teams more tactical tasks.",
      icon: "https://c.animaapp.com/jVCmr5mO/img/icon-1.svg",
    },
    {
      title: "Higher Revenue Growth",
      description:
        "Companies that engaged us have experienced an average 29% revenue and pipeline growth rate compared to 19% for those without.",
      icon: "https://c.animaapp.com/jVCmr5mO/img/icon-2.svg",
    },
    {
      title: "Cost Effective Solution",
      description:
        "Our cost are approximately 50-75% less than the annual salary and benefits of a full-time CMO.",
      icon: "https://c.animaapp.com/jVCmr5mO/img/icon-3.svg",
    },
    {
      title: "CXO Team Unburdening",
      description:
        "We alleviate the CEO's burden by taking complete responsibility for marketing leadership. This allows the CEO of the B2B SaaS company to focus on overall business growth and broader strategic initiatives.",
      icon: "https://c.animaapp.com/jVCmr5mO/img/icon-4.svg",
    },
    {
      title: "Wealth of Experience",
      description:
        "Our team comes with experience across all major facets of marketing, such as brand, product, and growth marketing. They ensure comprehensive coverage of marketing functions, which maximizes impact and minimizes gaps.",
      icon: "https://c.animaapp.com/jVCmr5mO/img/icon-5.svg",
    },
  ];

  return (
    <section className="items-center justify-center gap-2 p-20 flex-[0_0_auto] bg-white flex relative self-stretch w-full mt-[-5px]">
      <div className="flex flex-col w-[1278px] items-center justify-center gap-[60px] relative">
        <div className="flex flex-col w-[1278px] items-center gap-[60px] relative flex-[0_0_auto]">
          <header className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#232825] text-[50px] text-center tracking-[-0.89px] leading-[normal]">
              How Our Fractional CMO Method can benefit
              <br />
              B2B technology or SaaS Companies?
            </h2>

            <p className="relative w-[650px] [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg text-center tracking-[-0.30px] leading-[normal]">
              Outsourced Head of Marketing can help you design a marketing
              strategy and implement the same based on your company size and
              your business goals.
            </p>
          </header>

          <div className="flex flex-wrap w-[1280px] items-start gap-[12px_12px] relative flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px]">
            {benefitsData.map((benefit, index) => (
              <article
                key={index}
                className="flex flex-col w-[418px] h-[418px] items-end justify-between p-8 relative bg-white rounded-xl border-2 border-solid border-[#f0f1f2] shadow-[0px_6px_18px_#4e2ade05]"
              >
                <div className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal]">
                    {benefit.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[-0.16px] leading-6">
                    {benefit.description}
                  </p>
                </div>

                <img
                  className="relative w-20 h-20"
                  alt={`${benefit.title} icon`}
                  src={benefit.icon}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
