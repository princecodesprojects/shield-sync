import React from 'react'
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'

const items = [
    {
      title: "Feature",
      url: "#",
     
    },
    {
        title: "Solutions",
        url: "#",
       
      },
      {
        title: "Pricing",
        url: "#",
       
      },
      {
        title: "FAQ",
        url: "#",
      },
    ]

const AppSlideBar = () => {
  return (
    <div>
       <Sidebar variant='floating'>
      <SidebarContent>
      <SidebarMenu className='py-5 text-xl text-[#0F0E47]'>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className='text-xl font-medium'>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
      </SidebarContent>
    </Sidebar>
    </div>
  )
}

export default AppSlideBar
