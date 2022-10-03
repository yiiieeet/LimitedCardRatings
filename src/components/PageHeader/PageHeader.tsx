import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

import { HOVER_CLASSES, TRANSITION_CLASSES } from "lib/styles";

import AboutProjectModal from "./AboutProjectModal";
import DarkModeToggle from "./DarkModeToggle";
import PageInfoBanner from "./PageInfoBanner";

const PageHeader = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <>
      <div className="flex items-center py-4 px-2 lg:px-6">
        <div className="mr-2">
          <Image
            src="/apple-touch-icon.png"
            alt="Logo"
            height={32}
            width={32}
            priority
            layout="fixed"
          />
        </div>

        <h1 className="grow font-belerenSmallCaps text-2xl tracking-wide">
          Limited Grades – Traditional
        </h1>

        <button
          onClick={() => setShowInfoModal(true)}
          className={clsx(
            "flex items-center gap-1",
            HOVER_CLASSES,
            TRANSITION_CLASSES
          )}
          type="button"
          aria-label="About this project"
        >
          <FaInfoCircle />
          <span className="hidden lg:inline">About this project</span>
        </button>

        <DarkModeToggle />
      </div>

      <PageInfoBanner onLearnMore={() => setShowInfoModal(true)} />

      {showInfoModal && (
        <AboutProjectModal onClose={() => setShowInfoModal(false)} />
      )}
    </>
  );
};

export default PageHeader;
