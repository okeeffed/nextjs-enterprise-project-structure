import * as React from "react";
import { Card } from "@components/marketing/Card";
import { SimpleGrid } from "@components/marketing/SimpleGrid";
import styles from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <SimpleGrid>
        <Card
          title="Documentation"
          body="Find in-depth information about Next.js features and API."
          href="https://nextjs.org/docs"
        />
        <Card
          title="Learn &rarr;"
          body="Learn about Next.js in an interactive course with quizzes!"
          href="https://nextjs.org/learn"
        />
        <Card
          title="Examples"
          body="Discover and deploy boilerplate example Next.js projects."
          href="https://github.com/vercel/next.js/tree/master/examples"
        />
        <Card
          title="Deploy &rarr;"
          body="Instantly deploy your Next.js site to a public URL with Vercel."
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        />
      </SimpleGrid>
    </main>
  );
};
