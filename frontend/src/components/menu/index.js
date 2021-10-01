import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import menuItems from '../../assets/menu'
class MenuBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            newArr: [],
        }
    }


    handleClick(item, positopn) {
        debugger
        this.setState(prevState => (
            { [item]: !prevState[item] }
        ))
        let posFindData = menuItems.data.filter(res => res.id === item)

        if (posFindData.length) {
            posFindData[0].isActive = true
            this.setState({ newArr: posFindData })
            console.log(this.state.newArr, "First Array")
        }



        if (!posFindData.length) {
            let findData = this.state.newArr[0].children.filter(res => res.id === item)
            findData[0].isActive = true
            this.setState({ newArr: findData })
            console.log(this.state.newArr
                
                , "All Array")
        }












        // // console.log(menuItems.data, "All Array")
        // if (positopn === 1) {
        //     let posFindData = menuItems.data.filter(res => res.id === item)
        //     posFindData[0].isActive = true
        //     this.setState({ newArr: posFindData[0].children })
        // } else if (positopn === 2) {
        //     let posa = this.state.newArr.filter(res => res.id === item)
        //     posa[0].isActive = true
        // }

        // if (!findData.length) {
        //     let findData = findData.children.filter(res => res.id === item)
        // }



        console.log(this.state.prevState)

        // this.setState({ show: true })
    }

    handler(children) {
        const { classes } = this.props
        const { state } = this
        return children.map((subOption) => {
            if (!subOption.children) {
                return (<>

                    <li
                        key={subOption.name}>
                        <Link
                            to={subOption.url}
                            className={classes.links}>
                            <span>{subOption.name} </span>
                        </Link>
                    </li></>

                )
            }
            return (<>
                <li
                    onClick={() => this.handleClick(subOption.id, subOption.position)}>
                    <span>{subOption.name} </span>

                    {subOption.isActive ? <ul>
                        {this.handler(subOption.children)}
                    </ul> : null}

                </li>
            </>
            )
        })
    }
    render() {
        return (


            <ul>

                {this.handler(menuItems.data)}

            </ul>

        )
    }
}
export default withStyles()(MenuBar)