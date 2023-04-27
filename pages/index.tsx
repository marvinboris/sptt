import {
  ArrowDownOnSquareIcon,
  ArrowRightIcon,
  ChartBarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PencilIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { ReactElement } from "react";

import Layout, { Head } from "@/components/frontend/navigation/layout";

import FactorBlock from "@/components/frontend/ui/blocks/factor";
import HeroCard from "@/components/frontend/ui/blocks/hero-card";
import PackBlock from "@/components/frontend/ui/blocks/pack";
import RoadmapDateBlock from "@/components/frontend/ui/blocks/roadmap-date";
import TeamMemberBlock from "@/components/frontend/ui/blocks/team-member";
import Button from "@/components/frontend/ui/form/button";
import Input from "@/components/frontend/ui/form/input";
import Select from "@/components/frontend/ui/form/select";
import TextArea from "@/components/frontend/ui/form/text-area";
import OwlCarousel from "@/components/frontend/ui/owl-carousel";

import SvgIcon from "@/components/ui/svg-icon";

import { NextPageWithLayout } from "./_app";

const params = {
  link: "/",
  title: process.env.NEXT_PUBLIC_COMPANY_NAME!,
  description:
    "Spread Tech Token is a new cryptocurrency that aims to revolutionize the tech industry.",
};

const data = {
  packs: [250, 500, 1000, 2000, 5000, 10000],
  factors: [
    {
      icon: "cash-money-into-blue-wallet-coin-red-transfer-arrows-icon-float-on-transparent-mobile-banking-and-online-payment-cash-back-and-refund-currency-exchange-saving-money-wealth-concept-3d-rendering",
      label: "Le staking",
    },
    {
      icon: "gold-coin-falling-into-wallet-floating-on-transparent-mobile-banking-and-online-payment-service-transfer-arrows-icon-cashback-and-refund-saving-money-wealth-and-business-concept-3d-render",
      label: "Le buy back",
    },
    { icon: "coin-on-fire", label: "Le burning" },
    { icon: "inflation-fluctuation", label: "Gestion de l’inflation" },
    { icon: "purchase-transaction", label: "L’utilité" },
    { icon: "community", label: "La communauté" },
  ],
  roadmapDates: [
    {
      achieved: true,
      down: true,
      period: "Septembre 2023",
      text: "Lancement du spread tech token et des ventes privées.",
    },
    {
      achieved: true,
      period: "Decembre 2023",
      text: "Cotation dans un CEX et lancement officiel de la société.",
    },
    {
      down: true,
      period: "Janvier - Septembre 2024",
      text: "Partenariats avec des écoles de Trading locales et à l'étranger.",
    },
    {
      period: "Octobre - Décembre 2024",
      text: "Mise en place de la première représentation de Crypto Trading Solutions and Consulting.",
    },
  ],
  team: [
    {
      name: "Kimber Materi",
      job: "Trader & Instructor",
      photo: "home-team-member-1",
    },
    { name: "Fibi Lola", job: "CEO & Founder", photo: "home-team-member-2" },
    {
      name: "Kopak Frank",
      job: "Trader & Instructor",
      photo: "home-team-member-3",
    },
    {
      name: "Achile Koza",
      job: "Tiktok Influencer",
      photo: "home-team-member-4",
    },
  ],
};

const HomePage: NextPageWithLayout = () => {
  const packs = data.packs.map((amount, i) => (
    <PackBlock key={`pack-${i}`} amount={amount} name={`Starter ${i + 1}`} />
  ));

  const factors = data.factors.map((factor) => (
    <FactorBlock key={factor.icon} {...factor} />
  ));

  const roadmapDates = data.roadmapDates.map((date, i) => (
    <RoadmapDateBlock key={"roadmap-date-" + i} {...date} />
  ));

  const team = data.team.map((member, i) => (
    <TeamMemberBlock key={"team-member-" + i} {...member} />
  ));

  return (
    <>
      <Head {...params} />
      <main className="overflow-x-clip">
        <header className="relative z-0 flex h-[800px] items-center bg-night/20 md:items-end md:pb-[105px]">
          <SvgIcon
            name="../home-ellipse-1"
            className="absolute left-0 top-16 -z-10 h-[480px] w-[480px] -translate-x-1/2"
          />

          <div className="container grid md:grid-cols-2 md:gap-40">
            <div>
              <h2 className="font-display text-6xl/[63px] font-bold text-white md:text-[70px]/[78px]">
                Learn crypto with{" "}
                <span className="bg-gradient-to-r from-[#73ABFF] via-[#DE51EA] to-[#73ABFF] bg-clip-text text-transparent">
                  spread tech token
                </span>
              </h2>

              <p className="mt-[21px] font-body text-2xl md:mt-[30px]">
                Achetez vos formations crypto et obtenez un nombre de pièces en
                staking pouvant vous générer jusqu’a 20% de ROI.
              </p>

              <div className="mt-[59px] flex gap-7 md:items-center md:gap-[37px]">
                <div className="pt-4 md:pt-0">
                  <Button icon={ArrowDownOnSquareIcon}>
                    Download whitepaper
                  </Button>
                </div>

                <div className="cursor-pointer items-center gap-4 md:flex">
                  <div className="flex aspect-square w-[88px] flex-none items-center justify-center rounded-full bg-white/5 before:absolute before:aspect-square before:w-[72px] before:rounded-full before:bg-white/10">
                    <PlayCircleIcon className="w-12" />
                  </div>

                  <span className="md:text-2xl">Watch video</span>
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-full z-0 flex w-full -translate-y-14 flex-col items-stretch gap-4 px-8 md:relative md:top-0 md:block md:translate-y-0 md:px-0">
              <div className="hidden md:block">
                <SvgIcon
                  name="../home-frame"
                  className="absolute bottom-0 right-20 w-16"
                />
                <SvgIcon
                  name="../home-frame-1"
                  className="absolute left-24 w-16"
                />
                <SvgIcon
                  name="../home-frame-2"
                  className="absolute top-64 w-12 -translate-x-12"
                />

                <SvgIcon name="../home-grid-dots" className="absolute w-16" />

                <SvgIcon
                  name="../home-group-supply"
                  className="absolute top-20 md:w-[307px] md:-translate-x-6"
                />
                <SvgIcon
                  name="../home-group-holders"
                  className="absolute -top-10 left-48 md:w-[217px]"
                />
                <SvgIcon
                  name="../home-group-amount-staked"
                  className="absolute right-0 top-24 md:w-[226px]"
                />

                <SvgIcon
                  name="../home-group-stakers"
                  className="absolute left-16 top-72 w-[212px]"
                />
                <SvgIcon
                  name="../home-polygon-3"
                  className="absolute right-0 top-0 w-[280px] -translate-y-1/2 translate-x-1/2"
                />
                <SvgIcon
                  name="../home-iphone-13"
                  className="absolute left-44 top-0 w-[487px]"
                />
                <Image
                  width={500}
                  height={500}
                  src="/images/home-iphone-design.png"
                  alt="Phone design"
                  className="absolute left-48 top-10 w-[204px]"
                />
              </div>

              <HeroCard
                supply
                icon={ChartBarIcon}
                label="Total supply"
                value="100,000,000,000 SPTT"
                className="md:hidden"
              />

              <HeroCard
                icon={UserGroupIcon}
                label="Total holders"
                value="1243"
                className="md:hidden"
              />

              <HeroCard
                icon={UserGroupIcon}
                label="Total staked"
                value="$19,684.98"
                className="md:hidden"
              />
            </div>

            <SvgIcon
              name="../home-crypto-mesh"
              className="absolute right-0 top-0 -z-10 hidden w-[515px] translate-x-1/3 md:block"
            />

            <SvgIcon
              name="../home-bg-light"
              className="absolute -z-20 scale-[3] opacity-20 md:-bottom-1/4 md:left-1/4 md:w-[880px] md:scale-100 md:opacity-100"
            />
            <SvgIcon
              name="../home-hallow"
              className="absolute -bottom-6 -right-20 -z-30 hidden w-[940px] blur-3xl md:block"
            />
          </div>
        </header>

        <section className="relative z-0 flex flex-col items-center gap-14 pb-24 pt-96 md:bg-night/40 md:py-24">
          <SvgIcon
            name="../home-grid-dots-1"
            className="absolute left-0 -z-50 h-24 w-24 -translate-x-1/3 md:hidden"
          />

          <SvgIcon
            name="../home-polygon-1"
            className="absolute right-0 top-32 -z-50 h-[280px] w-[280px] translate-x-1/4 md:hidden"
          />

          <h2 className="section-title px-16 text-center md:px-0 md:text-[45px]">
            Private sales starting in :
          </h2>

          <div className="grid grid-cols-4 gap-6 px-8 md:px-0">
            {[
              [178, "days"],
              [23, "hours"],
              [56, "minutes"],
              [23, "seconds"],
            ].map(([value, label]) => (
              <div
                key={value + "-" + label}
                className="flex aspect-square w-20 flex-col items-center justify-center gap-2 rounded-[15px] bg-white/10 md:w-[100px]"
              >
                <div className="text-[27px] font-bold leading-none text-white md:text-[35px]">
                  {value}
                </div>
                <div className="text-xs font-light uppercase md:text-base">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="container relative flex items-center">
            <div className="absolute top-1/2 z-10 h-1.5 w-1/4 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-900 to-primary-400 before:absolute before:left-full before:top-1/2 before:z-20 before:h-7 before:w-7 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-4 before:border-white before:bg-gradient-to-r before:from-primary-900 before:to-primary-400 after:absolute after:left-full after:top-1/2 after:z-20 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white">
              <div className="absolute left-full top-full mt-5 -translate-x-1/2 truncate text-left leading-none md:mt-3 md:text-center">
                <span className="font-bold text-white md:text-lg">
                  $34,569.93
                </span>
                <br />
                <span className="text-xs">193,943,348.87 SPTT</span>
              </div>
            </div>

            <div className="relative z-0 h-1.5 flex-1 rounded-l-full bg-white/20" />

            <div className="relative aspect-square w-7 flex-none rounded-full bg-white/20">
              <div className="absolute left-1/2 top-full mt-1 -translate-x-full truncate text-sm md:-translate-x-1/2">
                December 2023
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <SvgIcon
            name="../home-grid-dots-2"
            className="absolute right-0 -z-50 h-24 w-24 translate-x-1/3 md:hidden"
          />

          <SvgIcon
            name="../home-grid-dots"
            className="absolute -left-10 top-[180px] hidden w-28 md:block"
          />

          <div className="container grid grid-cols-1 items-center md:grid-cols-2 md:gap-14">
            <div className="text-white">
              <h2 className="section-title md:pr-40 md:text-[38px]">
                What is Spread Tech Token ?
              </h2>

              <p className="mt-11 text-center font-body text-xl md:text-left">
                {`Spread Tech Token (SPTT) a été créé pour soutenir le projet de vulgarisation et éduquer davantage sur l'industrie de la cryptographie et ses opportunités et/ou dangers. Nous visons à ouvrir une crypto trading solutions and consulting academy complète au Cameroun avec des succursales dans plusieurs pays africains.`}
              </p>

              <div className="mt-11 hidden md:block">
                <Button icon={ArrowRightIcon} className="w-[226px]">
                  Join Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <SvgIcon
                name="../home-bg-light"
                className="absolute -left-20 top-20 w-[440px]"
              />
              <SvgIcon
                name="../home-bg-light"
                className="absolute right-0 top-0 -z-20 w-[220px]"
              />

              <Image
                height={1400}
                width={1400}
                sizes="(max-width: 1400px) 100vw, 1400px"
                src="/images/home-computer/Other-07_habeqb_c_scale,w_1400.webp"
                alt="Home - Computer"
                className="relative z-0"
              />
            </div>

            <div className="mt-10 text-center md:hidden">
              <Button icon={ArrowRightIcon} className="w-[226px]">
                Join Us
              </Button>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col items-center py-28">
          <SvgIcon
            name="../home-grid-dots-3"
            className="absolute left-0 -z-50 h-24 w-24 -translate-x-1/3 md:hidden"
          />

          <SvgIcon
            name="../home-grid-dots"
            className="absolute -right-16 top-28 hidden w-40 md:block"
          />

          <h2 className="section-title px-16 md:px-0 md:text-6xl">
            Packs de formation
          </h2>

          <p className="mx-auto mt-5 max-w-3xl px-4 text-center font-body text-xl md:text-base">
            {`Il n'y a qu'une seule façon de devenir un Spread Tech Token,  c’est utilisant le lien d'un membre déjà existant. La politique  commerciale de l'entreprise est le marketing relationnel.`}
          </p>

          <div className="mt-14 w-full scrollbar-none md:overflow-auto">
            <div className="container hidden h-96 flex-nowrap items-center gap-7 md:flex">
              {packs}
            </div>

            <div className="md:hidden">
              <OwlCarousel
                key="packs-carousel"
                className="packs"
                center
                loop
                items={1}
                stagePadding={60}
                margin={28}
              >
                {packs}
              </OwlCarousel>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col items-center pb-40 pt-7">
          <SvgIcon
            name="../home-grid-dots"
            className="absolute -left-16 top-28 hidden w-40 md:block"
          />

          <h2 className="section-title container max-w-2xl text-center md:text-6xl">
            Les facteurs influents du prix du SPTT
          </h2>

          <p className="mx-auto mt-5 max-w-3xl px-4 text-center font-body text-xl md:text-base">
            {`En achetant un programme de formation chez Crypto Trading Solutions and Consulting Academy, il est important de prendre connaissance de ces facteurs`}
          </p>

          <div className="mt-14 w-full">
            <div className="mx-auto flex flex-wrap justify-center gap-y-2.5 px-8 md:max-w-5xl md:gap-y-7 md:px-0">
              {factors}
            </div>
          </div>
        </section>

        <section className="relative z-0 overflow-clip pb-24 md:bg-night/40 md:pt-24">
          <SvgIcon
            name="network"
            className="absolute -left-3/4 top-9 -z-10 w-[500px] md:-left-1/4"
          />
          <SvgIcon
            name="network"
            className="absolute -right-3/4 bottom-6 -z-10 w-[500px] rotate-180 md:-right-1/4"
          />

          <div className="container">
            <h2 className="section-title md:text-[45px]">Feuille de route</h2>
          </div>

          <div className="-mt-8 flex h-[100px] origin-left rotate-90 items-center md:mt-0 md:h-11 md:rotate-0">
            <div className="-mt-36 h-1.5 w-full rounded-full bg-gradient-to-r from-white/20 to-transparent md:mt-36 md:h-2.5 md:rounded-none md:bg-white/20">
              <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-primary-700 to-primary-400 md:rounded-l-none" />

              <div className="container relative flex items-center justify-around">
                {roadmapDates}
              </div>
            </div>
          </div>

          <div className="container mt-96 items-center md:mt-32 md:flex">
            <div className="section-title flex-none md:w-2/5 md:text-[45px]">
              Token distribution
            </div>

            <div className="flex h-60 flex-1 items-center overflow-clip md:block md:h-96">
              <svg
                version="1.1"
                className="h-full w-full scale-125 object-contain font-display text-xs md:scale-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 650 400"
                aria-hidden="false"
                aria-label="Interactive chart"
              >
                <defs aria-hidden="true">
                  <clipPath>
                    <rect
                      x="0"
                      y="0"
                      width="630"
                      height="338"
                      fill="none"
                    ></rect>
                  </clipPath>
                </defs>
                <rect
                  fill="none"
                  x="0"
                  y="0"
                  width="650"
                  height="400"
                  rx="0"
                  ry="0"
                  aria-hidden="true"
                ></rect>
                <rect
                  fill="none"
                  x="10"
                  y="47"
                  width="630"
                  height="338"
                  aria-hidden="true"
                ></rect>
                <g data-z-index="0" aria-hidden="true"></g>
                <rect
                  fill="none"
                  data-z-index="1"
                  x="10"
                  y="47"
                  width="630"
                  height="338"
                  aria-hidden="true"
                ></rect>
                <g data-z-index="3" aria-hidden="false">
                  <g
                    data-z-index="0.1"
                    opacity="1"
                    transform="translate(10,47) scale(1 1)"
                    className="cursor-pointer"
                    aria-hidden="false"
                    clipPath="none"
                  >
                    <path
                      fill="#8150ed"
                      d="M 437.88285901566593 129.09457480321797 A 129.2 129.2 0 1 1 314.82054379200116 39.80012463059646 L 314.8219327719392 40.800123665963355 A 128.2 128.2 0 1 0 436.93175329573046 129.4034403233169 Z"
                      data-z-index="-1"
                      fillOpacity={0.25}
                      visibility="hidden"
                    ></path>
                    <path
                      fill="rgb(142,173,18)"
                      d="M 314.9736854220826 39.80000267978724 A 129.2 129.2 0 0 1 390.8872608813144 64.43536144598724 L 371.91544566098577 90.57652108449042 A 96.9 96.9 0 0 0 314.9802640665619 72.10000200984041 Z"
                      transform="translate(0,0)"
                      stroke="#ffffff"
                      strokeWidth={1}
                      opacity="1"
                      strokeLinejoin="round"
                      tabIndex={-1}
                      role="img"
                      aria-label="Partenariat &amp; Marketing, 10."
                      className="outline-none"
                    ></path>
                    <path
                      fill="rgb(217,217,217)"
                      d="M 390.99178755881366 64.5113009765356 A 129.2 129.2 0 0 1 419.4732193653972 92.98693246928138 L 393.3549145240479 111.99019935196102 A 96.9 96.9 0 0 0 371.9938406691102 90.63347573240168 Z"
                      transform="translate(0,0)"
                      stroke="#ffffff"
                      strokeWidth={1}
                      opacity="1"
                      strokeLinejoin="round"
                      tabIndex={-1}
                      role="img"
                      aria-label="Charité, 5."
                      className="outline-none"
                    ></path>
                    <path
                      fill="rgb(12,108,242)"
                      d="M 419.5491801836538 93.09144367776517 A 129.2 129.2 0 0 1 437.84289215569567 128.97171191739372 L 407.13216911677176 138.9787839380453 A 96.9 96.9 0 0 0 393.41188513774034 112.06858275832387 Z"
                      transform="translate(0,0)"
                      stroke="#ffffff"
                      strokeWidth={1}
                      opacity="1"
                      strokeLinejoin="round"
                      tabIndex={-1}
                      role="img"
                      aria-label="Equipe, 5."
                      className="outline-none"
                    ></path>
                    <path
                      fill="rgb(129,80,237)"
                      d="M 437.88285901566593 129.09457480321797 A 129.2 129.2 0 1 1 314.82054379200116 39.80012463059646 L 314.86540784400086 72.10009347294732 A 96.9 96.9 0 1 0 407.16214426174946 139.07093110241348 Z"
                      transform="translate(0,0)"
                      stroke="#ffffff"
                      strokeWidth={1}
                      opacity="1"
                      strokeLinejoin="round"
                      tabIndex={-1}
                      role="img"
                      aria-label="Développement , 80."
                      className="outline-none"
                    ></path>
                  </g>
                  <g
                    data-z-index="0.1"
                    opacity="1"
                    transform="translate(10,47) scale(1 1)"
                    aria-hidden="true"
                    clipPath="none"
                  ></g>
                </g>
                <text
                  x="325"
                  textAnchor="middle"
                  data-z-index="4"
                  className="fill-[rgb(102,102,102)] text-[rgb(102,102,102)]"
                  y="46"
                  aria-hidden="true"
                ></text>
                <text
                  x="10"
                  textAnchor="start"
                  data-z-index="4"
                  className="fill-[rgb(102,102,102)] text-[rgb(102,102,102)]"
                  y="397"
                  aria-hidden="true"
                ></text>
                <g
                  data-z-index="6"
                  opacity="1"
                  transform="translate(10,47) scale(1 1)"
                  aria-hidden="true"
                  className="cursor-pointer"
                >
                  <path
                    fill="none"
                    stroke="#8ead12"
                    strokeWidth={1}
                    d="M 369.1955055044917 17.59180260581157 C 364.1955055044917 17.59180260581157 358.63319960574256 34.71081989912433 356.7790976394929 40.41715899689525 L 354.9249956732432 46.123498094666175"
                    opacity="1"
                  ></path>
                  <path
                    fill="none"
                    stroke="#d9d9d9"
                    strokeWidth={1}
                    d="M 432.57139956489834 56.42860043510164 C 427.57139956489834 56.42860043510164 414.8434775035405 69.15652249645949 410.60083681642124 73.39916318357878 L 406.358196129302 77.64180387069807"
                    opacity="1"
                  ></path>
                  <path
                    fill="none"
                    stroke="#0c6cf2"
                    strokeWidth={1}
                    d="M 461.8482386507882 96.72471244146416 C 456.8482386507882 96.72471244146416 440.8101212153975 104.896541436776 435.4640820702673 107.62048443521329 L 430.1180429251371 110.34442743365057"
                    opacity="1"
                  ></path>
                  <path
                    fill="none"
                    stroke="#8150ed"
                    strokeWidth={1}
                    d="M 216.4245878350383 297.79550550449164 C 221.4245878350383 297.79550550449164 232.00472237630282 283.2331996057426 235.53143389005766 278.3790976394929 L 239.0581454038125 273.5249956732432"
                    opacity="1"
                  ></path>
                  <g
                    data-z-index="1"
                    className="cursor-pointer"
                    transform="translate(374,8)"
                    opacity="1"
                  >
                    <text
                      x="5"
                      data-z-index="1"
                      y="16"
                      className="fill-white text-xs font-bold text-white"
                    >
                      <tspan className="font-bold">
                        Partenariat &amp; Marketing
                      </tspan>
                      : 10.0 %
                    </text>
                  </g>
                  <g
                    data-z-index="1"
                    className="cursor-pointer"
                    transform="translate(438,46)"
                    opacity="1"
                  >
                    <text
                      x="5"
                      data-z-index="1"
                      y="16"
                      className="fill-white text-xs font-bold text-white"
                    >
                      <tspan className="font-bold">Charité</tspan>: 5.0 %
                    </text>
                  </g>
                  <g
                    data-z-index="1"
                    className="cursor-pointer"
                    transform="translate(467,87)"
                    opacity="1"
                  >
                    <text
                      x="5"
                      data-z-index="1"
                      y="16"
                      className="fill-white text-xs font-bold text-white"
                    >
                      <tspan className="font-bold">Equipe</tspan>: 5.0 %
                    </text>
                  </g>
                  <g
                    data-z-index="1"
                    className="cursor-pointer"
                    transform="translate(84,288)"
                    opacity="1"
                  >
                    <text
                      x="5"
                      data-z-index="1"
                      y="16"
                      className="fill-white text-xs font-bold text-white"
                    >
                      <tspan className="font-bold">Développement </tspan>: 80.0
                      %
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section className="relative z-0 flex flex-col items-center py-24">
          <SvgIcon
            name="../home-polygon-5"
            className="absolute left-0 top-10 -z-10 hidden w-36 md:block"
          />
          <SvgIcon
            name="../home-grid-dots-4"
            className="absolute left-0 top-16 -z-10 w-16 md:hidden"
          />

          <SvgIcon
            name="../home-ellipse-2"
            className="absolute right-0 top-0 -z-10 hidden w-32 -translate-y-1/3 md:block"
          />
          <SvgIcon
            name="../home-ellipse-3"
            className="absolute right-0 top-0 -z-10 w-20 md:hidden"
          />

          <h2 className="section-title max-w-2xl md:text-6xl">Notre équipe</h2>

          <p className="mx-auto mt-5 max-w-3xl px-4 text-center font-body text-xl md:text-base">
            {`En achetant un programme de formation chez Crypto Trading Solutions and Consulting Academy, il est important de prendre connaissance de ces facteurs`}
          </p>

          <div className="mt-14 w-full">
            <div className="container hidden h-96 grid-cols-4 items-center gap-7 md:grid">
              {team}
            </div>

            <div className="md:hidden">
              <OwlCarousel
                key="team-carousel"
                className="team"
                center
                loop
                items={1}
                stagePadding={66}
                margin={30}
              >
                {team}
              </OwlCarousel>
            </div>
          </div>
        </section>

        <section className="relative z-0 flex flex-col items-center py-24">
          <h2 className="section-title max-w-2xl md:text-6xl">
            Contactez-nous
          </h2>

          <p className="mx-auto mt-5 max-w-3xl px-4 text-center font-body">
            {`Nous sommes disponibles pour vos suggestions et besoins. Prière de nous contact via le formulaire suivant.`}
          </p>

          <div className="relative mt-14 flex grid-cols-7 flex-col items-stretch md:grid">
            <div className="relative z-20 order-2 col-span-2 h-[200px] bg-white/50 md:order-1 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3613.8073542448806!2d55.1406664!3d25.0745178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1665798706407!5m2!1sen!2scm"
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="relative z-20 order-1 col-span-2 bg-gradient-to-tr from-primary-400 to-primary-700 px-8 py-12 text-white md:order-2 md:to-blue md:px-14">
              <div className="-mx-8 bg-black/30 px-8 py-5 md:mx-0 md:bg-transparent md:px-0 md:py-0">
                <p className="font-body text-xl md:text-base">
                  Pour plus d’information sur nos produits et nos horaires
                  d’ouverture, veuillez nous joindre par appel, ou prenez
                  rendez-vous.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-5">
                <div className="flex items-start gap-8 text-white">
                  <EnvelopeIcon className="w-7 flex-none opacity-40" />
                  <span>info@spreadtt.io</span>
                </div>
                <div className="flex items-start gap-8 text-white">
                  <PhoneIcon className="w-7 flex-none opacity-40" />
                  <span>(+237) 691 000 019</span>
                </div>
                <div className="flex items-start gap-8 text-white">
                  <MapPinIcon className="w-7 flex-none opacity-40" />
                  <span>
                    Douala - Cameroon, Bonapriso, au niveau du carrefour Eto’o.
                  </span>
                </div>
              </div>
            </div>

            <div className="inset-0 z-10 order-3 items-center bg-white pb-16 pt-12 md:absolute md:flex md:pb-0 md:pt-0">
              <div className="container grid-cols-7 md:grid">
                <div className="col-span-2" />

                <div className="col-span-2" />

                <div className="col-span-3 md:px-14">
                  <form className="grid grid-cols-2 gap-x-6 gap-y-5">
                    <Input
                      inputSize="sm"
                      id="name"
                      name="name"
                      icon={UserIcon}
                      placeholder="Your name"
                      required
                    />
                    <Input
                      inputSize="sm"
                      id="email"
                      type="email"
                      name="email"
                      icon={EnvelopeIcon}
                      placeholder="Email"
                      required
                    />
                    <Select
                      inputSize="sm"
                      id="subject"
                      name="subject"
                      icon={PencilIcon}
                      placeholder="Subject"
                      required
                    >
                      <option value="">Subject</option>
                      <option value="1">Label 1</option>
                    </Select>
                    <Input
                      inputSize="sm"
                      id="phone"
                      type="tel"
                      name="phone"
                      icon={PhoneIcon}
                      placeholder="Phone No"
                      required
                    />
                    <TextArea
                      inputSize="sm"
                      id="message"
                      name="message"
                      className="col-span-2"
                      placeholder="Your message"
                      required
                    />
                    <div className="col-span-2 pt-3">
                      <Button icon={PaperAirplaneIcon}>Send message</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="z-0 order-3 col-span-3 bg-white md:h-[426px]" />
          </div>
        </section>
      </main>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
