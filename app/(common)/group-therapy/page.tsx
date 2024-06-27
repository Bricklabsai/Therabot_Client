import Hero from "@/components/hero";
export default function Page() {
  return (
    <>
      <Hero
        title="Getting Therapy Together"
        description="Group psychotherapy or group therapy is a form of psychotherapy in which one or more therapists treat a small group of clients together as a group."
        image="/group-therapy.svg"
        buttonLabel="register now"
        buttonLink="/"
      />
    </>
  );
}
