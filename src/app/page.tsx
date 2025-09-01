"use client";
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div className="bg-gradient-to-br from-[#FDF3F0] to-[#F0F7FF]">
        <div id="hero" data-section="hero">
          <TokenBillboardHero title="Welcome to MemeCoin" subtitle="Join the fun and invest in the future!" contractAddress="0x..." copyButtonText="Copy Address" copiedText="Address Copied!" />
        </div>
        <div id="about" data-section="about">
          <CtaAbout title="About MemeCoin" descriptions={["MemeCoin is a playful approach to cryptocurrency.", "Join the community and have fun with your investments!"]} />
        </div>
        <div id="how-to-buy" data-section="how-to-buy">
          <HowToBuy2D variant="simple" />
        </div>
        <div id="tokenomics" data-section="tokenomics">
          <TextGridTokenomics title="Tokenomics" description="Our innovative token distribution and economics." tokenData={[{ value: "10M", description: "Total Supply" }, { value: "1M", description: "Initial Distribution" }, { value: "0.1M", description: "Liquidity" }]} />
        </div>
        <div id="footer" data-section="footer">
          <FooterLogoEmphasis logoSrc="/images/logo.svg" logoAlt="MemeCoin Logo" logoText="MemeCoin" columns={[{ items: [{ label: "Privacy Policy", onClick: () => console.log('Privacy Policy Clicked') }, { label: "Terms of Service", onClick: () => console.log('Terms Clicked') }] }]}} copyrightText="© 2023 MemeCoin" onPrivacyClick={() => console.log('Privacy clicked')} />
        </div>
      </div>
    </SiteThemeProvider>
  );
}
