import Logo from "@components/header/about/Logo";

export default function About() {
  return (
    <div className="mb-6">
      <Logo />
      <p className="mx-auto max-w-[40rem] text-sm md:text-lg font-extralight">
        <span className="font-heading font-semibold">List of Lit</span> is your
        ultimate destination for discovering the perfect book to read! Explore
        curated lists, personalized recommendations, and detailed reviews to
        find your next literary adventure.
      </p>
    </div>
  );
}
