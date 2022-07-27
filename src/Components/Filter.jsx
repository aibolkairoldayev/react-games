
function Filter({ value, onClickPlatform, setPageSize }) {

    const plarforms = [
        { name: 'All', id: 0 },
        { name: 'PC', id: 4 },
        { name: 'PlayStation 4', id: 18 },
        { name: 'Xbox One', id: 1 },
        { name: 'Nintendo Switch', id: 7 },
        { name: 'IOS', id: 3 },
        { name: 'Android', id: 21 }
    ]

    return (
        <ul className="platforms">
            {plarforms.map((platform, i) => (
                <li
                    key={i}
                    className={value === platform.id ? 'platform-active' : 'platform'}
                    onClick={() => onClickPlatform(platform.id) & setPageSize(8)} >{platform.name}
                </li>))
            }

        </ul>
    )
}

export default Filter;

