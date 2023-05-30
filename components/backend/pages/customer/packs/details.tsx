import Button from "@/components/backend/ui/form/button";
import { Clock, Document } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Video } from "react-iconly";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlinePlayCircle } from "react-icons/hi2";

const data = {
  details: [
    {
      title: "Yearly Rewards",
      subtitle: "Total rewards you will get after 365 days",
      bonus: "5%",
    },
    {
      title: "Weekly Rewards",
      subtitle: "Rewards recieved every week",
      bonus: "0.3334 SPTT",
    },
    {
      title: "Course validity",
      subtitle: "Duration of your course",
      bonus: "365 days",
    },
    {
      title: "Course  description",
      subtitle: `Support de cours + vidéo de formation+ Zoom chaque 2 mois pendant 
        1 ans+ Suivie dans le groupe Télégramme
        + Évaluations (Théorique et pratique) avec corrections.
        `,
    },
  ],
  sections: [
    "Introduction",
    "Mastering Technical Analysis for Crypto Traders",
    "Risk Management Strategies",
    "Discover effective risk management PDF",
    "The Psychology of Trading Cryptocurrency",
    "Advanced Crypto Trading Strategies",
  ],
};

interface CourseDetailsProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  bonus?: React.ReactNode;
}
const CourseDetails = ({ title, subtitle, bonus }: CourseDetailsProps) => (
  <div className="group relative py-1">
    <div className="absolute inset-x-2.5 bottom-0 h-px translate-y-full bg-white/10" />

    <div className="px-5">
      <div className="flex justify-between pb-1 pt-3.5">
        <div className="flex-1">
          <div className="font-bold text-light/90">{title}</div>

          <div className="mt-1 text-sm text-white/80 opacity-60">
            {subtitle}
          </div>
        </div>

        {bonus ? (
          <div className="bg-gradient-to-r from-primary-400 to-blue bg-clip-text text-2xl font-bold text-transparent">
            {bonus}
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

const CourseSection = ({ children }: React.ComponentProps<"div">) => (
  <div className="flex gap-2">
    <div className="text-green">
      <FiCheckCircle className="h-4 w-4" />
    </div>

    <div className="text-white/80 opacity-60">{children}</div>
  </div>
);

export default function CustomerPackDetails() {
  const {
    query: { id },
  } = useRouter();

  return (
    <div className="grid grid-cols-2 gap-9">
      <section>
        <header className="rounded-[24px] bg-black/20 p-5">
          <div className="flex items-center">
            <span className="inline-flex h-12 items-center gap-3 rounded-xl bg-lightblue/10 pl-4 pr-7">
              <AiOutlineCodeSandbox className="h-6 w-6 flex-none text-primary-400" />

              <div className="text-xl font-bold text-light/90">Starter 1 :</div>
            </span>

            <div className="ml-auto text-right">
              <div className="bg-gradient-to-r from-primary-400 to-blue bg-clip-text font-display text-2xl font-bold text-transparent">
                $25000 USD
              </div>
              <div className="text-sm text-white/80 opacity-60">
                23,943,924.00 SPTT
              </div>
            </div>
          </div>

          <div className="mt-9 flex justify-between">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-black/20 px-6 text-white/80"
            >
              <div className="text-primary-400">
                <Video set="light" size={14} />
              </div>
              <span className="text-xs">
                Videos : <span className="font-bold">03</span>
              </span>
            </button>

            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-black/20 px-6 text-white/80"
            >
              <div className="text-green">
                <Document variant="Linear" size={14} />
              </div>
              <span className="text-xs">
                Documents : <span className="font-bold">04</span>
              </span>
            </button>

            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-black/20 px-6 text-white/80"
            >
              <div className="text-sky">
                <Clock variant="Linear" size={14} />
              </div>
              <span className="text-xs">
                Duration : <span className="font-bold">420min</span>
              </span>
            </button>
          </div>
        </header>

        <div className="mt-6">
          {data.details.map((item, i) => (
            <CourseDetails key={"course-details-" + i} {...item} />
          ))}
        </div>

        <div className="mt-4 px-5">
          <h3 className="font-bold text-light/80">What you will learn</h3>

          <div className="mt-[18px]">
            {data.sections.map((item, i) => (
              <CourseSection key={"course-section-" + i}>{item}</CourseSection>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-[40px] bg-darkblue/40 p-5">
          <div className="relative flex h-[360px] flex-col items-center justify-end overflow-hidden rounded-[40px] pb-11 shadow-lg">
            <Image
              src="/images/customer-packs.webp"
              width={1022}
              height={718}
              alt="Course background"
              className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-darkblue/40" />

            <div className="z-10 flex flex-col items-center gap-7">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-black/30">
                <HiOutlinePlayCircle size={82} className=" text-white" />
              </div>

              <Link href={id + "/course"}>
                <Button justify="center" className="h-[60px] w-[237px]" pill>
                  <span className="font-bold text-white/80">Buy course</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
