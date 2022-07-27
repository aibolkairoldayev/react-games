import React from "react";
function Sort({ value, onClickSort, setPageSize }) {

    const sorts = [
        { name: 'Name (A=>Z)', orderName: 'name' },
        { name: 'Name (Z=>A)', orderName: '-name' },
        { name: 'Release date (Old)', orderName: 'released' },
        { name: 'Release date (New)', orderName: '-released' },
        { name: 'Average rating (Hiher)', orderName: '-rating' },
        { name: 'Average rating (Lower)', orderName: 'rating' },
    ]
    const [openSort, setOpenSort] = React.useState(false);
    const onClickListItem = (index) => {
        onClickSort(index)
        setOpenSort(false)
    }

    const sortRef = React.useRef()

    React.useEffect(() => {
        const handleClickOutsied = (event) => {
            if (!event.path.includes(sortRef.current)) {
                setOpenSort(false)
            }
        }
        document.body.addEventListener('click', handleClickOutsied)

        return () => {
            document.body.removeEventListener('click', handleClickOutsied)
        }
    }, [])

    return (
        <div ref={sortRef} className="sort-block">
            <div className="sort"> Order by: <b onClick={() => setOpenSort(!openSort)}>{value.name}</b></div>
            {
                openSort &&
                <div className="sort-list">
                    <ul>
                        {
                            sorts.map((sort, i) => (
                                <li
                                    key={i}
                                    onClick={() => onClickListItem(sort) & setPageSize(8)}
                                    className={value.orderName === sort.orderName ? 'active-sort' : ''}
                                >
                                    {sort.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sort;