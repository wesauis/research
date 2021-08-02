import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import ModuleDetail from "../components/module-detail.js";

const GET_MODULES = gql`
  query ($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      videoUrl
      content
    }
  }
`;

const Modules = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULES, {
    variables: { trackId, moduleId },
  });
  return (
    <Layout fullWidth={true}>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};
export default Modules;
