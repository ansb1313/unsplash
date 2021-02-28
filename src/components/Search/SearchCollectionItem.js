import React, {useState} from 'react';
import styled from 'styled-components';
import {NavLink, withRouter} from "react-router-dom";
import {navigate} from "../../lib/History";
import cn from 'classnames';
import {photoActions} from "../../redux/actionCreators";

const SearchCollectionItem = (props) => {

    const [coverBoxStyle, setCoverBoxStyle] = useState(false)

    if(!props){
        return '...loading'
    }

    const onClose = () => {
        photoActions.updateState({
            photoPopup: {}
        })
    }

    const {
        match,
        preview_photos,
        title,
        total_photos,
        user,
        tags,
        index,
        id
    } = props

    const onMouseOver = () => {
        setCoverBoxStyle(true)
    }

    const onMouseOut = () => {
        setCoverBoxStyle(false)
    }

    const query = match.params.query

    const previewPhoto = {...preview_photos}
    const tag = tags.slice(0,3)

    return(
        <Container key={index}>
            <div className="contents">
                <ImageBox onClick={()=>{navigate(`/collections/${id}/${query}`); onClose()}}
                          onMouseOver={onMouseOver}
                          onMouseOut={onMouseOut}
                >
                    <div className={cn('coverBox',{isActive:coverBoxStyle})}/>
                    <div className="regularImage">
                        {previewPhoto[0] && <img src={previewPhoto[0].urls.small} alt="" />}
                    </div>
                    <div className="colImage">
                        <div className="innerTopImage">
                            {previewPhoto[1] && <img src={previewPhoto[1].urls.small} alt="" />}
                        </div>
                        <div className="innerBottomImage">
                            {
                                previewPhoto[2] &&
                                <img src={previewPhoto[2].urls.small} alt="" />
                            }
                        </div>
                    </div>
                </ImageBox>
                <div className="title"
                     onClick={()=>{navigate(`/collections/${id}/${query}`); onClose()}}
                     onMouseOver={onMouseOver}
                     onMouseOut={onMouseOut}
                >
                    {title}
                </div>
            </div>

            <TextArea>
                <div className="text">
                    <p>{total_photos} photos · Curated by {user.first_name} {user.last_name} </p>
                </div>
                <div className="tag" >
                    {
                        tag.map((item, index) => (
                            <TagItem key={index} to={`/search/photos/${item.title}`} onClick={onClose}>
                                {item.title}
                            </TagItem>
                        ))
                    }
                </div>
            </TextArea>
        </Container>

    )

}

const Container = styled.div`
 
  box-sizing: border-box;
  //position: relative;
  .contents{
    position: relative;
    .coverBox{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      transition: all 0.3s;
      background: #fff;
      opacity: 0;
      &.isActive{
        opacity: 0.25;
      }
    }
    .title{
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.5px;
      display: inline-block;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }
`

const ImageBox = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  
  //&:hover{
  //  .coverBox{
  //    opacity: 0.25;
  //  }
  //}
  
  .regularImage{
    width: 70.25%;
    margin-right: 1px;
    background: #333;
    color: #fff;
    img{
      display: block;
      width:100%;
      height: 100%;
      object-fit: cover;
    }
    height: 259px;
  }
  .colImage{

    height: 259px;
    width: 29.25%;
    .innerTopImage{
      box-sizing: border-box;
      padding-bottom: 0.5px;
      background: #eee;
      width: 100%;
      height: 50%;
      img{
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .innerBottomImage{
      box-sizing: border-box;
      padding-top: 0.5px;
      background: #eee;
      width: 100%;
      height: 50%;
      img{
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
  
`

const TextArea = styled.div`

  .text {
    p {
      font-size: 14px;
      color: #787878;
      line-height: 2;
      margin-bottom: 8px;
      cursor: default;
    }
  }

`

const TagItem = styled(NavLink)`
  font-size: 14px;
  display: inline-block;
  color: #787878;
  padding: 3px 8px;
  background: #eee;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.2s;
  text-transform: capitalize;
  &:hover {
    color: #111;
    background: #dedede;
  }
`

export default withRouter(SearchCollectionItem);
