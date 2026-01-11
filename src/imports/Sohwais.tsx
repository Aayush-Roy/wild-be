import svgPaths from "./svg-xgxsvy9qdv";
import imgHomePage from "figma:asset/1e00975cb1bf34f5649839f3445890b351cf329b.png";
import imgHomePage1 from "figma:asset/4b445825c6978d1ded9a2ac92aa35955084924a2.png";
import imgImageSohwaisThreads from "figma:asset/549aa7d74ad4ed64d765edbd094a15962822ce65.png";
import imgHomePage2 from "figma:asset/4530522827870d721a5f8c9dd83b9c55afac4c71.png";
import imgImage13 from "figma:asset/658b77053d29696a667084cfb64f43a9f6a6dbf0.png";

function HomePage() {
  return (
    <div className="absolute h-[824px] left-0 top-0 w-[1080px]" data-name="HomePage">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomePage} />
    </div>
  );
}

function HomePage1() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[824px] left-0 to-[rgba(0,0,0,0.15)] top-0 w-[1080px]" data-name="HomePage" />;
}

function Container() {
  return (
    <div className="absolute h-[824px] left-0 top-[-50px] w-[1080px]" data-name="Container">
      <HomePage />
      <HomePage1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[486.758px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[243.21px] not-italic text-[#fdfcf9] text-[10px] text-center text-nowrap top-[0.5px] tracking-[3.1172px] translate-x-[-50%]">INTRODUCING</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[84px] left-0 top-[31px] w-[486.758px]" data-name="Heading 1">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[84px] left-[243.5px] not-italic text-[#fdfcf9] text-[56px] text-center text-nowrap top-[-1px] tracking-[4.48px] translate-x-[-50%]">HERITAGE 2025</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[39px] left-[155.72px] top-[147px] w-[175.313px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[88.5px] not-italic text-[#2c1810] text-[10px] text-center text-nowrap top-[12.5px] tracking-[2.1172px] translate-x-[-50%]">EXPLORE NOW</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[186px] left-[296.62px] top-[319px] w-[486.758px]" data-name="Container">
      <Paragraph />
      <Heading />
      <Button />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.36%_-0.63px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 13">
            <path d="M0.625 0.625V12.2917" id="Vector" stroke="var(--stroke-0, #FDFCF9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-10.71%_-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 8">
            <path d={svgPaths.p7f0ad00} id="Vector" stroke="var(--stroke-0, #FDFCF9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[530px] size-[20px] top-[780.43px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[824px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function ImageMensHeritageCollection() {
  return <div className="absolute h-[824px] left-0 top-0 w-[540px]" data-name="Image (Men\'s Heritage Collection)" />;
}

function Container3() {
  return <div className="absolute h-[824px] left-0 top-0 w-[540px]" data-name="Container" style={{ backgroundImage: "linear-gradient(123.238deg, rgba(44, 24, 16, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)" }} />;
}

function HomePage2() {
  return (
    <div className="absolute h-[824px] left-0 overflow-clip top-0 w-[540px]" data-name="HomePage">
      <ImageMensHeritageCollection />
      <Container3 />
    </div>
  );
}

function HomePage3() {
  return <div className="absolute border-[#c9a060] border-[2px_0px_0px_2px] border-solid left-[32px] opacity-60 size-[64px] top-[32px]" data-name="HomePage" />;
}

function HomePage4() {
  return <div className="absolute border-[#c9a060] border-[0px_2px_2px_0px] border-solid left-[444px] opacity-60 size-[64px] top-[728px]" data-name="HomePage" />;
}

function Paragraph1() {
  return (
    <div className="absolute h-[15px] left-0 opacity-90 top-0 w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[192.77px] not-italic text-[#fdfcf9] text-[10px] text-center text-nowrap top-[0.5px] tracking-[3.1172px] translate-x-[-50%]">FOR HIM</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[72px] left-0 top-[31px] w-[384px]" data-name="Heading 2">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[72px] left-[191.52px] not-italic text-[#fdfcf9] text-[48px] text-center text-nowrap top-[0.5px] tracking-[3.84px] translate-x-[-50%]">{`Men's`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[49.391px] left-0 opacity-95 top-[127px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.7px] left-[192.18px] not-italic text-[#fdfcf9] text-[13px] text-center top-[0.5px] tracking-[-0.0762px] translate-x-[-50%] w-[381px]">Timeless kurtas, sherwanis, and heritage pieces crafted for the modern gentleman</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[15px] left-[40px] top-[12px] w-[157.867px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[79.5px] not-italic text-[10px] text-center text-nowrap text-white top-[0.5px] tracking-[2.6172px] translate-x-[-50%]">EXPLORE COLLECTION</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[15px] left-[210.86px] top-[12px] w-[11.68px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[6px] not-italic text-[10px] text-center text-nowrap text-white top-[0.5px] tracking-[2.6172px] translate-x-[-50%]">→</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute border-2 border-solid border-white h-[43px] left-[61.23px] top-[216.39px] w-[261.547px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function HomePage5() {
  return (
    <div className="absolute h-[259.391px] left-[78px] top-[282.3px] w-[384px]" data-name="HomePage">
      <Paragraph1 />
      <Heading1 />
      <Paragraph2 />
      <Container4 />
    </div>
  );
}

function Link() {
  return (
    <div className="[grid-area:1_/_1] overflow-clip place-self-stretch relative shrink-0" data-name="Link">
      <HomePage2 />
      <HomePage3 />
      <HomePage4 />
      <HomePage5 />
    </div>
  );
}

function ImageWomensHeritageCollection() {
  return <div className="absolute h-[824px] left-0 top-0 w-[540px]" data-name="Image (Women\'s Heritage Collection)" />;
}

function Container5() {
  return <div className="absolute h-[824px] left-0 top-0 w-[540px]" data-name="Container" style={{ backgroundImage: "linear-gradient(123.238deg, rgba(44, 24, 16, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)" }} />;
}

function HomePage6() {
  return (
    <div className="absolute h-[824px] left-0 overflow-clip top-0 w-[540px]" data-name="HomePage">
      <ImageWomensHeritageCollection />
      <Container5 />
    </div>
  );
}

function HomePage7() {
  return <div className="absolute border-[#c9a060] border-[2px_0px_0px_2px] border-solid left-[32px] opacity-60 size-[64px] top-[32px]" data-name="HomePage" />;
}

function HomePage8() {
  return <div className="absolute border-[#c9a060] border-[0px_2px_2px_0px] border-solid left-[444px] opacity-60 size-[64px] top-[728px]" data-name="HomePage" />;
}

function Paragraph3() {
  return (
    <div className="absolute h-[15px] left-0 opacity-90 top-0 w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[191.74px] not-italic text-[#fdfcf9] text-[10px] text-center text-nowrap top-[0.5px] tracking-[3.1172px] translate-x-[-50%]">FOR HER</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[72px] left-0 top-[31px] w-[384px]" data-name="Heading 2">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[72px] left-[192.29px] not-italic text-[#fdfcf9] text-[48px] text-center text-nowrap top-[0.5px] tracking-[3.84px] translate-x-[-50%]">{`Women's`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[49.391px] left-0 opacity-95 top-[127px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.7px] left-[192.39px] not-italic text-[#fdfcf9] text-[13px] text-center top-[0.5px] tracking-[-0.0762px] translate-x-[-50%] w-[348px]">Exquisite sarees, lehengas, and handwoven masterpieces celebrating feminine elegance</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[15px] left-[40px] top-[12px] w-[157.867px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[79.5px] not-italic text-[10px] text-center text-nowrap text-white top-[0.5px] tracking-[2.6172px] translate-x-[-50%]">EXPLORE COLLECTION</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[15px] left-[210.86px] top-[12px] w-[11.68px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[6px] not-italic text-[10px] text-center text-nowrap text-white top-[0.5px] tracking-[2.6172px] translate-x-[-50%]">→</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute border-2 border-solid border-white h-[43px] left-[61.23px] top-[216.39px] w-[261.547px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function HomePage9() {
  return (
    <div className="absolute h-[259.391px] left-[78px] top-[282.3px] w-[384px]" data-name="HomePage">
      <Paragraph3 />
      <Heading3 />
      <Paragraph4 />
      <Container6 />
    </div>
  );
}

function Link1() {
  return (
    <div className="[grid-area:1_/_2] overflow-clip place-self-stretch relative shrink-0" data-name="Link">
      <HomePage6 />
      <HomePage7 />
      <HomePage8 />
      <HomePage9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[824px] left-0 top-0 w-[1080px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[659.195px] left-[539.5px] to-[rgba(0,0,0,0)] top-[82.4px] via-50% via-[rgba(201,160,96,0.4)] w-px" data-name="Container" />;
}

function Section1() {
  return (
    <div className="bg-white h-[824px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container7 />
      <Container8 />
    </div>
  );
}

function HomePage10() {
  return (
    <div className="absolute h-[824px] left-0 top-0 w-[1080px]" data-name="HomePage">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomePage1} />
    </div>
  );
}

function HomePage11() {
  return <div className="absolute bg-gradient-to-l from-[rgba(0,0,0,0.35)] h-[824px] left-0 to-60% to-[rgba(0,0,0,0)] top-0 w-[1080px]" data-name="HomePage" />;
}

function Container9() {
  return (
    <div className="absolute h-[824px] left-0 top-[-50px] w-[1080px]" data-name="Container">
      <HomePage10 />
      <HomePage11 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[13.5px] left-[64px] top-[64px] w-[320px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[320.31px] not-italic text-[#fdfcf9] text-[9px] text-nowrap text-right top-[0.5px] tracking-[2.867px] translate-x-[-100%]">ARTISAN SERIES</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[98.797px] left-[64px] top-[89.5px] w-[320px]" data-name="Heading 2">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[49.4px] left-[320.61px] not-italic text-[#fdfcf9] text-[38px] text-right top-0 tracking-[2.28px] translate-x-[-100%] w-[219px]">Elephant Tales</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[74.086px] left-[64px] opacity-95 top-[204.3px] w-[320px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.7px] left-[320.07px] not-italic text-[#fdfcf9] text-[13px] text-right top-[0.5px] tracking-[-0.0762px] translate-x-[-100%] w-[316px]">Intricate hand-embroidered elephant motifs inspired by Madhubani art. Navy silk blend showcasing the perfect marriage of tradition and modernity.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute border border-solid border-white h-[41px] left-[224.53px] top-[310.38px] w-[159.469px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[79px] not-italic text-[10px] text-center text-nowrap text-white top-[12.5px] tracking-[2.1172px] translate-x-[-50%]">VIEW DETAILS</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[415.383px] left-[632px] top-[204.3px] w-[448px]" data-name="Container">
      <Paragraph5 />
      <Heading4 />
      <Paragraph6 />
      <Button1 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white h-[824px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container9 />
      <Container10 />
    </div>
  );
}

function ImageCraftsmanshipDetail() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="Image (Craftsmanship detail)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomePage} />
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[500px] items-start justify-self-stretch overflow-clip relative shrink-0" data-name="Container">
      <ImageCraftsmanshipDetail />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[13.5px] left-[64px] top-[64px] w-[412px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#c9a060] text-[9px] text-nowrap top-[0.5px] tracking-[2.867px]">OUR PHILOSOPHY</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[89.594px] left-[64px] top-[89.5px] w-[412px]" data-name="Heading 2">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[44.8px] left-0 not-italic text-[#2c1810] text-[32px] top-[-0.5px] tracking-[1.92px] w-[272px]">Handcrafted Excellence</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[84px] left-[64px] top-[203.09px] w-[412px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#5c4033] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[406px]">{`Every Sohwais piece celebrates India's rich textile heritage. We collaborate with master artisans, preserving centuries-old techniques while creating contemporary luxury.`}</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[100.883px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#c9a060] text-[11px] text-nowrap top-[0.5px] tracking-[1.7145px]">HANDCRAFTED</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[46.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#2c1810] text-[20px] text-nowrap top-[0.5px]">100%</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[43px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(201,160,96,0.2)] border-solid inset-0 pointer-events-none" />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[111.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#c9a060] text-[11px] text-nowrap top-[0.5px] tracking-[1.7145px]">ARTISAN HOURS</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[30px] relative shrink-0 w-[41.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#2c1810] text-[20px] text-nowrap top-[0.5px]">250+</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[43px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(201,160,96,0.2)] border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[115.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#c9a060] text-[11px] text-nowrap top-[0.5px] tracking-[1.7145px]">YEARS HERITAGE</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[30px] relative shrink-0 w-[44.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#2c1810] text-[20px] text-nowrap top-[0.5px]">500+</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[43px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(201,160,96,0.2)] border-solid inset-0 pointer-events-none" />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[161px] items-start left-[64px] top-[327.09px] w-[412px]" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_2] bg-[#fdfcf9] h-[552.094px] justify-self-stretch relative shrink-0" data-name="Container">
      <Paragraph7 />
      <Heading5 />
      <Paragraph8 />
      <Container15 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#fdfcf9] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[552.094px] relative shrink-0 w-full" data-name="Section">
      <Container11 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-[64px] to-[rgba(0,0,0,0)] top-[719px] via-50% via-[rgba(201,160,96,0.3)] w-[952px]" data-name="Container" />;
}

function Paragraph9() {
  return (
    <div className="h-[13.5px] opacity-70 relative shrink-0 w-[328.289px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#c9a060] text-[9px] text-nowrap top-[0.5px] tracking-[1.967px]">© 2025 SOHWAIS THREADS — HANDCRAFTED IN INDIA</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[13.5px] opacity-70 relative shrink-0 w-[93.625px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#fdfcf9] text-[9px] text-nowrap top-[0.5px] tracking-[1.517px]">PRIVACY POLICY</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] opacity-30 relative shrink-0 w-[3.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#c9a060] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">|</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="basis-0 grow h-[13.5px] min-h-px min-w-px opacity-70 relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#fdfcf9] text-[9px] text-nowrap top-[0.5px] tracking-[1.517px]">{`TERMS & CONDITIONS`}</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[13.5px] opacity-70 relative shrink-0 w-[122.719px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#fdfcf9] text-[9px] text-nowrap top-[0.5px] tracking-[1.517px]">{`SHIPPING & RETURNS`}</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[445.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link2 />
        <Text10 />
        <Link3 />
        <Text10 />
        <Link4 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[64px] top-[752px] w-[952px]" data-name="Container">
      <Paragraph9 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return <div className="absolute h-[377px] left-0 opacity-[0.08] top-0 w-[1080px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1080 377\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -90.34 -90.34 0 216 113.1)\\'><stop stop-color=\\'rgba(201,160,96,1)\\' offset=\\'0.00092593\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00092593\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1080 377\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -69.968 -69.968 0 648 263.9)\\'><stop stop-color=\\'rgba(201,160,96,1)\\' offset=\\'0.00092593\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00092593\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1080 377\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -92.824 -92.824 0 864 37.7)\\'><stop stop-color=\\'rgba(201,160,96,1)\\' offset=\\'0.00046296\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00046296\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1080 377\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -73.146 -73.146 0 432 339.3)\\'><stop stop-color=\\'rgba(201,160,96,1)\\' offset=\\'0.00046296\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00046296\\'/></radialGradient></defs></svg>')" }} />;
}

function Container21() {
  return <div className="absolute h-[377px] left-0 opacity-[0.15] top-0 w-[1080px]" data-name="Container" />;
}

function Heading6() {
  return (
    <div className="absolute h-[54px] left-[48px] top-0 w-[576px]" data-name="Heading 2">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[54px] left-[288.73px] not-italic text-[36px] text-center text-nowrap text-white top-[-0.5px] tracking-[2.88px] translate-x-[-50%]">Experience Sohwais</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[52px] left-[48px] opacity-90 top-[78px] w-[576px]" data-name="Paragraph">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[26px] left-[288.41px] text-[#fdfcf9] text-[13px] text-center top-0 translate-x-[-50%] w-[530px]">Book a private consultation to explore our collection and discover the art of bespoke luxury craftsmanship.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#c9a060] h-[47px] left-[204.57px] top-[170px] w-[262.852px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[131px] not-italic text-[#2c1810] text-[10px] text-center text-nowrap top-[16.5px] tracking-[2.6172px] translate-x-[-50%]">EXPLORE COLLECTIONS</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[217px] left-[204px] top-[80px] w-[672px]" data-name="Container">
      <Heading6 />
      <Paragraph10 />
      <Button2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#2c1810] border-[0px_0px_1px] border-[rgba(201,160,96,0.2)] border-solid h-[378px] left-0 overflow-clip top-0 w-[1080px]" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return <div className="absolute h-[341px] left-0 opacity-[0.08] top-0 w-[1080px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1080 341\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -89.637 -89.637 0 216 102.3)\\'><stop stop-color=\\'rgba(201,160,96,1)\\' offset=\\'0.00092593\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00092593\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1080 341\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -69.057 -69.057 0 648 238.7)\\'><stop stop-color=\\'rgba(201,160,96,1)\\' offset=\\'0.00092593\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00092593\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1080 341\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -91.689 -91.689 0 864 34.1)\\'><stop stop-color=\\'rgba(201,160,96,1)\\' offset=\\'0.00046296\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00046296\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1080 341\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -71.7 -71.7 0 432 306.9)\\'><stop stop-color=\\'rgba(201,160,96,1)\\' offset=\\'0.00046296\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00046296\\'/></radialGradient></defs></svg>')" }} />;
}

function Container25() {
  return <div className="absolute h-[341px] left-0 opacity-[0.15] top-0 w-[1080px]" data-name="Container" />;
}

function ImageSohwaisThreads() {
  return (
    <div className="absolute left-0 rounded-[16px] size-[128px] top-0" data-name="Image (Sohwais Threads)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[16px] size-full" src={imgImageSohwaisThreads} />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[41.797px] left-0 opacity-[0.85] top-[152px] w-[202px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.9px] left-0 not-italic text-[#c9a060] text-[11px] top-[0.5px] tracking-[0.0645px] w-[201px]">{`Handcrafted luxury celebrating India's rich textile heritage.`}</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <ImageSohwaisThreads />
      <Paragraph11 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#c9a060] text-[14px] text-nowrap top-0 tracking-[2.1px]">SHOP</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[101.664px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">{`Men's Collection`}</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[120.117px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">{`Women's Collection`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[76.367px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">New Arrivals</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[93.914px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">Heritage Series</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[107.094px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">Bespoke Services</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading2 />
      <List />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#c9a060] text-[14px] text-nowrap top-0 tracking-[2.1px]">ABOUT</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[58.328px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">Our Story</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[98.555px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">Artisan Partners</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[87.766px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">Craftsmanship</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[82.57px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">Sustainability</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 opacity-80 top-[7.5px] w-[67.523px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.9445px]">Contact Us</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link14 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading7 />
      <List1 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#c9a060] text-[14px] text-nowrap top-0 tracking-[2.1px]">CONNECT</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal h-[39.594px] leading-[19.8px] not-italic opacity-80 relative shrink-0 text-[#fdfcf9] text-[11px] text-nowrap tracking-[0.6145px] w-full" data-name="Paragraph">
      <p className="absolute left-0 top-0">+91 98765 43210</p>
      <p className="absolute left-0 top-[19.8px]">hello@sohwais.com</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_218)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #C9A060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, #C9A060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #C9A060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(201,160,96,0.4)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, #C9A060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link16() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(201,160,96,0.4)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36786300} id="Vector" stroke="var(--stroke-0, #C9A060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link17() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(201,160,96,0.4)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Link15 />
      <Link16 />
      <Link17 />
    </div>
  );
}

function Container30() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading8 />
      <Paragraph12 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[213px] left-[64px] top-[64px] w-[952px]" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[341px] left-0 overflow-clip top-[378px] w-[1080px]" data-name="Container">
      <Container24 />
      <Container25 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return <div className="absolute border-[#c9a060] border-[0px_0px_2px_2px] border-solid left-[32px] opacity-20 size-[48px] top-[728px]" data-name="Container" />;
}

function Container34() {
  return <div className="absolute border-[#c9a060] border-[0px_2px_2px_0px] border-solid left-[1000px] opacity-20 size-[48px] top-[728px]" data-name="Container" />;
}

function Section4() {
  return (
    <div className="bg-[#2c1810] h-[808px] relative shrink-0 w-full" data-name="Section">
      <Container17 />
      <Container19 />
      <Container23 />
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function HomePage12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[768px] items-start left-[180px] overflow-clip top-[100px] w-[1080px]" data-name="HomePage">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function HomePage13() {
  return (
    <div className="absolute h-[1024px] left-0 overflow-clip top-0 w-[1440px]" data-name="HomePage">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomePage2} />
      <div className="absolute h-[722px] left-[170px] rounded-[10px] top-[149px] w-[1055px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#2c1810] h-[1024px] left-0 overflow-clip top-0 w-[1440px]" data-name="App">
      <HomePage12 />
      <HomePage13 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[21px] relative shrink-0 w-[90.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cinzel_Decorative:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[3.5px]">SOHWAIS</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="basis-0 grow h-[16.5px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-nowrap text-white top-[0.5px] tracking-[1.3845px]">COLLECTION</p>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[45.133px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-nowrap text-white top-[0.5px] tracking-[1.3845px]">ABOUT</p>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[61.891px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-nowrap text-white top-[0.5px] tracking-[1.3845px]">CONTACT</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[254.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <Link18 />
        <Link19 />
        <Link20 />
      </div>
    </div>
  );
}

function HomePage14() {
  return (
    <div className="absolute content-stretch flex h-[69px] items-center justify-between left-0 px-[40px] py-0 top-0 w-[1440px]" data-name="HomePage">
      <Container35 />
      <Container36 />
    </div>
  );
}

export default function Sohwais() {
  return (
    <div className="bg-white relative size-full" data-name="Sohwais">
      <App />
      <HomePage14 />
    </div>
  );
}