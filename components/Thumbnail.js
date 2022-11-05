import Image from "next/image";

const Thumbnail = ({result}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <div className='w-full items-center sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <Image
                layouts='responsive'
                src={
                `${BASE_URL}${result.backdrop_path || 
                result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
                }
                height={400}
                width={500}
            />
            <div>
                <h1>{result.original_title}</h1>
                <p>{result.overview}</p>
            </div>
        </div>
    );
};

export default Thumbnail;