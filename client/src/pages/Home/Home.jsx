import React from 'react'
import TrendingDestinations from '@/components/TrendingDestinations'
import TravellersFavourite from '@/components/TravellersFavourite'
import HolidayPackages from '@/components/HolidayPackages'
import HolidayThemes from '@/components/HolidayThemes'
import HiddenGems from '@/components/HiddenGems'
import TravellersTestimonials from '@/components/TravellersTestimonials'
import BookingBenefits from '@/components/BookingBenefits'
import TrustpilotSlider from '@/components/TrustPilotSlider'

function Home() {
  return (
    <div>
      <section>
        <TrendingDestinations />
      </section>
      <section>
        <TravellersFavourite />
      </section>
      <section>
        <HolidayPackages />
      </section>
      <section>
        <HolidayThemes />
      </section>
      <section>
        <HiddenGems />
      </section>
      <section className="bg-gradient-to-br from-white via-sky-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <TravellersTestimonials />
        </div>
      </section>
      <section>
        <BookingBenefits />
      </section>
      <section>
        <TrustpilotSlider />
      </section>


    </div>
  )
}

export default Home
