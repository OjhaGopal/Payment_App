import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      hi there
    </div>
    <div>
      <Image
        src="/images/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        className={styles.logo}
      />
      <Button className={styles.button}>Click Me</Button>
      <p className={styles.description}>
        This is a simple example of a Next.js application.
      </p>
    </div>
  );
}
