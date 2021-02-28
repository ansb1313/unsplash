import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {useHistory, withRouter} from "react-router-dom";
import {IconCollection, IconPhoto, IconUser} from "../../images/Icons";
import {useSelector} from "react-redux";

const HeaderSearchMenu = ({match}) => {

    const history = useHistory();
    const query = match.params.query
    const category = match.params.category
    const {photos, collections, users} = useSelector(state => state.search)

    const totalNum = (data) => {
        if(data>1000){
            let num;
            num = (data/1000).toFixed(0)
            return num+"k"
        }else if(data<1000){
            return data
        }
    }

    const searchRoutes = [
        {
            name: 'photos',
            total: totalNum(photos.total),
            to: `/search/photos/${query}`,
            icon: <IconPhoto/>,
        },
        {
            name: 'collections',
            total: totalNum(collections.total),
            to: `/search/collections/${query}`,
            icon: <IconCollection/>
        },
        {
            name: 'users',
            total: totalNum(users.total),
            to: `/search/users/${query}`,
            icon: <IconUser/>
        }
    ]

    return (
        <Container className={"HeaderSearchMenu"}>
            <div className="menus">
                {
                    searchRoutes.map((item, i) => (  //url의 카테고리가 이름과 같을 경우 isActive는 ture
                        <MenuItem className={cn("MenuItem", item.name, {isActive: category === item.name})}
                             key={i}
                             onClick={() => history.push(item.to)}>
                            {item.icon}
                            {item.name}&nbsp;
                            {item.total}
                        </MenuItem>
                    ))
                }
            </div>
        </Container>

    )

}

const Container = styled.div`
  .menus {
    display: flex;
    align-items: center;
    margin-left: 5px;
    border-bottom:1px solid #f1f1f1;
    height: 55px;
    div {
    }
  }

`

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin: 0 10px;
    height: 57px;
    cursor: pointer;
    border-bottom:2px solid transparent;
    color: #797979;
    font-size: 14px;
    letter-spacing: -0.5px;
    position: relative;
    bottom: 1px;
    transition: all 0.3s;
    text-transform:capitalize;
    &.isActive {
        border-bottom-color:#111;
    }
    &.isActive,
    &:hover{
        color: #111;
        svg{
            fill: #111;
        
        }
    }
    
    svg {
        fill: #bbbbbb;
        margin-right: 10px;
        transition: all 0.3s;
    }
    
`;

export default withRouter(HeaderSearchMenu);