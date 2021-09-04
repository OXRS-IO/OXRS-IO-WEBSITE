import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Home",["/index.html","/README.md"]],
  ["v-147825fb","/docs/","Hello Docs",["/docs/index.html","/docs/README.md"]],
  ["v-5df687d1","/glossary/acronyms.html","Acronyms",["/glossary/acronyms","/glossary/acronyms.md"]],
  ["v-a3eb3e98","/glossary/boards.html","OXRS Compatible Boards",["/glossary/boards","/glossary/boards.md"]],
  ["v-20ae2b92","/glossary/makers.html","Makers",["/glossary/makers","/glossary/makers.md"]],
  ["v-7ffe0758","/guides/advanced.html","Advanced Guide",["/guides/advanced","/guides/advanced.md"]],
  ["v-49b36c60","/guides/getting-started.html","Getting Started",["/guides/getting-started","/guides/getting-started.md"]],
  ["v-dc773b8e","/docs/firmware/","Firmware",["/docs/firmware/index.html","/docs/firmware/README.md"]],
  ["v-5ff84946","/docs/firmware/uio-fw.html","UIO FW",["/docs/firmware/uio-fw","/docs/firmware/uio-fw.md"]],
  ["v-6be83bac","/docs/hardware/","Hardware",["/docs/hardware/index.html","/docs/hardware/README.md"]],
  ["v-73646e1e","/docs/libraries/","Libraries",["/docs/libraries/index.html","/docs/libraries/README.md"]],
  ["v-20ed454f","/docs/libraries/uio.html","UIO",["/docs/libraries/uio","/docs/libraries/uio.md"]],
  ["v-4ad4ef82","/docs/hardware/controllers/rack32.html","Rack32",["/docs/hardware/controllers/rack32","/docs/hardware/controllers/rack32.md"]],
  ["v-285e96fb","/docs/hardware/input-devices/hardware-template.html","Board Name (Blank Template)",["/docs/hardware/input-devices/hardware-template","/docs/hardware/input-devices/hardware-template.md"]],
  ["v-0415c4ae","/docs/hardware/input-output-devices/universal-input-output-uio-16port.html","Universal Input/Output (UIO) 16Port",["/docs/hardware/input-output-devices/universal-input-output-uio-16port","/docs/hardware/input-output-devices/universal-input-output-uio-16port.md"]],
  ["v-3b110de8","/docs/hardware/output-devices/hardware-template.html","Board Name (Blank Template)",["/docs/hardware/output-devices/hardware-template","/docs/hardware/output-devices/hardware-template.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
