import Head from "next/head";
import { FormLabel, useTheme } from "@chakra-ui/react";
import {
  Banner,
  Button,
  ContentWrapper,
  Form,
  Header,
  Input,
  PageWrapper,
} from "../components";

export default function Home() {
  const theme = useTheme();

  console.log("theme:", theme);

  return (
    <>
      <Head>
        <title>Design Tokens Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <header>
          <Banner />
          <Header
            title="Additional information"
            subtitle="To finish, please answer a few more questions below to complete the rest of the application."
          />
        </header>

        <main>
          <ContentWrapper>
            <Form>
              <FormLabel>Work number</FormLabel>
              <Input />
              <FormLabel>Home number</FormLabel>
              <Input />
            </Form>
            <Button>Submit</Button>
          </ContentWrapper>
        </main>

        <footer>
          <ContentWrapper>FOOTER</ContentWrapper>
        </footer>
      </PageWrapper>
    </>
  );
}
