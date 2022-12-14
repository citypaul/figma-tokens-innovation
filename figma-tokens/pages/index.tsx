import { FormLabel, Heading, useTheme } from "@chakra-ui/react";
import Head from "next/head";
import {
  Banner,
  Button,
  ContentWrapper,
  Footer,
  Form,
  Header,
  Input,
  PageWrapper,
} from "../components";

export default function Home() {
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
              <Heading size="md" color="purple.500" mb={4}>
                Contact details
              </Heading>
              <FormLabel>Work number</FormLabel>
              <Input />
              <FormLabel>Home number</FormLabel>
              <Input />
            </Form>
            <Button>Submit</Button>
          </ContentWrapper>
        </main>

        <footer>
          <Footer />
        </footer>
      </PageWrapper>
    </>
  );
}
