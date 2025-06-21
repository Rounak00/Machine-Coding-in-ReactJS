import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          🚀 Welcome to the Machine Coding Practice Website
        </h1>

        <p className="text-sm/6 text-center sm:text-left max-w-xl text-muted-foreground">
          This platform is designed to help developers improve their machine
          coding skills by practicing real-world UI challenges using{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Tailwind CSS</strong>.
        </p>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
        <span>🛠 Built with Next.js & Tailwind CSS</span>
        <span>💻 Practice. Improve. Master.</span>
      </footer>
    </div>
  );
}
