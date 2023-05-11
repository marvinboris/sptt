import {
  CheckCircleIcon,
  CloudArrowUpIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import Button from "@/components/backend/ui/form/button";
import Select from "@/components/backend/ui/form/select";

const FilePicker = ({ id = "", label = "" }) => (
  <>
    <button type="button" className="flex h-11 items-center justify-center gap-2.5 rounded-[10px] bg-sky/20 text-sm text-white">
      <label htmlFor={id}>{label}</label>
      <CloudArrowUpIcon className="w-[22px] text-sky" />
    </button>

    <input
      type="file"
      className="hidden"
      id={id}
      name={id.split("-").join("_")}
    />
  </>
);

export default function CustomerKycVerifySection() {
  return (
    <div className="rounded-[40px] bg-darkblue/40 px-6 py-8">
      <div>
        <div className="flex gap-3 font-display text-[25px] font-bold">
          <span>Verify account</span>
        </div>

        <div className="mt-px text-sm text-white/40">Submit the following</div>

        <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
      </div>

      <form className="mt-8 grid grid-cols-1 gap-2">
        <Select name="document" icon={EnvelopeIcon}>
          <option value="">Select document type</option>
        </Select>
        <FilePicker id="file-1" label="Upload face 1" />
        <FilePicker id="file-2" label="Upload face 2" />
        <FilePicker id="file-3" label="Doc with selfie" />
        <div className="mt-10">
          <Button
            className="w-full font-display text-base font-bold"
            justify="center"
          >
            Verify account
          </Button>
        </div>
      </form>
    </div>
  );
}
