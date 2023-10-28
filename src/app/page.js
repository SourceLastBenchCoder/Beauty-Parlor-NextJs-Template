import HeadBanner from "@/components/HeadBanner/HeadBanner";
import GoogleMap from "@/components/gmap";
import OurService from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeadBanner />
      <OurService />
      <GoogleMap />
    </>
  );
}
