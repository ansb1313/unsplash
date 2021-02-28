import {photoActions} from "../redux/actionCreators";

export const setPhotoGroups = (data) => {
    let groups = [[], [], []];
    let groupsHeight = [0, 0, 0];

    //0,1,2
    for(let i = 0; i < data.length; i++) {
        const ratio = data[i].height / data[i].width;
        const minValue = Math.min(...groupsHeight);
        const minIndex = groupsHeight.indexOf(minValue);
        groups[minIndex].push(data[i]);
        groupsHeight[minIndex] = groupsHeight[minIndex] + ratio;
    }

    return groups;
}
