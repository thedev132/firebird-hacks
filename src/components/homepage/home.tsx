"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/homepage/ui/card"
import { Envelope, Discord, Linkedin } from "react-bootstrap-icons"

export function HomeComponent() {
  return (
    <div className="bg-[#000] text-white">
      <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <h1 className="text-3xl font-bold">Firebird Hacks</h1>
        <nav className="flex gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#hackathons" className="hover:underline" prefetch={false}>
            Hackathons
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main>
        <section className="py-20 px-6 flex items-center justify-around">
          <div className="max-w-md space-y-4">
            <h2 className="text-4xl font-bold">Empowering the Next Generation of Innovators</h2>
            <p className="text-lg">Join us at our exciting high school hackathons and unleash your creativity.</p>
            <Link
              href="#hackathons"
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-md hover:bg-[#c00] transition-colors"
              prefetch={false}
            >
              Attend a Hackathon
            </Link>
            <Link
              href="https://hcb.hackclub.com/donations/start/firebirdhacks"
              className="inline-flex items-center justify-center border text-white px-6 py-3 rounded-md hover:bg-[#c00] hover:border-red-600 transition-colors ml-5"
              prefetch={false}
            >
              Donate
            </Link>
          </div>
          <div className="hidden md:block">
            <img
              src="/logo.png"
              width="500"
              height="300"
              alt="Students collaborating"
              className="rounded-md"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
          </div>
        </section>
        <section id="about" className="py-20 px-6 bg-[#111]">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold">About Us</h2>
              <p className="text-lg text-[#ccc] mt-4">
                Firebird Hacks is a non-profit organization dedicated to fostering innovation and
                creativity among high school students. Through our exciting hackathon events, we provide a platform for
                students to collaborate, learn, and bring their ideas to life.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#222] p-6 rounded-md">
                <LightbulbIcon className="h-8 w-8 text-[#f00]" />
                <h3 className="text-2xl font-bold mt-4">Innovative Ideas</h3>
                <p className="text-[#ccc] mt-2">
                  Our hackathons encourage students to think outside the box and develop innovative solutions to
                  real-world problems.
                </p>
              </div>
              <div className="bg-[#222] p-6 rounded-md">
                <RocketIcon className="h-8 w-8 text-[#f00]" />
                <h3 className="text-2xl font-bold mt-4">Hands-on Learning</h3>
                <p className="text-[#ccc] mt-2">
                  Participants gain valuable technical and problem-solving skills through hands-on workshops and
                  mentorship from industry professionals.
                </p>
              </div>
              <div className="bg-[#222] p-6 rounded-md">
                <TrophyIcon className="h-8 w-8 text-[#f00]" />
                <h3 className="text-2xl font-bold mt-4">Rewarding Experiences</h3>
                <p className="text-[#ccc] mt-2">
                  Our hackathons offer exciting prizes and recognition for the most innovative and impactful projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="hackathons" className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold">Upcoming Hackathons</h2>
              <p className="text-lg text-[#ccc] mt-4">
                Check out our upcoming hackathon events and sign up to be a part of the excitement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-r from-red-500 to-orange-500">
                <CardHeader>
                  <CardTitle>Firebirds Hacks 2024</CardTitle>
                  <CardDescription>
                    Join us for a day of innovation and creativity at our annual Fremont Hackathon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-5 w-5 text-[#fff]" />
                      <span>December 23rd, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-[#fff]" />
                      <span>9:30 AM - 5:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-[#fff]" />
                      <a href="https://www.google.com/maps/place/Google+Visitor+Experience/@37.4215862,-122.0832179,17z/data=!3m1!4b1!4m6!3m5!1s0x808fb9f9291ff8a1:0x223be8ea8c995cc4!8m2!3d37.4215862!4d-122.0806376!16s%2Fg%2F11l5b0m4gc"><span>Google Visitor Experience</span></a>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/hackathon"
                    className="inline-flex items-center justify-center bg-[#f00] text-white px-6 py-3 rounded-md hover:bg-[#c00] transition-colors"
                    prefetch={false}
                  >
                    Register Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-to-r from-orange-500 to-yellow-500">
                <CardHeader>
                  <CardTitle>Firebird Hacks 2025</CardTitle>
                  <CardDescription>Get ready for our next exciting hackathon event in 2024.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-5 w-5 text-[#fff]" />
                      <span>TBD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-[#fff]" />
                      <span>TBD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-[#fff]" />
                      <span>TBD</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="disabled inline-flex items-center justify-center bg-[#f00] text-white px-6 py-3 rounded-md hover:bg-[#c00] transition-colors"
                    prefetch={false}
                  >
                    Coming Soon...
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        {/* <section id="hackathons" className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold">Past Hackathons</h2>
              <p className="text-lg text-[#ccc] mt-4">
                Check out our upcoming hackathon events and sign up to be a part of the excitement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fremont Hackathon 2023</CardTitle>
                  <CardDescription>
                    Join us for a day of innovation and creativity at our annual Fremont Hackathon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-5 w-5 text-[#f00]" />
                      <span>June 10, 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-[#f00]" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-[#f00]" />
                      <span>Fremont High School, 4610 Paseo Padre Pkwy, Fremont, CA 94538</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-[#f00] text-white px-6 py-3 rounded-md hover:bg-[#c00] transition-colors"
                    prefetch={false}
                  >
                    Register Now
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fremont Hackathon 2024</CardTitle>
                  <CardDescription>Get ready for our next exciting hackathon event in 2024.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-5 w-5 text-[#f00]" />
                      <span>June 8, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-[#f00]" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-[#f00]" />
                      <span>Fremont High School, 4610 Paseo Padre Pkwy, Fremont, CA 94538</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-[#f00] text-white px-6 py-3 rounded-md hover:bg-[#c00] transition-colors"
                    prefetch={false}
                  >
                    Register Now
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section> */}
        <section className="bg-[#111]">
          <div id='contact' className="py-8 px-4 mx-auto w-max max-w-screen-xl lg:py-16 lg:px-6 bg-[#111]">
              <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                  <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
              </div> 
              <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                      <div className="items-center rounded-lg shadow sm:flex  bg-[#222] dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/mohamad.jpg" alt=""/>
                        </a>
                      <div className="p-5">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              <a href="#">Mohamad Mortada</a>
                          </h3>
                          <span className="text-gray-500 dark:text-gray-400">Founder</span>
                          {/* <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p> */}
                          <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                  <a href="https://github.com/thedev132" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>       
                                  </a>
                                </li>
                                <li>
                                  
                                <a href="https://instagram.com/__mohamad_mortada__" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                  </svg>
                                </a>
                                </li>

                                <li>
                                  <a href="mailto:mmortada685@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <Envelope/>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://discordapp.com/users/755232062302191638" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <Discord/>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://linkedin.com/in/mohamad-mortada-69a7042a9" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <Linkedin/>
                                  </a>
                                </li>
                          </ul>
                      </div>
                  </div> 
                  <div className="items-center rounded-lg shadow sm:flex  bg-[#222] dark:border-gray-700">
                      <a href="#">
                          <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/aadi.jpg" alt=""/>
                      </a>
                      <div className="p-5">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                              <a href="#">Aadi Matha</a>
                          </h3>
                          <span className="text-gray-500 dark:text-gray-400">Co-Founder</span>
                          {/* <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p> */}
                          <ul className="flex space-x-4 sm:mt-0">
                              <li>
                                <a href="https://www.instagram.com/aadimatha/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                  <a href="mailto:aadibm@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <Envelope/>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://discordapp.com/users/690255966226219068" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <Discord/>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.linkedin.com/in/aadi-matha-40659031a/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <Linkedin/>
                                  </a>
                                </li>
                          </ul>
                      </div>
                  </div>  
              </div>  
          </div>
        </section>
      </main>
      <footer className="bg-[#111] py-8 px-6 text-center">
        <p className="text-[#ccc]">&copy; 2024 Fremont High School Hackathons. All rights reserved.</p>
      </footer>
    </div>
  )
}

function CalendarDaysIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
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


function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
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
