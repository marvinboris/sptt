import Input from "@/components/backend/ui/form/input";
import TextArea from "@/components/backend/ui/form/text-area";
import { classNames } from "@/utils/helpers";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CircleStackIcon,
  CloudArrowUpIcon,
  CubeIcon,
  CurrencyDollarIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { DocumentUpload } from "iconsax-react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ImSpinner } from "react-icons/im";

import Select from "@/components/backend/ui/form/select";

const checkCircle = <BsCheck2Circle className="h-4 w-4" />;
const loading = <ImSpinner className="h-4 w-4 animate-spin text-yellow" />;

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
    { name: "Initiation_au_trading.MP4", loaded: true },
    { name: "Analyse_fondamentale.MP4", loaded: true },
    { name: "Analyse_technique.MP4", loaded: true },
    { name: "Mise_en_pratique.MP4" },
    { name: "Cours_theorique.PDF" },
    { name: "Comprendre_les_bougies.PDF" },
  ],
  features: [
    "Introduction générale du les Cryptomonnaies.",
    "Lexique des cryptomonnaies et de la blockchain.",
    "Etude de l’interface de coinmarketcap (CMC)",
    "Étude de l’interface d’un Centralised Exchange (CEX).",
    "Étude de l’interface d’un CEX.",
    "Exchanges et portefeuille des cryptomonnaies (CEX, DEX) ; Étude générale.",
    "Évaluations (Théorique et pratique) avec corrections.",
    "Bonus : Token offert pour les pratiques",
    "Attestation de fin de formation",
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

const Feature = ({ children }: React.ComponentProps<"div">) => (
  <div className="group flex text-sm text-[#5B5B5B]">
    <BsCheck2Circle className="h-4 w-4" />

    <span className="ml-2">{children}</span>

    <FaRegEdit className="ml-3.5 h-[18px] w-[18px] text-sky opacity-0 transition-all duration-200 group-hover:opacity-100" />
  </div>
);

type FileProps = {
  rank: number;
  name: string;
  loaded?: boolean;
};
const File = ({ rank, name, loaded }: FileProps) => (
  <div className="group inline-flex gap-2.5">
    <div
      className={classNames(
        "flex h-11 w-[257px] flex-none items-center gap-2.5 rounded-[10px] border border-white/10 bg-black/10 px-2.5 text-sm transition-all duration-200 group-hover:w-[267px] group-hover:font-bold group-hover:text-white/80"
      )}
    >
      <div>
        {rank}. {name}
      </div>

      <div className="text-green">{loaded ? checkCircle : loading}</div>
    </div>

    <button className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-white/10 bg-red text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
      <AiOutlineDelete className="w-4 flex-none" />
    </button>
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
    <div className="grid grid-cols-5 gap-5 2xl:grid-cols-7">
      <section
        id="form"
        className="col-span-3 rounded-[40px] bg-darkblue/40 pb-[76px] pl-12 pr-14 pt-8 2xl:col-span-4"
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
          <input type="file" className="hidden" id="banner" name="banner" />

          <div className="relative col-span-2 h-[350px]">
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
                  label="Course description"
                  className="col-span-2"
                />

                <label htmlFor="banner" className="block">
                  <button
                    type="button"
                    className="flex h-[60px] w-full items-center justify-between rounded-[10px] border-2 border-transparent bg-white/[0.04] pl-6 pr-[18px]"
                  >
                    <div className="font-medium text-white/70 opacity-40">
                      Upload course banner
                    </div>

                    <CloudArrowUpIcon className="w-[22px] text-sky" />
                  </button>
                </label>

                <Select
                  inputSize="lg"
                  id="state"
                  name="state"
                  label="Course state"
                >
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                </Select>
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
                    <p>Weekly reward : 34.09 SPTT</p>
                  </div>

                  <div className="mt-2 rounded-[10px] border border-white/10 bg-black/10 px-5 pb-5 pt-3.5 text-xs opacity-40">
                    you want to cancel file upload, hover on the file at the
                    right panel then select cancel and...
                  </div>

                  <div className="mt-6 text-[25px] font-bold">$250 USD</div>
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
          "relative col-span-2",
          page < 3 ? "opacity-100" : "opacity-0"
        )}
      >
        <PageBlock pageNumber={1} page={page}>
          <div className="absolute inset-0 rounded-[30px] bg-darkblue/40 px-6 py-7 text-white/40 transition-all duration-200 2xl:col-span-3 2xl:mr-16">
            <div>
              <div className="font-display text-[25px] font-bold text-white">
                Course features
              </div>
              <div className="mt-0.5 text-sm">Add course points</div>
              <div className="mt-[11px] h-[7px] w-8 rounded-full bg-green" />
            </div>

            <div className="mt-8 flex h-[54px] items-stretch gap-3.5">
              <input
                className="rounded-[10px] bg-black/20 px-[18px] font-medium text-white/70 placeholder:opacity-40"
                placeholder="Input text here"
              />

              <button className="flex w-[109px] items-center justify-center gap-2 rounded-[10px] bg-green font-bold text-white">
                <PlusIcon className="w-3.5 flex-none" />
                <span>Add</span>
              </button>
            </div>

            <div className="mt-[58px] space-y-1">
              {data.features.map((feature, i) => (
                <Feature key={"feature-" + i}>{feature}</Feature>
              ))}
            </div>
          </div>
        </PageBlock>

        <PageBlock pageNumber={2} page={page}>
          <div
            className={classNames(
              "absolute inset-0 rounded-[30px] border border-white/20 px-6 py-7 text-white/40 transition-all duration-200 2xl:col-span-3 2xl:mr-16"
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

            <div className="mt-[71px] w-[190px] space-y-2.5">
              <div className="flex items-center justify-between text-xl font-medium text-white/80">
                <span>Total videos :</span>{" "}
                <span className="font-bold text-white">08</span>
              </div>

              <div className="flex items-center justify-between text-xl font-medium text-white/80">
                <span>Files uploaded :</span>{" "}
                <span className="font-bold text-white">03</span>
              </div>
            </div>
          </div>
        </PageBlock>
      </section>
    </div>
  );
}
