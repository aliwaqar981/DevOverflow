// import { Button } from "@/components/ui/button";
// import React from "react";
// import NavLinks from "./navbar/Navlinks";

// const LeftSidebar = () => {
//   return (
//     <div
//       className=" sticky top-0 hidden sm:flex background-light900_dark200
//         shadow-light-300 dark:shadow-none p-6 w-64 h-full"
//     >
//       <div
//         className="no-scrollbar flex
//         flex-col justify-between overflow-y-auto"
//       >
//         <section className="flex h-full flex-col gap-4 pt-16">
//           <NavLinks />
//         </section>
//         <section>
//           <p>Sign Out</p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default LeftSidebar;

import React from "react";
import NavLinks from "./navbar/Navlinks";
// import { Link } from "lucide-react";
import { Button } from "../ui/button";
// import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";

const LeftSidebar = () => {
  return (
    <section
      className="custom-scrollbar background-light900_dark200
    light-border sticky left-0 top-0 h-screen flex flex-col justify-between
    overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none "
    >
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3 mt-30">
        <Button
          className="small-medium btn-secondary 
            min-h-[41px] w-full rounded-lg px-4 py-3
            shadow-none"
        >
          <Link href={ROUTES.SIGN_IN}>
            {/* Will be hidden on large devices */}
            <Image
              src={"/icons/account.svg"}
              alt="Account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            {/* Will be hidden on small devices */}
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>
        <Button
          className="small-medium light-border-2 btn-tertiary
            text-dark400_light900 min-h-[41px] 
            w-full border px-4 py-3 shadow-none"
        >
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src={"/icons/sign-up.svg"}
              alt="Sign Up"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Sign up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
