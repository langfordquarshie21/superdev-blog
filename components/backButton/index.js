const BackButton = () => {
    return (
        <>
            <button className='cursor-pointer opacity-50 hover:opacity-100 hover:text-brand' onClick={() => window.history.back()}>&larr; Back</button>
        </>
    )
}

export default BackButton