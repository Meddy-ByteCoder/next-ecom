import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/core/drawer";
import Image from "next/image";
import React from "react";

const CustomDrawer = ({
  children,
  title,
  showFooter = false,
  headerIcon = "",
  iconPostion = "",
  applyFilters = () => {},
  clearFilters = () => {},
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="drawer-trigger-wrapper">
          {iconPostion === "left" && (
            <Image
              width={24}
              height={25}
              src={headerIcon}
              alt="header-icon"
              priority
            />
          )}
          <div variant="outline">{title}</div>
          {iconPostion === "right" && (
            <Image
              width={24}
              height={25}
              src={headerIcon}
              alt="header-icon"
              priority
            />
          )}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full position-relative">
          <DrawerTitle
            style={{ position: "absolute", left: "35%", visibility: "hidden" }}
          >
            {title}
          </DrawerTitle>
          <DrawerDescription
            style={{ position: "absolute", left: "35%", visibility: "hidden" }}
          >
            {title} drawer
          </DrawerDescription>
          <div className="p-4 pb-0 max-h-[75svh] overflow-auto relative">
            <DrawerClose className="absolute right-4">
              <Image
                src={
                  "https://www.vijaysales.com/content/dam/vijaysaleswebsite/plp/close-icon.svg"
                }
                height={24}
                width={24}
                alt="clear"
                loading="eager"
              />
            </DrawerClose>
            {children}
          </div>
          {showFooter && (
            <DrawerFooter className="flex-row justify-center gap-6">
              <button
                onClick={clearFilters}
                className="text-xs rounded-3xl py-[10px] px-[45px] bg-white text-black border border-black"
                variant="outline"
              >
                Cancel
              </button>

              <DrawerClose onClick={applyFilters}>
                <div className="text-xs rounded-3xl py-[10px] px-[45px] bg-black text-white border border-black">
                  Apply Filters
                </div>
              </DrawerClose>
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
