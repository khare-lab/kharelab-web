import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
      <div className="max-w-2xl px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/public/logo-horizontal-light.svg"
            alt="Khare Lab Logo"
            width={220}
            height={120}
            priority
          />
        </div>

        <h1 className="mt-4 text-4xl font-semibold">
          Sustainable Catalysis & Reaction Engineering
        </h1>

        <p className="mt-4 text-neutral-300">
          Research in carbon conversion, industrial catalysis,
          biomass transformation, and process scale-up.
        </p>

        <p className="mt-6 text-neutral-500 text-sm">
          Website under development.
        </p>

        <p className="mt-2 text-neutral-500 text-sm">
          Contact: info@kharelab.com
        </p>
      </div>
    </main>
  );
}