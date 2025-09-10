import React from "react";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex-col h-[620px] items-center justify-center gap-2 px-20 py-[78px] bg-white flex relative self-stretch w-full mt-[-5px]">
      <div className="flex w-[1280px] items-center justify-between relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-11 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <header className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <p className="relative w-[116px] mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#05142499] text-sm tracking-[-0.16px] leading-[normal]">
                About this service
              </p>

              <h2 className="relative w-[572px] [font-family:'Manrope',Helvetica] font-medium text-[#051424] text-[40px] tracking-[-0.16px] leading-[normal]">
                What Makes Progrowth Different?
              </h2>
            </header>

            <p className="relative w-[523px] [font-family:'Manrope',Helvetica] font-normal text-[#05142499] text-lg tracking-[-0.16px] leading-[27.0px]">
              ProGrowth gives you a million dollar worth marketing team for just
              a fraction of the cost. We think about your business as if it is
              our own. We constantly update our marketing approach based on
              changes in the market.
            </p>
          </div>

          <button
            className="all-[unset] box-border inline-flex h-[60px] items-center gap-[30px] pl-[26px] pr-3 pt-[9px] pb-[11px] relative bg-[#c5f34b] rounded-[50px] overflow-hidden hover:bg-[#b8e642] focus:bg-[#b8e642] focus:outline-2 focus:outline-offset-2 focus:outline-[#c5f34b] transition-colors duration-200"
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
              alt=""
              src="https://c.animaapp.com/jVCmr5mO/img/arrow-1.svg"
              role="presentation"
            />
          </button>
        </div>

        <img
          className="relative w-[600px] h-[400px]"
          alt="ProGrowth marketing team illustration"
          src="https://c.animaapp.com/jVCmr5mO/img/rectangle-68.png"
        />
      </div>
    </section>
  );
};
