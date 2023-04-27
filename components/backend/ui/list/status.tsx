import React from "react";

import { useContentContext } from "../../../../utils/contexts/content";
import { classNames } from "../../../../utils/helpers";

export default function Status({ value }: { value: boolean }) {
  const { content } = useContentContext();
  const {
    cms: {
      backend: {
        components: {
          form: { active, inactive },
        },
      },
    },
  } = content!;

  return (
    <span
      className={classNames(
        "rounded py-1 px-3 font-medium",
        value ? "bg-green/10 text-green" : "bg-red/10 text-red"
      )}
    >
      {value ? active : inactive}
    </span>
  );
}
