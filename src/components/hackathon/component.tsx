import Link from "next/link"
import { Button } from "@/components/hackathon/ui/button"
import { Input } from "@/components/hackathon/ui/input"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#1a1a1a] text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CodeIcon className="h-6 w-6 text-red-500" />
          <span className="sr-only">Hackathon</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-red-500 transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#schedule" className="text-sm font-medium hover:text-red-500 transition-colors" prefetch={false}>
            Schedule
          </Link>
          <Link href="#prizes" className="text-sm font-medium hover:text-red-500 transition-colors" prefetch={false}>
            Prizes
          </Link>

        </nav>
      </header>
      <main className="flex flex-col items-center justify-center">
        <section id="hero" className="flex w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a] border-b border-[#333] items-center justify-center">
          <div className="container w-full px-4 md:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">Firebird Hacks</h1>
            <p className="mt-4 text-lg text-gray-400">December 23th, 2024</p>
            <div className="mt-8">
              <Button className="bg-red-500 hover:bg-red-600 text-white"><Link href={"https://nsx3rfltsuj.typeform.com/to/NJF4Q7yX"}>Register Now</Link></Button>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a] flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About the Hackathon</h2>
              <p className="text-gray-400">
                Join us for an exciting 8 hour hackathon where developers, designers, and entrepreneurs come together
                to build innovative solutions. Compete for amazing prizes and network with industry leaders.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Event Details</h2>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <CalendarIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                  December 23rd, 2024
                </li>
                <li>
                  <LocateIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                  Google Visitor Experience
                </li>
                <li>
                  <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                  9:30 AM - 5:30 PM
                </li>
                {/* <li>
                  <UsersIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                  500+ Participants
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

        <section id="schedule" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a] border-t border-[#333]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Schedule</h2>
            <div className="flex items-center justify-center gap-8">
              <div className="bg-[#222] rounded-lg p-6">
                {/* <h3 className="text-xl font-bold mb-2">Day 1</h3> */}
                <ul className="space-y-2 text-gray-400">
                  <li className="text-lg">
                    <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500 " />
                    9:30-10 AM: Entry & Breakfast
                  </li>
                  <li className="text-lg">
                    <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                    10 AM - 10:30 AM: Opening Ceremony
                  </li>
                  <li className="text-lg">
                    <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                    10:45 AM: Hacking Begins
                  </li>
                  <li className="text-lg">
                    <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                    11:30 PM - 12:30 PM: Web Dev Workshop 
                  </li>
                </ul>
              </div>
              <div className="bg-[#222] rounded-lg p-6">
                {/* <h3 className="text-xl font-bold mb-2">Day 1</h3> */}
                <ul className="space-y-2 text-gray-400">
                  <li className="text-lg">
                    <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                    12:30-1:30 PM: Lunch & Networking
                  </li>
                  <li className="text-lg">
                    <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                    4:15 PM: Hacking Ends
                  </li>
                  <li className="text-lg">
                    <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                    4:15-5:00 PM: Judging Begins
                  </li>
                  <li className="text-lg">
                    <ClockIcon className="w-6 h-6 mr-2 inline-block text-red-500" />
                    5:00-5:30 PM: Closing Remarks
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="prizes" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Prizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#222] rounded-lg p-6 text-center">
                <TrophyIcon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-bold mb-2">1st Place</h3>
                <p className="text-gray-400">TBD</p>
              </div>
              <div className="bg-[#222] rounded-lg p-6 text-center">
                <TrophyIcon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-bold mb-2">2nd Place</h3>
                <p className="text-gray-400">TBD</p>
              </div>
              <div className="bg-[#222] rounded-lg p-6 text-center">
                <TrophyIcon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-bold mb-2">3rd Place</h3>
                <p className="text-gray-400">TBD</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1a1a1a] py-6 border-t border-[#333]">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">&copy; 2024 Fremont High School Hackathons. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm font-medium hover:text-red-500 transition-colors" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-red-500 transition-colors" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-red-500 transition-colors" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}


function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
