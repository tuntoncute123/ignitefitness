import MarqueeBar from '../../components/MarqueeBar/MarqueeBar'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import BranchFinder from '../../components/BranchFinder/BranchFinder'
import Pricing from '../../components/Pricing/Pricing'
import FreeTrial from '../../components/FreeTrial/FreeTrial'
import GymInterior from '../../components/GymInterior/GymInterior'
import Features from '../../components/Features/Features'
import AppSection from '../../components/AppSection/AppSection'
import Knowledge from '../../components/Knowledge/Knowledge'
import CtaSection from '../../components/CtaSection/CtaSection'

export default function Home() {
  return (
    <>
      <MarqueeBar />
      <HeroSlider />
      <BranchFinder />
      <Pricing />
      <FreeTrial />
      <GymInterior />
      <Features />
      <AppSection />
      <Knowledge />
      <CtaSection />
    </>
  )
}
