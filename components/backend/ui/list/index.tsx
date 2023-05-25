import {
  ArrowDownOnSquareIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";

import { useContentContext } from "../../../../utils/contexts/content";
import { classNames } from "../../../../utils/helpers";
import Input from "../form/input";
import Button from "@/components/backend/ui/form/button";
import Link from "next/link";

let timeout: NodeJS.Timeout | null;

type ListProps = {
  total: number;
  title: string;
  subtitle?: string;
  data: string;
  toShow?: boolean;
  toSearch?: boolean;
  toAdd?: ReactNode;
  link?: string;
  toExport?: boolean;
  loading?: boolean;
  fields: { key: string; name: string; className?: string }[];
  array: { [key: string]: ReactNode }[];

  get: (page: number, show: string | number, search: string) => void;
};

export default function List({
  total,
  get,
  data,
  title,
  subtitle,
  fields,
  array,
  toShow,
  toSearch,
  toAdd,
  link = "#",
  toExport,
  loading,
}: ListProps) {
  const { content } = useContentContext();
  const {
    cms: {
      backend: {
        components: { list: cms },
      },
    },
  } = content!;

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [show, setShow] = useState<string | number>(10);

  const inputChangedHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "show") {
      get(page, value, search);
      return setShow(value);
    }
    if (name === "search") {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        get(page, show, value);
        clearTimeout(timeout!);
      }, 1000);
      return setSearch(value);
    }
  };

  return (
    <>
      <input type="hidden" id="table-page" value={page} />
      <input type="hidden" id="table-show" value={show} />
      <input type="hidden" id="table-search" value={search} />

      <div className="w-full rounded-[40px] bg-darkblue/40 pb-14 pl-12 pr-16 pt-8">
        <div className="mb-[30.89px] flex flex-wrap items-center justify-between">
          <div>
            <div className="font-display text-[25px] font-bold">{title}</div>

            {subtitle ? (
              <div className="mt-px text-sm text-white/40">{subtitle}</div>
            ) : null}

            <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
          </div>

          <div className="mb-8 flex items-center gap-8 md:mb-0 md:ml-0">
            {toShow ? (
              <div className="flex h-11 items-center rounded-[10px] bg-[#5A657D33]">
                <div className="divide-x-secondary-300 flex items-center divide-x-[0.5px] text-sm">
                  <div className="flex h-[39px] items-center justify-center px-3">
                    {cms.show}
                  </div>

                  <div className="relative flex h-[39px] w-[59px] items-center justify-center">
                    <select
                      name="show"
                      id="show"
                      onChange={inputChangedHandler}
                      value={show}
                      className="border-0 bg-transparent p-0 font-bold outline-none"
                    >
                      <option value="5">05</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="All">{cms.all}</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : null}

            {toSearch ? (
              <div>
                <Input
                  type="search"
                  name="search"
                  icon={MagnifyingGlassIcon}
                  onChange={inputChangedHandler}
                  value={search}
                  placeholder={cms.search}
                />
              </div>
            ) : null}
          </div>

          <div>
            {toAdd ? (
              <Link href={link}>
                <Button icon={PlusIcon}>{toAdd}</Button>
              </Link>
            ) : null}
            {toExport ? (
              <Button icon={ArrowDownOnSquareIcon}>Export table</Button>
            ) : null}
          </div>
        </div>

        <div className="scrollbar-app overflow-auto pb-5">
          <table className="w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="relative z-0 after:absolute after:inset-0 after:-z-10 after:rounded-lg after:bg-lightblue/10">
                <th className="pb-[10.98px] pl-1.5 pr-1.5 pt-[12.49px] text-left font-bold first:pl-[14.64px] last:pr-[14.64px]">
                  SL
                </th>
                {fields.map(({ name }, i) => (
                  <th
                    key={`table-thead-th-${i}`}
                    className="pb-[10.98px] pl-1.5 pr-1.5 pt-[12.49px] text-left font-bold first:pl-[14.64px] last:pr-[14.64px]"
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {array &&
                array.map((row, i) => (
                  <tr
                    key={`table-tbody-tr-${i}`}
                    className="group even:bg-white/[.02]"
                  >
                    <td className="border-b border-white/10 py-3 pl-1.5 pr-1.5 first:pl-[14.64px] last:pr-[14.64px] group-last:border-0">
                      {(show !== "All" ? (page - 1) * +show : 0) + i + 1}
                    </td>
                    {fields.map(({ key, className }, j) => (
                      <td
                        key={`table-tbody-tr-${i}-td-${j}`}
                        className={classNames(
                          "truncate border-b border-white/10 py-3 pl-1.5 pr-1.5 first:pl-[14.64px] last:pr-[14.64px] group-last:border-0",
                          className || "max-w-[250px]"
                        )}
                      >
                        {row[key]}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
