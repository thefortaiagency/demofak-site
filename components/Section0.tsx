import Image from 'next/image'

export default function Section0() {
  return (
    <section className="MainContentInner " >
      <div className="container mx-auto px-4">
        <h1 className="HeroImageTitle">FAK Logistics</h1>
        <p className="HeroImageSubtitle">Your Proactive Freight Management Partner.</p>
        <p className="InfoBlockDescription">The world of freight can be a bit of a maze. That’s where our proactive approach shines! Our commitment to transparency ensures you’ll know where your shipments are at every turn. We anticipate challenges before they arise and deploy innovative strategies, giving you the confidence to navigate the complexities of your shipments.</p>
        <p className="CalloutBlockItemDescription">When standard trailers won't cut it, FAK gives you options.</p>
        <p className="CalloutBlockItemDescription">Hazardous materials don't scare us.</p>
        <p className="CalloutBlockItemDescription">FAK can get you into or out of port easily.</p>
        <p className="CalloutBlockItemDescription">We can even get reefer and food-grade shipping.</p>
        <p className="CalloutBlockItemDescription">Whether it's FTL or LTL; dry van, reefer, flatbed or specialty... we have a way to deliver it.</p>
        <p className="CalloutBlockItemDescription">Food-grade? Hazmat? Drayage? Sharks in aquariums? When do you need it delivered?</p>
        <p className="CalloutBlockItemDescription">Around the block, or around the world, we will get your freight delivered on time every time.</p>
        <p className="CalloutBlockItemDescription">Every shipment  is backed by our money-back guarantee & multiple shipping methods.</p>
        <p className="text-lg mb-4">The Haggard family values ring loud and true through the office every day. Our team is built by our leadership’s own network of talented individuals that have proven to be loyal to each other and the brand by staying committed to our top-down values and policies. We continue to grow our bench with top notch talent; even when we’re not looking, we’re always open to finding a place for the right person.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="relative">
            <Image
              src="/images/fakhero-videodesktop.jpg?Revision=QkH&Timestamp=0m1Q58"
              alt="FAK Logistics - Your Proactive Freight Management Partner."
              width={1920}
              height={804}
              className="HeroBackgroundImage"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/fakfeatured-about-us-01icon.jpg?Revision=pbH&Timestamp=mk9k58"
              alt="The FAK Logistics logomark."
              width={110}
              height={60}
              className="InfoBlockIconImage"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/fakfeatured-about-us-01background.jpg?Revision=RkH&Timestamp=v41Q58"
              alt="A background texture."
              width={1920}
              height={606}
              className="InfoBlockBackgroundImage"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/fakpremium-brands-01desktop.jpg?Revision=N2H&Timestamp=M4wT58"
              alt="An odometer rolling over to 2000."
              width={1920}
              height={518}
              className="FeaturedPremiumBrandsImage"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/DSC09953-min.jpg?Revision=DVg&Timestamp=WP64B8"
              alt="Meet the FAK Team"
              width={564}
              height={423}
              className="InfoBlockImage"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/fakfeatured-story-left-01background.jpg?Revision=mkH&Timestamp=tSWQ58"
              alt="A background texture."
              width={1920}
              height={657}
              className="InfoBlockBackgroundImage"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/fakfeatured-brands-full-01desktop.png?Revision=JkH&Timestamp=FMkQ58"
              alt="A testimonial statement from a satisfied customer."
              width={1278}
              height={228}
              className="FeaturedBrandsFullWidthImage"
            />
          </div>
        </div>
      </div>
    </section>
  )
}