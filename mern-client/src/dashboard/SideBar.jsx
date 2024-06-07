import React from 'react'
import { Sidebar } from 'flowbite-react';
import userImg from "../assets/profile.jpg"
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
const SideBar = () => {
  return (
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        Flowbite
      </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage-book" icon={HiViewBoards} label="Pro" labelColor="dark">
                Manage Book
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/upload" icon={HiInbox} label="3">
                Upload Book
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/edit-book/:id" icon={HiUser}>
                Edit book
              </Sidebar.Item>
              <Sidebar.Item href="/login" icon={HiShoppingBag}>
                Login
              </Sidebar.Item>
              <Sidebar.Item href="/logout" icon={HiArrowSmRight}>
                Log Out
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      );
    }
  


export default SideBar
