import FuzzyText from "@/components/FuzzyText";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-5">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        404
      </FuzzyText>
       <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize = "clamp(0.5rem, 3vw, 3rem)"
      >
        Not Found
      </FuzzyText>
    </div>
  );
}
