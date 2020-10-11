import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Home() {
  return (
    <Layout>
      <Seo title="Welcome" description="A Home Owners Association Template" />
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        justify="space-between"
        style={{ marginBottom: "4rem" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="textPrimary">
            HELLO WORLD
          </Typography>
          <Button>Test Button</Button>
        </Grid>
      </Grid>
    </Layout>
  );
}
