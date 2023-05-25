import { Clock, Document } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight, Video } from "react-iconly";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { HiOutlinePlayCircle } from "react-icons/hi2";

const array = [
  {
    title: "Introduction",
    subtitle: "In this course you will learn the basics of crypto currency",
  },
  {
    title: "Mastering Technical Analysis for Crypto Traders",
    subtitle: "Learn how to read charts, identify trends, and etc...",
  },
  {
    title: "Risk Management Strategies",
    subtitle: "Discover effective risk management techniques...",
  },
  {
    title: "Discover effective risk management PDF",
    subtitle: "In this course you will learn risk management...",
  },
  {
    title: "The Psychology of Trading Cryptocurrency",
    subtitle: "Understand the emotional and psychological factors...",
  },
  {
    title: "Advanced Crypto Trading Strategies",
    subtitle: "Dive into complex trading strategies such as arbitrage etc...",
  },
];

const withZero = (n: number) => (n < 10 ? "0" + n : n);

interface CourseSectionProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  index: number;
}
const CourseSection = ({ title, subtitle, index }: CourseSectionProps) => (
  <div className="group relative border-b border-t border-transparent py-1 transition-all duration-200 hover:border-primary-400">
    <div className="absolute inset-x-2.5 bottom-0 h-px translate-y-full bg-white/10 group-last:bg-transparent" />

    <div className="px-5 transition-all duration-200 group-hover:bg-primary-400/25">
      <div className="pb-1 pt-3.5">
        <div className="font-bold text-light/90">
          {withZero(index + 1)}. {title}
        </div>

        <div className="mt-1 text-sm text-white/80 opacity-60">{subtitle}</div>
      </div>
    </div>
  </div>
);

export default function CustomerPackDetails() {
  return (
    <div className="grid grid-cols-2 gap-9">
      <section>
        <div className="flex items-center">
          <span className="inline-flex h-12 items-center gap-3 rounded-xl bg-lightblue/10 pl-4 pr-7">
            <AiOutlineCodeSandbox className="h-6 w-6 flex-none text-primary-400" />

            <div className="text-xl font-bold text-light/90">Starter 1 :</div>
          </span>

          <div className="ml-7">Course content</div>

          <div className="ml-auto flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-r from-primary-700 to-primary-400 text-white">
            <div>
              <Video set="light" size={18} />
            </div>
          </div>

          <div className="ml-2.5 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-black/10 text-green">
            <div>
              <Document variant="Linear" size={18} />
            </div>
          </div>
        </div>

        <div className="mt-10">
          {array.map((item, i) => (
            <CourseSection key={"course-section-" + i} index={i} {...item} />
          ))}
        </div>

        <div className="mt-12 flex items-center gap-7">
          <button
            type="button"
            className="group flex h-11 items-center gap-3 rounded-xl border border-transparent bg-black/10 pl-3 pr-7 font-bold transition-all duration-200 hover:border-primary-400"
          >
            <div>
              <ChevronLeft set="light" />
            </div>
            <span className="bg-gradient-to-r from-primary-400 to-blue bg-clip-text font-bold text-light transition-all duration-200 group-hover:text-transparent">
              Prev
            </span>
          </button>

          <div className="space-x-2.5 text-light">
            <span className="cursor-pointer font-bold opacity-80">1</span>
            <span className="cursor-pointer font-bold opacity-30">2</span>
          </div>

          <button
            type="button"
            className="group flex h-11 items-center gap-3 rounded-xl border border-transparent bg-black/10 pl-7 pr-3 font-bold transition-all duration-200 hover:border-primary-400"
          >
            <span className="bg-gradient-to-r from-primary-400 to-blue bg-clip-text font-bold text-light transition-all duration-200 group-hover:text-transparent">
              Next
            </span>
            <div>
              <ChevronRight set="light" />
            </div>
          </button>
        </div>
      </section>

      <section className="space-y-5 rounded-[40px] bg-darkblue/40 p-5">
        <div className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-[40px]">
          <Image
            src="/images/customer-packs.webp"
            width={1022}
            height={718}
            alt="Course background"
            className="absolute inset-0"
          />

          <div className="absolute inset-0 bg-darkblue/40" />

          <HiOutlinePlayCircle
            size={82}
            className="z-10 flex-none text-white"
          />
        </div>

        <h3 className="mt-5 text-xl font-bold text-light/90">
          01 . Introduction
        </h3>

        <p className="mt-2 text-sm text-white/80 opacity-60">
          {`A beginner's guide to understanding cryptocurrency trading and making
          informed investment decisions.`}
        </p>

        <div className="mt-4 space-x-3">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-black/20 px-6 text-white/80"
          >
            <div className="text-primary-400">
              <Video set="light" size={14} />
            </div>
            <span className="text-xs">Videos</span>
          </button>

          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-black/20 px-6 text-white/80"
          >
            <div className="text-sky">
              <Clock variant="Linear" size={14} />
            </div>
            <span className="text-xs">
              Duration : <span className="font-bold">04:45min</span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
