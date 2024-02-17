export const TeamCard = ({
    logo,
    team,
    bgBottomColor,
    onClick
}) => {
    
    return <div className={`rounded-md bg-white w-52 h-32 border-2  ${bgBottomColor} border-b-4 hover:bg-gray-600`}>
        <button className= 'w-full text-blue-950 hover:text-white' onClick={onClick}>
            <img className='mt-2 h-16 w-16 mb-6 ml-2' src = {`${logo}`}></img>
            <div className='flex justify-between w-full'>
                <div className='ml-2 font-bold'>{team}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </button>
    </div>
}