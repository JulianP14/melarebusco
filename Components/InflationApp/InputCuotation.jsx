
const InputCuotation = ({ cuotas, onChange }) => {
    const options = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 24, 48
    ];

    return (
        <div className='flex flex-col my-2'>
            <label>Elegi las cuotas</label>
            <select
                className='text-gray-500 rounded-lg p-1 px-2 outline-none max-w-xs'
                value={cuotas}
                onChange={onChange}
            >
                <option value="">Elegir...</option>
                {options.map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
        </div>
    )
};

export default InputCuotation;