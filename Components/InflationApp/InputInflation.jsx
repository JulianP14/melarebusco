
const InputInflation = ({ onChange }) => {
    return (
        <div className='flex flex-col my-2'>
            <label className='flex flex-col my-2'>
                <div className='flex flex-row'>
                    <span className='mr-2'>
                        Inflacion estimada mensual
                    </span>
                    <span>💸</span>
                </div>
                <input
                    type='number'
                    className='border-b-2 border-white text-gray-500 rounded-lg p-1 px-2 bg-transparent hover:border-b-blue-400 duration-300 outline-none'
                    onBlur={onChange}
                />
            </label>
        </div>
    )
};

export default InputInflation;