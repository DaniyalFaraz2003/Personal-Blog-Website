import { House, User, FolderGit, Phone, Newspaper } from "lucide-react";

export function getMenuList(pathname) {
  return [
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/",
          label: "Home",
          icon: House
        },
        {
          href: "/blog",
          label: "Blog",
          icon: Newspaper
        },
        {
          href: "/portfolio",
          label: "Portfolio",
          icon: FolderGit
        },
        {
          href: "/about",
          label: "About",
          icon: User
        },
        {
          href: "/contact",
          label: "Contact",
          icon: Phone
        },
      ]
    }
  ];
}
