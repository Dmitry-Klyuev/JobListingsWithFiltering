import {addPositions} from "./postion-slice";
import data from "../../mock/data.json";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


export const useFetchPositions = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addPositions(data));
    }, [dispatch]);
}