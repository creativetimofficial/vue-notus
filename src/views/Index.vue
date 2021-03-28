<template>
  <div>
    <navbar />
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  DIGITAL BARN LTD. (Est. 2003)
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  Welcome to the home of ReelFlies.ca and the CartridgeStore.ca (part of DIGITAL BARN LTD.) a family run business with a background in computing, specialising in eCommerce, graphic design, and creative digital photography. 
                  Combining our skills to produce two of the best known, yet diverse websites in Canada. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class="fas fa-fish"></i>
                  </div>
                  <h6 class="text-xl font-semibold"><a href="www.reelflies.ca" target="_blank">www.ReelFlies.ca</a></h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Quality Hand Tied Fishing Flies at Affordable Prices!
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">5: NEEDS TITLE</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Two Great Divisions Under One Roof.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                  >
                    <i class="fas fa-print"></i>
                  </div>
                  <h6 class="text-xl font-semibold"><a href="www.cartridgestore.ca" target="_blank">www.CartridgeStore.ca</a></h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Premium Branded Ink & Toner Cartridges at Realistic Prices!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-16">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div
                  class="p-3 text-center inline-flex items-center justify-center max-w-180-px mb-6"
                >
                  <img
                  class="max-w-150-px"
                  :src="cartridgestoreLogo"
                  />
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                The CartridgeStore.ca
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
              >
                Proudly serving our fellow Canadians with the very best quality printer supplies since 2003.  
                We are 100% family run and operated, providing some of the very best Ink and Toner Cartridge prices in Canada. 
                We offer two printer cartridge ranges, our eco brand Toners where we focus on our great value P-Tone and PearlTone brands, and our top of the range Fuzion branded toners. 
                For those that need the very best, then choose Fuzion Toner and Ink, this is the brand we use. This premium range is just as close as it gets to original OEM, so you can save without compromise! 
              </p>
              <ul class="list-none my-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-print"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Best Prices on Fuzion Toner & Ink
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-truck"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Free Shipping (Orders over $49)
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-check"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">Same Day Processing</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              <a href="https://www.cartridgestore.ca" class="font-bold text-blueGray-700 mt-8">
                Check Us Out at www.Cartridgestore.ca
              </a>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  :src="cartridgestore"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Top Rated BBB Store
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                     You can buy with complete peace of mind knowing that The Cartridge Store is also one of a few select Laser Printer Toner Stores in Canada to have a trusted BBB rating of A+
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                :src="reelflies"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="p-3 text-center inline-flex items-center justify-center max-w-180-px my-6"
                >
                  <img
                  class="max-w-150-px"
                  :src="reelfliesLogo"
                  />
                </div>
                <h3 class="text-3xl font-semibold">ReelFlies® Fishing Flies</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  As a family with a passion for fly fishing we established a new online division in 2008, www.ReelFlies.ca. 
                  From small and humble beginnings we have proudly grown to become the most trusted and popular online resellers of hand made fishing flies in Canada. 
                  We currently carry over 2,100 different deadly hand crafted fly patterns available for purchase today on our renowned eCommerce website, www.ReelFlies.ca
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-fish"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Choose from Over 2,100 Fly Patterns
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-truck"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          FREE Shipping on fly orders over $60
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-coins"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">Fly prices as low as $0.50</h4>
                      </div>
                    </div>
                  </li>
                </ul>

              <a href="https://www.reelflies.ca" class="block font-bold text-blueGray-700 mt-8">
                Check us out today at www.Reelflies.ca
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-9/12 px-4">
              <h2 class="text-4xl font-semibold">Meet the team</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                Having two great divisions at Digital Barn Ltd. has been fundamental to our success and growth of our business over the years. 
                Particularly as we experience the current global pandemic and it’s effect on many small businesses. 
                The support our valued customers have provided through these challenging times has been incredible, so thank you! 
                We will continue to proudly serve you with great products and good old fashioned family run service as we head into 2021. 
                Oh! and yes “Take a dog to work day” is every day at Digital Barn Ltd. they are also part of our family. 
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="steveB"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Steve B</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Founder and CEO
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="hayleyB"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Hayley B</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Office Manager
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="jennieB"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Jennie B</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Accounts & Receivable
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="shaunB"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Shaun B</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Web Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap mt-6">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="addieA"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Addie A</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Logistics Manager
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="ellieB"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Ellie B</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Top Dog
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="ollieB"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Ollie B</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Second in Charge
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="roo"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Roo Meister</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Front of Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-20 relative block bg-blueGray-800">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4 lg:pt-24 lg:pb-20">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-9/12 px-4 my-6">
              <h2 class="text-4xl font-semibold text-white">
                Buy online or call Toll Free: 1.866.250.4071 to arrange a curbside pickup at our new location at 93 Broadway St, Tillsonburg, ON.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/Navbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import addieA from "@/assets/img/addieA.jpg";
import hayleyB from "@/assets/img/hayleyB.jpg";
import ellieB from "@/assets/img/ellieB.jpg";
import ollieB from "@/assets/img/ollieB.jpg";
import jennieB from "@/assets/img/jennieB.jpg";
import steveB from "@/assets/img/steveB.jpg";
import roo from "@/assets/img/roo.jpg";
import shaunB from "@/assets/img/roo.jpg";
import cartridgestore from "@/assets/img/cartridgestore.png";
import cartridgestoreLogo from "@/assets/img/cartridgestore-logo.png";
import reelflies from "@/assets/img/reelflies.png";
import reelfliesLogo from "@/assets/img/reelflies-logo.png";

export default {
  data() {
    return {
      addieA,
      hayleyB,
      ellieB,
      ollieB,
      jennieB,
      steveB,
      roo,
      shaunB,
      cartridgestore,
      cartridgestoreLogo,
      reelflies,
      reelfliesLogo
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>
