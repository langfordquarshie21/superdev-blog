const BackButton = () => {
    return (
        <>
            <b className='cursor-pointer opacity-50 hover:opacity-100 hover:text-brand' onClick={() => window.history.back()}>&larr; Back</b>
        </>
    )
}

export default BackButton