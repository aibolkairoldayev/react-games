import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'

import Filter from "../Components/Filter";
import GameBlock from "../Components/GameBlock";
import Skeleton from "../Components/GameBlock/Skeleton";
import Sort from "../Components/Sort";
import { setPlatformId, setSortName } from "../redux/slices/filterSlice";
import { setSearchValue } from "../redux/slices/searchSlice";
import { setPageSize } from "../redux/slices/paginationSlice";


function Home() {
    const platformId = useSelector((state) => state.filter.platformId)
    const sortName = useSelector((state) => state.filter.sortName)
    const search = useSelector((state) => state.search.searchValue)
    const pageSize = useSelector((state) => state.pagination.pageSize)
    const dispatch = useDispatch()
    const [games, setGames] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const filtering = platformId > 0 ? `&platforms=${platformId}` : ''
    const searching = dispatch(setSearchValue) ? `&search=${search}` : ''
    const onChangePlatform = (id) => {
        dispatch(setPlatformId(id))
    }
    const onChangeSort = (index) => {
        dispatch(setSortName(index))
    }
    const addMoreItems = () => {
        dispatch(setPageSize(pageSize + 8))
    }
    const updatePageSize = () => {
        dispatch(setPageSize(8))
    }

    const fetchGames = () => {
        setIsLoading(true)
        axios
            .get(`https://api.rawg.io/api/games?key=214b1982462c4a9cb20cc992c0103699&page_size=${pageSize}${filtering}&ordering=${sortName.orderName}${searching}`)
            .then((res) => {
                setGames(res.data.results)
                setIsLoading(false)
                console.log(1)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }
    console.log(2)
    React.useEffect(() => {
        fetchGames()
    }, [platformId, sortName, search, pageSize])

    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />)
    const gameList = games.map((g) => <GameBlock {...g} key={g.id} />)

    return (
        <main>
            <div className="container">
                <div className="sidebar">

                </div>
                <div className="content">

                    <div className="main-title">All games</div>
                    <div className="filter-block">
                        <Filter value={platformId} onClickPlatform={(id) => { onChangePlatform(id) }} setPageSize={() => { updatePageSize(8) }} />
                        <Sort value={sortName} onClickSort={(index) => { onChangeSort(index) }} setPageSize={() => { updatePageSize(8) }} />
                    </div>
                    <div className="games">
                        {isLoading
                            ? skeletons
                            : gameList}

                    </div>
                    <div className='seeMore'>
                        <button onClick={addMoreItems} className="plus16">See more (8)</button>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Home