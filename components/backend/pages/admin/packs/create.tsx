import Input from "@/components/backend/ui/form/input";
import TextArea from "@/components/backend/ui/form/text-area";
import { classNames } from "@/utils/helpers";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CircleStackIcon,
  CubeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { DocumentUpload } from "iconsax-react";

const checkCircle = <BsCheck2Circle className="h-4 w-4" />;
const loading = (
  <div className="h-4 w-4 animate-spin rounded-full border-2 border-yellow border-b-transparent" />
);

const data = {
  titles: {
    1: "Create new course",
    2: "Add course files",
    3: "Review course",
  },
  subtitles: {
    1: "Add course info",
    2: "Please upload your videos & documents",
    3: "Check your course details.",
  },
  steps: { 1: "Course details", 2: "Upload files", 3: "Review details" },
  files: [
    { name: "Initiation_au_trading.MP4", status: 2 },
    { name: "Analyse_fondamentale.MP4", status: 2 },
    { name: "Analyse_technique.MP4", status: 2 },
    { name: "Mise_en_pratique.MP4", status: 1 },
    { name: "Cours_theorique.PDF", status: 0 },
    { name: "Comprendre_les_bougies.PDF", status: 0 },
  ],
};

type StepProps = {
  pageNumber?: 1 | 2 | 3;
  page?: 1 | 2 | 3;
};
const Step = ({ pageNumber = 1, page = 1 }: StepProps) => (
  <div
    className={classNames(
      "relative flex h-11 w-11 flex-none items-center justify-center rounded-full font-bold text-white transition-all duration-200",
      page > pageNumber ? "bg-green" : "bg-lightblue/10"
    )}
  >
    {page > pageNumber ? checkCircle : loading}

    {page === pageNumber ? (
      <span className="absolute left-1/2 top-full mt-2.5 -translate-x-1/2 truncate text-sm font-medium text-white/70 opacity-80">
        {data.steps[page]}
      </span>
    ) : null}
  </div>
);

type PageBlockProps = React.ComponentProps<"div"> & {
  pageNumber?: 1 | 2 | 3;
  page?: 1 | 2 | 3;
};
const PageBlock = ({ pageNumber = 1, page = 1, children }: PageBlockProps) => (
  <div
    className={classNames(
      "absolute inset-0 transition-all duration-200",
      pageNumber === page ? "z-0 opacity-100" : "-z-10 opacity-0"
    )}
  >
    {children}
  </div>
);

type FileProps = {
  rank: number;
  name: string;
  status: number;
};
const File = ({ rank, name, status }: FileProps) => (
  <div className="flex gap-2.5">
    <div
      className={classNames(
        "flex h-11 flex-none items-center gap-2.5 rounded-[10px] border border-white/10 bg-black/10 px-2.5 text-sm",
        status === 1 ? "w-[267px] font-bold text-white/80" : "w-[257px]"
      )}
    >
      <div>
        {rank}. {name}
      </div>

      <div className="text-green">{status === 2 ? checkCircle : loading}</div>
    </div>

    {status === 1 ? (
      <button className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-white/10 bg-red text-white">
        <AiOutlineDelete className="w-4 flex-none" />
      </button>
    ) : null}
  </div>
);

export default function AdminPacksCreate() {
  const [page, setPage] = React.useState<1 | 2 | 3>(1);

  const handleContinue = () =>
    setPage((p) => {
      const page = p < 3 ? p + 1 : p;
      return page as 1 | 2 | 3;
    });

  const handlePrevious = () =>
    setPage((p) => {
      const page = p > 1 ? p - 1 : p;
      return page as 1 | 2 | 3;
    });

  return (
    <div className="grid grid-cols-5 2xl:grid-cols-7 gap-5">
      <section
        id="form"
        className="col-span-3 2xl:col-span-4 rounded-[40px] bg-darkblue/40 pb-[76px] pl-12 pr-14 pt-8"
      >
        <div className="flex items-start">
          {page > 1 ? (
            <button
              type="button"
              onClick={handlePrevious}
              className="mr-7 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/10"
            >
              <HiOutlineArrowLeft className="w-6 flex-none" />
            </button>
          ) : null}

          <div>
            <div className="font-display text-[25px] font-bold">
              {data.titles[page]}
            </div>

            <div className="mt-px text-sm text-white/40">
              {data.subtitles[page]}
            </div>

            <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
          </div>
        </div>

        <form className="mt-8 grid grid-cols-2 gap-3.5">
          <div className="relative col-span-2 h-[300px]">
            <PageBlock page={page}>
              <div className="grid grid-cols-2 gap-3.5">
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
                <TextArea
                  inputSize="lg"
                  id="description"
                  name="description"
                  placeholder="Course description"
                  className="col-span-2"
                />
              </div>
            </PageBlock>

            <PageBlock pageNumber={2} page={page}>
              <div className="space-y-4">
                <div className="flex h-[200px] flex-col items-center gap-3.5 rounded-2xl bg-lightblue/[0.04] px-7 pb-7 pt-4">
                  <div className="flex w-full justify-end">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green border-t-transparent">
                      <div className="text-xs">
                        4/<span className="font-bold text-green">6</span>
                      </div>
                    </div>
                  </div>

                  <DocumentUpload
                    size="44"
                    color="#FFFFFF"
                    className="opacity-40"
                  />

                  <div className="space-y-1 text-center">
                    <p className="font-bold">
                      Drag and drop or click to upload
                    </p>

                    <p className="text-xs text-white/40">
                      Max file size should not exceed 150 MB
                    </p>
                  </div>

                  <div className="5 mt-1 h-1 w-full rounded-full bg-[#646D7B29]">
                    <div className="h-full w-32 rounded-full bg-gradient-to-r from-primary-700 to-primary-400" />
                  </div>
                </div>

                <p className="text-sm text-white/40">
                  <strong>NOTE</strong> : if you want to cancel file upload,
                  hover on the file at the right panel then select cancel and
                  the file upload will stop and will be deleted.
                </p>
              </div>
            </PageBlock>

            <PageBlock pageNumber={3} page={page}>
              <div className="grid grid-cols-2 items-center gap-3.5">
                <div className="rounded-[30px] border border-white/20 bg-lightblue/10 px-5 py-6 text-white">
                  <h3 className="font-bold">Starter #1</h3>

                  <div className="mt-[18px] space-y-[5px] text-sm opacity-40">
                    <p>Yearly ROI : 7%</p>
                    <p>Validity : 365 Days</p>
                    <p>Validity : 365 Days</p>
                  </div>

                  <div className="mt-2 rounded-[10px] border border-white/10 bg-black/10 opacity-40 text-xs px-5 pb-5 pt-3.5">
                    you want to cancel file upload, hover on the file at the
                    right panel then select cancel and...
                  </div>

                  <div className="text-[25px] mt-6 font-bold">$250 USD</div>
                </div>

                <div className="space-y-3 text-xl text-white/80 ml-[22px]">
                  <div className="flex justify-between">
                    <div className="font-medium">Total videos :</div>

                    <div className="font-bold">08</div>
                  </div>

                  <div className="flex justify-between">
                    <div className="font-medium">Files uploaded :</div>

                    <div className="font-bold">03</div>
                  </div>
                </div>
              </div>
            </PageBlock>
          </div>

          <div className="mt-12">
            <button
              type="button"
              onClick={handleContinue}
              className="flex h-[60px] w-full items-center justify-center gap-4 rounded-[10px] bg-gradient-to-r from-primary-700 to-primary-400 text-white/90"
            >
              <span className="text-lg font-bold">Continue</span>

              <ArrowRightIcon className="w-6 flex-none" />
            </button>
          </div>

          <div className="mt-12 flex justify-end">
            <div className="flex items-center">
              <Step pageNumber={1} page={page} />
              <div className="h-px w-7 flex-none bg-[#2A3545]" />
              <Step pageNumber={2} page={page} />
              <div className="h-px w-7 flex-none bg-[#2A3545]" />
              <Step pageNumber={3} page={page} />
            </div>
          </div>
        </form>
      </section>

      <section
        className={classNames(
          "col-span-2 2xl:col-span-3 2xl:mr-16 rounded-[30px] border border-white/20 px-6 py-7 text-white/40 transition-all duration-200",
          page === 2 ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="font-display text-[25px] font-bold">
          Uploaded files
        </div>

        <div className="mt-7 space-y-[5px]">
          {data.files.map((file, i) => (
            <File key={"file-" + i} rank={i + 1} {...file} />
          ))}
        </div>
      </section>
    </div>
  );
}
