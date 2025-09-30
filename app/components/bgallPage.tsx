import Image from "next/image";
export default function BgAllPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image
        src="/image/BgImage.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
    </div>
  );
}
