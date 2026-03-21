"use client";

import dynamic from "next/dynamic";

const DemoModal = dynamic(() => import("@/components/DemoModal"), { ssr: false });

export default function ModalProvider() {
  return <DemoModal />;
}
