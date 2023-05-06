import Button from "@/components/backend/ui/form/button";
import Input from "@/components/backend/ui/form/input";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CircleStackIcon,
  CubeIcon,
  CurrencyDollarIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

export default function AdminPacksCreate({ title, subtitle }: Props) {
  return (
    <section
      id="form"
      className="rounded-[40px] bg-darkblue/40 pb-[76px] pl-12 pr-14 pt-8"
    >
      <div className="flex items-start">
        <div>
          <div className="font-display text-[25px]/[1.21] font-bold">
            Create new course
          </div>

          <div className="mt-px text-sm text-white/40">Add new course</div>

          <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
        </div>

        <div className="ml-14 flex items-center">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-green font-bold text-white">
            01
          </div>
          <div className="h-px w-12 flex-none bg-[#2A3545]" />
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-lightblue/10 font-bold text-white">
            02
          </div>
          <div className="h-px w-12 flex-none bg-[#2A3545]" />
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-lightblue/10 font-bold text-white">
            03
          </div>
        </div>

        <div className="ml-auto">
          <Link href="/admin/packs">
            <Button
              className="font-display text-sm font-bold"
              color="secondary"
              icon={ListBulletIcon}
            >
              Courses list
            </Button>
          </Link>
        </div>
      </div>

      <form className="mt-8 grid w-1/2 grid-cols-2 gap-3.5">
        <Input
          inputSize="lg"
          id="name"
          name="name"
          icon={CubeIcon}
          label="Course name"
        />
        <Input
          inputSize="lg"
          id="price"
          type="number"
          name="price"
          icon={CurrencyDollarIcon}
          label="Course price"
        />
        <Input
          inputSize="lg"
          id="roi"
          type="number"
          name="roi"
          icon={CircleStackIcon}
          label="Yearly ROI"
        />
        <Input
          inputSize="lg"
          id="validity"
          type="text"
          name="validity"
          icon={CalendarDaysIcon}
          label="Validity"
        />
        <div className="mt-12">
          <button className="flex h-[60px] w-full items-center justify-center gap-4 rounded-[10px] bg-gradient-to-r from-primary-700 to-primary-400 text-white/90">
            <span className="text-lg font-bold">Continue</span>

            <ArrowRightIcon className="w-6 flex-none" />
          </button>
        </div>
      </form>
    </section>
  );
}
