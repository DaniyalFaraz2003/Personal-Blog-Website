import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function BreadCrumbComponent({pathname}) {
  return (
      <Breadcrumb>
        <BreadcrumbList>
          {pathname.split("/").map((item, index, list) => {
              let link = "/";
              if (item === "Home") {
                  link = "/"
              } else {
                  for (let i = 0; i < index; i++) {
                      link += list[i].toLowerCase() + "/";
                  }
                  link += item.toLowerCase();
              }

            return (
                <div key={index} className={"flex flex-row justify-center"}>
                    {index < list.length - 1 ? (
                            <div className={"flex  items-center gap-2"}>
                                <BreadcrumbItem>
                                    {index === list.length - 1 ? (
                                        <BreadcrumbPage>{item.toUpperCase()}</BreadcrumbPage>) : (
                                        <BreadcrumbLink href={`${link}`}>{item.toUpperCase()}</BreadcrumbLink>)}
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                            </div>

                        ) : (
                        <BreadcrumbItem>
                            {index === list.length - 1 ? (<BreadcrumbPage>{item.toUpperCase()}</BreadcrumbPage>) : (
                                <BreadcrumbLink href={`${link}`}>{item.toUpperCase()}</BreadcrumbLink>)}
                        </BreadcrumbItem>
                        )}
                </div>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
  )
}

export function Navbar({
  pathname
}) {
  return (
    (<header
      className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <BreadCrumbComponent pathname={pathname}/>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>)
  );
}
