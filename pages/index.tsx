import { ReactElement } from "react";

import { NextPageWithLayout } from "./_app";

import Layout, { Head } from "@/components/frontend/navigation/layout";

import HomeHeader from "@/components/frontend/pages/home/header";
import HomeCountdownSection from "@/components/frontend/pages/home/sections/countdown";
import HomeAboutSection from "@/components/frontend/pages/home/sections/about";
import HomePacksSection from "@/components/frontend/pages/home/sections/packs";
import HomeFactorsSection from "@/components/frontend/pages/home/sections/factors";
import HomeRoadmapSection from "@/components/frontend/pages/home/sections/roadmap";
import HomeTeamSection from "@/components/frontend/pages/home/sections/team";
import HomeContactSection from "@/components/frontend/pages/home/sections/contact";

import FactorBlock from "@/components/frontend/ui/blocks/factor";
import PackBlock from "@/components/frontend/ui/blocks/pack";
import RoadmapDateBlock from "@/components/frontend/ui/blocks/roadmap-date";
import TeamMemberBlock from "@/components/frontend/ui/blocks/team-member";

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
        <HomeHeader />

        <HomeCountdownSection />

        <HomeAboutSection />

        <HomePacksSection packs={packs} />

        <HomeFactorsSection factors={factors} />

        <HomeRoadmapSection roadmapDates={roadmapDates} />

        <HomeTeamSection team={team} />

        <HomeContactSection />
      </main>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
