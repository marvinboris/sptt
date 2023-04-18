import { ReactElement } from "react";

import { useContentContext } from "../../../app/contexts/content";
import { convertDate, updateObject } from "../../../app/helpers/utils";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ImageInterface } from "../../../app/models/image";
import ResourceType from "../../../app/types/resource";

import Layout from "../../../components/backend/navigation/layout";
import Photo from "../../../components/backend/ui/list/photo";
import Action from "../../../components/backend/ui/list/action";
import ManageRead from "../../../components/backend/ui/page/read";

import { selectAuth } from "../../../features/auth/authSlice";
import { selectBackend, _delete } from "../../../features/backend/backendSlice";

import { NextPageWithLayout } from "../../_app";
import Button from "../../../components/backend/ui/form/button";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
import Download from "../../../components/backend/ui/list/download";

const ManagerImagesPage: NextPageWithLayout = () => {
  const resource: ResourceType = "images";

  const dispatch = useAppDispatch();

  const { role } = useAppSelector(selectAuth);
  const { data: backend } = useAppSelector(selectBackend);

  const { content } = useContentContext();
  const {
    cms: {
      backend: {
        components: {
          list: { action, see },
        },
        pages: {
          [resource]: { form },
        },
      },
    },
  } = content!;

  const props = {
    delete: (id: string) => dispatch(_delete({ role: role!, resource, id })),
  };

  const data = (
    backend && backend[resource] ? (backend[resource] as ImageInterface[]) : []
  ).map((item) =>
    updateObject(item, {
      src: item.photo,
      created_at: convertDate(item.createdAt!),
      photo: <Photo photo={item.photo} see={see} title={item.photo!} />,
      download: <Download href={item.photo} />,
      action: <Action props={props} resource={resource} item={item} />,
    })
  );

  const fields = [
    { name: form.src, key: "src", className: "w-full" },
    { name: form.photo, key: "photo" },
    { name: form.download, key: "download" },
    { name: action, key: "action", fixed: true },
  ];

  return <ManageRead data={data} fields={fields} resource={resource} />;
};

ManagerImagesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ManagerImagesPage;
