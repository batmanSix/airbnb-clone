import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:py-2 flex items-center gap-x-4">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"></MenuIcon>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="Image of the user"
            className="rounded-full h-8 w-8 hidden lg:block"
          ></img>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem>
          <RegisterLink className="w-full">Register</RegisterLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LoginLink className="w-full">Login</LoginLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;
