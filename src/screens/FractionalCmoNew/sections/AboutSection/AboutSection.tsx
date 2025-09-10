import React from "react";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex-col items-start gap-2 px-20 py-[78px] flex-[0_0_auto] bg-white flex relative self-stretch w-full mt-[-5px]">
      <div className="flex w-[1280px] items-center justify-between relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[60px] relative flex-[0_0_auto]">
          <header className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <div
                className="inline-flex items-center justify-center gap-2.5 px-[18px] py-1.5 relative flex-[0_0_auto] bg-[#c5f34b] rounded-[80px]"
                role="banner"
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#232825] text-sm text-center tracking-[0] leading-[normal]">
                  Fractional CMO Services
                </span>
              </div>

              <h1 className="relative w-[610px] [text-shadow:0px_2px_4px_#de2a4a0d] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[54px] tracking-[-0.90px] leading-[60px]">
                An Instant Marketing
                <br />
                head to Unlock Your Growth
              </h1>
            </div>

            <p className="relative w-[523px] [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-[22px] tracking-[-0.30px] leading-[normal]">
              Achieve your business growth with an experienced Fractional CMO to
              suit your budget
            </p>
          </header>

          <button
            className="all-[unset] box-border inline-flex h-[60px] items-center gap-[30px] pl-[26px] pr-3 pt-[9px] pb-[11px] relative bg-[#c5f34b] rounded-[50px] overflow-hidden hover:bg-[#b8e642] focus:bg-[#b8e642] focus:outline-2 focus:outline-offset-2 focus:outline-[#c5f34b] transition-colors duration-200 cursor-pointer"
            type="button"
            aria-label="Request a quote for fractional CMO services"
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
              src="https://c.animaapp.com/jVCmr5mO/img/arrow.svg"
              role="presentation"
            />
          </button>
        </div>

        <img
          className="relative w-[580px] h-[520px]"
          alt="Marketing professional working with data analytics and growth charts"
          src="https://c.animaapp.com/jVCmr5mO/img/hero-image.svg"
        />
      </div>
    </section>
  );
};
