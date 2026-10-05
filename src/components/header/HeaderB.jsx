import {
  Bars3Icon,
  PercentBadgeIcon,
  ShoppingBagIcon,
  FireIcon,
  MapPinIcon,
  ChevronLeftIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  TvIcon,
  CameraIcon,
  HomeIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useMenuStore } from "../../store/menuStore";

export default function HeaderB() {
  //opening menu
  const [categoryDis, setCategoryDis] = useState(false);
  const [subCategoryDis, setSubCategoryDis] = useState(false);
  //menu tree
  const { menuTree, fetchMenuTree } = useMenuStore();
  const [categoryM, setCategoryM] = useState("");
  useEffect(() => {
    fetchMenuTree();
  }, [fetchMenuTree]);
  const categoryIcon = {
    mobile: DevicePhoneMobileIcon,
    tablet: DeviceTabletIcon,
    desktop: ComputerDesktopIcon,
    tv: TvIcon,
    camera: CameraIcon,
    home: HomeIcon,
    tools: WrenchIcon,
  };
  //
  return (
    <div className="headerB flex h-5/12 flex-row items-center justify-between border-b-2 border-black/20">
      <div className="mr-5 flex h-full w-auto flex-row">
        <div
          className={`mainMenu absolute z-20 flex translate-y-11.25 flex-row ${!categoryDis && "pointer-events-none"}`}
        >
          <div
            onMouseEnter={() => {
              (setCategoryDis(true), setSubCategoryDis(true));
            }}
            onMouseLeave={() => {
              (setCategoryDis(false), setSubCategoryDis(false));
            }}
            className={`category h-0 w-40 overflow-hidden bg-gray-100/70 backdrop-blur-2xl transition-all delay-200 duration-300 ${categoryDis && "h-91.5"}`}
          >
            {menuTree.map((cat) => {
              const Icon = categoryIcon[cat.icon];
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => {
                    setCategoryM(cat);
                  }}
                  className="flex h-13 w-full flex-row items-center justify-start gap-1.5 border-x-2 border-gray-300 text-sm transition hover:bg-white hover:text-[#ed1944]"
                >
                  <Icon className="mr-1.5 size-5" />
                  {cat.name}
                </button>
              );
            })}
          </div>
          <div
            onMouseEnter={() => {
              (setCategoryDis(true), setSubCategoryDis(true));
            }}
            onMouseLeave={() => {
              (setCategoryDis(false), setSubCategoryDis(false));
            }}
            className={`subCategory flex h-91.5 w-0 flex-col overflow-hidden transition-all delay-50 ${subCategoryDis && "w-50"} bg-gray-100/80 backdrop-blur-xl`}
          >
            {categoryM && (
              <Link
                to={`/search/${categoryM.name}`}
                className="flex w-full flex-row items-center justify-start gap-2 py-3 pr-3 text-start text-lg transition-colors duration-300 hover:text-[#ed1944]"
              >
                <p className="text-[#ed1944]">|</p>
                <p>برند {categoryM.name}</p>
                <ChevronLeftIcon className="size-4" />
              </Link>
            )}
            {categoryM.children?.map((sub) => (
              <Link
                onClick={() => {
                  (setCategoryDis(false), setSubCategoryDis(false));
                }}
                to={`/search/${categoryM?.name}/${sub.name}`}
                key={sub.name}
                className="text-md w-full py-2 pr-3 text-start text-black/80 transition-colors duration-200 hover:text-[#ed1944]"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setCategoryDis(true);
          }}
          onMouseEnter={() => {
            setCategoryDis(true);
          }}
          onMouseLeave={() => {
            setCategoryDis(false);
          }}
          className={`flex flex-row items-center justify-center gap-1 border-b-2 border-[#ed194300] pl-4 transition-all duration-200 ease-in hover:border-[#ed1944] max-lg:pl-1`}
        >
          <Bars3Icon className="size-6" />
          دسته بندی کالاها
        </button>

        <button className="flex flex-row items-center justify-center gap-1 border-b-2 border-[#ed194300] px-4 text-sm text-black/60 transition-all duration-200 ease-in hover:border-[#ed1944] max-md:px-1">
          <PercentBadgeIcon className="size-5" />
          شگفت انگیزها
        </button>
        <button className="flex flex-row items-center justify-center gap-1 border-b-2 border-[#ed194300] px-4 text-sm text-black/60 transition-all duration-200 ease-in hover:border-[#ed1944] max-md:px-1 max-sm:hidden">
          <ShoppingBagIcon className="size-5" />
          سوپر‌ مارکت
        </button>
        <button className="flex flex-row items-center justify-center gap-1 border-b-2 border-[#ed194300] px-4 text-sm text-black/60 transition-all duration-200 ease-in hover:border-[#ed1944] max-md:px-1">
          <FireIcon className="size-5" />
          پرفروش ترینها
        </button>
      </div>
      <div className="ml-5 rounded-4xl bg-orange-200/40 p-1.5 px-3 text-orange-500 transition-all max-sm:hidden">
        <button className="flex flex-row items-center justify-center gap-1 text-sm">
          <MapPinIcon className="size-5" />
          انتخاب آدرس
        </button>
      </div>
    </div>
  );
}
