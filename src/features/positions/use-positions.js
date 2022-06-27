import {useSelector} from "react-redux";
import {selectVisiblePositions} from "./postion-slice";
import {selectFilters} from "../filter/filter-silce";


export const UsePositions = () => {
    const currentFilters = useSelector(selectFilters);
    let positions;
    positions = useSelector((state) => selectVisiblePositions(state, currentFilters));
    return positions
}