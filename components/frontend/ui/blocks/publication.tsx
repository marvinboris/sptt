import Image from "next/image";
import Link from "next/link";

import { CategoryInterface } from "../../../../app/models/category";
import { PublicationInterface } from "../../../../app/models/publication";

type PublicationType = PublicationInterface & {
  category: CategoryInterface;
};

export default function Publication({
  title,
  category,
  photo,
  link,
}: PublicationType) {
  return (
    <li>
      <Link
        href={link!}
        className="group block rounded-2xl shadow-md transition-all duration-200 hover:shadow-2xl"
      >
        <div className="relative h-[190px] w-full overflow-hidden rounded-t-2xl">
          <Image
            width={1920}
            height={1920}
            src={photo!}
            alt="Image de publication"
            className="image-cover"
          />
        </div>

        <dl className="rounded-b-2xl bg-secondary-50 p-3 dark:bg-secondary-900">
          <div>
            <dt className="sr-only">Titre</dt>

            <dd className=" font-semibold text-secondary-900 dark:text-secondary-100">
              {title}
            </dd>
          </div>

          <div>
            <dt className="sr-only">Catégorie</dt>

            <dd className=" ">{category.name}</dd>
          </div>
        </dl>
      </Link>
    </li>
  );
}
