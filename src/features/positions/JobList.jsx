import {useDispatch} from 'react-redux';
import {JobPosition} from './JobPosition';
import {UsePositions} from "./use-positions";
import {useFetchPositions} from "./use-fetch-positions";
import {addFilter} from "../filter/filter-silce";

const JobList = () => {
    useFetchPositions();
    const positions = UsePositions();
    const dispatch = useDispatch();

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };

    return (
        <div className="job-list">
            {positions.map(item => (
                <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    );
};

export {JobList};