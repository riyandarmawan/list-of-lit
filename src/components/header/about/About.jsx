import Logo from "@components/header/about/Logo";

export default function About() {
  return (
    <div className="mb-6">
      <Logo />
      <p className="mx-auto max-w-[40rem] text-sm font-extralight md:text-lg">
        Welcome to <span className="font-medium font-heading">List of Lit</span>, your
        ultimate book discovery destination! Explore a vast collection of
        classic, contemporary, and hidden gem books across all genres. Find your
        next great read with ease.
      </p>
    </div>
  );
}
