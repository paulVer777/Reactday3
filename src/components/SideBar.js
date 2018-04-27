import React from 'react'
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'


const SideBar = (props) => (
    <Drawer
        docked={false}
        onRequestChange={props.onRequestSideBarChange}
        open={props.isSideBarOpen}
    >
        <Link to={'/'}><MenuItem> Home </MenuItem></Link>
        <Link to={'/hello/Mateusz'}><MenuItem> Hello </MenuItem></Link>
        <Link to={'/mappig-array'}><MenuItem> Mapping Array </MenuItem></Link>
        <Link to={'/mappig-array-2'}><MenuItem> Mapping Array 2 </MenuItem></Link>
        <Link to={'/counter'}><MenuItem> Counter </MenuItem></Link>
        <Link to={'/my-first-component'}><MenuItem> My First Component </MenuItem></Link>
        <Link to={'/what-react-display'}><MenuItem> What React can display </MenuItem></Link>
        <Link to={'/header'}><MenuItem> Header </MenuItem></Link>
        <Link to={'/add'}><MenuItem> Add </MenuItem></Link>
        <Link to={'/todo'}><MenuItem> ToDo </MenuItem></Link>

    </Drawer>
)

export default SideBar