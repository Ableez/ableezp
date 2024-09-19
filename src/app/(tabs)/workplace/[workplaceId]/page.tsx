import React from "react";

type Props = {
  params: {
    workplaceId: string;
  };
};

const WorkPlaceInfo = ({ params }: Props) => {
  return <div>{params.workplaceId}</div>;
};

export default WorkPlaceInfo;
