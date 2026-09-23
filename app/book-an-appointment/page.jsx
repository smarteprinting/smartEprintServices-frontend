import BookAppointmentForm from "../components/BookAppointmentForm";

export const metadata = {
  title: "Book an Appointment | SmartEprint Services",
  description:
    "Schedule an appointment or consultation with SmartEprint Services.",
};

export default function BookingPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero Section - Preserving full uncut banner image */}
      <section className="relative left-1/2 w-screen -ml-[50vw] bg-[#034ec5] overflow-hidden">
        <div
          className="relative w-full aspect-[1672/628] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/banner-2.png')" }}
          role="img"
          aria-label="Let's Get Your Printer Working"
        />
      </section>

      {/* Booking Form Section */}
      <div id="booking-form" className="py-6 sm:py-8 lg:py-10">
        <h1 className="sr-only">Book an Appointment</h1>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Form + Side Image Container */}
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <div className="flex">
              <div className="w-full">
                <BookAppointmentForm />
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="h-full w-full overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
                <img
                  src="/k-hub1.png"
                  alt="Printer consultation and appointment booking"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
