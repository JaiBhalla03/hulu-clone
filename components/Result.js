import Thumbnail from "./Thumbnail";

const Result = ({results}) => {
    return (
        <div className='flex flex-wrap'>
            {results.map(result => (
                <Thumbnail key = {result.id} result={result}/>
            ))}
        </div>
    );
};

export default Result;